require('dotenv').config();

const config = process.env.TRAVIS ? {
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        windowSize: '1024x768',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER,
      },
    },
  },
} : {
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        windowSize: '1024x768',
      },
    },
  },
};

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
  // screenshotMode: 'fullpage',
  browsers: config.browsers,
  // compositeImage: true,
  desiredCapabilities: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
  },
};
