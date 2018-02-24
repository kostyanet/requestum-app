import React       from 'react';
import {observer}  from 'mobx-react';

import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ItemPicture from '../ItemPicture/ItemPicture';
import './ItemView.css';


const ItemView = observer(({item}) => (
    <li className="ItemView">
        <div className="bordered ItemView__border">
            <ItemPicture discountCost={item.discountCost} img={item.img} isNew={item.isNew} title={item.title} />

            <section className="ItemView__main">
                <div className="ItemView__info">
                    <h3 className="ItemView__title">{item.title}</h3>
                    <p className="ItemView__description">{item.description}</p>

                    <div className="flex-row price">
                        <div className="price__new">
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(item.cost)}
                        </div>

                        {item.discountCost &&
                            <span className="price__old">
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(item.discountCost)}
                                <span className="price__strike" />
                           </span>
                        }
                    </div>
                </div>

                <ButtonGroup />
            </section>
        </div>
    </li>
));


export default ItemView;
