/* eslint-disable no-underscore-dangle */
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob'; // Named export
import matter from 'gray-matter';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '../src/pages/eu');

const files = globSync('**/*.@(md|mdx)', {
  cwd: dir,
  ignore: '**/_jsdoc/**',
}).sort((a, b) => a.localeCompare(b, 'en'));

const getUrl = (file) =>
  `/eu/${file
    .replace('docs', '')
    .replace('z-index', 'zIndex')
    .replace('index', '')
    .replace('zIndex', 'z-index')
    .replace('.mdx', '')
    .replace('.md', '')
    .replace('./', '')}/`.replace('//', '/');

const meta = files.map((file) => {
  const front = matter.read(path.resolve(dir, file));
  return {
    key: `./${file}`,
    attributes: {
      ...front.data,
      url: getUrl(file),
      isTab: file.includes('docs'),
    },
    document: null,
  };
});

fs.writeFileSync(
  path.resolve(__dirname, 'meta-eu.json'),
  JSON.stringify(meta, null, 2),
);
