// src/website/src/+route.js
import metaEcModule from '../../prebuild/meta-ec.json' with { type: 'json' };
import metaEuModule from '../../prebuild/meta-eu.json' with { type: 'json' };

const metaEc = metaEcModule.default || metaEcModule;
const metaEu = metaEuModule.default || metaEuModule;

export default function route(url) {
  const urlStr = typeof url === 'string' ? url : url.pathname || '';

  if (urlStr === '/' || urlStr === '' || urlStr === '/index') {
    return { match: true };
  }
  if (
    Array.isArray(metaEc) &&
    metaEc.some((page) => page.attributes.url === urlStr)
  ) {
    return { match: true };
  }
  if (
    Array.isArray(metaEu) &&
    metaEu.some((page) => page.attributes.url === urlStr)
  ) {
    return { match: true };
  }
  return false;
}
