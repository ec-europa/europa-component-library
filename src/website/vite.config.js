import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import simpleHtmlPlugin from 'vite-plugin-simple-html';
import remarkGfm from 'remark-gfm';
import path from 'path';
import vike from 'vike/plugin';
import htmlMinifier from 'vite-plugin-html-minifier';

/* eslint-disable-next-line import/no-relative-packages */
import lernaJson from '../../lerna.json';

const eclVersion = lernaJson.version;
const sri = {};

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    plugins: [
      react(),
      {
        enforce: 'pre',
        ...mdx({
          providerImportSource: '@mdx-js/react',
          remarkPlugins: [remarkFrontmatter, remarkGfm],
        }),
      },
      simpleHtmlPlugin({
        inject: {
          data: {
            PUBLIC_URL: process.env.PUBLIC_URL || '',
          },
        },
      }),
      vike(),
      htmlMinifier({
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
    ],
    root: path.resolve(__dirname),
    publicDir: path.resolve(__dirname, 'public'),
    resolve: {
      alias: {
        '@ecl/website-components': path.resolve(
          __dirname,
          'src/website-components/',
        ),
        '@ecl/website-utils': path.resolve(__dirname, 'src/utils/'),
      },
    },
    server: isDev
      ? {
          configureServer(server) {
            server.middlewares.use((req, res, next) => {
              let targetUrl = null;

              if (req.url.startsWith('/playground/ec/')) {
                targetUrl = `http://localhost:6006${req.url.replace('/playground/ec', '')}`;
              } else if (req.url.startsWith('/playground/eu/')) {
                targetUrl = `http://localhost:6006${req.url.replace('/playground/eu', '')}`;
              } else if (req.url.startsWith('/apis/')) {
                targetUrl = `http://localhost:6006${req.url.replace('/apis', '')}`;
              }

              if (targetUrl) {
                fetch(targetUrl)
                  .then((proxyRes) => proxyRes.text())
                  .then((body) => {
                    res.setHeader('Content-Type', 'text/html');
                    res.end(body);
                  })
                  .catch((err) => {
                    res.statusCode = 500;
                    res.end('Error fetching content', err);
                  });
                return;
              }

              next();
            });
          },
        }
      : {},
    base: process.env.PUBLIC_URL || '/',
    define: {
      'process.env': {
        PUBLIC_URL: process.env.PUBLIC_URL || '',
        NODE_ENV: JSON.stringify(isDev ? 'development' : 'production'),
        ECL_VERSION: eclVersion,
        ECL_EC_CSS: JSON.stringify(
          (sri['ecl-ec.css'] || []).join(' ') || 'n/a',
        ),
        ECL_EC_UTILITIES_CSS: JSON.stringify(
          (sri['ecl-ec-utilities.css'] || []).join(' ') || 'n/a',
        ),
        ECL_EC_PRINT_CSS: JSON.stringify(
          (sri['ecl-ec-print.css'] || []).join(' ') || 'n/a',
        ),
        ECL_EC_DEFAULT_CSS: JSON.stringify(
          (sri['ecl-ec-default.css'] || []).join(' ') || 'n/a',
        ),
        ECL_EC_JS: JSON.stringify((sri['ecl-ec.js'] || []).join(' ') || 'n/a'),
        ECL_ESM_EC_JS: JSON.stringify(
          (sri['ecl-esm-ec.js'] || []).join(' ') || 'n/a',
        ),
        ECL_EU_CSS: JSON.stringify(
          (sri['ecl-eu.css'] || []).join(' ') || 'n/a',
        ),
        ECL_EU_UTILITIES_CSS: JSON.stringify(
          (sri['ecl-eu-utilities.css'] || []).join(' ') || 'n/a',
        ),
        ECL_EU_PRINT_CSS: JSON.stringify(
          (sri['ecl-eu-print.css'] || []).join(' ') || 'n/a',
        ),
        ECL_EU_DEFAULT_CSS: JSON.stringify(
          (sri['ecl-eu-default.css'] || []).join(' ') || 'n/a',
        ),
        ECL_EU_JS: JSON.stringify((sri['ecl-eu.js'] || []).join(' ') || 'n/a'),
        ECL_ESM_EU_JS: JSON.stringify(
          (sri['ecl-esm-eu.js'] || []).join(' ') || 'n/a',
        ),
        ECL_RESET_CSS: JSON.stringify(
          (sri['ecl-reset.css'] || []).join(' ') || 'n/a',
        ),
        ECL_RTL_CSS: JSON.stringify(
          (sri['ecl-rtl.css'] || []).join(' ') || 'n/a',
        ),
      },
    },
    css: {
      postprocessorOptions: {
        scss: {
          api: 'modern',
          includePaths: [path.resolve(__dirname, '../../node_modules')], // Match Webpack
        },
      },
    },
    ssr: {
      noExternal: ['@iframe-resizer/parent'], // Force client-side—don’t externalize
    },
    build: {
      outDir: 'build',
      sourcemap: process.env.GENERATE_SOURCEMAP !== 'false',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react')) {
                return 'vendor-framework';
              }
              return 'vendor';
            }
            return undefined;
          },
        },
      },
    },
  };
});
