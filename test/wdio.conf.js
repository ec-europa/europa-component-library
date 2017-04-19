/* global browser */
const path = require('path');
const chai = require('chai');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare'); // eslint-disable-line import/no-extraneous-dependencies
const { injectAxeCore, runAxeCore } = require('@ec-europa/ecl-qa/wdio/commands/a11y');
const { injectHTMLInspector, runHTMLInspector } = require('@ec-europa/ecl-qa/wdio/commands/html-inspector');
const matchReference = require('@ec-europa/ecl-qa/wdio/assertions/matchReference');
const isAccessible = require('@ec-europa/ecl-qa/wdio/assertions/isAccessible');
const isWellFormatted = require('@ec-europa/ecl-qa/wdio/assertions/isWellFormatted');

require('dotenv').config(); // eslint-disable-line import/no-extraneous-dependencies

const isTravis = 'TRAVIS' in process.env && 'CI' in process.env;

function getScreenshotName(basePath) {
  return (context) => {
    const testName = context.options.name;
    const browserVersion = parseInt(/\d+/.exec(context.browser.version)[0], 10);
    const browserName = context.browser.name;
    const platform = context.desiredCapabilities.platform;

    return path.join(basePath, `${testName}/${platform}_${browserName}_v${browserVersion}.png`);
  };
}

exports.config = {

  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.

  specs: [path.resolve(__dirname, './functional/**/*.js')],

  // Patterns to exclude.
  exclude: [],

  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.

  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.

  maxInstances: 5,

  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '56.0',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  }, {
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 7',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  }, {
    browserName: 'safari',
    // Version 10.0 has issues with executeAsync
    // See: https://github.com/webdriverio/webdriverio/issues/1708
    version: '9.0',
    platform: 'OS X 10.11',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1440',
  }, {
    browserName: 'firefox',
    // Firefox 47 and above have issues with Action API
    // See: https://github.com/SeleniumHQ/selenium/issues/2285
    version: '46.0',
    platform: 'Windows 7',
    build: isTravis ? process.env.TRAVIS_BUILD_NUMBER : 'local-build',
    'tunnel-identifier': isTravis ? process.env.TRAVIS_JOB_NUMBER : '',
    screenResolution: '1920x1080',
  }],

  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here

  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,

  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'error',

  // Enables colors for log output.
  coloredLogs: true,

  // Saves a screenshot to a given path if a command fails.
  screenshotPath: path.resolve(__dirname, './errorShots/'),

  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: 'http://localhost:3000/components/preview',

  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,

  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,

  // Default request retries count
  connectionRetryCount: 3,

  // SauceLabs config
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: !isTravis,

  // Initialize the browser instance with a WebdriverIO plugin
  plugins: {
    'wdio-screenshot': {},
  },

  // Test runner services
  services: [
    'static-server',
    'selenium-standalone',
    'sauce',
    'visual-regression',
  ],

  // Visual regression config
  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getScreenshotName(path.resolve(__dirname, './screenshots/reference')),
      screenshotName: getScreenshotName(path.resolve(__dirname, './screenshots/captured')),
      diffName: getScreenshotName(path.resolve(__dirname, './screenshots/diff')),
      misMatchTolerance: 0.02,
    }),
  },

  // Static server service
  // Array of folder paths and mount points.
  staticServerFolders: [{
    mount: '/',
    path: './dist',
  }],
  staticServerPort: 3000,

  // Options for selenium-standalone
  // Path where all logs from the Selenium server should be stored.
  seleniumLogs: './logs/',
  // Array of arguments for the Selenium server, passed directly to child_process.spawn.
  seleniumArgs: [],

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html

  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'mocha',

  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  reporters: ['dot'],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to
  // enhance it and to build services around it. You can either apply a single function or an
  // array of methods to it. If one of them returns with a promise, WebdriverIO will wait until
  // that promise got resolved to continue.

  // Gets executed once before all workers get launched.
  // onPrepare: function (config, capabilities) {
  // },

  // Gets executed before test execution begins. At this point you can access all global
  // constiables, such as `browser`. It is the perfect place to define custom commands.
  before() {
    global.expect = chai.expect;
    // Custom assertions
    chai.Assertion.addMethod('matchReference', matchReference);
    chai.Assertion.addProperty('accessible', isAccessible);
    chai.Assertion.addProperty('wellFormatted', isWellFormatted);

    // Custom commands
    browser.addCommand('injectAxeCore', injectAxeCore.bind(browser));
    browser.addCommand('runAxeCore', runAxeCore.bind(browser));
    browser.addCommand('injectHTMLInspector', injectHTMLInspector.bind(browser));
    browser.addCommand('runHTMLInspector', runHTMLInspector.bind(browser));
  },

  // Hook that gets executed before the suite starts
  // beforeSuite: function (suite) {
  // },

  // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
  // beforeEach in Mocha)
  // beforeHook: function () {
  // },

  // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
  // afterEach in Mocha)
  // afterHook: function () {
  // },

  // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  // beforeTest: function (test) {
  // },

  // Runs before a WebdriverIO command gets executed.
  // beforeCommand: function (commandName, args) {
  // },

  // Runs after a WebdriverIO command gets executed
  // afterCommand: function (commandName, args, result, error) {
  // },

  // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  // afterTest: function (test) {
  // },

  // Hook that gets executed after the suite has ended
  // afterSuite: function (suite) {
  // },

  // Gets executed after all tests are done. You still have access to all global constiables from
  // the test.
  // after: function (capabilities, specs) {
  // },

  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  // onComplete: function(exitCode) {
  // }
};
