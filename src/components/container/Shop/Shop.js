import React from 'react';
import products from '../../../data/product-payload';
import './Shop.css';
import { ProductOverview } from '../index';
import { Cart } from '../index';

export default function Shop(props) {
  return (
    <div className="shop">
      {props.showCart && 
        <Cart
          cart={props.cart}
          removeFromCart={props.removeFromCart}
          toggleCart={props.toggleCart} />
      }
      <h2>Shop our featured collection</h2>
      <div className="row">
        {products.map(product => {
          return (
            <ProductOverview
              product={product}
              addToCart={props.addToCart} />
          );
        })}
      </div>
    </div>
  );
}