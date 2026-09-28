const path = require('path');

const stories = [
  '../../foundations/*.story.js',
  '../../components/*/*.story.js',
];

const addons = [
  '@storybook/addon-essentials',
  '@storybook/addon-links',
  '@storybook/addon-a11y',
  '@storybook/addon-themes',
  '@ecl/storybook-addon-code',
  '@ecl/storybook-addon-notes',
  '@ecl/storybook-addon-preview-width',
  'storybook-dark-mode',
];

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist' : 'build';

// Unlike ec/eu, the preset output is also bundled in production builds, so
// the EDS Storybook is self-contained (see src/eds/scripts/dist.sh).
const staticDirs = [
  path.resolve(__dirname, '../../preset', outputFolder),
  path.resolve(__dirname, '../public'),
];

const webpackFinal = (config) => {
  // Trick "babel-loader", force it to transpile @ecl packages (components
  // are consumed straight from node_modules in the pnpm workspace).
  config.module.rules[0].exclude = /node_modules\/(?!@ecl\/).*/;

  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(__dirname, 'environment.js'),
    },
  });

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
