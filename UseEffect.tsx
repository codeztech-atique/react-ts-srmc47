import * as React from 'react';
import './style.css';

export default function UseEffect() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('a');
  return (
    <div>
      <h1>Using useEffect - </h1>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <h1>
        {' '}
        {text} = {count}{' '}
      </h1>
    </div>
  );
}
