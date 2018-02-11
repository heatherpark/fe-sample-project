import React, { Component } from 'react';
import './App.css';
import { Shop } from '../index';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(e, product) {
    this.setState({
      cart: [
        ...this.state.cart,
        product
      ]
    });
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