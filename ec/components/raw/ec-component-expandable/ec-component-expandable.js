/* eslint-disable no-param-reassign */

export const toggleExpandable = (
  toggleElement,
  {
    context = document,
    forceClose = false,
    closeSiblings = false,
    siblingsSelector = '[aria-controls][aria-expanded]',
  } = {}
) => {
  if (!toggleElement) {
    return;
  }

  // Get target element
  const target = document.getElementById(
    toggleElement.getAttribute('aria-controls')
  );

  // Exit if no target found
  if (!target) {
    return;
  }

  // Get current status
  const isExpanded =
    forceClose === true ||
    toggleElement.getAttribute('aria-expanded') === 'true';

  // Toggle the expandable/collapsible
  toggleElement.setAttribute('aria-expanded', !isExpanded);
  target.setAttribute('aria-hidden', isExpanded);

  // Toggle label if possible
  if (!isExpanded && toggleElement.hasAttribute('data-label-expanded')) {
    toggleElement.innerHTML = toggleElement.getAttribute('data-label-expanded');
  } else if (isExpanded && toggleElement.hasAttribute('data-label-collapsed')) {
    toggleElement.innerHTML = toggleElement.getAttribute(
      'data-label-collapsed'
    );
  }

  // Close siblings if requested
  if (closeSiblings === true) {
    const siblingsArray = Array.prototype.slice
      .call(context.querySelectorAll(siblingsSelector))
      .filter(sibling => sibling !== toggleElement);

    siblingsArray.forEach(sibling => {
      toggleExpandable(sibling, {
        context,
        forceClose: true,
      });
    });
  }
};

// Helper method to automatically attach the event listener to all the expandables on page load
export const initExpandables = (selector, context = document) => {
  // Exit if no selector was provided
  if (!selector) return;

  const nodesArray = Array.prototype.slice.call(
    context.querySelectorAll(selector)
  );

  nodesArray.forEach(node =>
    node.addEventListener('click', e => {
      toggleExpandable(node, { context });
      e.preventDefault();
    })
  );
};
