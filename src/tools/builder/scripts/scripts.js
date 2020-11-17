const babelPresetEnv = require('@babel/preset-env');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const svg = require('rollup-plugin-svg');

module.exports = (input, dest, options) => {
  const inputOptions = {
    input,
    external: options.external || [],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        presets: [
          [
            babelPresetEnv,
            {
              modules: false,
              loose: true,
            },
          ],
        ],
      }),
      svg(),
    ],
  };

  const outputOptions = {
    file: dest,
    format: 'iife',
    name: options.name || options.moduleName,
    sourcemap: options.sourcemap || options.sourceMap,
    exports: 'named',
    globals: options.globals || {},
  };

  rollup.rollup(inputOptions).then((bundle) => bundle.write(outputOptions));
};
