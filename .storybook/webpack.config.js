const path = require('path');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Extend it as you need.
  config.module.rules.push({
    test: /\.twig$/,
    use: ['twig'],
  });

  config.resolve.extensions.push('.twig');

  config.resolveLoader = {
    alias: {
      twig: path.resolve(__dirname, './twig/loader.js'),
    },
  };

  return config;
};
