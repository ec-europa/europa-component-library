/* eslint no-underscore-dangle: "off" */

const chai = require('chai');

module.exports = function matchReference() {
  new chai.Assertion(this._obj).to.be.instanceof(Array);

  this.assert(this._obj.every(scr => scr.isExactSameImage),
    'expected screenshots to match reference',
    'expected screenshots to not match reference');
};
