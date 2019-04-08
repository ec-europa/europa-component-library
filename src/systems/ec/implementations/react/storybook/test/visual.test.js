import { Builder } from 'selenium-webdriver';
import { logger } from '@storybook/node-logger';
import finalhandler from 'finalhandler';
import fs from 'fs';
import http from 'http';
import initStoryshots from '@storybook/addon-storyshots';
import path from 'path';
import serveStatic from 'serve-static';

// import getCapabilities from './lib/capabilities';
import imageSnapshotWebDriver from './lib/image-snapshot';

let server = null;
const port = 6008;
// const capabilities = getCapabilities();
const pathToStorybookStatic = path.resolve(__dirname, '../build');

const { SAUCE_USERNAME: username, SAUCE_ACCESS_KEY: accessKey } = process.env;

if (!username || !accessKey) {
  const errorMessage = 'Missing: SAUCE_USERNAME, SAUCE_ACCESS_KEY.';
  logger.error(errorMessage);
  throw new Error(errorMessage);
}

if (!fs.existsSync(pathToStorybookStatic)) {
  logger.error(
    'You are running image snapshots without having the static build of storybook. Please run "yarn build" before running tests.'
  );
  throw new Error('Missing build folder.');
}

const capability = {
  browserName: 'chrome',
  platform: 'Windows 10',
  version: '60.0',
  build: 'local-build',
  screenResolution: '1920x1080',
};

logger.info('Setting up webdriver browser.');

const browser = new Builder()
  .withCapabilities({
    username,
    accessKey,
    maxDuration: 7200,
    idleTimeout: 3000,
    ...capability,
  })
  .usingServer(
    `http://${username}:${accessKey}@ondemand.saucelabs.com:80/wd/hub`
  )
  .build();

beforeAll(() => {
  logger.info('Starting a server to serve the storybook build folder.');

  server = http.createServer((req, res) => {
    const serve = serveStatic(pathToStorybookStatic, {
      index: ['index.html', 'index.htm'],
    });

    serve(req, res, finalhandler(req, res));
  });

  server.listen(port);
});

afterAll(() => {
  logger.info('Quitting webdriver browser ...');
  browser.quit();
  logger.info('Closing the server ...');
  server.close();
  logger.info('Server has been closed.');
});

const visualTest = {
  framework: 'react',
  suite: 'ECL - Visual Tests',
  test: imageSnapshotWebDriver({
    storybookUrl: `http://localhost:${port}`,
    browser,
  }),
};

const { browserName, version, platform } = capability;

logger.info(
  `Starting tests for browser: ${browserName}, ${version}, ${platform}`
);

initStoryshots(visualTest);
