import { Builder } from 'selenium-webdriver';
import { logger } from '@storybook/node-logger';
import finalhandler from 'finalhandler';
import fs from 'fs';
import http from 'http';
import initStoryshots from '@storybook/addon-storyshots';
import path from 'path';
import serveStatic from 'serve-static';

import imageSnapshotWebDriver from './lib/image-snapshot';
import getCapabilities from './lib/capabilities';

const { SAUCE_USERNAME: username, SAUCE_ACCESS_KEY: accessKey } = process.env;

if (!username || !accessKey) {
  const errorMessage = 'Missing: SAUCE_USERNAME, SAUCE_ACCESS_KEY.';
  logger.error(errorMessage);
  throw new Error(errorMessage);
}

let server = null;
const port = 6008;
const userSetPath = process.env.STORYBOOK_PATH;
const system = process.env.ECL_SYSTEM || 'ec';
const pathToStorybookStatic = userSetPath
  ? path.resolve(userSetPath)
  : path.resolve(__dirname, '../build');

const isDrone = 'DRONE' in process.env && 'CI' in process.env;
const build = isDrone ? process.env.DRONE_BUILD_NUMBER : 'local-build';

const capabilities = getCapabilities();
const targetBrowser = process.env.TEST_BROWSER || 'chrome';
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
  framework: 'react',
  suite: 'ECL - Visual Tests',
  test: imageSnapshotWebDriver({
    storybookUrl,
    browser,
  }),
};

const { browserName, version, platform } = capability;

logger.info(
  `Starting tests for browser: ${browserName}, ${version}, ${platform}`
);

initStoryshots(visualTest);
