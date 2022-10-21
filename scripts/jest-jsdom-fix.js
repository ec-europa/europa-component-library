/* eslint-disable global-require, no-undef */
if (
  typeof globalThis.TextEncoder === 'undefined' ||
  typeof globalThis.TextDecoder === 'undefined'
) {
  const utils = require('util');
  globalThis.TextEncoder = utils.TextEncoder;
  // @ts-ignore TextDecoder from util doesn't necessarily conform to that from
  // the Web APIs, but it's good enough:
  globalThis.TextDecoder = utils.TextDecoder;
}
