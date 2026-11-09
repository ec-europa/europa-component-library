import { fileURLToPath } from 'node:url';

export function managerEntries(entry = []) {
  return [...entry, fileURLToPath(new URL('./register.jsx', import.meta.url))];
}

export const previewAnnotations = [
  fileURLToPath(new URL('./preview.js', import.meta.url)),
];
