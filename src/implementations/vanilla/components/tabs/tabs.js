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

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.closeMoreDropdown = this.closeMoreDropdown.bind(this);
    this.shiftTabs = this.shiftTabs.bind(this);
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

      this.handleResize();
    }

    if (this.btnNext) {
      this.buttonNextSize = this.btnNext.offsetWidth;
    }

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
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.moreButton) {
      this.moreButton.removeEventListener('click', this.handleClickOnToggle);
    }
    if (this.attachClickListener && document && this.moreButton) {
      document.removeEventListener('click', this.closeMoreDropdown);
    }
    if (this.attachClickListener && this.btnNext) {
      this.btnNext.removeEventListener('click', this.shiftTabs);
    }
    if (this.attachClickListener && this.btnPrev) {
      this.btnPrev.removeEventListener('click', this.shiftTabs);
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  /**
   * Action to shift next or previous tabs.
   * @param {int|string} dir
   */
  shiftTabs(dir) {
    this.index = dir === 'next' ? this.index + 1 : this.index - 1;
    console.log(`${this.index} - ${this.total}`);
    console.log(this.listItems[this.index].offsetLeft);
    console.log(this.element.offsetWidth);
    console.log(this.listItems[this.index].offsetWidth);
    const newOffset =
      this.listItems[this.index].offsetLeft -
      (this.element.offsetWidth - this.listItems[this.index].offsetWidth) / 2;
    this.list.style.transitionDuration = '0.4s';
    this.list.style.transform = `translate3d(-${newOffset}px, 0px, 0px)`;
    if (this.index > 0) {
      this.btnPrev.style.display = 'block';
    } else {
      this.btnPrev.style.display = 'none';
    }
    if (this.index >= this.total - 1) {
      this.btnNext.style.display = 'none';
    } else {
      this.btnNext.style.display = 'block';
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
   * Trigger events on resize
   */
  handleResize() {
    this.closeMoreDropdown(this);

    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (vw <= 480) {
      if (this.moreItem) {
        this.moreItem.classList.add('ecl-tabs__item--hidden');
      }
      let listWidth = 0;
      this.listItems.forEach((item) => {
        item.classList.remove('ecl-tabs__item--hidden');
        listWidth += item.offsetWidth;
      });
      this.list.style.width = `${listWidth}px`;
      this.btnNext.style.display = 'block';
      this.btnPrev.style.display = 'none';
      return;
    }

    this.btnNext.style.display = 'none';
    this.btnPrev.style.display = 'none';
    this.list.style.transform = `translate3d(0px, 0px, 0px)`;
    this.list.style.width = 'auto';
    // Hide items that won't fit in the list
    let stopWidth = this.moreButton.offsetWidth + 25;
    const hiddenItems = [];
    const listWidth = this.list.offsetWidth;
    this.moreButtonActive = false;
    this.listItems.forEach((item, i) => {
      item.classList.remove('ecl-tabs__item--hidden');
      if (
        listWidth >= stopWidth + item.offsetWidth &&
        !hiddenItems.includes(i - 1)
      ) {
        stopWidth += item.offsetWidth;
      } else {
        item.classList.add('ecl-tabs__item--hidden');
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
      this.moreItem.classList.add('ecl-tabs__item--hidden');
    } else {
      this.moreItem.classList.remove('ecl-tabs__item--hidden');
      this.moreLabel.textContent = this.moreLabelValue.replace(
        '%d',
        hiddenItems.length
      );
      this.dropdownItems.forEach((item, i) => {
        if (!hiddenItems.includes(i)) {
          item.classList.add('ecl-tabs__item--hidden');
        } else {
          item.classList.remove('ecl-tabs__item--hidden');
        }
      });
    }
  }

  /**
   * Close the dropdown
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
}

export default Tabs;
