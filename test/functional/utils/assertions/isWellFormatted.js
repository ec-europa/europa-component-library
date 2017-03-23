/* eslint no-underscore-dangle: "off" */

// Expect to receive a report from HTML Inspector
// See: https://github.com/philipwalton/html-inspector

const chai = require('chai');

module.exports = function isWellFormatted() {
  const report = this._obj;
  new chai.Assertion(report).to.be.instanceof(Array);
  chai.assert(report.length === 0, `expected HTML Inspector's report to be empty but instead got: ${JSON.stringify(report, null, '  ')}`);
};
