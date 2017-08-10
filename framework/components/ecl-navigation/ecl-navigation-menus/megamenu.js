import { queryAll } from '@ec-europa/ecl-base/helpers/dom';
import { toggleExpandable } from '@ec-europa/ecl-expandables/expandables';

const onClick = (node, menu) => e => {
  if (node && node.hasAttribute('aria-haspopup')) {
    const hasPopup = node.getAttribute('aria-haspopup');
    if (hasPopup === '' || hasPopup === 'true') {
      e.preventDefault();

      toggleExpandable(node, {
        context: menu,
        closeSiblings: true,
      });
    }
  }
};

const onKeydown = (node, menu) => e => {
  const currentTab = node.parentElement;
  const previousTabItem =
    currentTab.previousElementSibling ||
    currentTab.parentElement.lastElementChild;
  const nextTabItem =
    currentTab.nextElementSibling || currentTab.parentElement.firstElementChild;

  // don't catch key events when ⌘ or Alt modifier is present
  if (e.metaKey || e.altKey) return;

  // catch left/right and up/down arrow key events
  // if new next/prev tab available, show it by passing tab anchor to showTab method
  switch (e.keyCode) {
    // ENTER or SPACE
    case 13:
    case 32:
      onClick(e.currentTarget, menu)(e);
      /* e.preventDefault();
      toggleExpandable(e.currentTarget, {
        context: menu,
        closeSiblings: true,
      }); */
      break;
    // ARROWS LEFT and UP
    case 37:
    case 38:
      e.preventDefault();
      previousTabItem.querySelector('a').focus();
      break;
    // ARROWS RIGHT and DOWN
    case 39:
    case 40:
      e.preventDefault();
      nextTabItem.querySelector('a').focus();
      break;
    default:
      break;
  }
};

export const megamenu = (
  {
    selector: selector = '.ecl-navigation-menu__root',
    linkSelector: linkSelector = '.ecl-navigation-menu__link',
  } = {}
) => {
  const megamenusArray = queryAll(selector);

  megamenusArray.forEach(menu => {
    // Get expandables within the menu
    const nodesArray = queryAll(linkSelector, menu);

    nodesArray.forEach(node => {
      node.addEventListener('click', onClick(node, menu));
      node.addEventListener('keydown', onKeydown(node, menu));
    });
  });
};

export default megamenu;
