const path = require('path');

// Lerna related imports
const log = require('npmlog');
const UpdatedPackagesCollector = require('lerna/lib/UpdatedPackagesCollector');
const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');

// Utils
const isTravis = require('./travis').isTravis;
const isDrone = require('./drone').isDrone;

// handle log.success() used by lerna
log.addLevel('success', 3001, { fg: 'green', bold: true });

const isCI = isTravis || isDrone;
const ci = isTravis ? 'TRAVIS' : 'DRONE';

module.exports.getSpecs = () => {
  // By default, test all the specs
  let specs = [path.resolve(__dirname, '../../framework/**/test/spec/**/*.js')];

  // Only test the updated components when the branch is not the master
  if (isCI && process.env[`${ci}_BRANCH`] !== 'master') {
    log.level = 'silent';
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
      logger: log.newGroup('lerna'),
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
