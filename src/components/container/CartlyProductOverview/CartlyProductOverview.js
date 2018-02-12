import React from 'react';
import '../../presentational/ProductOverview/ProductOverview.css';
import { ProductOverview } from '../../presentational';
import { Button } from '../../presentational';

export default function CartlyProductOverview({ addToCart, product }) {
  return(
    <div className="col-lg-3">
      <div className="product-overview">
        <ProductOverview>
          <img 
            className="img-responsive"
            src={`images/${product.filename}`}
            alt={product.name}/>
          <br />
          <span className="product-name">{product.name}</span>
          <br />
          <span className="product-price">${product.price}</span>
          <div onClick={e => addToCart(e, product)}>
            <Button>Add to cart</Button>
          </div>
        </ProductOverview>
      </div>
    </div>
  )
}