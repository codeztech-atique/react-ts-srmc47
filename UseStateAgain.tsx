import * as React from 'react';
import './style.css';

// // https://www.w3schools.com/REACT/react_useref.asp
// Use the concept of reducer

export default function UseStateAgain() {
  const [count, setCount] = React.useState(0); // For use UseState
  return (
    <div>
      <h1>Using useState check this before coming useReducer- </h1>
      <h4>{count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
