const path = require('path');
const glob = require('glob');
const octokit = require('@octokit/rest')();

// Lerna related imports
const log = require('npmlog');
const UpdatedPackagesCollector = require('lerna/lib/UpdatedPackagesCollector');
const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');

// Utils
const { isDrone } = require('./drone');

// handle log.success() used by lerna
log.addLevel('success', 3001, { fg: 'green', bold: true });

module.exports.getSpecs = async () => {
  // By default, test all the specs
  const pattern = path.resolve(
    __dirname,
    '../../src/flavors/**/test/spec/**/*.js'
  );

  let specs = glob.sync(pattern, { ignore: ['**/node_modules/**'] });

  // Only test the updated components when the branch is not the master
  if (isDrone && process.env.DRONE_BRANCH !== 'master') {
    log.level = 'silent';
    const cwd = process.cwd();

    const repo = new Repository(cwd);
    const packages = PackageUtilities.getPackages(repo);
    const packageGraph = PackageUtilities.getPackageGraph(packages);

    const matchingPullRequests = await octokit.pullRequests.getAll({
      owner: process.env.DRONE_REPO_OWNER,
      repo: process.env.DRONE_REPO_NAME,
      head: process.env.DRONE_BRANCH,
    });

    console.log('matchingPullRequests', matchingPullRequests);

    if (!matchingPullRequests) {
      return specs;
    }

    const data = matchingPullRequests[0];

    console.log('data', data);

    const { ref } = data.base;

    // Get updated packages
    const collector = new UpdatedPackagesCollector({
      logger: log.newGroup('lerna'),
      repository: repo,
      filteredPackages: packages,
      packageGraph,
      options: { since: ref },
      execOpts: { cwd },
    });

    const updatedPackages = collector.getUpdates();

    specs = [].concat(
      ...updatedPackages.map(update =>
        glob.sync(path.resolve(update.package.location, 'test/spec/**/*.js'), {
          ignore: ['**/node_modules/**', '**/packages/**', 'demo/**'],
        })
      )
    );
  }

  return specs;
};
