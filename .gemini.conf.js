const config = process.env.TRAVIS ? {
  gridUrl: 'http://ondemand.saucelabs.com/wd/hub',
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER,
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
      },
    },
  },
} : {
  gridUrl: 'http://127.0.0.1:4444/wd/hub',
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};

module.exports = {
  rootUrl: 'http://localhost:3000/components/preview/',
  gridUrl: config.gridUrl,
  screenshotsDir: './test/visual/screens',
  calibrate: false,
  // retry: 3,
  // tolerance: 3.5,
  windowSize: '1024x768',
  sessionsPerBrowser: 3,
  browsers: config.browsers,
};
