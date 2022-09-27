const path = require('path');
const webpack = require('webpack');
const nodeModules = '../../../node_modules';

const stories = ['../../../implementations/webtools/**/*.story.js'];

const addons = [
  '@storybook/addon-docs',
  '@storybook/addon-cssresources',
  '@ecl/storybook-addon-code',
  '@storybook/addon-viewport',
];

const staticDirs = [
  path.resolve(`${__dirname}/../../../presets/ec/dist`),
  path.resolve(`${__dirname}/../../../presets/eu/dist`),
  path.resolve(
    `${__dirname}/../../../implementations/webtools/social-media-follow/dist/`
  ),
];

const webpackFinal = (config) => {
  // Trick "babel-loader", force it to transpile @ecl addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl\/).*/;
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
  staticDirs,
  webpackFinal,
  features: {
    postcss: false,
  },
};
