export function managerEntries(entry = []) {
  return [...entry, new URL('./register.jsx', import.meta.url).pathname];
}
