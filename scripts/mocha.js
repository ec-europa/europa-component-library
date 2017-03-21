const Mocha = require('mocha');
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const fs = require('fs');

if (!fs.existsSync(path.resolve(__dirname, '../dist'))) {
  // Do something
  process.exit(1);
}

// Instantiate a Mocha instance.
const mocha = new Mocha();
mocha.addFile(path.resolve(__dirname, '../test/functional/nightmare.js'));

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
  // server.close();
});
