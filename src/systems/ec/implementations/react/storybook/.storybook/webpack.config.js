const path = require('path');

const includePaths = [
  path.resolve(__dirname, '../../../../../../../node_modules'),
];

module.exports = ({ config: defaultConfig, mode }) => {
  // Babel loader: include "src"
  defaultConfig.module.rules[0].include.push(
    path.resolve(__dirname, '../../../../../..')
  );

  // Exclude node_modules
  defaultConfig.module.rules[0].exclude = /node_modules/;

  // Add babel plugin
  defaultConfig.module.rules[0].use[0].options.plugins.push(
    '@babel/plugin-proposal-export-default-from'
  );

  return defaultConfig;
};
