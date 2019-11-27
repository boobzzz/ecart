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
                        id={item.id}
                        title={item.name}
                        price={item.price}
                        selected={item.selected}
                        stock={item.stock}
                        increase={props.addQty}
                        decrease={props.removeQty} />
                )}
            </div>
            <div>
                Total: ${props.total}
                {' '}
                <button
                    type="button"
                    disabled={props.total <= 0 ? true : false}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart;
