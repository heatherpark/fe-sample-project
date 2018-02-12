import React from 'react';
import { ProductOverview } from '../../presentational';
import { Button } from '../../presentational';

export default function CartlyProductOverview({ addToCart, product }) {
  return(
    <div>
      <ProductOverview>
        <img src={`images/${product.filename}`} alt={product.name}/>
        <p>{product.name}</p>
        <p>${product.price}</p>
        <div onClick={e => addToCart(e, product)}>
          <Button>Add to cart</Button>
        </div>
      </ProductOverview>
    </div>
  )
}