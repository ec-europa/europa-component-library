/* eslint no-underscore-dangle: "off" */

// Expect to receive a report from HTML Inspector
// See: https://github.com/philipwalton/html-inspector

const chai = require('chai');

function formatErrors(errors) {
  let message = '';
  errors.forEach((err) => {
    message += `- ${err.message} `;
  });

  return message;
}

module.exports = function isWellFormatted() {
  const report = this._obj;

  new chai.Assertion(report.value).to.be.instanceof(Array);

  this.assert(report.value.length === 0,
    `expected markup report to be empty but instead got: ${formatErrors(report.value)}`,
    'expected markup report to contain errors');
};
