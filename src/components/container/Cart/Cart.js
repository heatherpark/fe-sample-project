import React from 'react';
import './Cart.css';
import { CartItem } from '../index';

export default function Cart(props) {
  let total = props.cart.reduce((total, item)=> {
    return total + item.price;
  }, 0);

  return (
    <div className="cart overlay">
      <div className="cart-content"> 
        <h2>Your Cart</h2>
        <div className="cart-items">
          {props.cart.map(item => {
            return (
              <CartItem item={item}
              removeFromCart={props.removeFromCart} />
            );
          })}
        </div>
        <hr />
        <div className="cart-total">
          <span>Total</span> <span>${total}</span>
        </div>
      </div>
    </div>
  );
}