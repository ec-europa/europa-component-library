const path = require('path');
const glob = require('glob');

const writeList = require('./write-list');

const srcMembers = path.resolve(__dirname, '../src/members');
const destMembers = path.resolve(__dirname, '../dist/lists/members');

const filesMembers = glob
  .sync('*.svg', { cwd: srcMembers })
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all icons */

writeList({ dest: destMembers, files: filesMembers, outputFile: 'all.json' });

const srcNonMembers = path.resolve(__dirname, '../src/non-members');
const destNonMembers = path.resolve(__dirname, '../dist/lists/non-members');

const filesNonMembers = glob
  .sync('*.svg', { cwd: srcNonMembers })
  .filter((file) => !file.includes('/_')); // ignore files prepended with "_"

/* Write list of all icons */

writeList({
  dest: destNonMembers,
  files: filesNonMembers,
  outputFile: 'all.json',
});
