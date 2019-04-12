import { Builder } from 'selenium-webdriver';
import { logger } from '@storybook/node-logger';
import fs from 'fs';
import initStoryshots from '@storybook/addon-storyshots';
import path from 'path';
import express from 'express';
import serveStatic from 'serve-static';
import sauceConnectLauncher from 'sauce-connect-launcher';
import getPort from 'get-port';

import imageSnapshotWebDriver from './lib/image-snapshot';
import capabilities from './lib/capabilities';
import ports from './lib/ports';

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

let server;
let sc;
const pathToStorybookStatic = path.resolve(
  __dirname,
  `../dist/storybook/${system}`
);
const pathToPublicFolder = path.resolve(__dirname, '../src/website/public');

const isDrone = 'DRONE' in process.env && 'CI' in process.env;
const build = isDrone ? process.env.DRONE_BUILD_NUMBER : 'local-build';
const capability = capabilities[targetBrowser];

capability.build = build;

if (!isDrone && !fs.existsSync(pathToStorybookStatic)) {
  throw new Error(`Missing build folder: ${pathToStorybookStatic}`);
}

const storybookUrl = `http://inno-ecl.s3-website-eu-west-1.amazonaws.com/build/${build}/${system}/`;

const imageSnapshotWebDriverConfig = {
  browser: null,
  storybookUrl,
  targetBrowser,
};

beforeAll(async () => {
  if (!isDrone) {
    logger.info('Starting a server to serve the storybook build folder...');

    let port;
    try {
      port = await getPort({ port: ports, host: '0.0.0.0' });
    } catch (error) {
      logger.error(error);
      process.exit(1); // eslint-disable-line unicorn/no-process-exit
    }

    imageSnapshotWebDriverConfig.storybookUrl = `http://localhost:${port}/`;

    const app = express();
    app.use(serveStatic(pathToStorybookStatic));
    app.use(serveStatic(pathToPublicFolder));
    server = app.listen(port); // second arg = callback -> can make a promise
    logger.info(`Server started on port: ${port}.`);

    // return Promise.resolve();

    logger.info('Starting Sauce Connect...');
    await new Promise((resolve, reject) => {
      sauceConnectLauncher(
        {
          username,
          accessKey,
          verbose: true,
        },
        (err, sauceConnectProcess) => {
          if (err) {
            logger.error(err.message);
            reject();
            process.exit(1); // eslint-disable-line unicorn/no-process-exit
          }

          sc = sauceConnectProcess;

          logger.info('Sauce Connect ready!');
          return resolve();
        }
      );
    });
  }

  logger.info('Setting up webdriver browser...');
  imageSnapshotWebDriverConfig.browser = await new Builder()
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

  logger.info('webdriver browser started.');
});

afterAll(async () => {
  if (!isDrone) {
    if (imageSnapshotWebDriverConfig.browser) {
      logger.info('Quitting webdriver browser ...');
      await imageSnapshotWebDriverConfig.browser.quit();
    }

    if (server) {
      logger.info('Closing the server ...');
      server.close();
      logger.info('Server has been closed.');
    }

    if (!sc) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      sc.close(() => {
        logger.info('Closed Sauce Connect process');
        return resolve();
      });
    });
  }

  return Promise.resolve();
});

const visualTest = {
  configPath: path.resolve(
    __dirname,
    `../src/systems/${system}/implementations/react/storybook/.storybook`
  ),
  framework: 'react',
  suite: 'ECL - Visual Tests',
  test: imageSnapshotWebDriver(imageSnapshotWebDriverConfig),
};

const { browserName, version, platform } = capability;

logger.info(
  `Starting tests for browser: ${browserName}, ${version}, ${platform}`
);

// Start test suite.
initStoryshots(visualTest);
