const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const mkdirp = require('mkdirp');
const octokit = require('@octokit/rest')();
const simpleGit = require('simple-git/promise');

// Utils
const isDrone = 'DRONE' in process.env && 'CI' in process.env;

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

    if (!matchingPullRequests.data || matchingPullRequests.data.length === 0) {
      throw new Error('No matching PR found');
    }

    const data = matchingPullRequests.data[0];

    const { ref } = data.base;

    return ref;
  }

  return 'master';
};

const getUpdatedPackages = async ({
  ignoreCache = false,
  cacheResults = true,
  since = '',
} = {}) => {
  // If "since" parameter is not provided, try to guess it
  let ref = since;
  if (!ref) ref = await getRef();

  console.log('Packages compared with:', ref);

  const cwd = process.cwd();
  const git = simpleGit(cwd);
  const status = await git.status();

  const cacheFile = path.resolve(
    cwd,
    `.tmp/${status.current}/lerna-updated-${ref}.json`
  );

  // Load from cache
  if (!ignoreCache) {
    try {
      const data = fs.readFileSync(cacheFile, { encoding: 'utf8' });
      const updatedPackages = JSON.parse(data);
      console.log('The list of updated packages has been loaded from cache.');
      console.log(`(${updatedPackages.length} packages updated)`);
      return updatedPackages;
    } catch (e) {
      console.log("Can't load packages from cache:", e.message);
    }
  }

  // Fetch reference branch for comparison if not already there
  try {
    const branches = await git.branch();

    if (!branches || !branches.branches || !branches.branches[ref]) {
      await git.silent(true).fetch('origin', `${ref}:${ref}`);
    }
  } catch (e) {
    console.error('Error while fetching branch', e.message);
    return [];
  }

  // Get updated packages
  let result = '';
  try {
    const command = `node ./node_modules/.bin/lerna ls --since ${ref} --all --json`;
    console.log(`Running command: ${command}`);
    result = execSync(command, {
      cwd,
      encoding: 'utf-8',
    });
  } catch (e) {
    console.log('Error while getting updated packages:', e.message);
    return [];
  }

  if (result) {
    result = JSON.parse(result);

    // Save to cache
    if (cacheResults) {
      try {
        // Make sure the .tmp directoy exists
        mkdirp.sync(path.dirname(cacheFile));
        fs.writeFileSync(cacheFile, JSON.stringify(result), {
          encoding: 'utf8',
        });
        console.log('Cache updated');
      } catch (e) {
        console.log('Error while updating cache:', e.message);
      }
    }

    return result;
  }

  return [];
};

module.exports.getUpdatedPackages = getUpdatedPackages;

getUpdatedPackages();
