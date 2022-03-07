/* eslint-disable no-prototype-builtins */
/* eslint-env jasmine */
/* eslint-disable no-undef */
const { expect } = require('chai');

const {
  greet, calc,
} = require('./objectMethods');

describe('greet', () => {
  it('is an object', () => {
    expect(typeof greet).to.equal('object');
  });

  describe('firstName', () => {
    it('is a property in greet', () => {
      expect(greet.hasOwnProperty('firstName')).to.equal(true);
    });

    it('is a string', () => {
      expect(typeof greet.firstName).to.equal('string');
    });
  });

  describe('sayHello', () => {
    it('is a method in greet', () => {
      expect(greet.hasOwnProperty('sayHello')).to.equal(true);
    });

    it('sayHello is a function', () => {
      expect(typeof greet.sayHello).to.equal('function');
    });

    it('returns the correct greeting', () => {
      const returnedValue = greet.sayHello();
      expect(returnedValue).to.equal(`Hello, I'm ${greet.firstName}`);
    });
  });
});

describe('calc', () => {
  it('is an object', () => {
    expect(typeof calc).to.equal('object');
  });

  it('total is a property on calc and is set to zero', () => {
    expect(calc.hasOwnProperty('total')).to.deep.equal(true);
    expect(calc.total).to.equal(0);
  });

  it('add is a method in calc', () => {
    expect(calc.hasOwnProperty('add')).to.equal(true);
    expect(typeof calc.add).to.equal('function');
  });

  it('add method adds passed value to total', () => {
    expect(calc.add(3)).to.equal(3);
  });

  it('subrtract is a method in calc', () => {
    expect(calc.hasOwnProperty('subtract')).to.equal(true);
    expect(typeof calc.subtract).to.equal('function');
  });

  it('subtract method subtracts passed value to total', () => {
    expect(calc.subtract(1)).to.equal(2);
  });

  it('clear is a method in calc', () => {
    expect(calc.hasOwnProperty('clear')).to.equal(true);
    expect(typeof calc.clear).to.equal('function');
  });

  it('clear method sets total back to zero', () => {
    calc.clear();
    expect(calc.total).to.deep.equal(0);
  });
});
