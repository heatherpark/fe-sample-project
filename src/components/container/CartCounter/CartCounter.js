import React from 'react';
import { Counter } from '../../presentational';

export default function CartCounter({ count }) {
  return (
    <div>
      <Counter count={count} />
    </div>
  );
}