import React, { Component } from 'react';
import './App.css';
import { Shop } from '../index';
import { CartCounter } from '../index';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(e, product) {
    let id = Math.ceil(Math.random() * 1000);
    
    this.setState({
      cart: [
        ...this.state.cart,
        {
          ...product,
          id
        }
      ]
    });
  }

  removeFromCart(e, product) {
    console.log('removing', product);
  }

  render() {
    return (
      <div>
        <CartCounter count={this.state.cart.length} />
        <Shop 
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          cart={this.state.cart} />      
      </div>
    );
  }
}

export default App;