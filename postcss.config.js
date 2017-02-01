const params = process.env.NODE_ENV === 'production' ? {
  output: 'dist/framework/styles/europa.css',
  plugins: [
    'cssnano',
  ],
  map: 'file',
} : {
  output: 'static/framework/styles/europa.css',
  plugins: [
    'autoprefixer',
  ],
  map: true,
};

module.exports = {
  use: params.plugins,
  output: params.output,
  map: params.map,
};
