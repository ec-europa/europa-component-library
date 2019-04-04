import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@ecl/storybook-storyshots-testing';
import { logger } from '@storybook/node-logger';
import path from 'path';
import fs from 'fs';
import finalhandler from 'finalhandler';
import http from 'http';
import serveStatic from 'serve-static';

const pathToStorybookStatic = path.resolve(__dirname, '../build');
const port = 6008;

if (!fs.existsSync(pathToStorybookStatic)) {
  logger.error(
    'You are running image snapshots without having the static build of storybook. Please run "yarn build" before running tests.'
  );
} else {
  const visualTest = {
    framework: 'react',
    suite: 'ECL - Visual Tests',
    test: imageSnapshot({
      storybookUrl: `http://localhost:${port}`,
      getGotoOptions: () => ({
        waitUntil: 'networkidle0',
      }),
      getMatchOptions: () => ({
        failureThreshold: 0,
        failureThresholdType: 'pixel',
      }),
    }),
  };

  let server = null;

  beforeAll(() => {
    logger.info('Start server');

    // Create server
    server = http.createServer((req, res) => {
      // Serve up public/ftp folder
      const serve = serveStatic(pathToStorybookStatic, {
        index: ['index.html', 'index.htm'],
      });

      serve(req, res, finalhandler(req, res));
    });

    // Listen
    server.listen(port);
  });

  afterAll(() => {
    server.close();
    logger.info('End');
  });

  initStoryshots(visualTest);
}
