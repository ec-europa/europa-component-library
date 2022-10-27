const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist' : 'build';

const publicUrl = process.env.PUBLIC_URL || '';
const stories = ['../../../implementations/web-components/**/!(eu*).story.js'];

const addons = [
  '@storybook/addon-docs',
  '@storybook/addon-viewport',
  '@ecl/storybook-addon-notes',
  '@storybook/addon-controls',
];

const staticDirs = [
  path.resolve(
    `${__dirname}/../../../implementations/web-components/blockquote/${outputFolder}`
  ),
  path.resolve(
    `${__dirname}/../../../implementations/web-components/message/${outputFolder}`
  ),
];

const webpackFinal = (config) => {
  // Trick "babel-loader", force it to transpile @ecl addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl\/).*/;
  config.module.rules[3].use.options.plugins.push(
    '@babel/plugin-syntax-import-assertions'
  );

  config.plugins.unshift(
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(`${publicUrl}`),
    })
  );

  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === 'ProgressPlugin') {
      config.plugins.splice(i, 1);
    }
  });

  return config;
};

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories,
  addons,
  webpackFinal,
  staticDirs,
  features: {
    postcss: false,
  },
};
