const path = require('path');
const glob = require('glob');

// Lerna related imports
const log = require('npmlog');
const UpdatedPackagesCollector = require('lerna/lib/UpdatedPackagesCollector');
const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');

// Utils
const { isTravis } = require('./travis');
const { isDrone } = require('./drone');

// handle log.success() used by lerna
log.addLevel('success', 3001, { fg: 'green', bold: true });

const isCI = isTravis || isDrone;
const ci = isTravis ? 'TRAVIS' : 'DRONE';

module.exports.getSpecs = () => {
  // By default, test all the specs
  const pattern = path.resolve(
    __dirname,
    '../../framework/**/test/spec/**/*.js'
  );
  let specs = glob.sync(pattern, { ignore: ['**/node_modules/**'] });

  // Only test the updated components when the branch is not the master
  if (isCI && process.env[`${ci}_BRANCH`] !== 'master') {
    log.level = 'silent';
    const cwd = process.cwd();

    const repo = new Repository(cwd);
    const packages = PackageUtilities.getPackages(repo);
    const packageGraph = PackageUtilities.getPackageGraph(packages);

    // Get updated packages
    const collector = new UpdatedPackagesCollector({
      logger: log.newGroup('lerna'),
      repository: repo,
      filteredPackages: packages,
      packageGraph,
      options: {
        since: 'master',
      },
      execOpts: {
        cwd,
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

    specs = [].concat(
      ...updatedPackages.map(update =>
        glob.sync(path.resolve(update.package.location, 'test/spec/**/*.js'), {
          ignore: ['**/node_modules/**'],
        })
      )
    );
  } else if (!process.connected) {
    console.log('Visual regression tests will be run on all packages');
  }

  return specs;
};
