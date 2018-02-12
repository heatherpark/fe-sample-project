import React from 'react';
import products from '../../../data/product-payload';
import { CartlyProductOverview } from '../index';
import { Cart } from '../index';

let updatedProductData = products.map(product => {
  let convertedPrice = (product.price / 100).toFixed(2);

  return {
    ...product,
    price: `$${convertedPrice}`
  };
})

export default function Shop(props) {
  return (
    <div>
      <Cart
        cart={props.cart}
        removeFromCart={props.removeFromCart} />
      {updatedProductData.map(product => {
        return (
          <CartlyProductOverview
            product={product}
            addToCart={props.addToCart} />
        );
      })}
    </div>
  );
}