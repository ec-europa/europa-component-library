export function managerEntries(entries = []) {
  return [...entries, new URL('./register.jsx', import.meta.url).pathname];
}
