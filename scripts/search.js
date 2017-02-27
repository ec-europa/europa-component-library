const fs = require('fs');
const path = require('path');
const lunr = require('lunr');
const fractal = require('../fractal');

const store = {};

const lunarIndex = lunr(function buildSchema() {
  this.field('title', { boost: 10 });
  this.ref('href');
});

/**
 * Get path to style guide item.
 * @param asset Asset fractal item
 * @private
 */
function formatAssetPath(asset) {
  let assetPath = asset.srcPath.split(path.sep);
  assetPath.pop();
  assetPath.unshift('detail');
  return assetPath.join('/');
}

fractal.components.load().then((components) => {
  const list = components.resources().flatten();
  // eslint-disable-next-line no-restricted-syntax
  for (const item of list) {
    const url = formatAssetPath(item);
    const record = {
      title: item.name,
      href: url,
    };
    lunarIndex.add(record);
    store[url] = record;
  }
  fs.writeFileSync(`${fractal.web.get('static.path')}/assets/searchIndex.json`, JSON.stringify({
    index: lunarIndex.toJSON(),
    store,
  }));
});
