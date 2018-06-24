import React, { Component } from 'react';
import beerAPI from '../api/beerAPI'
import BeerCard from '../components/BeerCard'

class BeerList extends Component {
    state = {
        beers: null
    }

    componentDidMount() {
        beerAPI.fetchBeers()
        .then(beersData => {
    
            const beers = beersData.map(beer => {
                return {
                id: beer.id,
                name: beer.name, 
                description: beer.description, 
                imageURL: beer.image_url 
              }
            })
    
            this.setState({
                beers
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    deleteBeer = (id) => {
        // const beerURL = beerAPI.fetchBeers()
        fetch(`http://localhost:3000/beers/${id}`, {method: 'DELETE'})
          .then(res => res.data)
          .then(() => {
            this.setState(prevState => {
              return {
                beers: prevState.beers.filter(beer => beer.id !== id)
              }
            })
          })
          .catch(err => console.error(err))
      }

    render() {
        //deconstructing

        if(!this.state.beers) {
            return <div>Loading beers...</div> 
        }   
        
        const beers = this.state.beers.map(beer => {
            return <BeerCard handleDelete={this.deleteBeer} key={beer.id} {...beer} />
        })
    
        return (
            <div className="App">
            <header className="App-header">
                <h1 className="App-title">Available Beers</h1>
            </header>
            <div className="card-row">
                {beers}
            </div>
    
            </div>
        );
    }
}

export default BeerList