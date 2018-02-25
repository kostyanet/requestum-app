import React from 'react';

import {Provider} from 'mobx-react';
import {inject, observer} from 'mobx-react';
import * as scroll from 'smoothscroll-polyfill';
import {useStrict} from 'mobx';
import 'font-awesome/css/font-awesome.min.css';

import Footer from './components/Footer/Footer';
import Inventory from './components/Inventory/Inventory';
import store from './stores/store';
import './App.css';


useStrict(true);
scroll.polyfill();


const App = () => (
    <Provider store={store}>
        <div className="App">
            <main className="main">
                <Inventory />
                <LoadControl />
            </main>
            <Footer />
        </div>
    </Provider>
);


const LoadControl = inject('store')(observer(({store}) => (
    <section className="flex-row LoadControl">
        {!store.isEnd &&
            <div>
                {store.isLoading
                    ? <div className="spinner"><i className="fa fa-circle-o-notch fa-spin fa-3x" /></div>
                    : <button
                        className="button bordered button__load"
                        onClick={store.loadMore}>Load more</button>
                }
            </div>
        }
    </section>
)));


export default App;
