import * as React from 'react';
import './style.css';

// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

// To avoid this, we can use the useRef Hook.

// https://www.w3schools.com/REACT/react_useref.asp

export default function UserRef() {
  const [inputValue, setInputValue] = React.useState('');
  const count = React.useRef(0);

  React.useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <h1>Using useRef - </h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h3>Render Count: {count.current}</h3>
    </div>
  );
}
