import React from 'react';

const InventoryItem = (props) => {
    return (
        <div>
            {props.title} - ${props.price}
            {' '}
            <button
                type="button"
                id={props.id}
                onClick={props.clicked}
                disabled={props.stock <= 0 ? true : false}>
                Buy
            </button>
            {' '}
            ({props.selected} selected, {props.stock} in stock)
        </div>
    )
}

export default InventoryItem;
