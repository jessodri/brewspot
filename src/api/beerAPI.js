import axios from './init'

export default {
    fetchBeers
}

async function fetchBeers() {
    const response = await axios.get('/beers')
    const beers = response.data
    return beers
}




// componentDidMount() {
//     const beerURL = 'http://localhost:3000/beers'
//     fetch(beerURL)
//     .then(response => response.json())
//     .then(beersData => {

//     // make the beer info shorter
//     const beers = beersData.map(beer => {
//         return {
//         id: beer.id,
//         name: beer.name, 
//         description: beer.description, 
//         imageURL: beer.image_url 
//       }
//     })

//       this.setState({
//         beers
//       })
//     })
//     .catch(error => console.error(error))
//   }
