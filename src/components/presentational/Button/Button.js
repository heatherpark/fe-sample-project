import React from 'react';

export default function Button(props) {
  return (
    <a href="#" class="btn">
      {props.children}
    </a>
  );
}