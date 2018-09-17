const path = require('path');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

const nodeModules = path.resolve(
  __dirname,
  '../../../../../../../node_modules'
);

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${
  pkg.version
} Built on ${new Date().toISOString()}`;

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, 'eu-preset-website.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-eu-preset-website.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'eu-preset-website.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-eu-preset-website.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-form-checkbox/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(
        nodeModules,
        '@ecl/eu-component-form-feedback-message/images'
      ),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-form-radio/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-form-select/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-message/images'),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/generic-component-icon/fonts'),
      to: path.resolve(outputFolder, 'fonts'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-resources-icons'),
      to: path.resolve(outputFolder, 'images/icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-resources-logo'),
      to: path.resolve(outputFolder, 'images/logo'),
    },
    {
      from: path.resolve(
        nodeModules,
        '@ecl/eu-component-global-navigation/images'
      ),
      to: path.resolve(outputFolder, 'images'),
    },
  ],
};
