const Gemini = require('gemini/api');
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

// Check if './dist' is present

const gemini = new Gemini(path.resolve(__dirname, '../.gemini.conf.js'));

// Start local server
const app = express();
app.use(serveStatic(path.resolve(__dirname, '../dist')));

const server = require('http').createServer(app);

function closeServer(code) {
  console.info('Closing server...');
  server.close(() => {
    console.info('Server closed.');
    process.exit(code);
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

// ctrl-c to trigger
process.on('SIGINT', () => {
  closeServer(1);
});
