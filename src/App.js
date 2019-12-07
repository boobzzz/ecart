import React, { Component } from 'react';

import Cart from './components/Cart/Cart';
import Inventory from './components/Inventory/Inventory';

export default class App extends Component {
    state = {
        cart: [],
        inventory: [
            {id: '1ghj', name: 'Apple', price: 10, selected: 0, stock: 12},
            {id: '2bnm', name: 'Melon', price: 20, selected: 0, stock: 5},
            {id: '3qaz', name: 'Orange', price: 8, selected: 0, stock: 20},
        ]
    }

    toggleQty = (event) => {
        let { name, id } = event.target;
        let { cart, inventory } = this.state;
        let added = inventory.filter(item =>
            item.id === id
            ? name === "-1"
                ? {
                    ...item,
                    selected: item.selected--,
                    stock: item.stock++
                }
                : {
                    ...item,
                    selected: item.selected++,
                    stock: item.stock--
                }
            : null
        )
        let cartItems = [...cart, ...added].reduce((acc, item) =>
            acc.includes(item) ? acc : [...acc, item]
        , [])

        this.setState({
            cart: cartItems
        })
    }

    total(arr) {
        return arr.reduce((acc, item) =>
                acc + item.price * item.selected
            , 0
        )
    }

    render() {
        let { cart, inventory } = this.state;
        let totaled = this.total(cart);

        return (
            <div>
                <Cart
                    cartItems={cart}
                    addQty={this.toggleQty}
                    removeQty={this.toggleQty}
                    total={totaled} />
                <hr/>
                <Inventory
                    inventory={inventory}
                    clicked={this.toggleQty} />
            </div>
        )
    }
}
