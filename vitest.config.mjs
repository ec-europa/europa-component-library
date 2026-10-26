import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import demoData from './src/playground/config/demo-data.mjs';

const sourceRoot = fileURLToPath(new URL('./src/', import.meta.url));

export default defineConfig({
  // Reuse the CommonJS demo-data adapter; Twig is rendered by the test utilities
  // in Node, without Storybook's browser renderer or plugins.
  plugins: [demoData(sourceRoot)],
  test: {
    include: ['src/**/*.test.js'],
    globals: true,
    environment: 'jsdom',
    // Reuse jsdom initialization per worker, with a fresh VM and window per file.
    pool: 'vmThreads',
    isolate: true,
    reporters: ['verbose'],
    clearMocks: false,
    sequence: { hooks: 'list' },
    // Retain Jest's serialization format and existing __snapshots__ locations.
    snapshotFormat: {
      escapeString: true,
      printBasicPrototype: false,
    },
  },
});
