import React from 'react';
import Like from './common/like';

const MoviesTable = ({moviePage, handleLike, handleDelete}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { moviePage.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <Like liked={movie.liked} onClick={() => handleLike(movie)}/>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(movie)} className="btn btn-danger btn-sm">DELETE</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
    
}
 
export default MoviesTable;