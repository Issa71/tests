const { describe, it } = require('mocha');
const { expect } = require('chai');

const { doggoComp} = require('./doggo');

describe('Doggo Tests', () => {
    it('it should be 100 if pos > 100', () => {
        expect(doggoCompetition(105).length).to.equal(100);
      });

      it('it should be 11th', () => {
        expect(doggoCompetition(1)).to.contain('11th');
      });
    });