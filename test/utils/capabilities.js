// Available screen resolutions:
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SpecifyingtheScreenResolution

// Utils
const isTravis = require('./travis').isTravis;
const isDrone = require('./drone').isDrone;

let build = 'local-build';

if (isTravis) {
  build = process.env.TRAVIS_BUILD_NUMBER;
} else if (isDrone) {
  build = process.env.DRONE_BUILD_NUMBER;
}

const browsers = {
  chrome: {
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '60.0',
    build,
    screenResolution: '1920x1080',
  },
  ie: {
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 7',
    build,
    screenResolution: '1920x1080',
  },
  safari: {
    browserName: 'safari',
    version: '10.0',
    platform: 'macOS 10.12',
    seleniumVersion: '3.5.1',
    build,
    screenResolution: '1920x1440',
  },
  firefox: {
    browserName: 'firefox',
    version: '54.0',
    platform: 'Windows 7',
    build,
    screenResolution: '1920x1080',
  },
};

module.exports.getCapabilities = () => {
  if (process.env.TEST_BROWSER) {
    return [browsers[process.env.TEST_BROWSER]];
  }

  return Object.values(browsers);
};
