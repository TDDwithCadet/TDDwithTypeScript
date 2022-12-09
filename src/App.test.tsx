import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Dollar from './currency/Dollar'
import Franc from './currency/Franc'

describe('get result of multiplying stock by number', () => {
  it('multipling correct with Dollar', () => {
      const five:Dollar = new Dollar(5);
      expect(five.times(2)).toEqual(new Dollar(10));
      expect(five.times(3)).toEqual(new Dollar(15));
    })
  it('multipling correct with Franc', () => {
      const five:Franc = new Franc(5);
      expect(five.times(2)).toEqual(new Franc(10));
      expect(five.times(3)).toEqual(new Franc(15));
    })
  it('equality correct', () => {
     expect(new Dollar(5).equals(new Dollar(5))).toEqual(true);
     expect(new Dollar(5).equals(new Dollar(6))).toEqual(false);
     expect(new Franc(5).equals(new Franc(5))).toEqual(true);
     expect(new Franc(5).equals(new Franc(6))).toEqual(false);
  })
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
