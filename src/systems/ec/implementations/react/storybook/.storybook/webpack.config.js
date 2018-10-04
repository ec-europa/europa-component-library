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

  defaultConfig.resolve.extensions.push('.jsx');

  // Add "limit" to svg-url-loader
  defaultConfig.module.rules[4].query = {
    limit: 4 * 1024, // above 4 kB, file-loader will be used
    stripdeclarations: true,
    encoding: 'base64',
  };

  // Exclude SVG sprites
  defaultConfig.module.rules[4].exclude = /sprites\/icons/;

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
      // SVG sprites
      {
        test: /sprites\/icons(.*)\.svg/,
        use: ['file-loader'],
      },
    ]
  );

  return defaultConfig;
};
