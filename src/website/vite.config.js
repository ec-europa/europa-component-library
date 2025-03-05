// src/website/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import { createHtmlPlugin } from 'vite-plugin-html';
import remarkGfm from 'remark-gfm';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkFrontmatter, remarkGfm], // remark-unwrap-images removed for now
    }),
    createHtmlPlugin({
      inject: {
        data: {
          PUBLIC_URL: process.env.PUBLIC_URL || '', // '' for dev, adjust for prod
        },
      },
    }),
  ],
  root: path.resolve(__dirname),
  publicDir: path.resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@ecl/website-components': path.resolve(__dirname, 'src/website-components/'),
      '@ecl/website-utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  server: {
    open: true,
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        // Serve /playground/* statically from public/
        {
          from: /^\/playground\/.*$/,
          to: (context) => {
            const staticPath = context.match[0];
            console.log('Serving static:', staticPath);
            return staticPath; // Maps to public/playground/
          },
        },
        // SPA fallback for app routes
        { from: /./, to: '/index.html' },
      ],
    },
  },
  base: process.env.PUBLIC_URL || '/',
  define: {
    'process.env': {
      PUBLIC_URL: process.env.PUBLIC_URL || '',
      NODE_ENV: JSON.stringify('development'),
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
});
