const path = require('path');

const includePaths = [
  path.resolve(__dirname, '../../../../../../../node_modules'),
];

module.exports = (baseConfig, env, defaultConfig) => {
  // Trick webpack, allow it to include .js(x) files from ../..
  defaultConfig.module.rules[0].test = /\.jsx?$/;

  // Babel loader: include "src"
  defaultConfig.module.rules[0].include.push(
    path.resolve(__dirname, '../../../../../..')
  );

  // Babel loader: include "node_modules/@ecl"
  defaultConfig.module.rules[0].include.push(
    path.resolve(__dirname, '../../../../../../../node_modules/@ecl')
  );

  // Don't exclude anything
  defaultConfig.module.rules[0].exclude = [];

  // Add babel plugin
  defaultConfig.module.rules[0].use[0].options.plugins.push(
    '@babel/plugin-proposal-export-default-from'
  );

  defaultConfig.resolve.extensions.push('.jsx');

  defaultConfig.module.rules.push(
    ...[
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2',
          /* {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  // autoprefixer(),
                ],
              },
            }, */
          {
            loader: 'resolve-url-loader',
            options: {
              keepQuery: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths,
            },
          },
        ],
      },
    ]
  );

  return defaultConfig;
};
