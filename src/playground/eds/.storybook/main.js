const path = require('path');

const stories = [
  '../../../eds/foundations/*.story.js',
  '../../../eds/components/*/*.story.js',
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

// @ecl/eds-foundations has no separate build/dist split (see its own
// scripts/build.js) — always serve its build/ output, which contains the
// compiled eds-foundations.css consumed by preview-head.html.
const staticDirs = [
  path.resolve(__dirname, '../../../eds/foundations/build'),
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
