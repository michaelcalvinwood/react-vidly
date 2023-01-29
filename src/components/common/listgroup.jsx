import React from 'react';

const ListGroup = ({items, onItemsSelect, textProperty, valueProperty}) => {
    return ( 
        <ul className="list-group">
            {items.map(item => <li key={item[valueProperty]} className="list-group-item">{item[textProperty]}</li>)}
        </ul>
    );
}
 
export default ListGroup;