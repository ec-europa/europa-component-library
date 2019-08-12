// @preval
/* eslint-disable import/no-extraneous-dependencies */
const matter = require('gray-matter');
const { resolve } = require('path');
const glob = require('glob');

const dir = '../pages/ec';

const files = glob.sync('**/*.@(md|mdx)', {
  cwd: resolve(__dirname, dir),
});

const getUrl = file =>
  `/ec/${file
    .replace('docs', '')
    .replace('index', '')
    .replace('.mdx', '')
    .replace('.md', '')
    .replace('./', '')}/`.replace('//', '/');

const meta = files.map(file => {
  const front = matter.read(resolve(__dirname, dir, file));
  return {
    key: `./${file}`,
    attributes: {
      ...front.data,
      url: getUrl(file),
      isTab: file.includes('docs'),
    },
    document: () => null,
  };
});

module.exports = meta;
