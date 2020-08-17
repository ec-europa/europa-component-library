const fs = require('fs');
const mkdirp = require('mkdirp');
const glob = require('glob');
const path = require('path');
const SVGSpriter = require('svg-sprite');

const src = path.resolve(__dirname, '../dist/svg');
const files = glob.sync('**/*.svg', { cwd: src });

const filesByFolder = {};
files.forEach((file) => {
  const [folder, filename] = file.split('/');
  if (!filesByFolder[folder]) filesByFolder[folder] = [];
  filesByFolder[folder].push(filename);
});

Object.keys(filesByFolder).forEach((folder) => {
  const spriter = new SVGSpriter({
    dest: path.resolve(__dirname, '../dist/sprites'),
    shape: {
      dimension: { attributes: true },
      transform: [], // no transform, SVGs have already been optimized
    },
    svg: {
      dimensionAttributes: true,
    },
    mode: {
      symbol: {
        dest: '',
        sprite: `icons-${folder}.svg`,
        bust: false, // Cache busting
        example: false, // Build a page
      },
    },
  });

  filesByFolder[folder].forEach((file) => {
    const filePath = path.resolve(__dirname, '../src', folder, file);
    spriter.add(
      filePath,
      file,
      fs.readFileSync(filePath, { encoding: 'utf-8' })
    );
  });

  spriter.compile((error, result) => {
    Object.keys(result).forEach((mode) => {
      Object.keys(result[mode]).forEach((resource) => {
        mkdirp.sync(path.dirname(result[mode][resource].path));
        fs.writeFileSync(
          result[mode][resource].path,
          result[mode][resource].contents
        );
      });
    });
  });
});
