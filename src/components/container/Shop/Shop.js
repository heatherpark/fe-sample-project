import React from 'react';
import products from '../../../data/product-payload';
import { CartlyProductOverview } from '../index';
import { Cart } from '../index';

export default function Shop(props) {
  return (
    <div>
      <Cart
        cart={props.cart}
        removeFromCart={props.removeFromCart} />
      {products.map(product => {
        return (
          <CartlyProductOverview
            product={product}
            addToCart={props.addToCart} />
        );
      })}
    </div>
  );
}