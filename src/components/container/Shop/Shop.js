import React from 'react';
import products from '../../../data/product-payload';
import { CartlyProductOverview } from '../index';

export default function Shop() {
  return (
    <div>
      {products.map(product => {
        return <CartlyProductOverview product={product} />
      })}
    </div>
  );
}