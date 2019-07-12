// @preval
/* eslint-disable import/no-extraneous-dependencies */
const matter = require('gray-matter');
const { resolve } = require('path');
const glob = require('glob');

const dir = '../pages/eu';

const files = glob.sync('**/*.@(md|mdx)', {
  cwd: resolve(__dirname, dir),
});

const meta = files.map(file => {
  const front = matter.read(resolve(__dirname, dir, file));
  return Object.assign({}, front.data, {
    file,
  });
});

module.exports = meta;
