const path = require('path');

const stories = ['../../components/**/*/stories/*.jsx'];

const addons = [
  '@storybook/addon-knobs',
  '@storybook/addon-viewport',
  '@storybook/addon-a11y',
  '@storybook/addon-cssresources',
];

const managerEntries = ['../../../../src/tools/storybook-addon-code/register'];

const managerWebpack = async (baseConfig) => {
  // Babel loader: include "src"
  baseConfig.module.rules[0].include.push(
    path.resolve(__dirname, '../../../..')
  );

  // Exclude node_modules
  baseConfig.module.rules[0].exclude = /node_modules/;

  return baseConfig;
};

module.exports = { stories, addons, managerEntries, managerWebpack };
