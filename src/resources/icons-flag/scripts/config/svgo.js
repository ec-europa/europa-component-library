module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIDs: {
            prefix: {
              toString() {
                this.counter = this.counter || 0;
                const id = `id-flag-${(this.counter += 1)}`;
                return id;
              },
            },
          },
        },
      },
    },
  ],
};
