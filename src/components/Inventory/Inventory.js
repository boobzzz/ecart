import React from 'react';

import InventoryItem from './InventoryItem/InventoryItem';

const Inventory = (props) => {
    let { inventory } = props;

    return (
        <div>
            <h3>Inventory</h3>
            {inventory.map(item =>
                <InventoryItem
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    price={item.price}
                    selected={item.selected}
                    stock={item.stock}
                    clicked={props.clicked} />
            )}
        </div>
    )
}

export default Inventory;
