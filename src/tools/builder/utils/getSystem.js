const getSystem = (pathnameOverride) => {
  let system = null;

  // The following sources are ordered by priority.
  const pathname =
    pathnameOverride ||
    (typeof window !== 'undefined' &&
      window.location &&
      window.location.pathname);

  if (pathname) {
    system = pathname.split('/').find((part) => part === 'ec' || part === 'eu');
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

export default getSystem;
