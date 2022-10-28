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
        '@ecl/vanilla-component-message/message.js'
      ),
      dest: path.resolve(outputFolder, 'scripts/ecl-message-vanilla.js'),
      options: {
        banner,
        moduleName: 'ECL',
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/scripts/ecl-message.js'),
      dest: path.resolve(outputFolder, 'ecl-message.min.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: false,
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-message-ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-message-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/styles/ecl-message-eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-message-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/vanilla-component-button/button-eu.scss'
      ),
      dest: path.resolve(outputFolder, 'styles/ecl-message-eu.css'),
      options: {
        includePaths,
        sourceMap: false,
        append: true,
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/vanilla-component-message/message-eu.scss'
      ),
      dest: path.resolve(outputFolder, 'styles/ecl-message-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
        append: true,
      },
    },
  ],
};
