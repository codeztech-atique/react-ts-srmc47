import * as React from 'react';
import './style.css';

// // https://www.w3schools.com/REACT/react_useref.asp
// Use the concept of reducer

export default function UseReducer() {
  const counterReducer = (state, action) => {
    switch (action) {
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
      <h1>Using useReducer- </h1>
      <h4>{state.count}</h4>
      <button
        onClick={() => {
          dispatch('INC');
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch('DEC');
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch('RESET');
        }}
      >
        Reset
      </button>
    </div>
  );
}
