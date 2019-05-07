import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bitwyre Cryptocurrency Spot and Derivative Exchange
          <br/>
          Download our client program and start trading crypto
        </p>
        <a
          className="App-link"
          href="https://github.com/bitwyre/client"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Here
        </a>
        <a
          className="App-link"
          href="https://bitwyre.com/exchange"
          target="_blank"
          rel="noopener noreferrer"
        >
          Access Exchange (Alpha Release)
        </a>
      </header>
    </div>
  );
}

export default App;
