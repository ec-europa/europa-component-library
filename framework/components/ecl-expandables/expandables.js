export const toggleExandable = toggleElement => {
  // Get target element
  const target = document.getElementById(
    toggleElement.getAttribute('aria-controls')
  );

  // Get current status
  const isExpanded = toggleElement.getAttribute('aria-expanded') === 'true';

  // Set
  toggleElement.setAttribute('aria-expanded', !isExpanded);
  target.setAttribute('aria-hidden', isExpanded);
};

export default toggleExandable;
