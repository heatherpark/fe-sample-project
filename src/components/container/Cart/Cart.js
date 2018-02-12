import React from 'react';
import { CartItem } from '../index';

export default function Cart(props) {
  return (
    <div>
      {props.cart.map(item => {
        return (
          <CartItem item={item}
          removeFromCart={props.removeFromCart} />
        );
      })}
    </div>
  );
}