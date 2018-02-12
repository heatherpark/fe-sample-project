import React from 'react';
import './Cart.css';
import { CartItem } from '../index';

export default function Cart(props) {
  let total = props.cart.reduce((total, item)=> {
    return total + item.price;
  }, 0);

  return (
    <div className="cart overlay">
      <div className="cart-contents"> 
        Total: ${total}
        {props.cart.map(item => {
          return (
            <CartItem item={item}
            removeFromCart={props.removeFromCart} />
          );
        })}
      </div>
    </div>
  );
}