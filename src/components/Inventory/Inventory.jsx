import React    from 'react';

import ItemView from '../ItemView/ItemView';
import './Inventory.css';


const Inventory = () => (
    <ul className="flex-row Inventory">
            <ItemView />
    </ul>
    );


export default Inventory;


// {/*{store.items.map((item, index) =>*/}
{/*<ItemView*/}
    // index={index}
    // isActive={index === store.activeIndex}
    // item={item}
    // key={item.id}
    // removeItem={store.removeItem}
    // setItemActive={store.setItemActive}
// />
// )}