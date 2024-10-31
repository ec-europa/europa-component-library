const path = require('path');
const glob = require('glob');

const writeList = require('./write-list');

const src = path.resolve(__dirname, '../src/all');
let dest = path.resolve(__dirname, '../dist/lists');

const files = glob
  .sync('**/*.svg', { cwd: src })
  .sort((a, b) => a.localeCompare(b, 'en'))
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all icons */

writeList({ dest, files, outputFile: 'all.json' });

dest = path.resolve(__dirname, '../dist/unversioned');
writeList({ dest, files, outputFile: 'icons-current.json' });
