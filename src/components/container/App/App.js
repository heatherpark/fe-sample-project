import React, { Component } from 'react';
import './App.css';
import { Shop } from '../index';
import { NavContainer } from '../index';

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

  removeFromCart(e, id) {
    let updatedCart = this.state.cart.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });

    this.setState({
      cart: updatedCart
    });
  }

  render() {
    return (
      <div>
        <NavContainer cartCount={this.state.cart.length} />
        <div className="container">
          <Shop 
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
            cart={this.state.cart} />      
        </div>
      </div>
    );
  }
}

export default App;