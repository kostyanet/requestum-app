import React from 'react';

import './ItemPicture.css';


const ItemPicture = () => (
    <figure className="flex-row bordered ItemPicture">
        <img src="http://via.placeholder.com/200x200" alt="" />

        <div className="flex-row badge-holder">
            <div className="flex-row badge badge__sale">Sale</div>
            <div className="flex-row badge badge__new">New</div>
        </div>
    </figure>
);


export default ItemPicture;
