import debounce from 'lodash.debounce';
import { queryAll } from '@ecl/ec-base/helpers/dom';

export const eclLangSelectPages = ({
  selector: selector = '.ecl-lang-select-page',
  toggleClass: toggleClass = 'ecl-lang-select-page--dropdown',
  listSelector: listSelector = '.ecl-lang-select-page__list',
  dropdownSelector: dropdownSelector = '.ecl-lang-select-page__dropdown',
  dropdownOnChange: dropdownOnChange = undefined,
} = {}) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  const langSelectPagesContainers = queryAll(selector);

  function toggle(lsp) {
    if (!lsp) return null;

    const list = queryAll(listSelector, lsp)[0];

    if (!lsp.classList.contains(toggleClass)) {
      if (list && list.offsetLeft + list.offsetWidth > lsp.offsetWidth) {
        lsp.classList.add(toggleClass);
      }
    } else {
      const dropdown = queryAll(dropdownSelector, lsp)[0];
      if (dropdown.offsetLeft + list.offsetWidth < lsp.offsetWidth) {
        lsp.classList.remove(toggleClass);
      }
    }

    return true;
  }

  function init() {
    // On load
    langSelectPagesContainers.forEach(lsp => {
      toggle(lsp);

      if (dropdownOnChange) {
        const dropdown = queryAll(dropdownSelector, lsp)[0];

        if (dropdown) {
          dropdown.addEventListener('change', dropdownOnChange);
        }
      }
    });

    window.addEventListener(
      'resize',
      debounce(
        () => {
          langSelectPagesContainers.forEach(toggle);
        },
        100,
        { maxWait: 300 }
      )
    );
  }

  return init();
};

export default eclLangSelectPages;
