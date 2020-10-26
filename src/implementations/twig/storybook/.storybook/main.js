const path = require('path');

const stories = ['../../**/*.story.js'];

const addons = [
  '@ecl/storybook-addon-notes/src/register',
  '@ecl/storybook-addon-code-twig/src/register',
  '@storybook/addon-viewport',
  '@storybook/addon-knobs',
  '@storybook/addon-cssresources',
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
  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === 'ProgressPlugin') {
      config.plugins.splice(i, 1);
    }
  });

  return config;
};

module.exports = {
  stories,
  addons,
  webpackFinal,
};
