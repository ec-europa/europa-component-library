import { fileURLToPath } from 'node:url';

export function managerEntries(entries = []) {
  return [...entries, fileURLToPath(new URL('./register.jsx', import.meta.url))];
}
