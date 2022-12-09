import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dollar from './Dollar'


describe('get result of multiplying stock by number', () => {
  it('multipling correct', () => {
      const five:Dollar = new Dollar(5);
      const result:number = five.times(2);
      const expected:number = 10;
      expect(result).toEqual(expected)
    })
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
