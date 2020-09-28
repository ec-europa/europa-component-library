const fs = require('fs');
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');

const src = path.resolve(__dirname, '../src');

const filesByFolder = {};
glob.sync('**/*.svg', { cwd: src }).forEach((file) => {
  const [folder, filename] = file.split('/');
  if (!filesByFolder[folder]) filesByFolder[folder] = [];
  filesByFolder[folder].push(filename);
});

Object.keys(filesByFolder).forEach((folder) => {
  const outputFile = path.resolve(__dirname, '../dist/lists', `${folder}.json`);

  const result = filesByFolder[folder].map((icon) => icon.replace('.svg', ''));

  const data = JSON.stringify(result);
  mkdirp.sync(path.dirname(outputFile));
  fs.writeFileSync(outputFile, data, 'utf-8');
});
