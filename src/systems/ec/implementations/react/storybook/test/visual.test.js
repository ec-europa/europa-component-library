import initStoryshots from '@storybook/addon-storyshots';
import { logger } from '@storybook/node-logger';
import path from 'path';
import fs from 'fs';
import finalhandler from 'finalhandler';
import http from 'http';
import serveStatic from 'serve-static';

import getCapabilities from './lib/capabilities';
import imageSnapshotWebDriver from './lib/image-snapshot';

const port = 6008;
const capabilities = getCapabilities();
const pathToStorybookStatic = path.resolve(__dirname, '../build');

if (!fs.existsSync(pathToStorybookStatic)) {
  logger.error(
    'You are running image snapshots without having the static build of storybook. Please run "yarn build" before running tests.'
  );
  throw new Error('Missing build folder.');
}

let server = null;

beforeAll(() => {
  logger.info('Start server.');

  server = http.createServer((req, res) => {
    const serve = serveStatic(pathToStorybookStatic, {
      index: ['index.html', 'index.htm'],
    });

    serve(req, res, finalhandler(req, res));
  });

  server.listen(port);
});

afterAll(() => {
  server.close();
  logger.info('Stop server.');
});

capabilities.forEach(capability => {
  const visualTest = {
    framework: 'react',
    suite: 'ECL - Visual Tests',
    test: imageSnapshotWebDriver({
      storybookUrl: `http://localhost:${port}`,
      capability,
    }),
  };

  const { browserName, version, platform } = capability;
  logger.info(
    `Starting tests for browser: ${browserName}, ${version}, ${platform}`
  );

  initStoryshots(visualTest);
});
