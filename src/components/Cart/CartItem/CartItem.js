import React from 'react';

const CartItem = (props) => {
    return (
        <div>
            {props.title} - ${props.price} × {props.selected}
            {' '}
            <button type="button">+1</button>
            {' '}
            <button type="button">-1</button>
            {' '}
            ({props.qty} in stock)
        </div>
    )
}

export default CartItem;
