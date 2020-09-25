const path = require('path');
const webpack = require('webpack');

module.exports = ({ config: defaultConfig, mode }) => {
  // Babel loader: include "src"
  defaultConfig.module.rules[0].include.push(
    path.resolve(__dirname, '../../../..')
  );

  defaultConfig.module.rules[0].exclude.push(/node_modules/);

  // Change media dist folder
  defaultConfig.module.rules[3].query.name =
    'dist/images/[name].[hash:8].[ext]';

  if (mode === 'PRODUCTION') {
    const processPluginIndex = defaultConfig.plugins.findIndex(
      (plugin) => plugin instanceof webpack.ProgressPlugin
    );
    if (processPluginIndex > 0) {
      defaultConfig.plugins.splice(processPluginIndex, 1);
    }
  }

  return defaultConfig;
};
