import React from 'react';

const CartItem = (props) => {
    return (
        <div>
            {props.title} - ${props.price} × {props.qty}
            {' '}
            <button type="button">+1</button>
            {' '}
            <button type="button">-1</button>
            {' '}
            (10 in stock)
        </div>
    )
}

export default CartItem;
