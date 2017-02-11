require('dotenv').config();

const Gemini = require('gemini/api');
const fs = require('fs');
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const sauceConnectLauncher = require('sauce-connect-launcher');
const http = require('http');

function test(cb) {
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
      return cb(code);
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
}

if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
  if (!process.env.TRAVIS) {
    sauceConnectLauncher({
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
    }, (err, sauceConnectProcess) => {
      if (err) {
        console.error(err.message);
        process.exit(1);
        return;
      }

      console.log('Sauce Connect ready');
      test((code) => {
        sauceConnectProcess.close(() => {
          console.log('Closed Sauce Connect process');
          process.exit(code);
        });
      });
    });
  } else {
    test((code) => {
      process.exit(code);
    });
  }
} else {
  console.error('Please generate the dist folder before running the tests');
  process.exit(1);
}
