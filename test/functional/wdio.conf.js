/* global browser */
const path = require('path');
const chai = require('chai');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const { injectAxeCore, runAxeCore } = require('@ecl/qa/wdio/commands/a11y');
const {
  injectHTMLInspector,
  runHTMLInspector,
} = require('@ecl/qa/wdio/commands/html-inspector');
const matchReference = require('@ecl/qa/wdio/assertions/matchReference');
const isAccessible = require('@ecl/qa/wdio/assertions/isAccessible');
const isWellFormatted = require('@ecl/qa/wdio/assertions/isWellFormatted');

// Utils
const { getScreenshotName } = require('./utils/screenshots');
const { getCapabilities } = require('./utils/capabilities');

const isDrone = 'DRONE' in process.env && 'CI' in process.env;
const tunnelIdentifier = isDrone ? process.env.DRONE_JOB_NUMBER : '';

// Either run selenium locally or use SauceLabs, Browserstack, etc.
const localSelenium = false; // change this value manually when you want to test lcoally
const useLocalServer = !isDrone; // with drone, builds are pushed onto AWS S3

// Other properties
const useSauceConnect = useLocalServer;
const baseUrl = useLocalServer
  ? 'http://localhost:3000/'
  : `http://inno-ecl.s3-website-eu-west-1.amazonaws.com/build/${process.env.DRONE_BUILD_NUMBER}/`;

require('dotenv').config(); // eslint-disable-line import/no-extraneous-dependencies

exports.config = {
  deprecationWarnings: false,

  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  specs: [],

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
  // https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
  capabilities: getCapabilities(),

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
  baseUrl,

  // Default timeout for all waitFor* commands.
  waitforTimeout: 30000,

  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,

  // Default request retries count
  connectionRetryCount: 3,

  // SauceLabs config
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  sauceConnect: useSauceConnect,
  sauceConnectOpts: {
    tunnelIdentifier,
    connectVersion: '4.5.4',
  },

  // Initialize the browser instance with a WebdriverIO plugin
  plugins: {
    'wdio-screenshot': {},
  },

  // Test runner services
  services: [
    ...(useLocalServer ? ['static-server'] : []),
    ...(localSelenium ? ['selenium-standalone'] : ['sauce']),
    'visual-regression',
  ],

  // Visual regression config
  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getScreenshotName('test/spec/screenshots/reference'),
      screenshotName: getScreenshotName('test/spec/screenshots/captured'),
      diffName: getScreenshotName('test/spec/screenshots/diff'),
      misMatchTolerance: 3,
    }),
  },

  // Static server service
  // Array of folder paths and mount points.
  staticServerFolders: [
    {
      mount: '/',
      path: './dist/website',
    },
  ],
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
  // see also: http://webdriver.io/guide/reporters/spec.html
  reporters: ['spec'],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: 2000000,
  },

  // =====
  // Hooks
  // =====

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
    browser.addCommand(
      'injectHTMLInspector',
      injectHTMLInspector.bind(browser)
    );
    browser.addCommand('runHTMLInspector', runHTMLInspector.bind(browser));

    browser.addCommand('goToComponent', (component, variant) => {
      const flavor = component.match(/^(ec|eu)/g);
      const prefix = `${flavor[0]}/components/preview`;
      const page = variant
        ? `${component}--${variant}.html`
        : `${component}.html`;
      return browser.url(`${prefix}/${page}`);
    });
  },
};
