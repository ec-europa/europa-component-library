/* eslint-disable no-console */
import { queryAll } from '..';

export const autoInit = ({ root = document, ...options } = {}) => {
  if (!ECL) {
    throw new TypeError('Called autoInit but ECL is not present');
  }

  const components = [];

  if (!ECL.initialisedComponents) {
    ECL.initialisedComponents = [];
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

        ECL.initialisedComponents.push(component);
        components.push(component);

        node.setAttribute('data-ecl-auto-initialized', 'true');
      });
  };

  // Destroy should not throw, in order to be non-blocking.
  const destroy = () => {
    if (ECL.initialisedComponents) {
      ECL.initialisedComponents.forEach((component, index, object) => {
        if (component.destroy) {
          component.destroy();
          object.splice(index, 1);
        }
      });
    }
  };

  const update = () => init();

  init();

  return { update, destroy, components };
};

export default autoInit;
