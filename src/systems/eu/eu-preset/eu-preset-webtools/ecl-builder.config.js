const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? './dist' : './build';

const nodeModules = path.resolve(__dirname, '../../../../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, 'eu-preset-webtools.js'),
      dest: path.resolve(__dirname, outputFolder, 'scripts/europa.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'eu-preset-webtools.scss'),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/generic-style-icon/fonts'),
      to: path.resolve(__dirname, outputFolder, 'fonts'),
    },
  ],
};
