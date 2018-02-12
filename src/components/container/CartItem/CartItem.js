import React from 'react';
import './CartItem.css';

export default function CartItem(props) {
  return (
    <div className="cart-item">
      <img 
        className="centered-and-cropped"
        src={`images/${props.item.filename}`}
        alt={props.item.name}/>
      <div className="cart-item-text">
        <span className="cart-item-name">{props.item.name}</span>
        &nbsp;
        <i
          onClick={e => props.removeFromCart(e, props.item.id)}
          className="fa fa-times delete"
          aria-hidden="true"></i>
        <br />
        <span className="cart-item-price">${props.item.price}</span>
      </div>
    </div>
  );
}