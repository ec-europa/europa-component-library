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
      entry: path.resolve(__dirname, 'ec-preset-website.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-ec-preset-website.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'ec-preset-website.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-ec-preset-website.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-form-checkbox/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(
        nodeModules,
        '@ecl/ec-component-form-feedback-message/images'
      ),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-form-radio/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-form-select/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-social-icon/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-message/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/generic-style-icon/fonts'),
      to: path.resolve(outputFolder, 'fonts'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-logo/images'),
      to: path.resolve(outputFolder, 'images'),
    },
  ],
};
