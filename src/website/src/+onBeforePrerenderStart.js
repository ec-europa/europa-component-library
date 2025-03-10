import metaEc from '../prebuild/meta-ec.json' with { type: 'json' };
import metaEu from '../prebuild/meta-eu.json' with { type: 'json' };

const contentRoutes = [
  '/',
  ...(Array.isArray(metaEc)
    ? metaEc.map((page) => page.attributes.url.replace(/\/$/, ''))
    : []),
  ...(Array.isArray(metaEu)
    ? metaEu.map((page) => page.attributes.url.replace(/\/$/, ''))
    : []),
];

async function onBeforePrerenderStart() {
  return contentRoutes;
}

export { onBeforePrerenderStart };
