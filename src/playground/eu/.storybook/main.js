const path = require('path');
const webpack = require('webpack');
const isChromatic = require('chromatic/isChromatic');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist' : 'build';
const publicUrl = process.env.PUBLIC_URL || '';
const stories = [
  // eds* excluded too: it's a third, separate parallel-track playground
  // (src/playground/eds), same reasoning as the pre-existing ec* exclusion.
  '../../../components/*/!(ec*|eds*).story.js',
  '../../../utilities/*/!(ec*|eds*).story.js',
  '../../../compositions/*/!(ec*|eds*).story.js',
  '../../../layout/*/!(ec*|eds*).story.js',
  '../../../page-example/*/!(ec*|eds*).story.js',
];

const addons = [
  '@storybook/addon-docs',
  '@ecl/storybook-addon-styles',
  '@ecl/storybook-addon-notes',
  '@ecl/storybook-addon-code',
  '@ecl/storybook-addon-preview-width',
  '@storybook/addon-viewport',
  '@storybook/addon-controls',
  '@storybook/addon-a11y',
  'storybook-dark-mode',
  '@storybook/addon-measure',
  '@ecl/storybook-addon-system-switcher',
  'storybook-addon-rtl',
];

if (isChromatic()) {
  addons.push('@storybook/addon-interactions');
}

let staticDirs = [
  path.resolve(__dirname, '../../../presets/eu', outputFolder),
  path.resolve(__dirname, '../../../presets/reset', outputFolder),
  path.resolve(__dirname, '../public'),
];

// FRONT-3789 - No need for static dirs, we manually copy the files.
if (isProd) {
  staticDirs = [path.resolve(__dirname, '../public')];
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
