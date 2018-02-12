import React from 'react';
import './NavContainer.css';
import { Logo } from '../../presentational';
import { CartCounter } from '../index';
import { NavLink } from 'react-router-dom';

export default function NavContainer(props) {
  return (
    <div>
      <div className="nav-container">
        <div className="container">
          <div className="nav-nodes">
            <Logo />
            <NavLink
              to="/shop"
              activeClassName={!props.showCart ? "current-page-link" : ""}>
              Shop
            </NavLink>
          </div>
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