const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? '../../../dist/flavors/eu' : './static';

module.exports = {
  scripts: [
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/eu/presets/eu-preset-base/index.js'
      ),
      dest: path.resolve(__dirname, outputFolder, 'scripts/eu.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/eu/presets/eu-preset-base/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/eu.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [],
};
