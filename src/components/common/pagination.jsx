import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {
    console.log('Pagination currentPage', currentPage);
    const numPages = Math.ceil(itemsCount / pageSize);
    if (numPages === 1) return null;
    const pages = _.range(1, numPages + 1);

    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a onClick={() => onPageChange(page)}className="page-link">
                            {page}
                        </a>
                    </li>)
                )}


            </ul>
        </nav>
     );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
}
 
export default Pagination;