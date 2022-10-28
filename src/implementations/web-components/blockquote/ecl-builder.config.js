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
      entry: path.resolve(__dirname, 'src/ecl-blockquote.js'),
      dest: path.resolve(outputFolder, 'ecl-blockquote.min.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: false,
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/vanilla-component-blockquote/blockquote-ec.scss'
      ),
      dest: path.resolve(outputFolder, 'styles/ecl-blockquote-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/vanilla-component-blockquote/blockquote-eu.scss'
      ),
      dest: path.resolve(outputFolder, 'styles/ecl-blockquote-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
