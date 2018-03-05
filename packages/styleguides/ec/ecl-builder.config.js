const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? '../../../dist/flavors/ec' : './static';

module.exports = {
  scripts: [
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ecl-preset-full-ec/index.js'
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
        '../../../src/flavors/ec/presets/ecl-preset-corporate-ec/index.js'
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
        '../../../src/flavors/ec/presets/ecl-preset-full-ec/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ecl-preset-base-ec/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa-base.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ecl-preset-editor-ec/index.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa-editor.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(
        __dirname,
        '../../../src/flavors/ec/presets/ecl-preset-corporate-ec/index.scss'
      ),
      dest: path.resolve(
        __dirname,
        outputFolder,
        'styles/europa-corporate.css'
      ),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-forms-ec/ecl-forms-checkboxes-ec/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-forms-ec/ecl-forms-feedback-messages-ec/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-forms-ec/ecl-forms-radios-ec/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-forms-ec/ecl-forms-selects-ec/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-social-icons-ec/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-messages-ec/images'
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
    {
      from: path.resolve(
        __dirname,
        '../../../src/flavors/ec/components/ecl-logos-ec/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(__dirname, '../../../src/flavors/ec/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
  ],
};
