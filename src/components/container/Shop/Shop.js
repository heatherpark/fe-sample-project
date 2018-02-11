import React from 'react';
import products from '../../../data/product-payload';
import { CartlyProductOverview } from '../index';

export default function Shop(props) {
  return (
    <div>
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