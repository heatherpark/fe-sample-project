import React from 'react';
import { Logo } from '../../presentational';
import { CartCounter } from '../index';

export default function NavContainer(props) {
  return (
    <div>
      <Logo />
      <CartCounter count={props.cartCount} />
    </div>
  );
}