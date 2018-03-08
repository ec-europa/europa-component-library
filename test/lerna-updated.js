const octokit = require('@octokit/rest')();
const git = require('simple-git/promise');

// Lerna related imports
const log = require('npmlog');
const UpdatedPackagesCollector = require('lerna/lib/UpdatedPackagesCollector');
const Repository = require('lerna/lib/Repository');
const PackageUtilities = require('lerna/lib/PackageUtilities');

// Utils
const { isDrone } = require('./utils/drone');

// handle log.success() used by lerna
log.addLevel('success', 3001, { fg: 'green', bold: true });

const getRef = async () => {
  if (isDrone && process.env.DRONE_BRANCH !== 'master') {
    const matchingPullRequests = await octokit.pullRequests.getAll({
      owner: process.env.DRONE_REPO_OWNER,
      repo: process.env.DRONE_REPO_NAME,
      head: `${process.env.DRONE_REPO_OWNER}:${process.env.DRONE_BRANCH}`,
    });

    if (!matchingPullRequests || !matchingPullRequests.data) {
      return null;
    }

    const data = matchingPullRequests.data[0];

    const { ref } = data.base;

    return ref;
  }

  return 'master';
};

const getUpdated = async () => {
  // Only test the updated components when the branch is not the master
  // if (process.env.DRONE_BRANCH !== 'master') {
  log.level = 'silent';
  const cwd = process.cwd();

  const ref = await getRef();

  console.log('ref', ref);

  // Fetch reference branch for comparison
  await git(cwd).fetch('origin', `${ref}:${ref}`);

  const repo = new Repository(cwd);
  const packages = PackageUtilities.getPackages(repo);
  const packageGraph = PackageUtilities.getPackageGraph(packages);

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

  console.log(updatedPackages);
  return updatedPackages;
};

module.exports.getUpdated = getUpdated;
// getUpdated();
