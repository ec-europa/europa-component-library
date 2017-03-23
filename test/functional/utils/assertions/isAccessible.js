/* eslint no-underscore-dangle: "off" */

const chai = require('chai');

module.exports = function isAccessible() {
  const { violations } = this._obj;
  new chai.Assertion(violations).to.be.instanceof(Array);
  chai.assert(violations.length === 0, `expected a11y report to be empty but instead got: ${JSON.stringify(violations, null, '  ')}`);
};
