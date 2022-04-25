import { queryAll } from '..';

export const autoInit = ({ root = document, ...options } = {}) => {
  if (!ECL) {
    throw new TypeError('Called autoInit but ECL is not present');
  }

  const components = [];

  if (!ECL.components) {
    ECL.components = [];
  }

  const nodes = queryAll('[data-ecl-auto-init]', root);

  const init = () => {
    nodes
      .filter(
        (node) => node.getAttribute('data-ecl-auto-initialized') !== 'true'
      )
      .forEach((node) => {
        const componentType = node.getAttribute('data-ecl-auto-init');

        if (!componentType) {
          throw new TypeError(
            `(ecl-auto-init) ${componentType} data-ecl-auto-init is empty`
          );
        }

        const ctor = ECL[componentType];
        if (typeof ctor !== 'function') {
          throw new TypeError(
            `(ecl-auto-init) Could not find '${componentType}'`
          );
        }

        if (typeof ctor.autoInit !== 'function') {
          throw new TypeError(
            `(ecl-auto-init) Could not find autoInit for '${componentType}'`
          );
        }

        const component = ctor.autoInit(node, options);

        ECL.components.push(component);
        components.push(component);
      });
  };

  // Destroy should not throw, in order to be non-blocking.
  const destroy = () => {
    if (ECL.components) {
      for (let i = ECL.components.length - 1; i >= 0; i -= 1) {
        if (ECL.components[i].destroy) {
          ECL.components[i].destroy();
          ECL.components.splice(i, 1);
        }
      }
    }
  };

  const update = () => init();

  init();

  return { update, destroy, components };
};

export default autoInit;
