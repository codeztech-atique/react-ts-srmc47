import * as React from 'react';
import './style.css';

// // https://www.w3schools.com/REACT/react_useref.asp

export default function UseState() {
  const state = React.useState(10);
  console.log(state);
  const value = state[0];
  const fnToModifyValue = state[1];
  const functionUseState = () => {
    fnToModifyValue(value + 1);
  };
  return (
    <div>
      <h1>Using useState - </h1>
      <h2>{value}</h2>
      <button onClick={functionUseState}>Click Me</button>
    </div>
  );
}
