import React, { Component } from 'react';
import BeerList from './pages/BeerList';

class BeerPage extends Component {

    render() {
        return <div>
            <h1>About {beer.name}</h1>
            <p>{beer.description}</p>
        </div>
    }
}

export default BeerPage
