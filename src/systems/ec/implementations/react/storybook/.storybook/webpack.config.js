const path = require('path');

module.exports = ({ config: defaultConfig }) => {
  // Babel loader: include "src"
  defaultConfig.module.rules[0].include.push(
    path.resolve(__dirname, '../../../../../..')
  );

  defaultConfig.module.rules[0].exclude.push(/node_modules/);

  // Change media dist folder
  defaultConfig.module.rules[3].query.name =
    'dist/images/[name].[hash:8].[ext]';

  return defaultConfig;
};
