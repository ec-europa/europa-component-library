/* global suite, browser, test */

import assert from 'assert';

function assertDiff(results) {
  results.forEach(result => assert.ok(result.isExactSameImage));
}

const variants = ['default', 'primary', 'secondary', 'ctn', 'ctn--border', 'menu'];

suite('buttons', () => {
  browser.setViewportSize({
    width: 500,
    height: 500,
  });

  variants.forEach((variant) => {
    test(`buttons-${variant}`, async () => {
      // Go to url
      await browser.url(`/atom-buttons-buttons--${variant}`);
      await browser.pause(1000);

      // Normal state
      let report = await browser.checkElement('.btn', { name: 'plain' });

      // Hover button
      browser.moveToObject('.btn');
      report = report.concat(await browser.checkElement('.btn', { name: 'hover' }));

      // Press the button
      browser.buttonDown();
      report = report.concat(await browser.checkElement('.btn', { name: 'pressed' }));

      // Release
      browser.buttonUp();
      report = report.concat(await browser.checkElement('.btn', { name: 'released' }));
      assertDiff(report);
    });
  });
});
