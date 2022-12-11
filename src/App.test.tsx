import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Money from './classes/Money';
import {Bank, Expression} from './classes/Bank';
import {Sum} from './classes/Sum';

describe('get result of multiplying stock by number', () => {
  it('multipling correct', () => {
      const five:Money = Money.dollar(5);
      expect(five.times(2)).toEqual(Money.dollar(10));
      expect(five.times(3)).toEqual(Money.dollar(15));
    })
  it('equality correct', () => {
     expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
     expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
     expect(Money.franc(5).equals(Money.franc(5))).toEqual(true);
  })
  it('additing correct', () => {
    const five:Money = Money.dollar(5);
    const sum:Expression = five.plus(five);
    const bank:Bank = new Bank();
    const reduced:Money = bank.reduce(sum, "USD");
    expect(reduced).toEqual(Money.dollar(10));
  })
  it('plusReturnsSum correct', () => {
    const five:Money = Money.dollar(5);
    const result:Expression = five.plus(five);
    const sum:Sum = result as Sum;
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  })
  it('reduceSum correct', () => {
    const sum:Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank:Bank = new Bank();
    const result:Money = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(7));
  })
  it('reduceMoney correct', () => {
    const bank:Bank = new Bank();
    const result:Money = bank.reduce(Money.dollar(1), "USD");
    expect(result).toEqual(Money.dollar(1));
  })
  it('reduceMoney correct with differentCurrency', () => {
    const bank:Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result:Money = bank.reduce(Money.franc(2), "USD");
    expect(result).toEqual(Money.dollar(1));
  })
  it('identityRate correct', () => {
    expect(1).toEqual(new Bank().rate("USD", "USD"));  
  })
  it('mixedAddition correct', () => {
    const fiveBucks:Expression = Money.dollar(5);
    const tenFrancs:Expression = Money.franc(10);
    const bank:Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result:Money = bank.reduce(
      fiveBucks.plus(tenFrancs), "USD");
    expect(result).toEqual(Money.dollar(10));
  })
  it('sumPlusMoney correct', () => {
    const fiveBucks:Expression = Money.dollar(5);
    const tenFrancs:Expression = Money.franc(10);
    const bank:Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const sum:Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result:Money = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(15));
  })
  it('sumTimes correct', () => {
    const fiveBucks:Expression = Money.dollar(5);
    const tenFrancs:Expression = Money.franc(10);
    const bank:Bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const sum:Expression = new Sum(fiveBucks, tenFrancs).times(2);
    const result:Money = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(20));
  })
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
