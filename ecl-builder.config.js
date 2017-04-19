const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist/framework' : 'static/framework';

module.exports = {
  scripts: [{
    entry: path.resolve(__dirname, 'framework/index.js'),
    dest: path.resolve(__dirname, outputFolder, 'scripts/europa.js'),
    options: {
      sourceMap: isProd ? false : 'inline',
      moduleName: 'Europa',
    },
  }],
  styles: [{
    entry: path.resolve(__dirname, 'framework/index.scss'),
    dest: path.resolve(__dirname, outputFolder, 'styles/europa.css'),
    options: {
      sourceMap: isProd ? 'file' : true,
    },
  }],
  copy: [{
    from: path.resolve(__dirname, 'framework/fonts'),
    to: path.resolve(__dirname, outputFolder, 'fonts'),
  }, {
    from: path.resolve(__dirname, 'framework/images'),
    to: path.resolve(__dirname, outputFolder, 'images'),
  }],
};
