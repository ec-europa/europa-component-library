/**
 * Contextual navigation scripts
 */

import { queryAll } from '@ecl/ec-base/helpers/dom';

const expandContextualNav = (
  contextualNav,
  button,
  {
    classToRemove = 'ecl-context-nav__item--over-limit',
    hiddenElementsSelector = '.ecl-context-nav__item--over-limit',
    context = document,
  } = {}
) => {
  if (!contextualNav) {
    return;
  }

  const hiddenElements = queryAll(hiddenElementsSelector, context);

  // Remove extra class
  hiddenElements.forEach(element => {
    element.classList.remove(classToRemove);
  });

  // Remove buttton
  button.parentNode.removeChild(button);
};

// Helper method to automatically attach the event listener to all the expandables on page load
export const contextualNavs = ({
  selector = '.ecl-context-nav',
  buttonSelector = '.ecl-context-nav__more',
  hiddenElementsSelector = '.ecl-context-nav__item--over-limit',
  classToRemove = 'ecl-context-nav__item--over-limit',
  context = document,
} = {}) => {
  const nodesArray = queryAll(selector, context);

  nodesArray.forEach(node => {
    const button = context.querySelector(buttonSelector);

    if (button) {
      button.addEventListener('click', () =>
        expandContextualNav(node, button, {
          classToRemove,
          hiddenElementsSelector,
        })
      );
    }
  });
};

export default contextualNavs;
