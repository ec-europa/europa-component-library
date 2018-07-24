const { getBabelLoader } = require('react-app-rewired');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = (config, env) => {
  const babelLoader = getBabelLoader(config.module.rules);

  config.module.rules.map(rule => {
    if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
      return rule;
    }

    rule.oneOf.unshift({
      test: /\.(md|mdx)$/,
      // include: babelLoader.include,
      use: [
        {
          loader: babelLoader.loader,
          options: babelLoader.options,
        },
        '@mdx-js/loader',
      ],
    });

    return rule;
  });

  return rewireReactHotLoader(config, env);
};
