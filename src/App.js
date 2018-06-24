import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BeerList from './pages/BeerList';
import About from './pages/About';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Navbar className="links" addresses={[
          {
            pathName: 'Home',
            uri: '/home'
          },
          {
            pathName: 'About',
            uri: '/about'
          },
          {
          pathName: 'Beers',
          uri: '/beers'},
          {
            pathName: 'Contact',
            uri: '/contact'
          },
          ]}/>
          <Switch>
            <Route path="/beers" component={BeerList}/>
          </Switch>
          <Switch>
            <Route path="/about" component={About}/>
          </Switch>
          <Switch>
            <Route path="/contact" component={Contact}/>
          </Switch>
          <Switch>
            <Route path="/home" component={Landing}/>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
