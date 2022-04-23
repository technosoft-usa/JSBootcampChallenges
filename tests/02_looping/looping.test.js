/* eslint-disable no-undef */
const { expect } = require('chai');

const {
  factorial, stringReverse, slicer, addTheEvens,
} = require('./looping');

describe('factorial', () => {
  it('is a function', () => {
    expect(typeof factorial).to.equal('function');
  });

  it('returns a number', () => {
    const returnedValue = factorial(5);
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns the correct value', () => {
    const returnedValue5 = factorial(5);
    expect(returnedValue5).to.equal(120);
    const returnedValue7 = factorial(7);
    expect(returnedValue7).to.equal(5040);
  });
});

describe('stringReverse', () => {
  it('is a function', () => {
    expect(typeof stringReverse).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = stringReverse('goodbye');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns the reverse of the string goodbye', () => {
    const returnedValue = stringReverse('goodbye');
    expect(returnedValue).to.equal('eybdoog');
  });

  it("returns the reverse of the string 'javascript is fun'", () => {
    const returnedValue = stringReverse('javascript is fun');
    expect(returnedValue).to.equal('nuf si tpircsavaj');
  });
});

describe('slicer', () => {
  it('is a function', () => {
    expect(typeof slicer).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = slicer('easy as pie');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns a new string starting at the startIdx', () => {
    const returnedValue = slicer('twice the ice is nice', 10);
    expect(returnedValue).to.equal('ice is nice');
  });

  it('returns a new string with the correct starting and ending indices', () => {
    const returnedValue = slicer('twice the ice is nice to slice', 6, 20);
    expect(returnedValue).to.equal('the ice is nice');
  });

  it('returns the original string if no indices are inputted', () => {
    const returnedValue = slicer('twice the ice is nice to slice');
    expect(returnedValue).to.equal('twice the ice is nice to slice');
  });
});

describe('addTheEvens', () => {
  it('is a function', () => {
    expect(typeof addTheEvens).to.equal('function');
  });

  it('returns a number', () => {
    expect(typeof addTheEvens(10)).to.equal('number');
  });

  it('returns the correct number when an even number is passed', () => {
    const returnedValue = addTheEvens(8);
    expect(returnedValue).to.equal(20);
  });

  it('returns the correct number when an odd number is passed', () => {
    const returnedValue = addTheEvens(13);
    expect(returnedValue).to.equal(42);
  });

  it('returns the correct number when a large number is passed', () => {
    expect(addTheEvens(111)).to.equal(3080);
    expect(addTheEvens(220)).to.equal(12210);
  });
});
