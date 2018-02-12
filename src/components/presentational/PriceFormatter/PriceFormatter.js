import React from 'react';

export default function PriceFormatter(props) {
  function format(price) {
    return (price / 100).toFixed(2);
  }

  return (
    <span className="formatted-price">
      {props.currencySymbol}{format(props.children)}
    </span>
  );
}