// @preval
/* eslint-disable import/no-extraneous-dependencies */
const matter = require('gray-matter');
const { resolve } = require('path');
const glob = require('glob');

const files = glob.sync('**/*.@(md|mdx)', {
  cwd: resolve(__dirname, '../pages'),
});

const meta = files.map(file => {
  const front = matter.read(resolve(__dirname, '../pages', file));
  return Object.assign({}, front.data, {
    file,
  });
});

module.exports = meta;
