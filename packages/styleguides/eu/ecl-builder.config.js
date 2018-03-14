const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? '../../../dist/eu' : './static';

// SCSS includePaths
const includePaths = [path.resolve(__dirname, '../../../node_modules')];

module.exports = {
  scripts: [
    {
      entry: path.resolve(
        __dirname,
        '../../../src/systems/eu/presets/eu-preset-full/index.js'
      ),
      dest: path.resolve(__dirname, outputFolder, 'scripts/europa.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/systems/eu/presets/eu-preset-corporate/index.js'
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
        __dirname,
        '../../../src/systems/eu/presets/eu-preset-full/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/systems/eu/presets/eu-preset-base/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa-base.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/systems/eu/presets/eu-preset-editor/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa-editor.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/systems/eu/presets/eu-preset-corporate/index.scss'
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
        __dirname,
        '../../../src/systems/eu/components/ecl-forms-eu/eu-component-forms-checkboxe/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/systems/eu/components/ecl-forms-eu/eu-component-forms-feedback-message/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/systems/eu/components/ecl-forms-eu/eu-component-forms-radio/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/systems/eu/components/ecl-forms-eu/eu-component-forms-select/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/systems/eu/components/eu-component-social-icon/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/systems/eu/components/eu-component-message/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/generic/content/generic-content-icon/fonts'
      ),
      to: path.resolve(__dirname, outputFolder, 'fonts'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/systems/eu/components/eu-component-logo/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
  ],
};
