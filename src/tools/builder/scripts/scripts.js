import { rollup } from 'rollup';
import babelPresetEnv from '@babel/preset-env';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import svg from 'rollup-plugin-svg';
import externalGlobals from 'rollup-plugin-external-globals';
import { promises as fs } from 'node:fs';
import getSystem from '../utils/getSystem.js';

const pkg = JSON.parse(
  await fs.readFile(new URL('../package.json', import.meta.url), 'utf8'),
);

export default async (input, dest, options) => {
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

  const bundle = await rollup(inputOptions);
  await bundle.write(outputOptions);
};
