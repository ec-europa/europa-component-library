const path = require('path');
const pkg = require('./package.json');

const nodeModules = path.resolve(__dirname, '../../../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${
  pkg.version
} Built on ${new Date().toISOString()}`;

module.exports = {
  styles: [
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/vanilla-component-blockquote/blockquote-ec.scss'
      ),
      dest: path.resolve(__dirname, 'styles/ecl-blockquote-ec.css'),
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
      dest: path.resolve(__dirname, 'styles/ecl-blockquote-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
};
