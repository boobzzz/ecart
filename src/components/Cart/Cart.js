import React from 'react';

import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
    let { items } = props;

    return (
        <div>
            <h3>Cart</h3>
            <div>
                <p className={items.length > 0 ? classes.hide : null}>
                    Your cart is empty
                </p>
                {items.map(item =>
                    <CartItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        selected={item.selected}
                        qty={item.qty} />
                )}
            </div>
            <div>
                Total: ${0}
                {' '}
                <button type="button" disabled={""}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart;
