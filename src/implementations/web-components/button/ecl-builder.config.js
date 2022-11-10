const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, '../../../../node_modules');
const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${
  pkg.version
} Built on ${new Date().toISOString()}`;

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, 'src/ecl-button.js'),
      dest: path.resolve(outputFolder, 'ecl-button.min.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: false,
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-button-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-button-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-button-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-button-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
