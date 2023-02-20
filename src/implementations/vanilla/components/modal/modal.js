import { queryAll } from '@ecl/dom-utils';
import { createFocusTrap } from 'focus-trap';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
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
      closeSelector = '[data-ecl-modal-close]',
      attachClickListener = true,
      attachKeyListener = true,
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
    this.closeSelector = closeSelector;
    this.attachClickListener = attachClickListener;
    this.attachKeyListener = attachKeyListener;

    // Private variables
    this.target = null;
    this.close = null;
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
    // Bind global events
    if (this.attachKeyListener) {
      document.addEventListener('keyup', this.handleKeyboardGlobal);
    }

    // Get target element
    this.target = document.querySelector(
      `#${this.element.getAttribute('aria-controls')}`
    );

    // Exit if no target found
    if (!this.target) {
      throw new TypeError(
        'Target has to be provided for modal (aria-controls)'
      );
    }

    this.close = queryAll(this.closeSelector, this.target);

    // Set default aria attributes, if not present
    if (!this.element.getAttribute('aria-haspopup')) {
      this.element.setAttribute('aria-haspopup', 'dialog');
    }

    // Create focus trap
    this.focusTrap = createFocusTrap(this.target);

    // Polyfill to support <dialog>
    this.isDialogSupported = true;
    if (!window.HTMLDialogElement) {
      this.isDialogSupported = false;
    }

    // Bind click event on toggle
    if (this.attachClickListener) {
      this.element.addEventListener('click', this.handleClickOnToggle);
    }

    // Bind click event on close buttons
    if (this.close && this.attachClickListener) {
      this.close.forEach((close) => {
        close.addEventListener('click', this.closeModal);
      });
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener) {
      this.element.removeEventListener('click', this.handleClickOnToggle);
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
  }

  /**
   * Toggles between collapsed/expanded states.
   *
   * @param {Event} e
   */
  handleClickOnToggle(e) {
    e.preventDefault();

    // Get current status
    const isExpanded = this.element.getAttribute('aria-expanded') === 'true';

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
      this.target.showModal();
    } else {
      this.target.setAttribute('open', '');
    }

    // Trap focus
    this.focusTrap.activate();
  }

  /**
   * Close the modal.
   */
  closeModal() {
    if (this.isDialogSupported) {
      this.target.close();
    } else {
      this.target.removeAttribute('open');
    }

    // Untrap focus
    this.focusTrap.deactivate();
  }

  /**
   * Handles global keyboard events, triggered outside of the modal.
   *
   * @param {Event} e
   */
  handleKeyboardGlobal(e) {
    if (!this.target) return;

    // Detect press on Escape
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.closeModal();
    }
  }
}

export default Modal;
