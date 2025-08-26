const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist' : 'build';
const publicUrl = process.env.PUBLIC_URL || '';
const stories = [
  '../../../components/*/!(ec*).story.js',
  '../../../utilities/*/!(ec*).story.js',
  '../../../compositions/*/!(ec*).story.js',
  '../../../layout/*/!(ec*).story.js',
  '../../../page-example/*/!(ec*).story.js',
];

const addons = [
  '@storybook/addon-docs',
  '@ecl/storybook-addon-styles',
  '@ecl/storybook-addon-notes',
  '@ecl/storybook-addon-code',
  '@storybook/addon-viewport',
  '@storybook/addon-controls',
  '@storybook/addon-a11y',
  'storybook-dark-mode',
  '@storybook/addon-measure',
  '@ecl/storybook-addon-system-switcher',
  'storybook-addon-rtl',
];

let staticDirs = [
  path.resolve(__dirname, '../../../presets/eu', outputFolder),
  path.resolve(__dirname, '../../../presets/reset', outputFolder),
  path.resolve(__dirname, '../public'),
];

// FRONT-3789 - No need for static dirs, we manually copy the files.
if (isProd) {
  staticDirs = [];
}

const webpackFinal = (config) => {
  // Trick "babel-loader", force it to transpile @ecl addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl\/).*/;
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(__dirname, 'environment.js'),
    },
  });

  if (isProd) {
    config.plugins.unshift(
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify(`${publicUrl}`),
      }),
    );
  }

  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === 'ProgressPlugin') {
      config.plugins.splice(i, 1);
    }
  });

  return config;
};

module.exports = {
  framework: '@storybook/html-webpack5',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  stories,
  addons,
  staticDirs,
  webpackFinal,
  features: {
    postcss: false,
  },
  docs: {
    autodocs: false,
  },
};
