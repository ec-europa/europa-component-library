const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? '../../../dist/flavors/ec' : './static';

module.exports = {
  scripts: [
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ec-preset-full/index.js'
      ),
      dest: path.resolve(__dirname, outputFolder, 'scripts/ec.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ec-preset-corporate/index.js'
      ),
      dest: path.resolve(__dirname, outputFolder, 'scripts/ec-corporate.js'),
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
        '../../../src/flavors/ec/presets/ec-preset-full/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/ec.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ec-preset-base/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/ec-base.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ec-preset-editor/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/ec-editor.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ec-preset-corporate/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/ec-corporate.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-forms/ecl-forms-checkboxes/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-forms/ecl-forms-feedback-messages/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-forms/ecl-forms-radios/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-forms/ecl-forms-selects/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-social-icons/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-messages/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/content/ecl-icons/fonts'
      ),
      to: path.resolve(__dirname, outputFolder, 'fonts'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-logos/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(__dirname, '../../../src/flavors/ec/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
  ],
};
