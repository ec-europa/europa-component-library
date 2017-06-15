export const toggleExpandable = toggleElement => {
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
  const isExpanded = toggleElement.getAttribute('aria-expanded') === 'true';

  // Toggle the expandable/collapsible
  toggleElement.setAttribute('aria-expanded', !isExpanded);
  target.setAttribute('aria-hidden', isExpanded);
};

// Helper method to automatically attach the event listener to all the expandables on page load
export const initExpandables = (
  selector = '[aria-controls][aria-expanded]',
  context = document
) => {
  const nodesArray = Array.prototype.slice.call(
    context.querySelectorAll(selector)
  );

  nodesArray.forEach(node =>
    node.addEventListener('click', () => toggleExpandable(node))
  );
};
