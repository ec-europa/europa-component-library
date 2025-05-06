module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === '@storybook/addon-cssresources') {
        pkg.dependencies = {
          global: '^4.4.0',
          'regenerator-runtime': '^0.13.7',
        };
        pkg.peerDependencies = {};
      }

      return pkg;
    },
  },
};
