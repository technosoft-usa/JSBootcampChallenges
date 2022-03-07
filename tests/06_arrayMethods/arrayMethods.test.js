/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');

const {
  doubler, mapCap, canRideTheRide, indAndVal, filterEvens, gmailSearch, getCart, findGreater,
} = require('./arrayMethods');

describe('map', () => {
  let spy;

  describe('doubler', () => {
    after(() => {
      spy.restore('map');
    });
    it('doubler is a function', () => {
      expect(typeof doubler).to.equal('function');
    });

    it('doubles each item in an array', () => {
      const doubledArr = doubler([2, 4, 6, 8]);
      expect(doubledArr).to.deep.equal([4, 8, 12, 16]);
    });

    it('doubler calls Array.prototype.map', () => {
      spy = sinon.spy(Array.prototype, 'map');

      expect(doubler([3, 6, 9])).to.deep.equal([6, 12, 18]);

      sinon.assert.calledOnce(spy);
    });
  });

  describe('mapCap', () => {
    after(() => {
      spy.restore('map');
    });
    it('mapCap is a function', () => {
      expect(typeof mapCap).to.equal('function');
    });

    it('capitalizes each item in an array', () => {
      const capped = mapCap(['make', 'it', 'cap']);
      expect(capped).to.deep.equal(['MAKE', 'IT', 'CAP']);
    });

    it('mapCap calls Array.prototype.map', () => {
      spy = sinon.spy(Array.prototype, 'map');
      expect(mapCap(['should', 'be', 'capped'])).to.deep.equal(['SHOULD', 'BE', 'CAPPED']);
      sinon.assert.calledOnce(spy);
      spy.restore('map');
    });
  });

  describe('canRideTheRide', () => {
    after(() => {
      spy.restore('map');
    });
    it('canRideTheRide is a function', () => {
      expect(typeof canRideTheRide).to.equal('function');
    });

    it('takes an array of objects and returns an aray of strings. If 17 or over can ride the ride.', () => {
      const canRide = canRideTheRide([
        {
          name: 'Michael Scott',
          age: 100,
        },
        {
          name: 'Jim Halpert',
          age: 16,
        },
        {
          name: 'Dwight Schrute',
          age: 8,
        },
        {
          name: 'Pam Beasley',
          age: 17,
        }]);
      expect(canRide).to.deep.equal(['Michael Scott can ride the ride',
        'Sorry, Jim Halpert cannot ride the ride',
        'Sorry, Dwight Schrute cannot ride the ride',
        'Pam Beasley can ride the ride']);
    });

    it('canRideTheRide calls Array.prototype.map', () => {
      spy = sinon.spy(Array.prototype, 'map');
      expect(canRideTheRide([
        {
          name: 'Jerry',
          age: 75,
        },
        {
          name: 'Elaine',
          age: 10,
        },
        {
          name: 'George',
          age: 7,
        },
        {
          name: 'Kramer',
          age: 22,
        }])).to.deep.equal(['Jerry can ride the ride',
        'Sorry, Elaine cannot ride the ride',
        'Sorry, George cannot ride the ride',
        'Kramer can ride the ride']);
      sinon.assert.calledOnce(spy);
    });
  });

  describe('indAndVal', () => {
    after(() => {
      spy.restore('map');
    });
    it('create the function indAndVal that returns an array', () => {
      expect(Array.isArray(indAndVal([1, 2, 3, 4]))).to.equal(true);
    });

    it('the array returned contains objects ', () => {
      const arrayOfObjects = indAndVal([1, 2, 3, 4]);
      arrayOfObjects.forEach((obj) => {
        expect(typeof obj).to.equal('object');
      });
    });

    it('adds `value` and `index` properties to the object created for each index value in the array', () => {
      const arrayReturned = indAndVal(['pop']);

      expect(arrayReturned.length).to.equal(1);
      expect(arrayReturned[0]).to.deep.equal({ index: 0, value: 'pop' });
      expect(arrayReturned).to.deep.equal([{ index: 0, value: 'pop' }]);
    });

    it('creates an object with value and index properties for multiple values in the array', () => {
      expect(indAndVal([22, 33, 44, 55])).to.deep.equal([
        { index: 0, value: 22 },
        { index: 1, value: 33 },
        { index: 2, value: 44 },
        { index: 3, value: 55 },
      ]);
    });

    it('indexAndValue calls Array.prototype.map', () => {
      spy = sinon.spy(Array.prototype, 'map');
      expect(indAndVal(['turtle', 'rabbit', 'dog'])).to.deep.equal([
        { index: 0, value: 'turtle' },
        { index: 1, value: 'rabbit' },
        { index: 2, value: 'dog' },
      ]);

      sinon.assert.calledOnce(spy);
    });
  });
});

describe('filter', () => {
  describe('filterEvens', () => {
    after(() => {
      spy.restore('filter');
    });
    it('returns an array', () => {
      expect(
        Array.isArray(
          filterEvens([
            1, 2, 3, 4, 5, 6, 7, 8,
          ]),
        ),
      ).to.equal(true);
    });

    it('returns every number that is even', () => {
      expect(
        filterEvens([
          1, 2, 3, 4,
        ]),
      ).to.deep.equal([2, 4]);
    });

    it('calls Array.prototype.filter', () => {
      spy = sinon.spy(Array.prototype, 'filter');

      expect(
        filterEvens([3, 6, 9, 12, 15, 18, 21, 24,
        ]),
      ).to.deep.equal([6, 12, 18, 24]);

      sinon.assert.calledOnce(spy);
    });
  });

  describe('gmailSearch', () => {
    after(() => {
      spy.restore('filter');
    });
    it('returns an array', () => {
      expect(
        Array.isArray(
          gmailSearch([
            'bob@gmail.com',
            'tom@yahoo.com',
            'larry@microsoft.net',
            'ron123@gmail.com',
            'lou@unf.edu',
          ]),
        ),
      ).to.equal(true);
    });

    it('returns every email that matches with "@gmail.com"', () => {
      expect(
        gmailSearch([
          'bob@gmail.com',
          'tom@yahoo.com',
          'larry@microsoft.net',
          'ron123@gmail.com',
          'lou@unf.edu',
        ]),
      ).to.deep.equal(['bob@gmail.com', 'ron123@gmail.com']);
    });

    it('calls Array.prototype.filter', () => {
      spy = sinon.spy(Array.prototype, 'filter');

      expect(
        gmailSearch([
          'RafaelBeahan.Howe@yahoo.com',
          'BrendaAnderson_Gulgowski28@gmail.com',
          'RamonaAufderhar.Friesen@gmail.com',
          'AurelieBarrows74@hotmail.com',
          'picture01.png',
        ]),
      ).to.deep.equal(['BrendaAnderson_Gulgowski28@gmail.com',
        'RamonaAufderhar.Friesen@gmail.com']);

      sinon.assert.calledOnce(spy);
    });
  });
});

describe('using reduce', () => {
  describe('getCart', () => {
    const cart = [
      { item: 'Tesla', price: 90000 },
      { item: 'basketball', price: 99 },
      { item: 'Rubber Duck', price: 5 },
      { item: 'ice cream', price: 4 },
      { item: 'Toyota camry', price: 20000 },
    ];
    after(() => {
      spy.restore('filter');
    });
    it('returns a number', () => {
      const cost = getCart(cart);
      expect(typeof cost).to.equal('number');
    });

    it('adds all the items in your cart that are less than 100 dollars', () => {
      expect(getCart(cart)).to.equal(108);
    });

    it('calls Array.prototype.reduce', () => {
      spy = sinon.spy(Array.prototype, 'reduce');
      expect(getCart(cart)).to.equal(108);
      sinon.assert.calledOnce(spy);
    });
  });
});

describe('find', () => {
  describe('calls the function findGreater that returns an object with price greater then 100', () => {
    const cart = [
      { item: 'robot', price: 50 },
      { item: 'basketball', price: 25 },
      { item: 'monitor', price: 299 },
      { item: 'mouse', price: 100 },
      { item: 'Toyota camry', price: 20000 },
    ];
    it('findGreater returns an object', () => {
      const foundGreater = findGreater(cart);
      expect(typeof foundGreater).to.equal('object');
    });

    it('returns the first object with a price greater than 100', () => {
      expect(findGreater(cart)).to.deep.equal({ item: 'monitor', price: 299 });
    });

    it('calls Array.prototype.find', () => {
      spy = sinon.spy(Array.prototype, 'find');
      expect(findGreater(cart)).to.deep.equal({ item: 'monitor', price: 299 });
      sinon.assert.calledOnce(spy);
      spy.restore('find');
    });
  });
});
