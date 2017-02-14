/* global suite, browser, test */

import assertDiff from '../utils/visual-regression';
import { injectAxeCore, a11yCheck } from '../utils/a11y';

const variants = ['default', 'primary', 'secondary', 'ctn', 'ctn--border', 'menu'];

suite('buttons', () => {
  variants.forEach((variant) => {
    test(`buttons-${variant}`, async () => {
      // Go to url
      await browser.url(`/atom-buttons-buttons--${variant}.html`);
      await browser.pause(1000);

      // Set viewport size
      browser.setViewportSize({
        width: 250,
        height: 100,
      });

      // Make sure the browser has finished painting
      await browser.pause(1000);

      // Inject axe-core (for accessibility tests)
      injectAxeCore();

      // Normal state
      let report = await browser.checkViewport({ name: 'plain' });
      await a11yCheck(browser, 'btn');

      // Hover button
      browser.moveToObject('.btn');
      report = report.concat(await browser.checkViewport({ name: 'hover' }));
      await a11yCheck(browser, 'btn');

      // Press the button
      browser.buttonDown();
      report = report.concat(await browser.checkViewport({ name: 'pressed' }));
      await a11yCheck(browser, 'btn');

      // Release
      browser.buttonUp();
      report = report.concat(await browser.checkViewport({ name: 'released' }));
      await a11yCheck(browser, 'btn');
      assertDiff(report);
    });
  });
});
