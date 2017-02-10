require('dotenv').config();

const Gemini = require('gemini/api');
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const sauceConnectLauncher = require('sauce-connect-launcher');
const http = require('http');

sauceConnectLauncher({
  username: process.env.SAUCE_USERNAME,
  accessKey: process.env.SAUCE_ACCESS_KEY,
}, (err, sauceConnectProcess) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Sauce Connect ready');

  // Check if './dist' is present

  const gemini = new Gemini(path.resolve(__dirname, '../.gemini.conf.js'));

  // Start local server
  const app = express();
  app.use(serveStatic(path.resolve(__dirname, '../dist')));

  // Create server
  const server = http.createServer(app);

  function closeServer(code) {
    console.info('Closing server...');
    server.close(() => {
      console.info('Server closed.');
      sauceConnectProcess.close(() => {
        console.log('Closed Sauce Connect process');
        process.exit(code);
      });
    });
  }

  server.listen(3000, () => {
    if (process.env.GEMINI_TARGET === 'test') {
      // Run the tests
      gemini.test('./test/visual/tests', {
        reporters: ['flat', 'html'],
      }).then(({ errored, failed }) => {
        const exitCode = errored || failed ? 1 : 0;
        closeServer(exitCode);
      }).catch(() => {
        closeServer(1);
      });
    } else if (process.env.GEMINI_TARGET === 'update') {
      // Run the tests
      gemini.update('./test/visual/tests', {
        reporters: ['flat'],
      }).then(({ errored, failed }) => {
        const exitCode = errored || failed ? 1 : 0;
        closeServer(exitCode);
      }).catch(() => {
        closeServer(1);
      });
    }
  });

  // On Ctrl-C
  process.on('SIGINT', () => {
    closeServer(1);
  });
});
