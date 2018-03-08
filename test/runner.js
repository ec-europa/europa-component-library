const path = require('path');
const { Launcher } = require('webdriverio');
const { getSpecs } = require('./utils/specs');

(async () => {
  // Load specs
  const specs = await getSpecs();

  if (specs.length === 0) {
    console.log('No test will be run');
    return process.exit(0);
  }

  console.log('The following tests will be run', specs);

  // Configure launcher
  const wdio = new Launcher(path.resolve(__dirname, './wdio.conf.js'), {
    specs,
  });

  // Start tests
  return wdio.run().then(
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
