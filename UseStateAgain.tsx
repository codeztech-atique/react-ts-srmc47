import * as React from 'react';
import './style.css';

// // https://www.w3schools.com/REACT/react_useref.asp
// Use the concept of reducer

export default function UseStateAgain() {
  const [count, setCount] = React.useState(0); // For use UseState

  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'RESET':
        return { count: 0 };
      case 'INC':
        return { count: state.count + 1 };
      case 'DEC':
        return { count: state.count - 1 };
      default:
        throw new Error('action not found');
    }
    return state;
  };

  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });

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
