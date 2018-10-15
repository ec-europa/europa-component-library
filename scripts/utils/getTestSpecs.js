const path = require('path');
const glob = require('glob');
const { getUpdatedPackages } = require('./getUpdatedPackages');

const isDrone = 'DRONE' in process.env && 'CI' in process.env;

module.exports.getTestSpecs = async options => {
  // By default, test all the specs
  const pattern = path.resolve(
    __dirname,
    '../../src/systems/**/test/spec/**/*.js'
  );

  let specs = glob.sync(pattern, { ignore: ['**/node_modules/**'] });

  // Only test the updated components when the branch is not the v1
  if (
    (options && options.since) ||
    (isDrone && process.env.DRONE_BRANCH !== 'v1')
  ) {
    const updatedPackages = await getUpdatedPackages(options);

    specs = [].concat(
      ...updatedPackages.map(update =>
        glob.sync(path.resolve(update.location, 'test/spec/**/*.js'), {
          ignore: ['**/node_modules/**', '**/packages/**', 'demo/**'],
        })
      )
      // filter if is in specs
    );
  }

  return specs;
};
