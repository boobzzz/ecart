import React, { Component } from 'react';

import Cart from './components/Cart/Cart';
import Inventory from './components/Inventory/Inventory';
import './App.css';

const inventory = [
    {id: '1ghj', name: 'Apple', price: 10, selected: 0, stock: 12},
    {id: '2bnm', name: 'Melon', price: 20, selected: 0, stock: 5},
    {id: '3qaz', name: 'Orange', price: 8, selected: 0, stock: 20},
];

export default class App extends Component {
    state = {
        cartItems: [],
    }

    selectItem = (event) => {
        let id = event.target.id;

        this.setState(() => {
            return {
                cartItems: inventory.map(item =>
                    item.id === id ? {...item} : null
                )
            }
        })
    }

    render() {
        let { cartItems } = this.state;

        return (
            <div className="App">
                <Cart items={cartItems} />
                <hr/>
                <Inventory inventory={inventory} clicked={this.selectItem} />
            </div>
        )
    }
}
