const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const sanitizeFilenames = (files) =>
  files.map((icon) => icon.replace('.svg', ''));

const writeList = ({ dest, files, outputFile }) => {
  const file = path.resolve(dest, outputFile);
  const data = JSON.stringify(sanitizeFilenames(files));
  mkdirp.sync(path.dirname(file));
  fs.writeFileSync(file, data, 'utf-8');
};

module.exports = writeList;
