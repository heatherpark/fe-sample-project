import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <a
      onClick={props.clickHandler}
      href="javascipt:void(0);"
      className="button">
      {props.children}
    </a>
  );
}