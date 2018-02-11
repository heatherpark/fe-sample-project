import React from 'react';
import { ProductOverview } from '../../presentational';

export default function CartlyProductOverview({ product }) {
  return(
    <div>
      <ProductOverview>
        <img src={`images/${product.filename}`} alt={product.name}/>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </ProductOverview>
    </div>
  )
}