/* eslint-disable import/no-extraneous-dependencies */
const get = require('lodash/get');
const fs = require('fs');
const lunr = require('lunr');

module.exports = (theme, env, app) => {
  const store = {};

  const lunarIndex = lunr(function buildSchema() {
    this.ref('id');
    this.field('title', { boost: 10 });
    this.field('name');
    this.field('handle');
    this.field('notes');
    this.field('variants');
    this.pipeline.remove(lunr.stopWordFilter);
  });

  const results = [...app.components.flatten()]
    .filter(c => !c.isHidden)
    .map(c => c.toJSON())
    .map(c => ({
      id: c.id,
      name: c.name,
      handle: c.handle,
      title: c.title,
      notes: c.notes ? `${c.notes.substring(0, 50)} ...` : '',
      variants: get(c, 'variants.items', []).map(v => v.name),
    }));

  // eslint-disable-next-line no-restricted-syntax
  for (const record of results) {
    lunarIndex.add(record);
    store[record.id] = record;
  }

  fs.writeFileSync(
    `${app.web.get('static.path')}/assets/searchIndex.json`,
    JSON.stringify({
      index: lunarIndex.toJSON(),
      store,
    })
  );
};
