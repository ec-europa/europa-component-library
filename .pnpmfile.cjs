module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === "@storybook/addon-cssresources") {
        // pkg.dependencies = {};
        // pkg.peerDependencies = {};
      }
     
      return pkg;
    },
  },
};

