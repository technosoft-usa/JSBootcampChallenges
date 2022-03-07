/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
const { expect } = require('chai');

const {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
} = require('./objects');

describe('deleteProp', () => {
  it('is a function', () => {
    expect(typeof deleteProp).to.equal('function');
  });

  it('returns an object', () => {
    const returnedValue = deleteProp({ firstName: 'joe', lastName: 'Johnson' }, 'lastName');
    expect(typeof returnedValue).to.equal('object');
    expect(Array.isArray(returnedValue)).to.equal(false);
  });

  it('returns an object with the listed property deleted', () => {
    const objectItems = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      occupation: 'developer',
    };

    const returnedValue = deleteProp(objectItems, 'age');
    expect(returnedValue).to.deep.equal({
      firstName: 'Tom',
      lastName: 'Smith',
      occupation: 'developer',
    });
    expect(deleteProp({
      firstName: 'Tom',
      lastName: 'Smith',
    }, 'lastName')).to.deep.equal({ firstName: 'Tom' });
  });
});

describe('numObjectProps', () => {
  it('is a function', () => {
    expect(typeof numObjectProps).to.equal('function');
  });

  it('returns a number', () => {
    const returnedValue = numObjectProps({ firstName: 'tom' });
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns the number of items in an object', () => {
    const objectItems = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      occupation: 'developer',
    };

    const returnedValue = numObjectProps(objectItems);
    expect(returnedValue).to.equal(4);
    expect(numObjectProps({
      firstName: 'Tom',
      lastName: 'Smith',
    })).to.equal(2);
  });
});

describe('shoppingCart', () => {
  it('is a function', () => {
    expect(typeof shoppingCart).to.equal('function');
  });

  it('returns a number', () => {
    const returnedValue = shoppingCart([{ name: 'water', amount: 2 }]);
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns the sum of items in the shopping cart', () => {
    const cartItems = [
      {
        name: 'mice',
        amount: 2,
      }, {
        name: 'computers',
        amount: 5,
      }, {
        name: 'keyboards',
        amount: 12,
      },

    ];

    const returnedValue = shoppingCart(cartItems);
    expect(returnedValue).to.equal(19);
  });
});

describe('compareObjects', () => {
  it('is a function', () => {
    expect(typeof compareObjects).to.equal('function');
  });

  it('returns a boolean', () => {
    const returnedValue = compareObjects({ firstName: 'joe', lastName: 'Johnson' },
      { firstName: 'joe', lastName: 'Johnson' });
    expect(typeof returnedValue).to.equal('boolean');
  });

  it('returns false if objects do not have the same number of properties', () => {
    const obj1 = {
      firstName: 'Tom',
      lastName: 'Smith',
    };

    const obj2 = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      occupation: 'teacher',
    };

    const returnedValue = compareObjects(obj1, obj2);
    expect(returnedValue).to.equal(false);
  });

  it('returns true if objects have the same properties ', () => {
    const obj1 = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      occupation: 'developer',
    };

    const obj2 = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      occupation: 'developer',
    };

    const returnedValue = compareObjects(obj1, obj2);
    expect(returnedValue).to.equal(true);
  });

  it('returns false if objects do not have the same keys ', () => {
    const obj1 = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      job: 'developer',
    };

    const obj2 = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      occupation: 'developer',
    };

    const returnedValue = compareObjects(obj1, obj2);
    expect(returnedValue).to.equal(false);
  });

  it('returns false if objects do not have the same values ', () => {
    const obj1 = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      occupation: 'developer',
    };

    const obj2 = {
      firstName: 'Tom',
      lastName: 'Smith',
      age: 25,
      occupation: 'teacher',
    };

    const returnedValue = compareObjects(obj1, obj2);
    expect(returnedValue).to.equal(false);
  });
});
