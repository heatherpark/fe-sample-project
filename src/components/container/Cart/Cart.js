import React from 'react';
import { CartItem } from '../index';

export default function Cart({ cart }) {
  return (
    <div>
      {cart.map(item => {
        return <CartItem item={item} />
      })}
    </div>
  );
}