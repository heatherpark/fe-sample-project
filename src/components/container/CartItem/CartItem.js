import React from 'react';

export default function CartItem(props) {
  return (
    <div>
      {props.item.name} <span onClick={e => props.removeFromCart(e, props.item.id)}>X</span>
    </div>
  );
}