import React from 'react';
import './ProductOverview.css';
import { Button } from '../../presentational';
import { PriceFormatter } from '../../presentational';

export default function ProductOverview({ addToCart, product }) {
  return(
    <div className="col-lg-3">
      <div className="product-overview">
        <img 
          className="img-responsive"
          src={`images/${product.filename}`}
          alt={product.name}/>
        <div className="overview-text">
          <span className="product-name">{product.name}</span>
          <br />
          <PriceFormatter
            currencySymbol="$">
            {product.price}
          </PriceFormatter>
        </div>
        <div>
          <Button clickHandler={e => addToCart(e, product)}>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}