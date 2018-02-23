import React from 'react';

import './ButtonGroup.css';


const ButtonGroup = () => (
    <div className="flex-row ButtonGroup">
        <button className="button bordered button__add">Add to cart</button>
        <button className="button bordered button__view">View</button>
    </div>
);


export default ButtonGroup;
