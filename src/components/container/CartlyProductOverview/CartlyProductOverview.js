import React from 'react';
import { ProductOverview } from '../../presentational';

export default function CartlyProductOverview(props) {
  return(
    <div>
      {props.product.name}
      <ProductOverview />
    </div>
  )
}