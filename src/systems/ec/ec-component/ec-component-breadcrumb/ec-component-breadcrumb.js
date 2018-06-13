import { queryAll } from '@ecl/generic-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const initBreadcrumb = ({
  breadcrumbSelector: breadcrumbSelector = '.ecl-breadcrumb',
  expandSelector: expandSelector = '.ecl-breadcrumb__expand',
} = {}) => {
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // ACTIONS

  // EVENTS
  function eventExpandClick(e) {
    e.preventDefault();
    const target = e.currentTarget;
    target.parentElement.setAttribute('aria-hidden', 'true');
  }

  // BIND EVENTS
  function bindBreadcrumbEvents(breadcrumbContainer) {
    const expands = queryAll(expandSelector, breadcrumbContainer);
    // bind all items in the list click and keydown events
    expands.forEach(expand => {
      expand.addEventListener('click', eventExpandClick);
    });
  }

  // UNBIND EVENTS
  function unbindBreadcrumbEvents(breadcrumbContainer) {
    const expands = queryAll(expandSelector, breadcrumbContainer);
    // bind all items in the list click and keydown events
    expands.forEach(expand => {
      expand.removeEventListener('click', eventExpandClick);
    });
  }

  // SETUP
  const breadcrumbContainers = queryAll(breadcrumbSelector);

  // DESTROY
  function destroy() {
    if (breadcrumbContainers.length) {
      breadcrumbContainers.forEach(breadcrumbContainer => {
        unbindBreadcrumbEvents(breadcrumbContainer);
      });
    }
  }

  // INIT
  function init() {
    if (breadcrumbContainers.length) {
      breadcrumbContainers.forEach(breadcrumbContainer => {
        bindBreadcrumbEvents(breadcrumbContainer);
      });
    }
  }

  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

// module exports
export default initBreadcrumb;
