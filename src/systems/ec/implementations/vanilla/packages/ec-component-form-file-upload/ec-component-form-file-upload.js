import { queryOne } from '@ecl/ec-base/helpers/dom';

// Polyfill for closest (support for IE11)
if (!Element.prototype.matches)
  Element.prototype.matches = Element.prototype.msMatchesSelector;
if (!Element.prototype.closest)
  Element.prototype.closest = function poly(selector) {
    let el = this;
    while (el) {
      if (el.matches(selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.fileUploadGroupSelector Selector for file upload form group
 * @param {String} options.fileUploadButtonSelector Selector for file upload button
 * @param {String} options.fileUploadContainerSelector Selector for container of file names
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
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
    // eslint-disable-next-line no-param-reassign
    root.ECLFileUpload = fileUpload;
    return fileUpload;
  }

  constructor(
    element,
    {
      fileUploadGroupSelector = '[data-ecl-file-upload-group]',
      fileUploadButtonSelector = '[data-ecl-file-upload-button]',
      fileUploadContainerSelector = '[data-ecl-file-upload-container]',
      attachChangeListener = true,
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
    this.fileUploadGroupSelector = fileUploadGroupSelector;
    this.fileUploadButtonSelector = fileUploadButtonSelector;
    this.fileUploadContainerSelector = fileUploadContainerSelector;
    this.attachChangeListener = attachChangeListener;

    // Private variables
    this.fileUploadGroup = null;
    this.fileUploadInput = null;
    this.fileUploadButton = null;
    this.fileUploadContainer = null;

    // Bind `this` for use in callbacks
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.fileUploadGroup = this.element.closest(this.fileUploadGroupSelector);
    this.fileUploadInput = this.element;
    this.fileUploadContainer = queryOne(
      this.fileUploadContainerSelector,
      this.fileUploadGroup
    );

    // Bind change event on input
    console.log(this.fileUploadGroup);
    console.log(this.fileUploadInput);
    console.log(this.fileUploadContainer);
    if (this.attachChangeListener && this.fileUploadInput) {
      console.log('bind');
      this.fileUploadInput.addEventListener('change', this.handleChange);
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachChangeListener && this.fileUploadInput) {
      this.fileUploadInput.removeEventListener('change', this.handleChange);
    }
  }

  /**
   * @param {Event} e
   */
  handleChange(e) {
    console.log('change');
    if (!('files' in e.target)) return this;

    console.log(e.target.files);
    return this;
  }
}

export default FileUpload;
