import { fileURLToPath } from 'node:url';

export const managerEntries = [
  fileURLToPath(new URL('./register.jsx', import.meta.url)),
];
export const previewAnnotations = [
  fileURLToPath(new URL('./preview.js', import.meta.url)),
];
