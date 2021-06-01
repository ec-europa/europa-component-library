const { extendDefaultPlugins } = require('svgo');

module.exports = {
  plugins: extendDefaultPlugins([
    {
      name: 'removeViewBox',
      active: false,
    },
    {
      name: 'cleanupIDs',
      params: {
        prefix: {
          toString() {
            this.counter = this.counter || 0;
            const id = `id-${(this.counter += 1)}`;
            return id;
          },
        },
      },
    },
  ]),
};
