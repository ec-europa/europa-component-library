const config = process.env.TRAVIS_JOB_NUMBER ? {
  gridUrl: `http://${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:80/wd/hub`,
  capabilities: {
    browserName: 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER,
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
  }
} : {
  gridUrl: 'http://127.0.0.1:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
  }
};

module.exports = {
  rootUrl: 'http://localhost:3000/components/preview/',
  gridUrl: config.gridUrl,
  screenshotsDir: './test/visual/screens',
  calibrate: false,
  tolerance: 3.5,
  windowSize: '1600x1080',
  browsers: {
    chrome: {
      desiredCapabilities: config.capabilities,
    }
  }
};
