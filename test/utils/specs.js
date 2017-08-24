const path = require('path');

// Lerna related imports
const logger = require('lerna/lib/logger');
const UpdatedPackagesCollector = require('lerna/lib/UpdatedPackagesCollector');
const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');

// Utils
const isTravis = require('./travis').isTravis;

module.exports.getSpecs = () => {
  // By default, test all the specs
  let specs = [path.resolve(__dirname, '../../framework/**/test/spec/**/*.js')];

  // When a PR, only test the updated components
  if (isTravis && process.env.TRAVIS_PULL_REQUEST !== 'false') {
    logger.setLogLevel('silent');
    const cwd = process.cwd();

    const repo = new Repository(cwd);
    const packages = repo.packages;
    const filteredPackages = PackageUtilities.filterPackages(packages, {
      scope: undefined,
    });

    // Get updated packages
    const collector = new UpdatedPackagesCollector({
      execOpts: {
        cwd: repo.rootPath,
      },
      logger,
      repository: repo,
      filteredPackages,
      options: {
        since: 'master',
      },
    });

    const updatedPackages = collector.getUpdates();

    // Only on parent process (not spawned)
    if (!process.connected) {
      console.log(
        'Visual regression tests will be run on:',
        updatedPackages.map(update => update.package.name)
      );
    }

    specs = updatedPackages.map(update =>
      path.resolve(update.package.location, 'test/spec/**/*.js')
    );
  } else if (!process.connected) {
    console.log('Visual regression tests will be run on all packages');
  }

  return specs;
};
