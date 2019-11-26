import React from 'react';

import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
    let { cartItems } = props;

    return (
        <div>
            <h3>Cart</h3>
            <div>
                <p className={cartItems.length > 0 ? classes.hide : null}>
                    Your cart is empty
                </p>
                {cartItems.map(item =>
                    <CartItem
                        key={item.id}
                        title={item.name}
                        price={item.price}
                        selected={item.selected}
                        qty={item.stock} />
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
