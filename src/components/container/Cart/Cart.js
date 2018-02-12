import React from 'react';
import './Cart.css';
import { CartItem } from '../index';
import { Button } from '../../presentational';
import { PriceFormatter } from '../../presentational';

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
          <span>Total</span> 
          <PriceFormatter
            currencySymbol="$">
            {total}
          </PriceFormatter>
        </div>
        <div className="back-button-container">
          <Button clickHandler={e => props.toggleCart(e, false)}>Back</Button>
        </div>
      </div>
    </div>
  );
}