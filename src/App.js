import React, { Component } from 'react';

import Cart from './components/Cart/Cart';
import Inventory from './components/Inventory/Inventory';
import './App.css';

export default class App extends Component {
    state = {
        cart: [],
        inventory: [
            {id: '1ghj', name: 'Apple', price: 10, selected: 0, stock: 12},
            {id: '2bnm', name: 'Melon', price: 20, selected: 0, stock: 5},
            {id: '3qaz', name: 'Orange', price: 8, selected: 0, stock: 20},
        ]
    }

    selectItem = (event) => {
        let id = event.target.id;

        this.setState(({ cart, inventory }) => {
            return {
                cart: [
                    ...cart,
                    ...inventory.filter(item =>
                        item.id === id
                        ? {...item, selected: item.selected++, stock: item.stock--}
                        : null
                    )
                ].reduce((acc, item) =>
                    acc.includes(item) ? acc : [...acc, item]
                , [])
            }
        })

        console.log(this.state.cart);
    }

    render() {
        let { cart, inventory } = this.state;

        return (
            <div className="App">
                <Cart cartItems={cart} />
                <hr/>
                <Inventory inventory={inventory} clicked={this.selectItem} />
            </div>
        )
    }
}
