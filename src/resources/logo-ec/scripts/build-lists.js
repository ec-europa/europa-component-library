const path = require('path');
const glob = require('glob');

const writeList = require('./write-list');

const src = path.resolve(__dirname, '../src/positive');
const dest = path.resolve(__dirname, '../dist/positive');

const files = glob
  .sync('**/*.svg', { cwd: src })
  .sort((a, b) => a.localeCompare(b, 'en'))
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all logos */

writeList({ dest, files, outputFile: 'all.json' });

const srcNegative = path.resolve(__dirname, '../src/negative');
const destNegative = path.resolve(__dirname, '../dist/negative');

const filesNegative = glob
  .sync('**/*.svg', { cwd: srcNegative })
  .sort((a, b) => a.localeCompare(b, 'en'))
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all logos */

writeList({ dest: destNegative, files: filesNegative, outputFile: 'all.json' });
