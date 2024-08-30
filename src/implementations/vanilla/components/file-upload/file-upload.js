import { queryOne, formatBytes } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.groupSelector Selector for file upload form group
 * @param {String} options.buttonSelector Selector for file upload button
 * @param {String} options.listSelector Selector for list of file names
 * @param {String} options.labelChoose Label choose state
 * @param {String} options.labelReplace Label replace state
 * @param {Boolean} options.attachChangeListener Whether or not to bind change events on toggle
 */
export class FileUpload {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {FileUpload} An instance of FileUpload.
   */
  static autoInit(root, { FILE_UPLOAD: defaultOptions = {} } = {}) {
    const fileUpload = new FileUpload(root, defaultOptions);
    fileUpload.init();
    root.ECLFileUpload = fileUpload;
    return fileUpload;
  }

  /**
   *   @event FileUpload#onSelection
   */

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @memberof FileUpload
   */
  supportedEvents = ['onSelection'];

  constructor(
    element,
    {
      groupSelector = '[data-ecl-file-upload-group]',
      buttonSelector = '[data-ecl-file-upload-button]',
      listSelector = '[data-ecl-file-upload-list]',
      labelChoose = 'data-ecl-file-upload-label-choose',
      labelReplace = 'data-ecl-file-upload-label-replace',
      attachChangeListener = true,
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.eventManager = new EventManager();

    // Options
    this.groupSelector = groupSelector;
    this.buttonSelector = buttonSelector;
    this.listSelector = listSelector;
    this.labelChoose = labelChoose;
    this.labelReplace = labelReplace;
    this.attachChangeListener = attachChangeListener;

    // Private variables
    this.fileUploadGroup = null;
    this.fileUploadInput = null;
    this.fileUploadButton = null;
    this.fileUploadList = null;

    // Bind `this` for use in callbacks
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.fileUploadGroup = this.element.closest(this.groupSelector);
    this.fileUploadInput = this.element;
    this.fileUploadButton = queryOne(this.buttonSelector, this.fileUploadGroup);
    this.fileUploadList = queryOne(this.listSelector, this.fileUploadGroup);

    // Bind events on input
    if (this.attachChangeListener && this.fileUploadInput) {
      this.fileUploadInput.addEventListener('change', this.handleChange);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof MegaMenu
   * @instance
   *
   * @example
   * // Registering a callback for the 'onOpen' event
   * megaMenu.on('onOpen', (event) => {
   *   console.log('Open event occurred!', event);
   * });
   */
  on(eventName, callback) {
    this.eventManager.on(eventName, callback);
  }

  /**
   * Trigger a component event.
   *
   * @param {string} eventName - The name of the event to trigger.
   * @param {any} eventData - Data associated with the event.
   * @memberof MegaMenu
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachChangeListener && this.fileUploadInput) {
      this.fileUploadInput.removeEventListener('change', this.handleChange);
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * @param {Event} e
   */
  handleChange(e) {
    if (!('files' in e.target)) {
      if (this.fileUploadButton.hasAttribute(this.labelChoose)) {
        this.fileUploadButton.innerHTML = this.fileUploadButton.getAttribute(
          this.labelChoose,
        );
      }
      return;
    }

    let fileList = '';

    // Get file names
    Array.prototype.forEach.call(e.target.files, (file) => {
      const fileSize = formatBytes(file.size, 1);
      const fileExtension = file.name.split('.').pop();
      fileList += `<li class="ecl-file-upload__item">
      <span class="ecl-file-upload__item-name">${file.name}</span>
      <span class="ecl-file-upload__item-meta">(${fileSize} - ${fileExtension})</span>
      </li>`;
    });

    // Update file list
    this.fileUploadList.innerHTML = fileList;

    // Update button label
    if (this.fileUploadButton.hasAttribute(this.labelReplace)) {
      this.fileUploadButton.innerHTML = this.fileUploadButton.getAttribute(
        this.labelReplace,
      );
    }

    const eventDetails = { files: e.target.files, event: e };
    this.trigger('onSelection', eventDetails);
  }
}

export default FileUpload;
