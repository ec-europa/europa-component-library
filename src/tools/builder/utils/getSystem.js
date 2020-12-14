const getSystem = () => {
  let system = null;

  if (process.env.STORYBOOK_SYSTEM) {
    system = process.env.STORYBOOK_SYSTEM.toLowerCase();
  } else if (process.env.ECL_SYSTEM) {
    system = process.env.ECL_SYSTEM.toLowerCase();
  } else if (window && window.location && window.location.pathname) {
    system = window.location.pathname
      .split('/')
      .find((part) => part === 'ec' || part === 'eu');
  }

  if (['ec', 'eu'].includes(system)) return system;
  return null;
};

module.exports = getSystem;
