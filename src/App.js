import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import Footer    from './components/Footer/Footer';
import Inventory from './components/Inventory/Inventory';

import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <main className="main">
                    <Inventory />
                    <LoadControl />
                </main>
                <Footer />
            </div>
        );
    }
}


const LoadControl = () => (
    <section className="LoadControl">
        <button className="button bordered button__load">Load more</button>
    </section>
);


export default App;
