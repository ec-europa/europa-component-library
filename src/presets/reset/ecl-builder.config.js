const path = require('path');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

const nodeModules = path.resolve(__dirname, '../../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${
  pkg.version
} Built on ${new Date().toISOString()}`;

module.exports = {
  scripts: [],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/reset.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-reset.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
  copy: [],
};
