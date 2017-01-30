/* eslint "import/no-extraneous-dependencies": "off" */
/* eslint "import/extensions": "off" */
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const params = process.env.NODE_ENV === 'production' ? {
  dest: 'dist/scripts/europa.js',
  sourceMap: false,
} : {
  dest: 'static/build/scripts/europa.js',
  sourceMap: 'inline',
};

export default {
  entry: './framework/index.js',
  dest: params.dest,
  format: 'iife',
  sourceMap: params.sourceMap,
  moduleName: 'Europa',
  exports: 'named',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
