const getSystem = () => {
  let system = null;

  // The following sources are ordered by priority.
  if (
    typeof window !== 'undefined' && // important for node/browser compatibility
    window.location &&
    window.location.pathname
  ) {
    system = window.location.pathname
      .split('/')
      .find((part) => part === 'ec' || part === 'eu');
    if (system && ['ec', 'eu'].includes(system)) return system;
  }

  if (typeof process !== 'undefined' && process.env.STORYBOOK_SYSTEM) {
    system = process.env.STORYBOOK_SYSTEM.toLowerCase();
    if (system && ['ec', 'eu'].includes(system)) return system;
  }

  if (typeof process !== 'undefined' && process.env.ECL_SYSTEM) {
    system = process.env.ECL_SYSTEM.toLowerCase();
    if (system && ['ec', 'eu'].includes(system)) return system;
  }

  return null;
};

module.exports = getSystem;
