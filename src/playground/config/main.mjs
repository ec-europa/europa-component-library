import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig, normalizePath } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import eclTwig from './twig.mjs';

const require = createRequire(import.meta.url);
const packagePath = (name) =>
  path.dirname(require.resolve(`${name}/package.json`));
const sourceRoot = fileURLToPath(new URL('../../', import.meta.url));
const repositoryRoot = path.resolve(sourceRoot, '..');

export function createConfig(system, configDir) {
  const isProd = process.env.NODE_ENV === 'production';
  const outputFolder = isProd ? 'dist' : 'build';
  const excludedSystem = system === 'ec' ? 'eu' : 'ec';
  // Specific EP preset, served in the EC dev Storybook only under `pnpm start:ep`.
  const epBuild = path.resolve(sourceRoot, 'specific/presets/ep/build');
  const withEp = system === 'ec' && !isProd && process.env.ECL_EP === 'true';
  const environment = {
    PUBLIC_URL: process.env.PUBLIC_URL || '',
    STORYBOOK_SYSTEM: system.toUpperCase(),
    STORYBOOK_CHROMATIC: process.env.STORYBOOK_CHROMATIC || '',
  };

  return {
    framework: packagePath('@storybook/html-vite'),
    stories: [
      `../../../components/*/!(${excludedSystem}*).story.js`,
      `../../../utilities/*/!(${excludedSystem}*).story.js`,
      `../../../compositions/*/!(${excludedSystem}*).story.js`,
      `../../../layout/*/!(${excludedSystem}*).story.js`,
      `../../../page-example/*/!(${excludedSystem}*).story.js`,
    ],
    addons: [
      packagePath('@storybook/addon-docs'),
      packagePath('storybook-dark-mode'),
      require.resolve('@ecl/storybook-addon-styles/preset'),
      require.resolve('@ecl/storybook-addon-notes/preset'),
      require.resolve('@ecl/storybook-addon-code/preset'),
      require.resolve('@ecl/storybook-addon-preview-width/preset'),
      packagePath('@storybook/addon-a11y'),
      require.resolve('@ecl/storybook-addon-system-switcher/preset'),
    ],
    staticDirs: [
      ...(!isProd
        ? [
            path.resolve(sourceRoot, 'presets', system, outputFolder),
            path.resolve(sourceRoot, 'presets/reset', outputFolder),
          ]
        : []),
      ...(withEp ? [{ from: epBuild, to: '/ep' }] : []),
      path.resolve(configDir, '../public'),
    ],
    env: (existing) => ({ ...existing, ...environment }),
    async viteFinal(config) {
      return mergeConfig(config, {
        // Do not pick up the documentation website's Vite configuration.
        configFile: false,
        plugins: [
          eclTwig({
            ecl: [
              'components',
              'compositions',
              'page-example',
              'layout',
              'utilities',
            ].map((dir) => path.resolve(sourceRoot, dir)),
          }),
          nodePolyfills(),
        ],
        define: {
          ...Object.fromEntries(
            Object.entries(environment).map(([name, value]) => [
              `process.env.${name}`,
              JSON.stringify(value),
            ]),
          ),
          // Bare identifier: the node polyfills shim `process`, so process.env.* is not replaced.
          __ECL_STORYBOOK_EP__: JSON.stringify(withEp),
        },
        resolve: {
          // The polyfill plugin injects these bare imports into workspace
          // sources that do not depend on the plugin. Resolve them from this
          // config package so both Rollup and the dev server can find them.
          alias: ['buffer', 'global', 'process'].map((name) => {
            const shim = `vite-plugin-node-polyfills/shims/${name}`;
            return {
              find: shim,
              replacement: fileURLToPath(import.meta.resolve(shim)),
            };
          }),
          // Keep manager/preview hooks on the same React instance in the workspace.
          dedupe: ['react', 'react-dom'],
        },
        server: { fs: { allow: [normalizePath(repositoryRoot)] } },
      });
    },
  };
}
