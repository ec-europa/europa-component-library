const path = require('path');

const includePaths = [
  path.resolve(__dirname, '../../../../../../../node_modules'),
];

module.exports = (baseConfig, env, defaultConfig) => {
  // Trick webpack, allow it to include .js(x) files from ../..
  defaultConfig.module.rules[0].test = /\.jsx?$/;
  defaultConfig.module.rules[0].include = [
    path.resolve(__dirname, '../..'), // EU packages
    path.resolve(__dirname, '../../../../../generic'), // Generic packages
  ];
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
        test: /sprites\/icons\-(.*)\.svg/,
        use: ['file-loader'],
      },
    ]
  );

  return defaultConfig;
};
