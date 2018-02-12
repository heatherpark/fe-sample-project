import React from 'react';
import { CartItem } from '../index';

export default function Cart(props) {
  let total = props.cart.reduce((total, item)=> {
    return total + item.price;
  }, 0);

  return (
    <div>
      Total: ${total}
      {props.cart.map(item => {
        return (
          <CartItem item={item}
          removeFromCart={props.removeFromCart} />
        );
      })}
    </div>
  );
}