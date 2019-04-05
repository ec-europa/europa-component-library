import 'regenerator-runtime/runtime';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { logger } from '@storybook/node-logger';
import constructUrl from './url';

expect.extend({ toMatchImageSnapshot });

// We consider taking a screenshot of the full page is a reasonable default.
const defaultScreenshotOptions = () => ({ fullPage: true });

const noop = () => {};
const asyncNoop = async () => {};

const defaultConfig = {
  storybookUrl: 'http://localhost:6006',
  chromeExecutablePath: undefined,
  getMatchOptions: noop,
  getScreenshotOptions: defaultScreenshotOptions,
  beforeScreenshot: noop,
  getGotoOptions: noop,
  customizePage: asyncNoop,
  getCustomBrowser: undefined,
};

const imageSnapshot = (customConfig = {}) => {
  const {
    storybookUrl,
    getMatchOptions,
    getScreenshotOptions,
    beforeScreenshot,
    getGotoOptions,
    customizePage,
  } = { ...defaultConfig, ...customConfig };

  let browser; // Holds ref to browser.
  let page; // Hold ref to the page to screenshot.

  const testFn = async ({ context }) => {
    const { kind, framework, name } = context;

    if (framework === 'rn') {
      // Skip tests since we de not support RN image snapshots.
      logger.error(
        "It seems you are running imageSnapshot on RN app and it's not supported. Skipping test."
      );

      return;
    }

    const url = constructUrl(storybookUrl, kind, name);

    if (!browser || !page) {
      logger.error(
        `Error when generating image snapshot for test ${kind} - ${name} : It seems the headless browser is not running.`
      );

      throw new Error('Missing browser');
    }

    expect.assertions(1);

    let image;
    try {
      // await customizePage(page);
      // await page.goto(url, getGotoOptions({ context, url }));
      // await beforeScreenshot(page, { context, url });
      // image = await page.screenshot(getScreenshotOptions({ context, url }));
    } catch (e) {
      logger.error(
        `Error when connecting to ${url}, did you start or build the storybook first? A storybook instance should be running or a static version should be built when using image snapshot feature.`,
        e
      );
      throw e;
    }

    expect(image).toMatchImageSnapshot(getMatchOptions({ context, url }));
  };

  testFn.afterAll = () => {
    // if (page) return page.close();
    // return browser.close();
  };

  testFn.beforeAll = async () => {
    const { SAUCE_USERNAME, SAUCE_ACCESS_KEY } = process.env;

    // browser = await getCustomBrowser();
    // page = await browser.newPage();
  };

  return testFn;
};

export default imageSnapshot;
