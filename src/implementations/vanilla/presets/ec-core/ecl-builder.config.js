const path = require('path');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

const nodeModules = path.resolve(__dirname, '../../../../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${
  pkg.version
} Built on ${new Date().toISOString()}`;

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, 'src/ec-core.js'),
      dest: path.resolve(outputFolder, 'scripts/ec-core.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/ec-core.scss'),
      dest: path.resolve(outputFolder, 'styles/ec-core.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-core-print.scss'),
      dest: path.resolve(outputFolder, 'styles/ec-core-print.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/ec-resources-icons/dist'),
      to: path.resolve(outputFolder, 'images/icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-resources-social-icons/dist'),
      to: path.resolve(outputFolder, 'images/social-icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-resources-logo'),
      to: path.resolve(outputFolder, 'images/logo'),
    },
  ],
};
