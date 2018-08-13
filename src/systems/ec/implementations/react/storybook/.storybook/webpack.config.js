const path = require('path');

const includePaths = [
  path.resolve(__dirname, '../../../../../../../node_modules'),
];

module.exports = (baseConfig, env, defaultConfig) => {
  // Trick webpack, allow it to include .js(x) files from ../..
  defaultConfig.module.rules[0].include = [path.resolve(__dirname, '../..')];

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
