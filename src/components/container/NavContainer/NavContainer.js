import React from 'react';
import './NavContainer.css';
import { Logo } from '../../presentational';
import { CartCounter } from '../index';

export default function NavContainer(props) {
  return (
    <div>
      <div className="nav-container">
        <div className="container">
          <Logo />
          <div className="cart-count-container">
            <a
              href="javascript:void(0);"
              className={props.showCart ? "current-page-link" : ""}
              onClick={e => props.toggleCart(e, true)}>Your Cart</a>
            <CartCounter count={props.cartCount} />
          </div>
        </div>
      </div>
      <div className="nav-container-invisible">
        <div className="container">
          <Logo />
          <div className="cart-count-container">
            Your Cart
            <CartCounter count={props.cartCount} />
          </div>
        </div>
      </div>
    </div>
  );
}