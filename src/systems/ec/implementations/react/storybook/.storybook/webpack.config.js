const path = require('path');
const webpack = require('webpack');

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

  // Make it less verbose
  if (mode === 'PRODUCTION') {
    // Remove ProgressPlugin (4th plugin)
    const plugin = defaultConfig.plugins.splice(3, 1);

    if (!(plugin[0] instanceof webpack.ProgressPlugin)) {
      console.error(
        'Error: 4th plugin is not ProgressPlugin.\nCheck src/systems/ec/implementations/react/storybook/.storybook/webpack.config.js'
      );
      return process.exit(1);
    }
  }

  return defaultConfig;
};
