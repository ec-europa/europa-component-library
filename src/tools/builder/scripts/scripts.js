const babelPresetEnv = require('@babel/preset-env');
const rollup = require('rollup');
const babel = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
const resolve = require('@rollup/plugin-node-resolve');
const externalGlobals = require('rollup-plugin-external-globals');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const svg = require('rollup-plugin-svg');
const getSystem = require('../utils/getSystem');
const pkg = require('../package.json');

module.exports = (input, dest, options) => {
  const minifyCode =
    options.uglify === true ||
    (options.uglify !== false && process.env.NODE_ENV === 'production');

  const { external, banner, moduleName, sourceMap, format } = options;

  const terserOptions = {};

  if (options.banner) {
    terserOptions.format = { preamble: `/* ${banner} */` };
  }

  const inputOptions = {
    input,
    external: external || [],
    plugins: [
      replace({
        'getSystem()': JSON.stringify(getSystem()),
        delimiters: ['', ''],
        preventAssignment: true,
        __VERSION__: JSON.stringify(pkg.version),
      }),
      resolve(),
      babel({
        babelHelpers: 'bundled',
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
      commonjs(),
      minifyCode && terser(terserOptions),
    ].filter(Boolean),
  };

  const outputOptions = {
    file: dest,
    format,
    exports: 'named',
    name: moduleName,
    sourcemap: sourceMap,
    globals: options.globals,
    footer: `ECL.version = "${pkg.version}";`,
  };

  if (format === 'es') {
    outputOptions.extend = true;
    inputOptions.plugins.push(externalGlobals({ ECL: 'ECL' }));
  }

  rollup.rollup(inputOptions).then((bundle) => bundle.write(outputOptions));
};
