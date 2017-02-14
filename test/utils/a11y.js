/* global suite, browser, test */

import assert from 'assert';
import { source as axeSource } from 'axe-core';

export function injectAxeCore() {
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

export async function a11yCheck(b, classname) {
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
