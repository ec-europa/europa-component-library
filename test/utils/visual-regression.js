/* global suite, browser, test */

import assert from 'assert';

export default function assertDiff(results) {
  results.forEach(result => assert.ok(result.isExactSameImage, 'screenshot is different from reference'));
}
