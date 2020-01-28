module.exports = ({ config: defaultConfig }) => {
  defaultConfig.module.rules[0].exclude.push(/node_modules/);
  
  // Add Btn to export Json story for sketch
  defaultConfig.entry.push(require.resolve('storybook-addon-sketch/entry'));

  // Change media dist folder
  defaultConfig.module.rules[3].query.name =
    'dist/images/[name].[hash:8].[ext]';

  return defaultConfig;
};
