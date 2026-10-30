function managerEntries(entry = []) {
  return [...entry, require.resolve('./register.jsx')];
}

module.exports = { managerEntries };
