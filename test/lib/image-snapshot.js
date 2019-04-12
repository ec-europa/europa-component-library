import 'regenerator-runtime/runtime';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { logger } from '@storybook/node-logger';

import constructUrl from './url';

expect.extend({ toMatchImageSnapshot });

const defaultConfig = {
  storybookUrl: '',
  // Instance of webdriver.
  browser: null,
  // Browser name.
  targetBrowser: '',
};

const imageSnapshotWebdriver = (customConfig = {}) => {
  const testFn = async ({ context }) => {
    const { storybookUrl, browser, targetBrowser } = {
      ...defaultConfig,
      ...customConfig,
    };

    let image;
    const { id, kind, name, fileName } = context;
    const url = constructUrl(storybookUrl, kind, name);

    // Build custom settings for snapshots.
    const filePath = fileName.split('/');

    // Remove last 2 elements: stories, Index.jsx
    filePath.pop();
    filePath.pop();

    const componentPath = filePath.join('/');
    const customSnapshotsDir = `${componentPath}/test/reference/${targetBrowser}`;
    const customDiffDir = `${componentPath}/test/__diff_output__`;
    const customSnapshotIdentifier = id;

    if (!browser) {
      throw new Error('Missing browser');
    }

    try {
      logger.info(`Navigating to: ${url}.`);

      await browser.get(url);

      await browser.wait(() => {
        return browser
          .executeScript('return document.readyState')
          .then(readyState => readyState === 'complete');
      });

      image = await browser.takeScreenshot();
    } catch (error) {
      logger.error(
        `Error when connecting to ${url}, did you start or build the storybook first? A storybook instance should be running or a static version should be built when using image snapshot feature.`,
        error
      );

      throw error;
    }

    const snapshotOptions = {
      customSnapshotsDir,
      customDiffDir,
      customSnapshotIdentifier,
    };

    logger.info(`Comparing snapshot for: ${id}.`);
    expect(image).toMatchImageSnapshot(snapshotOptions);
  };

  return testFn;
};

export default imageSnapshotWebdriver;
