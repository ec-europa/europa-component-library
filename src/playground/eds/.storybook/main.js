const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist' : 'build';

const stories = ['../../../themes/eds/*.story.js'];

const addons = [
  '@storybook/addon-essentials',
  '@storybook/addon-links',
  '@storybook/addon-a11y',
  '@storybook/addon-themes',
];

let staticDirs = [
  path.resolve(__dirname, '../../../presets/eds', outputFolder),
  path.resolve(__dirname, '../public'),
];

// FRONT-3789 - No need for static dirs, we manually copy the files.
if (isProd) {
  staticDirs = [path.resolve(__dirname, '../public')];
}

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
