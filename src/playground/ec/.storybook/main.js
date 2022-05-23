const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist' : 'build';

const publicUrl = process.env.PUBLIC_URL || '';
const stories = ['../../../implementations/twig/**/!(eu*).story.js'];

const addons = [
  '@storybook/addon-docs',
  '@storybook/addon-cssresources',
  '@ecl/storybook-addon-notes/register',
  '@ecl/storybook-addon-code/register',
  '@ecl/storybook-addon-system-switcher/register',
  '@storybook/addon-viewport',
  '@storybook/addon-controls',
  '@storybook/addon-a11y',
];

const staticDirs = [
  path.resolve(`${__dirname}/../../../presets/ec/${outputFolder}`),
  path.resolve(`${__dirname}/../../../presets/reset/${outputFolder}`),
  path.resolve(`${__dirname}/../../../presets/rtl/${outputFolder}`),
];

const webpackFinal = (config) => {
  // Trick "babel-loader", force it to transpile @ecl addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl\/).*/;
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(`${__dirname}/environment.js`),
    },
  });

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
