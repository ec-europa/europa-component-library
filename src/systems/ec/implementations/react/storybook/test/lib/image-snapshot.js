import 'regenerator-runtime/runtime';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { logger } from '@storybook/node-logger';
import { Builder } from 'selenium-webdriver';

import constructUrl from './url';

expect.extend({ toMatchImageSnapshot });

const defaultConfig = {
  storybookUrl: 'http://localhost:6008',
  capability: {},
};

const imageSnapshotWebdriver = (customConfig = {}) => {
  const { storybookUrl, capability } = {
    ...defaultConfig,
    ...customConfig,
  };

  let browser;

  const testFn = async ({ context }) => {
    let image;
    const { kind, framework, name } = context;

    if (framework === 'rn') {
      // Skip tests since we de not support RN image snapshots.
      logger.error(
        "It seems you are running imageSnapshot on RN app and it's not supported. Skipping test."
      );

      throw new Error('Unsupported framework.');
    }

    if (!browser) {
      logger.error(
        `Error when generating image snapshot for test ${kind} - ${name} : there was no browser.`
      );

      throw new Error('Missing browser');
    }

    const url = constructUrl(storybookUrl, kind, name);

    try {
      logger.info(`Navigating to ${url}.`);
      await browser.get(url);
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

  testFn.afterAll = () => browser.quit();

  testFn.beforeAll = () => {
    const {
      SAUCE_USERNAME: username,
      SAUCE_ACCESS_KEY: accessKey,
    } = process.env;

    browser = new Builder()
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
  };

  return testFn;
};

export default imageSnapshotWebdriver;
