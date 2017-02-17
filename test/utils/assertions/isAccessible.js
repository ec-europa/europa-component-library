/* eslint no-underscore-dangle: "off" */

const chai = require('chai');

module.exports = function isAccessible() {
  const { result, err } = this._obj;
  new chai.Assertion(err).to.be.null;
  new chai.Assertion(result.violations).to.be.empty;
};
