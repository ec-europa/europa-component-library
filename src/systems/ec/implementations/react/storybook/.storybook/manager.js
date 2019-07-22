const path = require('path');

// Provide a custom webpack config for the manager
module.exports.managerWebpack = async (baseConfig, options) => {
  // Babel loader: include "src"
  baseConfig.module.rules[0].include.push(
    path.resolve(__dirname, '../../../../../..')
  );

  // Exclude node_modules
  baseConfig.module.rules[0].exclude = /node_modules/;

  return baseConfig;
};
