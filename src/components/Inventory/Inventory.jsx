import React    from 'react';
import {inject, observer} from 'mobx-react';

import AppSettings from '../../common/app.settings';
import ItemView    from '../ItemView/ItemView';
import scrollTo    from '../../common/scroll';
import './Inventory.css';


class Inventory extends React.Component {

    componentWillMount() {
        this.props.store.getList();
    }


    componentDidUpdate(prevProps) {
        if (this.props.store.isEnd) {
            scrollTo(this.ul, this.ul.scrollTop + 530, 400);
        } else if (this.props.store.list.length > AppSettings.PAGE_LEN) {
            scrollTo(this.ul, this.ul.scrollTop + 470, 400);
        }
    }


    render() {
        return (
            <ul className="flex-row Inventory" ref={(ul) => this.ul = ul}>
                {this.props.store.list.map(item =>
                    <ItemView item={item} key={item.id} />
                )}
            </ul>
        );
    }
}


export default inject('store')(observer(Inventory));


