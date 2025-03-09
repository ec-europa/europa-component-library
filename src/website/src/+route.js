// src/website/src/+route.js
import metaEcModule from '../prebuild/meta-ec.json' with { type: 'json' };
import metaEuModule from '../prebuild/meta-eu.json' with { type: 'json' };

const metaEc = metaEcModule.default || metaEcModule;
const metaEu = metaEuModule.default || metaEuModule;

export default function route(url) {
  const urlStr = typeof url === 'string' ? url : url.pathname || '';
// console.log('Routing:', urlStr);

  if (urlStr === '/' || urlStr === '' || urlStr === '/index') {
  // console.log('Root match');
    return { match: true };
  }
  if (Array.isArray(metaEc) && metaEc.some((page) => page.attributes.url === urlStr)) {
  // console.log('EC match:', urlStr);
    return { match: true };
  }
  if (Array.isArray(metaEu) && metaEu.some((page) => page.attributes.url === urlStr)) {
  // console.log('EU match:', urlStr);
    return { match: true };
  }
// console.log('No match for:', urlStr);
  return false;
}