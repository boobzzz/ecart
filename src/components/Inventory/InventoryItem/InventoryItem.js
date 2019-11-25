import React from 'react';

const InventoryItem = (props) => {
    return (
        <div>
            {props.title} - ${props.price}
            {' '}
            <button type="button" id={props.id} onClick={props.clicked}>
                Buy
            </button>
            {' '}
            ({props.selected} selected, {props.stock} in stock)
        </div>
    )
}

export default InventoryItem;
