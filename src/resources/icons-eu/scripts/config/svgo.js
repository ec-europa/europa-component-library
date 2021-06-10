module.exports = {
  plugins: [
    {
      removeViewBox: false,
    },
    {
      cleanupIDs: {
        prefix: {
          toString() {
            this.counter = this.counter || 0;
            const id = `id-${(this.counter += 1)}`;
            return id;
          },
        },
      },
    },
  ],
};
