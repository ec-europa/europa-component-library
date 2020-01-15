/**
 * `Node#contains()` polyfill.
 *
 * See: http://compatibility.shwups-cms.ch/en/polyfills/?&id=1
 *
 * @param {Node} node
 * @param {Node} other
 * @return {Boolean}
 * @public
 */
import {
  initExpandables,
  toggleExpandable,
} from '@ecl/ec-component-expandable';

function contains(node, other) {
  // eslint-disable-next-line no-bitwise
  return node === other || !!(node.compareDocumentPosition(other) & 16);
}

export const siteHeaderDropdown = selector => {
  const dropdownsArray = Array.prototype.slice.call(
    document.querySelectorAll(selector)
  );

  if (dropdownsArray.length > 0) {
    initExpandables(`${selector} [aria-expanded]`);

    document.addEventListener('click', event => {
      dropdownsArray.forEach(dropdownSelection => {
        const buttons = Array.prototype.slice.call(
          dropdownSelection.querySelectorAll('[aria-expanded]')
        );

        buttons.forEach(button => {
          const target = document.getElementById(
            button.getAttribute('aria-controls')
          );

          const isInsideButton = contains(button, event.target);
          const isInsideTarget = contains(target, event.target);

          if (!isInsideButton && !isInsideTarget) {
            toggleExpandable(button, { forceClose: true });
          }
        });
      });
    });
  }
};

export default siteHeaderDropdown;
