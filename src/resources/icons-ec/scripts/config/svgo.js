module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: {
            prefix: {
              toString() {
                this.counter = this.counter || 0;
                const id = `id-icons-ec-${(this.counter += 1)}`;
                return id;
              },
            },
          },
        },
      },
    },
    'cleanupIds',
  ],
};
