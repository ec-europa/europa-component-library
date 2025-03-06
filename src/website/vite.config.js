import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import simpleHtmlPlugin from 'vite-plugin-simple-html';
import remarkGfm from 'remark-gfm';
import path from 'path';
import vike from 'vike/plugin';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    plugins: [
      react(),
      mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkFrontmatter, remarkGfm],
      }),
      simpleHtmlPlugin({
        inject: {
          data: {
            PUBLIC_URL: process.env.PUBLIC_URL || '',
          },
        },
      }),
      vike(),
    ],
    root: path.resolve(__dirname),
    publicDir: path.resolve(__dirname, 'public'),
    resolve: {
      alias: {
        '@ecl/website-components': path.resolve(__dirname, 'src/website-components/'),
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
                  console.error('Proxy error:', err);
                  res.statusCode = 500;
                  res.end('Error fetching content');
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
      },
    },
    optimizeDeps: {
      exclude: ['glob', 'brace-expansion', 'minimatch', 'fs', 'path'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          includePaths: [path.resolve(__dirname, './node_modules')],
        },
      },
    },
    build: {
      outDir: 'build',
    },
  };
});
