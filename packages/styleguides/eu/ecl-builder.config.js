const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? '../../../dist/eu' : './static';

const nodeModules = path.resolve(__dirname, '../../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

module.exports = {
  scripts: [
    {
      entry: path.resolve(nodeModules, '@ecl/eu-preset-full/eu-preset-full.js'),
      dest: path.resolve(__dirname, outputFolder, 'scripts/europa.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/eu-preset-corporate/eu-preset-corporate.js'
      ),
      dest: path.resolve(__dirname, outputFolder, 'scripts/eu-corporate.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/eu-preset-full/eu-preset-full.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/eu-preset-base/eu-preset-base.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa-base.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/eu-preset-editor/eu-preset-editor.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa-editor.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/eu-preset-corporate/eu-preset-corporate.scss'
      ),
      dest: path.resolve(
        __dirname,
        outputFolder,
        'styles/europa-corporate.css'
      ),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(
        nodeModules,
        '@ecl/eu-component-forms-checkbox/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        nodeModules,
        '@ecl/eu-component-forms-feedback-message/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-forms-radio/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-forms-select/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-social-icon/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-message/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/generic-style-icon/fonts'),
      to: path.resolve(__dirname, outputFolder, 'fonts'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eu-component-logo/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
  ],
};
