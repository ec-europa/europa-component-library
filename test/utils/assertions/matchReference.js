/* eslint no-underscore-dangle: "off" */

const chai = require('chai');

module.exports = function matchReference() {
  new chai.Assertion(this._obj).to.be.instanceof(Array);

  const passedMessage = 'expected screenshots to match reference';
  const failedMessage = 'expected screenshots to not match reference';
  this.assert(this._obj.every(scr => scr.isExactSameImage), passedMessage, failedMessage);
};
