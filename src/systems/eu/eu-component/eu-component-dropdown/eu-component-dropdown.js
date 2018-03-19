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

function contains(node, other) {
  // eslint-disable-next-line no-bitwise
  return node === other || !!(node.compareDocumentPosition(other) & 16);
}

export const dropdown = selector => {
  const dropdownsArray = Array.prototype.slice.call(
    document.querySelectorAll(selector)
  );

  document.addEventListener('click', event => {
    dropdownsArray.forEach(dropdownSelection => {
      const isInside = contains(dropdownSelection, event.target);

      if (!isInside) {
        const dropdownButton = document.querySelector(
          `${selector} > [aria-expanded=true]`
        );
        const dropdownBody = document.querySelector(
          `${selector} > [aria-hidden=false]`
        );
        // If the body of the dropdown is visible, then toggle.
        if (dropdownBody) {
          dropdownButton.setAttribute('aria-expanded', false);
          dropdownBody.setAttribute('aria-hidden', true);
        }
      }
    });
  });
};

export default dropdown;
