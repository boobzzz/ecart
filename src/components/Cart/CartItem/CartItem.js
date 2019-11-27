import React from 'react';

import classes from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <div>
            <span className={props.selected <= 0 ? classes.crossOut : null}>
                {props.title} - ${props.price} × {props.selected}
            </span>
            {' '}
            <button
                type="button"
                id={props.id}
                name="+1"
                onClick={props.increase}
                disabled={props.stock <= 0 ? true : false}>
                +1
            </button>
            {' '}
            <button
                type="button"
                id={props.id}
                name="-1"
                onClick={props.decrease}
                disabled={props.selected <= 0 ? true : false}>
                -1
            </button>
            {' '}
            <span>({props.stock} in stock)</span>
        </div>
    )
}

export default CartItem;
