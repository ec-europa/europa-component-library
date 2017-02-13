/* global suite, browser, test */

import assert from 'assert';

const axeSource = require('axe-core').source;

function assertDiff(results) {
  results.forEach(result => assert.ok(result.isExactSameImage, 'screenshot is different from reference'));
}

const variants = ['default', 'primary', 'secondary', 'ctn', 'ctn--border', 'menu'];

function injectAxeCore() {
  const script = `
(function () {
  if (typeof axe === "object" && axe.version) { return; }
  var s = document.createElement("script");
  // stringify so that quotes are properly escaped
  s.innerHTML = ${JSON.stringify(`${axeSource};axe.configure({branding:{application:"webdriverjs"}});`)};
  document.body.appendChild(s);
}());`;

  return browser.execute(script);
}

async function a11yCheck(b, classname) {
  /* eslint-disable */
  const script = function check(cls, done) {
    var n = document.getElementsByClassName(cls);
    axe.run(n, function (err, result) {
      return done({
        err: err,
        result: result
      });
    });
  };
  /* eslint-enable */

  const a11yResults = await b.executeAsync(script, classname);

  const { err, result } = a11yResults.value;

  assert.equal(err, null, 'should not output errors');
  assert.deepEqual(result.violations.length, 0, 'accessibility check returns violations');
}

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
