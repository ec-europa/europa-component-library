module.exports = ({ config: defaultConfig }) => {
  // Exclude node_modules
  defaultConfig.module.rules[0].exclude.push(/node_modules/);

  // Change media dist folder
  defaultConfig.module.rules[3].query.name =
    'dist/images/[name].[hash:8].[ext]';

  return defaultConfig;
};
