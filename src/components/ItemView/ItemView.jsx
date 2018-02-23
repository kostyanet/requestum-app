import React       from 'react';
// import {observer} from 'mobx-react/index';

import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ItemPicture from '../ItemPicture/ItemPicture';
import './ItemView.css';


class ItemView extends React.Component {

    // removeItem = () => this.props.removeItem(this.props.index);
    //
    // setItemActive = (event) => {
    //     if (event.target.tagName === 'BUTTON') return;
    //     this.props.setItemActive(this.props.index);
    // };


    render() {
        // const {isActive, item} = this.props;

        return (
            <li className="ItemView">
                <div className="bordered ItemView__border">
                    <ItemPicture />

                    <section className="ItemView__main">
                        <div className="ItemView__info">
                            <h3 className="ItemView__title">Lorem ipsum dolor sit amel</h3>
                            <p className="ItemView__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi magnam nisi, beatae asperiores quos dignissimos! Hic quibusdam, quod aspernatur tempora harum totam obcaecati, earum nesciunt iure architecto sequi esse assumenda?</p>

                            <div className="flex-row price">
                                <div className="price__new">$255.00</div>
                                <span className="price__old">$299.90
                                    <span className="price__strike" />
                                </span>
                            </div>
                        </div>

                        <ButtonGroup />
                    </section>
                </div>
            </li>
        );
    }
}


export default ItemView;
// export default observer(ItemView);
