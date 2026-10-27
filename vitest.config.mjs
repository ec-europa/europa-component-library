import { defineConfig } from 'vitest/config';

export default defineConfig({
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
