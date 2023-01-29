import React from 'react';

const ListGroup = ({items, onItemsSelect, textProperty, valueProperty, selected, nullItem}) => {
    console.log('onItemsSelect', typeof onItemsSelect, onItemsSelect)
    return ( 
        <ul className="list-group">
             <li 
                key="nullItem" 
                className={selected === null ? "list-group-item active" : "list-group-item"}
                onClick={() => onItemsSelect(null)}
                style={{cursor: 'pointer'}}
            >
                {nullItem}
            </li>
            {items.map(item => (
            <li 
                key={item[valueProperty]} 
                className={item[valueProperty] === selected ? "list-group-item active" : "list-group-item"}
                onClick={() => onItemsSelect(item[valueProperty])}
                style={{cursor: 'pointer'}}
            >
                {item[textProperty]}
            </li>))}
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup;