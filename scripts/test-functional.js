/**
 * Run: "yarn test:functional"
 * Accepted parameters:
 * --ignoreCache              - Ignore cache, rebuilt the updated packages list (default: false)
 * --cacheResults             - If false, the cache file won't be updated (default: true)
 * --since [branch]           - Force comparison with the branch
 * --spec [path to spec file] - Run a specific test file
 */

const path = require('path');
const { Launcher } = require('webdriverio');
const { getTestSpecs } = require('./utils/getTestSpecs');
const minimist = require('minimist');

const testFunctional = async ({
  ignoreCache = false,
  cacheResults = true,
  since = '',
  spec = '',
} = {}) => {
  let specs = [];

  if (!spec) {
    // Load specs
    specs = await getTestSpecs({
      ignoreCache,
      cacheResults,
      since,
    });

    if (specs.length === 0) {
      console.log('No test will be run');
      return process.exit(0);
    }

    console.log('The following tests will be run', specs);
  } else {
    console.log('The following test will be run', spec);
  }

  // Configure launcher
  const wdio = new Launcher(
    path.resolve(__dirname, '../test/functional/wdio.conf.js'),
    {
      ...(spec ? { spec } : { specs }),
    }
  );

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
};

const argv = minimist(process.argv.slice(2));
testFunctional(argv);
