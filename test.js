const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');

const { reverseFactorial } = require('./reverseFactorial');

describe('Factorial Tests', () => {
    it('should equal 5', () => {
      expect(reverseFactorialOf(120)).to.equal(5);
    });

    it('should equal 1', () => {
      expect(reverseFactorialOf(1)).to.equal(1);
    });

    it('should equal 4 ', () => {
      expect(reverseFactorialOf(24)).to.equal(4);
    });
    
  });
