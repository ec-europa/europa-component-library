// Available screen resolutions:
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SpecifyingtheScreenResolution

// Utils
const { isTravis } = require('./travis');
const { isDrone } = require('./drone');

let build = 'local-build';

if (isTravis) {
  build = process.env.TRAVIS_BUILD_NUMBER;
} else if (isDrone) {
  build = process.env.DRONE_BUILD_NUMBER;
}

const browsers = {
  ie: {
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 7',
    build,
    screenResolution: '1920x1080',
    seleniumVersion: '3.8.0',
    iedriverVersion: '3.8.0',
  },
};

module.exports.getCapabilities = () => {
  if (process.env.TEST_BROWSER) {
    return [browsers[process.env.TEST_BROWSER]];
  }

  return Object.values(browsers);
};
