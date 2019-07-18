const babelPresetEnv = require('@babel/preset-env');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const browserslist = require('browserslist');

module.exports = (input, dest, options) => {
  const uglifyCode =
    options.uglify === true ||
    (options.uglify !== false && process.env.NODE_ENV === 'production');

  const uglifyOptions = {};

  if (options.banner) {
    uglifyOptions.output = { preamble: `/* ${options.banner} */` };
  }

  const inputOptions = {
    input,
    external: options.external || [],
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      babel({
        presets: [
          [
            babelPresetEnv,
            {
              targets: {
                browsers: browserslist(),
              },
              modules: false,
              loose: true,
            },
          ],
        ],
      }),
      uglifyCode && uglify(uglifyOptions),
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

  rollup.rollup(inputOptions).then(bundle => bundle.write(outputOptions));
};
