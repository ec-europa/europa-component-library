// Utils
const isTravis = require('./travis').isTravis;

const browsers = {
  chrome: {
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '56.0',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  },
  ie: {
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 7',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  },
  safari: {
    browserName: 'safari',
    // Version 10.0 has issues with executeAsync
    // See: https://github.com/webdriverio/webdriverio/issues/1708
    version: '9.0',
    platform: 'OS X 10.11',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1440',
  },
  firefox: {
    browserName: 'firefox',
    // Firefox 47 and above have issues with Action API
    // See: https://github.com/SeleniumHQ/selenium/issues/2285
    version: '46.0',
    platform: 'Windows 7',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  },
};

module.exports.getCapabilities = () => {
  if (process.env.TEST_BROWSER) {
    return [browsers[process.env.TEST_BROWSER]];
  }

  return Object.values(browsers);
};
