/* eslint-disable no-console */
import { queryOne, queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.listSelector Selector for list element
 * @param {String} options.listItemsSelector Selector for tabs element
 * @param {String} options.moreLabelSelector Selector for more list item element
 * @param {String} options.moreButtonSelector Selector for more button element
 * @param {String} options.moreLabelSelector Selector for more button label element
 * @param {String} options.prevSelector Selector for prev element
 * @param {String} options.nextSelector Selector for next element
 * @param {Boolean} options.attachClickListener
 * @param {Boolean} options.attachResizeListener
 */
export class Tabs {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Tabs} An instance of Tabs.
   */
  static autoInit(root, { TABS: defaultOptions = {} } = {}) {
    const tabs = new Tabs(root, defaultOptions);
    tabs.init();
    root.ECLTabs = tabs;
    return tabs;
  }

  constructor(
    element,
    {
      listSelector = '.ecl-tabs__list',
      listItemsSelector = '.ecl-tabs__item:not(.ecl-tabs__item--more)',
      moreItemSelector = '.ecl-tabs__item--more',
      moreButtonSelector = '.ecl-tabs__toggle',
      moreLabelSelector = '.ecl-tabs__toggle .ecl-button__label',
      prevSelector = '.ecl-tabs__prev',
      nextSelector = '.ecl-tabs__next',
      attachClickListener = true,
      attachResizeListener = true,
    } = {}
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.'
      );
    }

    this.element = element;

    // Options
    this.listSelector = listSelector;
    this.listItemsSelector = listItemsSelector;
    this.moreItemSelector = moreItemSelector;
    this.moreButtonSelector = moreButtonSelector;
    this.moreLabelSelector = moreLabelSelector;
    this.prevSelector = prevSelector;
    this.nextSelector = nextSelector;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.list = null;
    this.listItems = null;
    this.moreItem = null;
    this.moreButton = null;
    this.moreButtonActive = false;
    this.moreLabel = null;
    this.moreLabelValue = null;
    this.dropdown = null;
    this.dropdownItems = null;
    this.allowShift = true;
    this.buttonNextSize = 0;
    this.index = 0;
    this.total = 0;
    this.tabsKey = [];
    this.firstTab = null;
    this.lastTab = null;
    this.direction = 'ltr';

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.closeMoreDropdown = this.closeMoreDropdown.bind(this);
    this.shiftTabs = this.shiftTabs.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.moveFocusToTab = this.moveFocusToTab.bind(this);
    this.moveFocusToPreviousTab = this.moveFocusToPreviousTab.bind(this);
    this.moveFocusToNextTab = this.moveFocusToNextTab.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.list = queryOne(this.listSelector, this.element);
    this.listItems = queryAll(this.listItemsSelector, this.element);
    this.moreItem = queryOne(this.moreItemSelector, this.element);
    this.moreButton = queryOne(this.moreButtonSelector, this.element);
    this.moreLabel = queryOne(this.moreLabelSelector, this.element);
    this.moreLabelValue = this.moreLabel.innerText;
    this.btnPrev = queryOne(this.prevSelector, this.element);
    this.btnNext = queryOne(this.nextSelector, this.element);
    this.total = this.listItems.length;

    if (this.moreButton) {
      // Create the "more" dropdown and clone existing list items
      this.dropdown = document.createElement('ul');
      this.dropdown.classList.add('ecl-tabs__dropdown');
      this.listItems.forEach((item) => {
        this.dropdown.appendChild(item.cloneNode(true));
      });
      this.moreItem.appendChild(this.dropdown);
      this.dropdownItems = queryAll(
        '.ecl-tabs__dropdown .ecl-tabs__item',
        this.element
      );
    }

    if (this.btnNext) {
      this.buttonNextSize = this.btnNext.getBoundingClientRect().width;
    }

    this.handleResize();

    // Bind events
    if (this.attachClickListener && this.moreButton) {
      this.moreButton.addEventListener('click', this.handleClickOnToggle);
    }
    if (this.attachClickListener && document && this.moreButton) {
      document.addEventListener('click', this.closeMoreDropdown);
    }
    if (this.attachClickListener && this.btnNext) {
      this.btnNext.addEventListener(
        'click',
        this.shiftTabs.bind(this, 'next', true)
      );
    }
    if (this.attachClickListener && this.btnPrev) {
      this.btnPrev.addEventListener(
        'click',
        this.shiftTabs.bind(this, 'prev', true)
      );
    }
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.dropdown) {
      this.dropdown.remove();
    }
    if (this.moreButton) {
      this.moreLabel.textContent = this.moreLabelValue;
      this.moreButton.replaceWith(this.moreButton.cloneNode(true));
    }
    if (this.btnNext) {
      this.btnNext.replaceWith(this.btnNext.cloneNode(true));
    }
    if (this.btnPrev) {
      this.btnPrev.replaceWith(this.btnPrev.cloneNode(true));
    }
    if (this.attachClickListener && document && this.moreButton) {
      document.removeEventListener('click', this.closeMoreDropdown);
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  /**
   * Action to shift next or previous tabs on mobile format.
   * @param {int|string} dir
   */
  shiftTabs(dir) {
    this.index = dir === 'next' ? this.index + 1 : this.index - 1;
    // Show or hide prev or next button based on tab index
    this.btnPrev.style.display = this.index >= 1 ? 'block' : 'none';
    this.btnNext.style.display =
      this.index >= this.total - 1 ? 'none' : 'block';

    // Slide tabs
    const leftMargin =
      this.index === 0 ? 0 : this.btnPrev.getBoundingClientRect().width + 13;

    let newOffset = 0;
    this.direction = getComputedStyle(this.element).direction;
    if (this.direction === 'rtl') {
      newOffset = Math.ceil(
        this.list.offsetWidth -
          this.listItems[this.index].offsetLeft -
          this.listItems[this.index].offsetWidth -
          leftMargin
      );
    } else {
      newOffset = Math.ceil(this.listItems[this.index].offsetLeft - leftMargin);
    }

    const maxScroll = Math.ceil(
      this.list.getBoundingClientRect().width -
        this.element.getBoundingClientRect().width
    );

    if (newOffset > maxScroll) {
      this.btnNext.style.display = 'none';
      newOffset = maxScroll;
    }

    this.list.style.transitionDuration = '0.4s';

    if (this.direction === 'rtl') {
      this.list.style.transform = `translate3d(${newOffset}px, 0px, 0px)`;
    } else {
      this.list.style.transform = `translate3d(-${newOffset}px, 0px, 0px)`;
    }
  }

  /**
   * Toggle the "more" dropdown.
   */
  handleClickOnToggle() {
    this.dropdown.classList.toggle('ecl-tabs__dropdown--show');
    this.moreButton.setAttribute(
      'aria-expanded',
      this.dropdown.classList.contains('ecl-tabs__dropdown--show')
    );
  }

  /**
   * Trigger events on resize.
   */
  handleResize() {
    // Close dropdown if more button is not displayed
    if (window.getComputedStyle(this.moreButton).display === 'none') {
      this.closeMoreDropdown(this);
    }

    this.list.style.transform = `translate3d(0px, 0px, 0px)`;

    // Behaviors for mobile format
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (vw <= 480) {
      this.index = 1;
      this.list.style.transitionDuration = '0.4s';
      this.shiftTabs(this.index);
      if (this.moreItem) {
        this.moreItem.setAttribute('aria-hidden', 'true');
      }
      let listWidth = 0;
      this.listItems.forEach((item) => {
        item.setAttribute('aria-hidden', 'false');
        listWidth += Math.ceil(item.getBoundingClientRect().width);
      });
      this.list.style.width = `${listWidth}px`;
      this.btnNext.style.display = 'block';
      this.btnPrev.style.display = 'none';
      return;
    }

    // Behaviors for Tablet and desktop format (More button)
    this.btnNext.style.display = 'none';
    this.btnPrev.style.display = 'none';
    this.list.style.width = 'auto';

    // Hide items that won't fit in the list
    let stopWidth = this.moreButton.getBoundingClientRect().width + 25;
    const hiddenItems = [];
    const listWidth = this.list.getBoundingClientRect().width;
    this.moreButtonActive = false;
    this.listItems.forEach((item, i) => {
      item.setAttribute('aria-hidden', 'false');
      if (
        listWidth >= stopWidth + item.getBoundingClientRect().width &&
        !hiddenItems.includes(i - 1)
      ) {
        stopWidth += item.getBoundingClientRect().width;
      } else {
        item.setAttribute('aria-hidden', 'true');
        if (item.childNodes[0].classList.contains('ecl-tabs__link--active')) {
          this.moreButtonActive = true;
        }
        hiddenItems.push(i);
      }
    });

    // Add active class to the more button if it contains an active element
    if (this.moreButtonActive) {
      this.moreButton.classList.add('ecl-tabs__toggle--active');
    } else {
      this.moreButton.classList.remove('ecl-tabs__toggle--active');
    }

    // Toggle the visibility of More button and items in dropdown
    if (!hiddenItems.length) {
      this.moreItem.setAttribute('aria-hidden', 'true');
    } else {
      this.moreItem.setAttribute('aria-hidden', 'false');
      this.moreLabel.textContent = this.moreLabelValue.replace(
        '%d',
        hiddenItems.length
      );
      this.dropdownItems.forEach((item, i) => {
        if (!hiddenItems.includes(i)) {
          item.setAttribute('aria-hidden', 'true');
        } else {
          item.setAttribute('aria-hidden', 'false');
        }
      });
    }

    // Bind key events on tabs for accessibility
    this.tabsKey = [];
    this.listItems.forEach((item, index, array) => {
      let tab = null;
      if (item.getAttribute('aria-hidden') === 'false') {
        tab = queryOne('.ecl-tabs__link', item);
      } else {
        const dropdownItem = this.dropdownItems[index];
        tab = queryOne('.ecl-tabs__link', dropdownItem);
      }
      tab.addEventListener('keydown', this.onKeydown);
      this.tabsKey.push(tab);

      if (index === 0) {
        this.firstTab = tab;
      }
      if (index === array.length - 1) {
        this.lastTab = tab;
      }
    });
  }

  /**
   * Close the dropdown.
   * @param {Event} e
   */
  closeMoreDropdown(e) {
    let el = e.target;
    while (el) {
      if (el === this.moreButton) {
        return;
      }
      el = el.parentNode;
    }
    this.moreButton.setAttribute('aria-expanded', false);
    this.dropdown.classList.remove('ecl-tabs__dropdown--show');
  }

  /**
   * Tabs onKeydown handler.
   * @param {Event} e
   */
  onKeydown(e) {
    const tgt = e.currentTarget;
    let flag = false;

    switch (e.key) {
      case 'ArrowLeft':
        this.moveFocusToPreviousTab(tgt);
        flag = true;
        break;

      case 'ArrowRight':
        this.moveFocusToNextTab(tgt);
        flag = true;
        break;

      case 'Home':
        this.moveFocusToTab(this.firstTab);
        flag = true;
        break;

      case 'End':
        this.moveFocusToTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  /**
   * @param {HTMLElement} currentTab tab element
   */
  moveFocusToTab(currentTab) {
    if (currentTab.closest('.ecl-tabs__dropdown')) {
      this.dropdown.classList.add('ecl-tabs__dropdown--show');
    } else {
      this.dropdown.classList.remove('ecl-tabs__dropdown--show');
    }
    currentTab.focus();
    return this;
  }

  /**
   * @param {HTMLElement} currentTab tab element
   */
  moveFocusToPreviousTab(currentTab) {
    let index;

    if (currentTab === this.firstTab) {
      this.moveFocusToTab(this.lastTab);
    } else {
      index = this.tabsKey.indexOf(currentTab);
      this.moveFocusToTab(this.tabsKey[index - 1]);
    }
  }

  /**
   * @param {HTMLElement} currentTab tab element
   */
  moveFocusToNextTab(currentTab) {
    let index;

    if (currentTab === this.lastTab) {
      this.moveFocusToTab(this.firstTab);
    } else {
      index = this.tabsKey.indexOf(currentTab);
      this.moveFocusToTab(this.tabsKey[index + 1]);
    }
  }
}

export default Tabs;
