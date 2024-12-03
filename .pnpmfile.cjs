module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === "@storybook/addon-cssresources") {
        pkg.dependencies = {};
      }
      return pkg;
    }
  }
};