import React from 'react';
import './ButtonGroup.css';

// Certainly it should have been a class component containing some click handlers

const ButtonGroup = () => (
    <div className="flex-row ButtonGroup">
        <button className="button bordered button__add">Add to cart</button>
        <button className="button bordered button__view">View</button>
    </div>
);


export default ButtonGroup;
