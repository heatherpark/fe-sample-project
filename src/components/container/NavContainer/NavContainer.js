import React from 'react';
import './NavContainer.css';
import { Logo } from '../../presentational';
import { CartCounter } from '../index';

export default function NavContainer(props) {
  return (
    <div className="nav-container">
      <div className="container">
        <Logo />
        <div className="cart-count-container">
          Your Cart
          <CartCounter count={props.cartCount} />
        </div>
      </div>
    </div>
  );
}