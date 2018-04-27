/**
 * Run: "yarn updated"
 * Accepted parameters:
 * --ignoreCache    - Ignore cache, rebuilt the updated packages list (default: false)
 * --cacheResults   - If false, the cache file won't be updated (default: true)
 * --since [branch] - Force comparison with the branch
 */

const { getUpdatedPackages } = require('./utils/getUpdatedPackages');
const minimist = require('minimist');

const lernaUpdated = async ({
  ignoreCache = false,
  cacheResults = true,
  since = '',
} = {}) => {
  try {
    const updatedPackages = await getUpdatedPackages({
      ignoreCache,
      cacheResults,
      since,
    });

    if (!updatedPackages || updatedPackages.length === 0) {
      console.error('No updates found');
      process.exit(1);
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }

  process.exit(0);
};

const argv = minimist(process.argv.slice(2));
lernaUpdated(argv);
