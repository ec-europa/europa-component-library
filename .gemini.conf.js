require('dotenv').config();

module.exports = {
  rootUrl: 'http://localhost:3000/components/preview/',
  gridUrl: 'http://ondemand.saucelabs.com/wd/hub',
  screenshotsDir: './test/visual/screens',
  retry: 2,
  calibrate: false,
  tolerance: 3.5,
  sessionsPerBrowser: 1,
  suitesPerSession: 20,
  httpTimeout: 30000,
  compositeImage: true,
  browsers: {
    windows7_chrome55: {
      desiredCapabilities: {
        browserName: 'chrome',
        version: '55.0',
        platform: 'Windows 7',
        windowSize: '1280x768',
      },
    },
    windows7_ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        version: '11.0',
        platform: 'Windows 7',
        windowSize: '1280x768',
      },
    },
  },
  desiredCapabilities: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    build: process.env.TRAVIS ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': process.env.TRAVIS ? process.env.TRAVIS_JOB_NUMBER : '',
  },
};
