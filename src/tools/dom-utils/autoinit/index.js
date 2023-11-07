import { queryAll } from '..';

export const autoInit = ({ root = document, ...options } = {}) => {
  if (!ECL) {
    throw new TypeError('Called autoInit but ECL is not present');
  }

  const nodes = queryAll('[data-ecl-auto-init]', root);

  const init = () => {
    nodes
      .filter(
        (node) => node.getAttribute('data-ecl-auto-initialized') !== 'true',
      )
      .forEach((node) => {
        const componentType = node.getAttribute('data-ecl-auto-init');

        if (!componentType) {
          throw new TypeError(
            `(ecl-auto-init) ${componentType} data-ecl-auto-init is empty`,
          );
        }

        const ctor = ECL[componentType];
        if (typeof ctor !== 'function') {
          throw new TypeError(
            `(ecl-auto-init) Could not find '${componentType}'`,
          );
        }

        if (typeof ctor.autoInit !== 'function') {
          throw new TypeError(
            `(ecl-auto-init) Could not find autoInit for '${componentType}'`,
          );
        }

        ctor.autoInit(node, options);
      });
  };

  // Destroy should not throw, in order to be non-blocking.
  const destroy = () => {
    if (ECL.components) {
      ECL.components.forEach((component, node) => {
        if (component.destroy) {
          component.destroy();
          ECL.components.delete(node);
        }
      });
    }
  };

  const update = () => init();

  init();

  return { update, destroy };
};

export default autoInit;
