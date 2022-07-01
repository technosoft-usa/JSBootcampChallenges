/* eslint-disable no-undef */
const { expect } = require('chai');

const { cap, firstCharacter, doesInclude, isPalindrome } = require('./strings');

describe('doesInclude', () => {
  it('is a function', () => {
    expect(typeof doesInclude).to.equal('function');
  });

  it('returns a boolean', () => {
    const returnedValue = doesInclude('well hello', 'g');
    expect(typeof returnedValue).to.equal('boolean');
  });

  it('returns true if the string includes the character', () => {
    const returnedValue = doesInclude('gremlin', 'm');
    expect(returnedValue).to.equal(true);
  });

  it('returns false if the string does not include the character', () => {
    const returnedValue = firstCharacter('today', 'z');
    expect(returnedValue).to.equal(false);
  });
});

describe('isPalindrome', () => {
  it('is a function', () => {
    expect(typeof isPalindrome).to.equal('function');
  });

  it('returns a boolean', () => {
    const returnedValue = isPalindrome('hello');
    expect(typeof returnedValue).to.equal('boolean');
  });

  it('returns true if the strings are palindromes', () => {
    const returnedValue = isPalindrome('dad');
    expect(returnedValue).to.equal(true);

    expect(isPalindrome('kayak')).to.equal(true);
  });

  it('returns false if the string is not a palindrome', () => {
    const returnedValue = isPalindrome('yesterday');
    expect(returnedValue).to.equal(false);
  });
});

describe('firstCharacter', () => {
  it('is a function', () => {
    expect(typeof firstCharacter).to.equal('function');
  });

  it('returns a boolean', () => {
    const returnedValue = firstCharacter('hey there', 'goodbye');
    expect(typeof returnedValue).to.equal('boolean');
  });

  it('returns true if both strings start with the same character', () => {
    const returnedValue = firstCharacter('apple', 'aardvark');
    expect(returnedValue).to.equal(true);
  });

  it('returns false if both strings do not start with the same character', () => {
    const returnedValue = firstCharacter('today', 'yesterday');
    expect(returnedValue).to.equal(false);
  });

  it('*** Bonus returns true if the strings start with the same characters but are different case', () => {
    const returnedValue = firstCharacter('bobby', 'Billy');
    expect(returnedValue).to.equal(true);
    expect(firstCharacter('Joe', 'tom')).to.equal(false);
  });
});

describe('cap', () => {
  it('is a function', () => {
    expect(typeof cap).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = cap('hello', 'e');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns the correct string', () => {
    const returnedValue = cap('hello', 'e');
    expect(returnedValue).to.equal('L');
    expect(cap('goodbye', 'b')).to.equal('Y');
  });

  it("returns the string 'sorry not found' if letter is not found", () => {
    const returnedValue = cap('where are you', 'b');
    expect(returnedValue).to.equal('sorry not found');
  });
});
