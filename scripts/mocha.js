const Mocha = require('mocha');
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const fs = require('fs');
const chai = require('chai');
const glob = require('glob');

// Custom assertions
const isAccessible = require('../test/functional/utils/assertions/isAccessible');
const isWellFormatted = require('../test/functional/utils/assertions/isWellFormatted');

if (!fs.existsSync(path.resolve(__dirname, '../dist'))) {
  console.error('You must run `yarn dist` before running the tests!');
  // Do something
  process.exit(1);
}

// Instantiate a Mocha instance.
const mocha = new Mocha({
  timeout: 15000, // Set timeout to 15 seconds, instead of the original 2 seconds
});

const expect = chai.expect;
chai.Assertion.addProperty('accessible', isAccessible);
chai.Assertion.addProperty('wellFormatted', isWellFormatted);
global.expect = expect;

// Add test files
const testFiles = glob.sync(path.resolve(__dirname, '../test/functional/**/*.spec.js'));
testFiles.forEach(f => mocha.addFile(f));

// Start the server
const app = express();
app.use(serveStatic(path.resolve(__dirname, '../dist')));
const server = app.listen(3000);

// Run the tests.
const runner = mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});

runner.on('end', () => {
  server.close();
});
