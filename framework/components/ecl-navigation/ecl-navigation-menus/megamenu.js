import { toggleExpandable } from '@ec-europa/ecl-expandables/expandables';

export const megamenu = selector => {
  const megamenusArray = Array.prototype.slice.call(
    document.querySelectorAll(selector)
  );

  megamenusArray.forEach(menu => {
    // Get expandables within the menu
    const nodesArray = Array.prototype.slice.call(
      menu.querySelectorAll('[aria-controls][aria-expanded]')
    );

    nodesArray.forEach(node =>
      node.addEventListener('click', () => {
        toggleExpandable(node, {
          context: menu,
          closeSiblings: true,
        });
      })
    );
  });
};

export default megamenu;
