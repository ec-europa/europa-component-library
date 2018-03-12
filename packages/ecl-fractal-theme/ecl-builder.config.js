const path = require('path');

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, './assets/js/ecl-fractal-theme.js'),
      dest: path.resolve(__dirname, './dist/js/ecl-fractal-theme.js'),
      options: {
        sourceMap: false,
        moduleName: 'fractal',
        external: ['jquery'],
        globals: {
          jquery: 'jQuery',
        },
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, './assets/scss/fractal.scss'),
      dest: path.resolve(__dirname, './dist/css/fractal.css'),
      options: {
        normalize: true,
        sourceMap: true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(
        __dirname,
        '../../node_modules/@ec-europa/ecl-icons/fonts'
      ),
      to: path.resolve(__dirname, 'dist/fonts'),
    },
    {
      from: path.resolve(
        __dirname,
        '../../node_modules/@ec-europa/ecl-logos/images'
      ),
      to: path.resolve(__dirname, 'dist/images'),
    },
    // Fractal specific
    {
      from: path.resolve(__dirname, './assets/img'),
      to: path.resolve(__dirname, './dist/img'),
    },
    {
      patterns: 'favicon.ico',
      from: path.resolve(__dirname, './assets'),
      to: path.resolve(__dirname, './dist'),
    },
    {
      patterns: 'jquery.min.js',
      from: path.resolve(__dirname, '../../node_modules/jquery/dist'),
      to: path.resolve(__dirname, './dist/js'),
    },
    {
      patterns: 'jquery-resizable.min.js',
      from: path.resolve(
        __dirname,
        '../../node_modules/jquery-resizable-dom/dist'
      ),
      to: path.resolve(__dirname, './dist/js'),
    },
    {
      patterns: 'select2.min.js',
      from: path.resolve(__dirname, '../../node_modules/select2/dist/js'),
      to: path.resolve(__dirname, './dist/js'),
    },
  ],
};
