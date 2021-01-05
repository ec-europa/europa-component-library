import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import puppeteer from 'puppeteer';

const { HOST_IP } = process.env;
let browser;

// @see https://www.npmjs.com/package/@storybook/addon-storyshots-puppeteer
const testFn = imageSnapshot({
  storybookUrl: 'file:///opt/storybook-static',
  getCustomBrowser: async () => {
    browser = await puppeteer.connect({
      browserURL: HOST_IP ? `http://${HOST_IP}:9222` : 'http://localhost:9222',
    });
    return browser;
  },
  beforeScreenshot: async (page) => {
    await page.evaluateHandle('document.fonts.ready');
    await page.setViewport({ deviceScaleFactor: 2, width: 800, height: 600 });
  },
  getScreenshotOptions: () => {
    return {
      encoding: 'base64',
      fullPage: false,
    };
  },
});

// Make sure that jest process is closed after tests are done.
testFn.afterAll = () => {
  if (browser) {
    browser.close();
  }
};

// @see https://www.npmjs.com/package/@storybook/addon-storyshots
initStoryshots({
  framework: 'html',
  test: testFn,
});
