import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { logger } from '@storybook/node-logger';
import path from 'path';
import fs from 'fs';

const pathToStorybookStatic = path.resolve(__dirname, '../build');

if (!fs.existsSync(pathToStorybookStatic)) {
  logger.error(
    'You are running image snapshots without having the static build of storybook. Please run "yarn run build-storybook" before running tests.'
  );
} else {
  const visualTest = {
    framework: 'react',
    suite: 'ECL - Visual Tests',
    test: imageSnapshot({
      storybookUrl: `file://${pathToStorybookStatic}`,
      getGotoOptions: () => ({
        waitUntil: 'networkidle0',
      }),
      getMatchOptions: () => ({
        failureThreshold: 0.02, // 2% threshold,
        failureThresholdType: 'percent',
      }),
    }),
  };

  initStoryshots(visualTest);
}
