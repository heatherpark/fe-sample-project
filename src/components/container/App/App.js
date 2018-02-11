import React, { Component } from 'react';
import './App.css';
import { Shop } from '../index';
import { CartCounter } from '../index';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: {}
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(e, product) {
    let id = Math.ceil(Math.random() * 1000);
    
    this.setState({
      cart: {
        ...this.state.cart,
        [id]: product
      }
    });
  }

  removeFromCart(e, product) {
    
  }

  render() {
    return (
      <div>
        <CartCounter count={this.state.cart.length} />
        <Shop 
          addToCart={this.addToCart}
          cart={this.state.cart} />      
      </div>
    );
  }
}

export default App;