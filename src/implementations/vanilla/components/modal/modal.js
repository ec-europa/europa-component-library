import { queryAll, queryOne } from '@ecl/dom-utils';
import { createFocusTrap } from 'focus-trap';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for the modal toggle
 * @param {String} options.closeSelector Selector for closing the modal
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
 * @param {Boolean} options.attachKeyListener Whether or not to bind keyboard events
 */
export class Modal {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Modal} An instance of Modal.
   */
  static autoInit(root, { MODAL: defaultOptions = {} } = {}) {
    const modal = new Modal(root, defaultOptions);
    modal.init();
    root.ECLModal = modal;
    return modal;
  }

  constructor(
    element,
    {
      toggleSelector = '',
      closeSelector = '[data-ecl-modal-close]',
      scrollSelector = '[data-ecl-modal-scroll]',
      attachClickListener = true,
      attachKeyListener = true,
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;

    // Options
    this.toggleSelector = toggleSelector;
    this.closeSelector = closeSelector;
    this.scrollSelector = scrollSelector;
    this.attachClickListener = attachClickListener;
    this.attachKeyListener = attachKeyListener;

    // Private variables
    this.toggle = null;
    this.close = null;
    this.scroll = null;
    this.focusTrap = null;

    // Bind `this` for use in callbacks
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleKeyboardGlobal = this.handleKeyboardGlobal.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();
    // Bind global events
    if (this.attachKeyListener) {
      document.addEventListener('keyup', this.handleKeyboardGlobal);
    }

    // Get toggle element
    if (this.toggleSelector === '') {
      this.toggleSelector = `#${this.element.getAttribute(
        'data-ecl-modal-toggle',
      )}`;
    }
    this.toggle = document.querySelector(this.toggleSelector);

    // Apply aria to toggle
    if (this.toggle) {
      this.toggle.setAttribute('aria-controls', this.element.id);
      if (!this.toggle.getAttribute('aria-haspopup')) {
        this.toggle.setAttribute('aria-haspopup', 'dialog');
      }
    }

    // Get other elements
    this.close = queryAll(this.closeSelector, this.element);
    this.scroll = queryOne(this.scrollSelector, this.element);

    // Create focus trap
    this.focusTrap = createFocusTrap(this.element);

    // Polyfill to support <dialog>
    this.isDialogSupported = true;
    if (!window.HTMLDialogElement) {
      this.isDialogSupported = false;
    }

    // Bind click event on toggle
    if (this.toggle && this.attachClickListener) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
    }

    // Bind click event on close buttons
    if (this.close && this.attachClickListener) {
      this.close.forEach((close) => {
        close.addEventListener('click', this.closeModal);
      });
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.toggle && this.attachClickListener) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
    }

    if (this.attachKeyListener) {
      document.removeEventListener('keyup', this.handleKeyboardGlobal);
    }

    if (this.close && this.attachClickListener) {
      this.close.forEach((close) => {
        close.removeEventListener('click', this.closeModal);
      });
    }

    this.element.removeAttribute('data-ecl-auto-initialized');
    ECL.components.delete(this.element);
  }

  /**
   * Check if there is a scroll and display overflow.
   */
  checkScroll() {
    if (!this.scroll) return;

    this.scroll.parentNode.classList.remove('ecl-modal__body--has-scroll');
    if (this.scroll.scrollHeight > this.scroll.clientHeight) {
      this.scroll.parentNode.classList.add('ecl-modal__body--has-scroll');
    }
  }

  /**
   * Toggles between collapsed/expanded states.
   *
   * @param {Event} e
   */
  handleClickOnToggle(e) {
    e.preventDefault();

    // Get current status
    const isExpanded = this.toggle.getAttribute('aria-expanded') === 'true';

    // Toggle the modal
    if (isExpanded) {
      this.closeModal();
      return;
    }

    this.openModal();
  }

  /**
   * Open the modal.
   */
  openModal() {
    if (this.isDialogSupported) {
      this.element.showModal();
    } else {
      this.element.setAttribute('open', '');
    }

    // Check scroll
    this.checkScroll();

    // Trap focus
    this.focusTrap.activate();
  }

  /**
   * Close the modal.
   */
  closeModal() {
    if (this.isDialogSupported) {
      this.element.close();
    } else {
      this.element.removeAttribute('open');
    }

    // Untrap focus
    if (this.focusTrap.active) {
      this.focusTrap.deactivate();
    }
  }

  /**
   * Handles global keyboard events, triggered outside of the modal.
   *
   * @param {Event} e
   */
  handleKeyboardGlobal(e) {
    // Detect press on Escape
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.closeModal();
    }
  }
}

export default Modal;
