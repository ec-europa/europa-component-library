const babelPresetEnv = require('@babel/preset-env');
const rollup = require('rollup');
const babel = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const svg = require('rollup-plugin-svg');
const getSystem = require('../utils/getSystem');
const pkg = require('../package.json');

module.exports = (input, dest, options) => {
  const minifyCode =
    options.uglify === true ||
    (options.uglify !== false && process.env.NODE_ENV === 'production');

  const terserOptions = {};

  if (options.banner) {
    terserOptions.format = { preamble: `/* ${options.banner} */` };
  }

  const inputOptions = {
    input,
    external: options.external || [/@babel\/runtime/],
    plugins: [
      replace({
        'getSystem()': JSON.stringify(getSystem()),
        delimiters: ['', ''],
        preventAssignment: true,
        __VERSION__: JSON.stringify(pkg.version),
      }),
      resolve(),
      commonjs(),
      babel({
        plugins: ['@babel/plugin-transform-runtime'],
        babelHelpers: 'runtime',
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
      minifyCode && terser(terserOptions), // Replace uglify with terser
    ],
  };

  const outputOptions = {
    file: dest,
    format: 'iife',
    name: options.name || options.moduleName,
    sourcemap: options.sourcemap || options.sourceMap,
    exports: 'named',
    globals: options.globals || {
      // Mapping @babel/runtime helpers to global variable names
      '@babel/runtime/helpers/objectWithoutPropertiesLoose':
        '_objectWithoutPropertiesLoose',
      '@babel/runtime/helpers/extends': '_extends',
      '@babel/runtime/helpers/asyncToGenerator': '_asyncToGenerator',
      '@babel/runtime/regenerator': '_regeneratorRuntime',
      '@babel/runtime/helpers/classPrivateFieldLooseBase':
        '_classPrivateFieldLooseBase',
      '@babel/runtime/helpers/classPrivateFieldLooseKey':
        '_classPrivateFieldLooseKey',
    },
    footer: `ECL.version = "${pkg.version}";`,
  };

  rollup.rollup(inputOptions).then((bundle) => bundle.write(outputOptions));
};
