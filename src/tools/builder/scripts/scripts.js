const babelPresetEnv = require('@babel/preset-env');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const replace = require('@rollup/plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const svg = require('rollup-plugin-svg');
const getSystem = require('../utils/getSystem');
const pkg = require('../package.json');

module.exports = (input, dest, options) => {
  const uglifyCode =
    options.uglify === true ||
    (options.uglify !== false && process.env.NODE_ENV === 'production');

  // ECL uses Pikaday for the datepicker component. Pikaday dynamically requires moment.js which messes up JS bundling.
  // ECL does not want to include moment.js in its release in order to reduce the final bundle size.
  // Instruct minifier to preserve the UMD locally scoped 'moment' (default Pikaday module) variable in Pikaday in order to correctly reference the global 'moment' included separately from the ECL library bundle.
  // When Pikaday really removes moment from its dependencies and does not load it dynamically, bundlers such as rollup will be able to handle this more gracefully.
  // @see https://github.com/Pikaday/Pikaday/issues/815
  const uglifyOptions = {};

  if (options.banner) {
    uglifyOptions.output = { preamble: `/* ${options.banner} */` };
  }

  const inputOptions = {
    input,
    external: options.external || [],
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
    footer: `ECL.version = "${pkg.version}";`,
  };

  rollup.rollup(inputOptions).then((bundle) => bundle.write(outputOptions));
};
