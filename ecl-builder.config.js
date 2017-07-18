const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist/framework' : 'static/framework';

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, 'framework/index.js'),
      dest: path.resolve(__dirname, outputFolder, 'scripts/europa.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'framework/index.scss'),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'framework/editor-index.scss'),
      dest: path.resolve(__dirname, outputFolder, 'styles/editor.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(
        __dirname,
        'framework/components/ecl-forms/ecl-forms-selects/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        __dirname,
        'framework/components/ecl-social-icons/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(__dirname, 'framework/content/ecl-icons/fonts'),
      to: path.resolve(__dirname, outputFolder, 'fonts'),
    },
    {
      from: path.resolve(__dirname, 'framework/components/ecl-logos/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(__dirname, 'framework/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      patterns: 'gumshoe.min.js',
      from: path.resolve(
        __dirname,
        'framework/components/ecl-navigation/ecl-navigation-inpages/node_modules/gumshoejs/dist/js'
      ),
      to: path.resolve(__dirname, outputFolder, 'scripts'),
    },
    {
      patterns: 'stickybits.min.js',
      from: path.resolve(
        __dirname,
        'framework/components/ecl-navigation/ecl-navigation-inpages/node_modules/stickybits/dist'
      ),
      to: path.resolve(__dirname, outputFolder, 'scripts'),
    },
  ],
};
