import { defineConfig } from 'vite';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import simpleHtmlPlugin from 'vite-plugin-simple-html';
import remarkGfm from 'remark-gfm';
import path from 'path';
import vike from 'vike/plugin';
import htmlMinifier from 'vite-plugin-html-minifier';

import mdxReplace from './scripts/mdx-replace.js';
import lernaJson from '../../lerna.json' with { type: 'json' };

const eclVersion = lernaJson.version;

let sri = {};
if ('CI' in process.env && process.env.GITHUB_REF?.includes('refs/tags/')) {
  const tag = process.env.GITHUB_REF.replace('refs/tags/', '');
  const sriFileName = `europa-component-library-${tag}-sri.json`;
  const srcPath = path.resolve(
    import.meta.dirname,
    '../../scripts',
    sriFileName,
  );
  const destPath = path.resolve(
    import.meta.dirname,
    '../../dist/packages',
    sriFileName,
  );

  if (fs.existsSync(srcPath)) {
    try {
      sri = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
      fs.copyFileSync(srcPath, destPath);
    } catch (error) {
      console.warn(
        `Failed to load/move SRI file ${sriFileName}: ${error.message}`,
      );
    }
  }
}

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  const env = {
    ECL_EC_CSS: (sri['ecl-ec.css'] || []).join(' ') || 'n/a',
    ECL_EC_UTILITIES_CSS:
      (sri['ecl-ec-utilities.css'] || []).join(' ') || 'n/a',
    ECL_EC_PRINT_CSS: (sri['ecl-ec-print.css'] || []).join(' ') || 'n/a',
    ECL_EC_DEFAULT_CSS: (sri['ecl-ec-default.css'] || []).join(' ') || 'n/a',
    ECL_EC_JS: (sri['ecl-ec.js'] || []).join(' ') || 'n/a',
    ECL_ESM_EC_JS: (sri['ecl-esm-ec.js'] || []).join(' ') || 'n/a',
    ECL_EU_CSS: (sri['ecl-eu.css'] || []).join(' ') || 'n/a',
    ECL_EU_UTILITIES_CSS:
      (sri['ecl-eu-utilities.css'] || []).join(' ') || 'n/a',
    ECL_EU_PRINT_CSS: (sri['ecl-eu-print.css'] || []).join(' ') || 'n/a',
    ECL_EU_DEFAULT_CSS: (sri['ecl-eu-default.css'] || []).join(' ') || 'n/a',
    ECL_EU_JS: (sri['ecl-eu.js'] || []).join(' ') || 'n/a',
    ECL_ESM_EU_JS: (sri['ecl-esm-eu.js'] || []).join(' ') || 'n/a',
    ECL_RESET_CSS: (sri['ecl-reset.css'] || []).join(' ') || 'n/a',
  };

  return {
    plugins: [
      react(),
      mdxReplace(env),
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
    root: path.resolve(import.meta.dirname),
    publicDir: path.resolve(import.meta.dirname, 'public'),
    resolve: {
      alias: {
        '@ecl/website-components': path.resolve(
          import.meta.dirname,
          'src/website-components/',
        ),
        '@ecl/website-utils': path.resolve(import.meta.dirname, 'src/utils/'),
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
      },
    },
    css: {
      postprocessorOptions: {
        scss: {
          api: 'modern',
          includePaths: [
            path.resolve(import.meta.dirname, '../../node_modules'),
          ], // Match Webpack
        },
      },
    },
    ssr: {
      noExternal: ['@iframe-resizer/parent'], // Force client-side—don’t externalize
    },
    build: {
      outDir: 'build',
      sourcemap: process.env.GENERATE_SOURCEMAP !== 'false',
    },
  };
});
