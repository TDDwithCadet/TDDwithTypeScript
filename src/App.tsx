import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dollar from './currency/Dollar'


describe('get result of multiplying stock by number', () => {
  it('multipling correct', () => {
      const five:Dollar = new Dollar(5);
      expect(five.times(2)).toEqual(new Dollar(10));
      expect(five.times(3)).toEqual(new Dollar(15));
    })
  it('equality correct', () => {
     expect(new Dollar(5).equals(new Dollar(5))).toEqual(true);
     expect(new Dollar(5).equals(new Dollar(6))).toEqual(false);
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
