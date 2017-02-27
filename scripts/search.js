const fs = require('fs');
const lunr = require('lunr');
const fractal = require('../fractal');

const lunarIndex = lunr(function buildSchema() {
  this.field('title', { boost: 10 });
  this.ref('id');
});

const store = {};

fractal.components.load().then((components) => {
  const list = components.resources().flatten();
  // eslint-disable-next-line no-restricted-syntax
  for (const item of list) {
    const record = { title: item.name };
    lunarIndex.add(record);
    store[item.id] = record;
  }
  fs.writeFileSync(`${fractal.web.get('static.path')}/assets/searchIndex.json`, JSON.stringify({
    index: lunarIndex.toJSON(),
    store,
  }));
});
