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
  styles: [
    {
      entry: path.resolve(__dirname, 'ec-preset-base.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-ec-preset-base.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'ec-preset-base-theme1.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-ec-preset-base-theme1.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/generic-style-icon/fonts'),
      to: path.resolve(outputFolder, 'fonts'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-resources/icons'),
      to: path.resolve(outputFolder, 'images/icons'),
    },
  ],
};
