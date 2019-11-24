import React, { Component } from 'react';
import './App.css';

import Rkeys from "@bit/ramda.ramda.keys";

import InventoryItem from './components/InventoryItem/InventoryItem';

const inventory = {'Apple': 10, 'Melon': 20, 'Orange': 8};

export default class App extends Component {
    state = {

    }

    render() {

        return (
            <div className="App">
                <div>
                    <h3>Cart</h3>
                    <div>
                        <p>Your cart is empty</p>
                    </div>
                    <div>
                        Total: ${0}
                        {' '}
                        <button type="button" disabled="">Checkout</button>
                    </div>
                </div>
                <hr/>
                <div>
                    <h3>Inventory</h3>
                    {Rkeys(inventory).map(item=>
                        <InventoryItem />
                    )}
                </div>
            </div>
        )
    }
}
