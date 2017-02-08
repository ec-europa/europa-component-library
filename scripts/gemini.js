const Gemini = require('gemini/api');
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const gemini = new Gemini(path.resolve(__dirname, '../.gemini.conf.yml'));

// Start local server
const app = express();

app.use(serveStatic(path.resolve(__dirname, '../dist')));
const server = app.listen(3000, () => {
  if (process.env.GEMINI_TARGET === 'test') {
    // Run the tests
    gemini.test('./test/visual/tests', {
      reporters: ['flat'],
    });
  } else if (process.env.GEMINI_TARGET === 'update') {
    // Run the tests
    gemini.update('./test/visual/tests', {
      reporters: ['flat'],
    });
  }
});

gemini.on(gemini.events.END_RUNNER, () => {
  console.info('Closing server...');
  server.close(() => {
    console.info('Server closed.');
  });
});
