import React, { Component } from 'react';
import './App.css';
import { Shop } from '../index';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }

  addToCart(e, product) {
    console.log('clicked: ', product);
  }

  render() {
    return (
      <div>
        <Shop addToCart={this.addToCart} />      
      </div>
    );
  }
}

export default App;