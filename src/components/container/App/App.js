import React, { Component } from 'react';
import './App.css';
import { Shop } from '../index';
import { NavContainer } from '../index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      showCart: false
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
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

  toggleCart(e, show) {
    this.setState({
      ...this.state,
      showCart: show
    });
  }

  render() {
    let deployPath = 'fe-sample-project';

    return (
      <BrowserRouter>
        <div>
          <NavContainer
            cartCount={this.state.cart.length}
            toggleCart={this.toggleCart}
            showCart={this.state.showCart} />
          <div className="container">
            <Route exact path={`/${deployPath}`} render={() => (
                <Redirect to={`/${deployPath}/shop`}/>
            )}/>
            <Route 
              path={`/${deployPath}/shop`} 
              render={routeProps => {
                return (
                  <Shop
                    {...routeProps}
                    showCart={this.state.showCart}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                    cart={this.state.cart}
                    toggleCart={this.toggleCart} />
                );
              }} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;