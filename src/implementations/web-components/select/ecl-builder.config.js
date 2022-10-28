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
      entry: path.resolve(
        nodeModules,
        '@ecl/vanilla-component-select/select.js'
      ),
      dest: path.resolve(outputFolder, 'scripts/ecl-select-vanilla.js'),
      options: {
        banner,
        moduleName: 'ECL',
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/scripts/ecl-select.js'),
      dest: path.resolve(outputFolder, 'ecl-select.min.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: false,
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-select-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-select-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-select-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-select-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
