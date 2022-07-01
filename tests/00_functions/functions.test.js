/* eslint-disable no-undef */
const { expect } = require('chai');

const {
  max, addUnknown, evenOrOdd, operator,
} = require('./functions');

describe('max', () => {
  it('is a function', () => {
    expect(typeof max).to.equal('function');
  });

  it('returns a number', () => {
    const returnedValue = max(4, 5, 6);
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns the first number if it is the largest', () => {
    const returnedValue = max(10, 8, 6);
    expect(returnedValue).to.equal(10);
  });

  it('returns the second number if it is the largest', () => {
    const returnedValue = max(20, 40, 10);
    expect(returnedValue).to.equal(40);
  });

  it('returns the third number if it is the largest', () => {
    const returnedValue = max(3, 6, 9);
    expect(returnedValue).to.equal(9);
  });
});

describe('addUnknown', () => {
  it('is a function', () => {
    expect(typeof addUnknown).to.equal('function');
  });

  it('adds two numbrs correctly', () => {
    const returnedValue = addUnknown(2, 2);
    expect(returnedValue).to.equal(4);
  });

  it('adds three negative numbers correctly', () => {
    const returnedValue = addUnknown(3, 4, 5);
    expect(returnedValue).to.equal(12);
  });

  it('adds 5 numbers correctly', () => {
    const returnedValue = addUnknown(10, 10, 10, 10, 100);
    expect(returnedValue).to.equal(140);
  });
});

describe('evenOrOdd', () => {
  it('is a function', () => {
    expect(typeof evenOrOdd).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = evenOrOdd(7);
    expect(typeof returnedValue).to.equal('string');
  });

  it("returns the string 'even' if the number is even", () => {
    const returnedValue = evenOrOdd(10);
    expect(returnedValue).to.equal('even');
  });

  it("returns the string 'odd' if the number is odd", () => {
    const returnedValue = evenOrOdd(3);
    expect(returnedValue).to.equal('odd');
  });
});

describe('operator', () => {
  it('is a function', () => {
    expect(typeof operator).to.equal('function');
  });

  it('return string "plus" if the first two numbers add to the third', () => {
    const returnedValue = operator(5, 5, 10);
    expect(returnedValue).to.equal('plus');
  });

  it('return "minus" if the first number minus the second equals the third', () => {
    const returnedValue = operator(8, 2, 6);
    expect(returnedValue).to.equal('minus');
  });

  it('return "multiply" if the first two numbers multiplied together equals the third', () => {
    const returnedValue = operator(7, 5, 35);
    expect(returnedValue).to.equal('multiply');
  });

  it('returns "divide" if the first number divided by the second equals the third', () => {
    const returnedValue = operator(24, 8, 3);
    expect(returnedValue).to.equal('divide');
  });

  it('returns if none of the other conditions are true', () => {
    const returnedValue = operator(124, 2345, 1);
    expect(returnedValue).to.equal(null);
  });
});
