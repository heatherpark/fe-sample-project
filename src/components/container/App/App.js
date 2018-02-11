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

  render() {
    return (
      <div>
        <Shop />      
      </div>
    );
  }
}

export default App;