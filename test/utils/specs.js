const path = require('path');
const glob = require('glob');

// Utils
const { isDrone } = require('./drone');
const { getUpdated } = require('../lerna-updated');

module.exports.getSpecs = async () => {
  // By default, test all the specs
  const pattern = path.resolve(
    __dirname,
    '../../src/flavors/**/test/spec/**/*.js'
  );

  let specs = glob.sync(pattern, { ignore: ['**/node_modules/**'] });

  // Only test the updated components when the branch is not the master
  if (isDrone && process.env.DRONE_BRANCH !== 'master') {
    const updatedPackages = await getUpdated();

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
