import './App.scss';
import { Decimal, Binary } from 'utils';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [isDecimal, setIsDecimal] = useState(true);

  const result = () => {
    let textResult: string | number = '';
    if (isDecimal) {
      if (/^[\d\s]+$/.test(input)) {
        textResult = Binary(input.split(' ').join(''));
      } else {
        textResult = 'Enter a decimal number';
      }
    } else {
      if (/^[01\s]+$/.test(input)) {
        textResult = Decimal(input.split(' ').join(''));
      } else {
        textResult = 'Enter a binary number';
      }
    }
    return textResult;
  };
  return (
    <div className="app">
      <h1 className="title">Hi,</h1>
      <h3 className="paragraph">Welcome to the binary/decimal converter</h3>
      <div className="transform">
        <div className="transform__field">
          <label>{isDecimal ? 'Decimal' : 'Binary'}</label>
          <input
            className="transform__box"
            data-testid="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <p className="transform__p">{isDecimal ? 'Binary' : 'Decimal'}</p>
          <div className="transform__box" data-testid="value">
            {result()}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn"
        data-testid="btn"
        onClick={() => {
          setIsDecimal((prevState) => !prevState);
          setInput('');
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 1L21 5L17 9"
            stroke="#C5640E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21"
            stroke="#C5640E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 23L3 19L7 15"
            stroke="#C5640E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3"
            stroke="#C5640E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default App;
