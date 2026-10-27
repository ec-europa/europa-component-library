import { readFileSync } from 'node:fs';
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

// Existing stories import their README as text, without Vite's ?raw suffix.
function markdownSource() {
  return {
    name: 'ecl-story-notes',
    enforce: 'pre',
    load(id) {
      if (id.endsWith('.md')) {
        this.addWatchFile(id);
        return `export default ${JSON.stringify(readFileSync(id, 'utf8'))};`;
      }
      return null;
    },
  };
}

export function createConfig(system, configDir) {
  const isProd = process.env.NODE_ENV === 'production';
  const outputFolder = isProd ? 'dist' : 'build';
  const excludedSystem = system === 'ec' ? 'eu' : 'ec';
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
      '../../../page-example/*/!(ec*).story.js',
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
      path.resolve(configDir, '../public'),
    ],
    env: (existing) => ({ ...existing, ...environment }),
    async viteFinal(config) {
      return mergeConfig(config, {
        // Do not pick up the documentation website's Vite configuration.
        configFile: false,
        plugins: [
          markdownSource(),
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
        define: Object.fromEntries(
          Object.entries(environment).map(([name, value]) => [
            `process.env.${name}`,
            JSON.stringify(value),
          ]),
        ),
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
