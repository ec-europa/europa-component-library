import { Builder } from 'selenium-webdriver';
import { logger } from '@storybook/node-logger';
import finalhandler from 'finalhandler';
import fs from 'fs';
import http from 'http';
import initStoryshots from '@storybook/addon-storyshots';
import path from 'path';
import serveStatic from 'serve-static';

import imageSnapshotWebDriver from './lib/image-snapshot';
import capabilities from './lib/capabilities';

const {
  SAUCE_USERNAME: username,
  SAUCE_ACCESS_KEY: accessKey,
  ECL_SYSTEM: system,
  TEST_BROWSER: targetBrowser,
} = process.env;

if (!username || !accessKey) {
  const errorMessage = 'Missing: SAUCE_USERNAME or SAUCE_ACCESS_KEY.';
  logger.error(errorMessage);
  throw new Error(errorMessage);
}

if (!system || !targetBrowser) {
  const errorMessage = 'Missing: TEST_BROWSER or ECL_SYSTEM.';
  logger.error(errorMessage);
  throw new Error(errorMessage);
}

let server = null;
const port = 6000;
const pathToStorybookStatic = path.resolve(
  __dirname,
  `../dist/storybook/${system}`
);

const isDrone = 'DRONE' in process.env && 'CI' in process.env;
const build = isDrone ? process.env.DRONE_BUILD_NUMBER : 'local-build';
const capability = capabilities[targetBrowser];

capability.build = build;

if (!isDrone && !fs.existsSync(pathToStorybookStatic)) {
  throw new Error(`Missing build folder: ${pathToStorybookStatic}`);
}

logger.info('Setting up webdriver browser.');

const browser = new Builder()
  .withCapabilities({
    // Session settings.
    username,
    accessKey,
    maxDuration: 7200,
    idleTimeout: 3000,
    // Browser settings.
    ...capability,
  })
  .usingServer(
    `http://${username}:${accessKey}@ondemand.saucelabs.com:80/wd/hub`
  )
  .build();

beforeAll(() => {
  if (!isDrone) {
    logger.info('Starting a server to serve the storybook build folder.');

    server = http.createServer((req, res) => {
      const serve = serveStatic(pathToStorybookStatic, {
        index: ['index.html', 'index.htm'],
      });

      serve(req, res, finalhandler(req, res));
    });

    server.listen(port);
  }
});

afterAll(() => {
  if (!isDrone) {
    logger.info('Quitting webdriver browser ...');
    browser.quit();
    logger.info('Closing the server ...');
    server.close();
    logger.info('Server has been closed.');
  }
});

const storybookUrl = isDrone
  ? `http://inno-ecl.s3-website-eu-west-1.amazonaws.com/build/${build}/${system}`
  : `http://localhost:${port}`;

const visualTest = {
  configPath: path.resolve(
    __dirname,
    `../src/systems/${system}/implementations/react/storybook/.storybook`
  ),
  framework: 'react',
  suite: 'ECL - Visual Tests',
  test: imageSnapshotWebDriver({
    storybookUrl,
    browser,
    targetBrowser,
  }),
};

const { browserName, version, platform } = capability;

logger.info(
  `Starting tests for browser: ${browserName}, ${version}, ${platform}`
);

// Start test suite.
initStoryshots(visualTest);
