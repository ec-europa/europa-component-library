/* eslint no-underscore-dangle: "off" */

const chai = require('chai');

function formatErrors(violations) {
  let message = '';
  violations.forEach((violation) => {
    message += `- [${violation.impact}] ${violation.description}: `;
    violation.nodes.forEach((node) => {
      message += `-- [${node.impact}] ${node.target}: `;
      node.any.forEach((err) => {
        message += `--- [${err.impact}] ${err.message}`;
      });
    });
  });

  return message;
}

module.exports = function isAccessible() {
  const { result, err } = this._obj;
  new chai.Assertion(err).to.be.null;

  this.assert(result.violations.length === 0,
    `expected a11y report to be empty but instead got: ${formatErrors(result.violations)}`,
    'expected a11y report to contain errors');
};
