const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? '../../../dist/flavors/eu' : './static';

module.exports = {
  scripts: [
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/eu/presets/ecl-preset-full-eu/index.js'
      ),
      dest: path.resolve(__dirname, outputFolder, 'scripts/europa.js'),
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
        '../../../src/flavors/eu/presets/ecl-preset-full-eu/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/eu/components/ecl-logos-eu/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/generic/content/ecl-icons/fonts'
      ),
      to: path.resolve(__dirname, outputFolder, 'fonts'),
    },
  ],
};
