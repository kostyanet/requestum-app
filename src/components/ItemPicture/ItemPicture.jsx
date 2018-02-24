import React from 'react';
import './ItemPicture.css';


const ItemPicture = (props) => (
    <figure className="flex-row bordered ItemPicture">
        <img src={props.img} alt="props.title" />

        <div className="flex-row badge-holder">
            { props.discountCost ? <div className="flex-row badge badge__sale">Sale</div> : <div/> }
            { props.isNew ? <div className="flex-row badge badge__new">New</div> : <div/> }
        </div>
    </figure>
);


export default ItemPicture;
