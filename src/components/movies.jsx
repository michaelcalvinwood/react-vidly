import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import Like from './common/like';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listgroup';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        genreId: null
    } 

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    handlePageChange = page => {
        console.log('set page', page)
        this.setState({currentPage: page});
    }

    handleLike = (movie) => {
         const movies = [...this.state.movies];
         const index = movies.indexOf(movie);
         movies[index] = {...movies[index]};
         movies[index].liked = !movies[index].liked;
         this.setState({movies});
    }

    handleGenreSelect = genreId => {
        console.log('genre', genreId);
        this.setState({genreId, currentPage: 1});
    }

    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: getGenres()
        })
    }

    render() { 
        const { movies, pageSize, currentPage, genreId } = this.state;
        
        const filteredMovies = genreId === null ? movies : movies.filter(movie => movie.genre._id === genreId);
        console.log('filteredMovies', filteredMovies);
        
        let count = filteredMovies.length;
        if (!count) return <p>There are no movies in the database.</p>
        
        const moviePage = paginate(filteredMovies, currentPage, pageSize);

        return (
            <div className='row'>
                <div className="col-3" id="leftColumn">
                    <ListGroup 
                        items={this.state.genres} 
                        onItemsSelect={this.handleGenreSelect}
                        selected={genreId}
                        nullItem="All Genres"
                    />
                </div>
                <div className="col" id="rightColumn">
                    <p>Showing {count} movies in the database.</p>
                    <MoviesTable 
                        moviePage={moviePage}
                        handleLike={this.handleLike}
                        handleDelete={this.handleDelete}
                    />
                    <Pagination 
                        itemsCount={count} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>)
    }
}
 
export default Movies;