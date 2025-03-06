import metaEcModule from '../prebuild/meta-ec.json' assert { type: 'json' };
import metaEuModule from '../prebuild/meta-eu.json' assert { type: 'json' };

const metaEc = metaEcModule.default || metaEcModule;
const metaEu = metaEuModule.default || metaEuModule;

export default function route(url) {
  const urlStr = typeof url === 'string' ? url : url.pathname || '';
  console.log('Routing:', urlStr);

  if (urlStr === '/' || urlStr === '' || urlStr === '/index') {
    console.log('Root match');
    return { match: true }; // V1 style
  }
  if (Array.isArray(metaEc) && metaEc.some((page) => {
    const match = page.attributes.url === urlStr;
    if (match) console.log('EC match:', urlStr);
    return match;
  })) {
    return { match: true };
  }
  if (Array.isArray(metaEu) && metaEu.some((page) => {
    const match = page.attributes.url === urlStr;
    if (match) console.log('EU match:', urlStr);
    return match;
  })) {
    return { match: true };
  }
  console.log('No match for:', urlStr);
  return false;
}