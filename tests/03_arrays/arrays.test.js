/* eslint-disable no-undef */
const { expect } = require('chai');

const {
  multiply, includesCopy, camelCase, inventory, joiner,
} = require('./arrays');

describe('multiply', () => {
  it('is a function', () => {
    expect(typeof multiply).to.equal('function');
  });

  it('returns a number', () => {
    const returnedValue = multiply([1, 2, 3]);
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns a number equal to all the numbers in the array multiplied together', () => {
    const returnedValue = multiply([1, 2, 3]);
    expect(returnedValue).to.equal(6);
  });

  it('*** BONUS -- returns a number equal to all the numbers in a multidimensional array multiplied together', () => {
    const returnedValue = multiply([1, 2, [4, 5, 6], 7, 8], 9);
    expect(returnedValue).to.equal(13440);
  });
});

describe('includesCopy', () => {
  it('is a function', () => {
    expect(typeof includesCopy).to.equal('function');
  });

  it('returns a boolean', () => {
    const returnedValue = includesCopy([4, 5, 6], 3);
    expect(typeof returnedValue).to.equal('boolean');
  });

  it('returns true if the searchValue is in the array', () => {
    const returnedValue = includesCopy(['haskell', 'rust', 'javascript'], 'rust');
    expect(returnedValue).to.equal(true);
  });

  it('returns false if the searchValue is not in the array', () => {
    const returnedValue = includesCopy(['dwight', 'angela', 'michael'], 'jim');
    expect(returnedValue).to.equal(false);
  });
});

describe('camelCase', () => {
  it('is a function', () => {
    expect(typeof camelCase).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = camelCase('how now brown cow');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns the camelCased version of input string', () => {
    const returnedValue = camelCase('how now brown cow');
    expect(returnedValue).to.equal('howNowBrownCow');
  });

  it('returns the camelCased version of input string if the first letter is capitalized', () => {
    const returnedValue = camelCase('Capped is harder');
    expect(returnedValue).to.equal('cappedIsHarder');
  });

  it('*** Bonus returns the camelCased version of input string without ending punctuation', () => {
    const returnedValue = camelCase('Oh no not punctuation!');
    expect(returnedValue).to.equal('ohNoNotPunctuation');
  });
});

describe('inventory', () => {
  it('is a function', () => {
    expect(typeof inventory).to.equal('function');
  });

  it('returns an array', () => {
    const returnedValue = inventory([['pen', ['sticky', 5]]]);
    expect(Array.isArray(returnedValue)).to.equal(true);
  });

  it('returns an array with the correct sentence, given one item', () => {
    const items = [['chair', ['comfortable', 100]]];

    const returnedValue = inventory(items);
    expect(returnedValue[0]).to.equal('The comfortable chair is 100 dollars.');
  });

  it('returns the correct array of sentences, given multiple items', () => {
    const items = [
      ['dresser', ['heavy', 200]],
      ['computer', ['small', 500]],
    ];

    const returnedValue = inventory(items);

    const expectedValue = [
      'The heavy dresser is 200 dollars.',
      'The small computer is 500 dollars.',
    ];

    expect(returnedValue).to.deep.equal(expectedValue);
  });
});

describe('joiner', () => {
  it('is a function', () => {
    expect(typeof joiner).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = joiner(['apples', 'bananas']);
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns a string with all of the array element joined together, separated by the separator', () => {
    const returnedValue = joiner(['Jerry', 'Elaine', 'George'], ' and ');
    expect(returnedValue).to.equal('Jerry and Elaine and George');
  });

  it('returns a string with all of the array elements joined together using a comma as the default separator', () => {
    const returnedValue = joiner(['Fluffy', 'Scout', 'Benji']);
    expect(returnedValue).to.equal('Fluffy,Scout,Benji');
  });
});
