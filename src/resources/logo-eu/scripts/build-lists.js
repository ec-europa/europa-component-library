const path = require('path');
const glob = require('glob');

const writeList = require('./write-list');

const src = path.resolve(__dirname, '../src/standard-version/positive');
const dest = path.resolve(__dirname, '../dist/standard-version/positive');

const files = glob
  .sync('**/*.svg', { cwd: src })
  .sort((a, b) => a.localeCompare(b, 'en'))
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all logos */

writeList({ dest, files, outputFile: 'all.json' });

const srcNegative = path.resolve(__dirname, '../src/standard-version/negative');
const destNegative = path.resolve(
  __dirname,
  '../dist/standard-version/negative',
);

const filesNegative = glob
  .sync('**/*.svg', { cwd: srcNegative })
  .sort((a, b) => a.localeCompare(b, 'en'))
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all logos */

writeList({ dest: destNegative, files: filesNegative, outputFile: 'all.json' });

const srcCondensed = path.resolve(
  __dirname,
  '../src/condensed-version/positive',
);
const destCondensed = path.resolve(
  __dirname,
  '../dist/condensed-version/positive',
);

const filesCondensed = glob
  .sync('**/*.svg', { cwd: srcCondensed })
  .sort((a, b) => a.localeCompare(b, 'en'))
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all logos */

writeList({
  dest: destCondensed,
  files: filesCondensed,
  outputFile: 'all.json',
});

const srcCondensedNegative = path.resolve(
  __dirname,
  '../src/condensed-version/negative',
);
const destCondensedNegative = path.resolve(
  __dirname,
  '../dist/condensed-version/negative',
);

const filesCondensedNegative = glob
  .sync('**/*.svg', { cwd: srcCondensedNegative })
  .sort((a, b) => a.localeCompare(b, 'en'))
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all logos */

writeList({
  dest: destCondensedNegative,
  files: filesCondensedNegative,
  outputFile: 'all.json',
});
