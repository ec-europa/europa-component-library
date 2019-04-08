import 'regenerator-runtime/runtime';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { logger } from '@storybook/node-logger';

import constructUrl from './url';

expect.extend({ toMatchImageSnapshot });

const defaultConfig = {
  storybookUrl: 'http://localhost:6008',
  capability: {},
};

const imageSnapshotWebdriver = (customConfig = {}) => {
  const { storybookUrl, browser } = {
    ...defaultConfig,
    ...customConfig,
  };

  const testFn = async ({ context }) => {
    let image;
    const { kind, name } = context;
    const url = constructUrl(storybookUrl, kind, name);

    if (!browser) {
      throw new Error('Missing browser');
    }

    try {
      logger.info(`Navigating to ${url}.`);
      await browser.get(url);

      // await browser.wait(until.elementLocated(By.id('root')), 10000);
      logger.info('Taking a screenshot.');
      image = await browser.takeScreenshot();
    } catch (error) {
      logger.error(
        `Error when connecting to ${url}, did you start or build the storybook first? A storybook instance should be running or a static version should be built when using image snapshot feature.`,
        error
      );

      throw error;
    }

    expect(image).toMatchImageSnapshot();
  };

  return testFn;
};

export default imageSnapshotWebdriver;
