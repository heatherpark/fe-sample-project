import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <a href="#" className="button">
      {props.children}
    </a>
  );
}