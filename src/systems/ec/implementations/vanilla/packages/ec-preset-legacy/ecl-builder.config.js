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
      entry: path.resolve(__dirname, 'src/ec-preset-legacy.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-ec-preset-legacy.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/ec-preset-legacy.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-ec-preset-legacy.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-preset-legacy-print.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-ec-preset-legacy-print.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(
        nodeModules,
        '@ecl/ec-component-form-feedback-message/images'
      ),
      to: path.resolve(outputFolder, 'images'),
    },
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
