const glob = require('glob');
const path = require('path');

const writeList = require('./write-list');

const src = path.resolve(__dirname, '../src');
const dest = path.resolve(__dirname, '../dist/lists');

const files = glob
  .sync('**/*.svg', { cwd: src })
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all icons */

writeList({ dest, files, outputFile: 'all.json' });

/* Write lists of icons per set */

const filesBySet = {};
files.forEach((file) => {
  const [set, filename] = file.split('/');
  if (!filesBySet[set]) filesBySet[set] = [];
  filesBySet[set].push(filename);
});

Object.keys(filesBySet).forEach((set) => {
  writeList({
    dest,
    files: filesBySet[set],
    outputFile: `${set}.json`,
  });
});
