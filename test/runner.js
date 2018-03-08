const path = require('path');
const { Launcher } = require('webdriverio');
const { getSpecs } = require('./utils/specs');

(async () => {
  // Load specs
  const specs = await getSpecs();

  // Configure launcher
  const wdio = new Launcher(path.resolve(__dirname, './wdio.conf.js'), {
    specs,
  });

  // Start tests
  wdio.run().then(
    // On success
    code => {
      console.log('Process exited with code', code);
      process.exit(code);
    },
    // On error
    error => {
      console.error('Launcher failed to start the test', error.stacktrace);
      process.exit(1);
    }
  );
})();
