const path = require('path');

const stories = ['../../packages/**/!(*contextual-navigation|eu*).story.js'];

const addons = [
  '@ecl-twig/storybook-addon-notes/src/register',
  '@ecl-twig/storybook-addon-code/src/register',
  '@storybook/addon-viewport',
  '@storybook/addon-knobs',
];

const webpackFinal = (config) => {
  // Trick "babel-loader", force it to transpile @ecl-twig addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/;
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
