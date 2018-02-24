import React    from 'react';
import {inject, observer} from 'mobx-react';

import ItemView from '../ItemView/ItemView';
import './Inventory.css';


class Inventory extends React.Component {
    componentWillMount() {
        this.props.store.getList();
    }


    render() {
        return (
            <ul className="flex-row Inventory">
                {this.props.store.list.map(item =>
                    <ItemView item={item} key={item.id} />
                )}
            </ul>
        );
    }
}


export default inject('store')(observer(Inventory));


