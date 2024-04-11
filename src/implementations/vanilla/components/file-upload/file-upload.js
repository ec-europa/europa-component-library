import { queryOne, formatBytes } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.groupSelector Selector for file upload form group
 * @param {String} options.buttonSelector Selector for file upload button
 * @param {String} options.listSelector Selector for list of file names
 * @param {String} options.labelChoose Label choose state
 * @param {String} options.labelReplace Label replace state
 * @param {Boolean} options.attachChangeListener Whether or not to bind change events on toggle
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
 * @param {Boolean} options.attachKeyListener Whether or not to bind keyboard events on toggle
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

  constructor(
    element,
    {
      groupSelector = '[data-ecl-file-upload-group]',
      buttonSelector = '[data-ecl-file-upload-button]',
      listSelector = '[data-ecl-file-upload-list]',
      labelChoose = 'data-ecl-file-upload-label-choose',
      labelReplace = 'data-ecl-file-upload-label-replace',
      attachChangeListener = true,
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
    this.groupSelector = groupSelector;
    this.buttonSelector = buttonSelector;
    this.listSelector = listSelector;
    this.labelChoose = labelChoose;
    this.labelReplace = labelReplace;
    this.attachChangeListener = attachChangeListener;
    this.attachClickListener = attachClickListener;
    this.attachKeyListener = attachKeyListener;

    // Private variables
    this.fileUploadGroup = null;
    this.fileUploadInput = null;
    this.fileUploadButton = null;
    this.fileUploadList = null;
    this.isDisabled = false;

    // Bind `this` for use in callbacks
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
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
    if (this.fileUploadInput) {
      if (this.attachChangeListener) {
        this.fileUploadInput.addEventListener('change', this.handleChange);
      }
      if (this.attachKeyListener) {
        this.fileUploadInput.addEventListener('keydown', this.handleKeyboard);
      }
    }

    // Bind events on button
    if (this.fileUploadButton) {
      if (this.attachClickListener) {
        this.fileUploadButton.addEventListener('click', this.handleClick);
      }
      if (this.attachKeyListener) {
        this.fileUploadButton.addEventListener('keydown', this.handleKeyboard);
      }
    }

    // Handle disabled
    if (this.fileUploadInput) {
      // Get disabled status
      this.isDisabled = this.fileUploadInput.getAttribute('aria-disabled');

      // Manually switch between "disabled" and "aria-disabled"
      if (this.fileUploadInput.hasAttribute('disabled')) {
        this.isDisabled = true;
        this.fileUploadInput.removeAttribute('disabled');
        this.fileUploadInput.setAttribute('aria-disabled', 'true');

        if (
          this.fileUploadButton &&
          this.fileUploadButton.hasAttribute('disabled')
        ) {
          this.fileUploadButton.removeAttribute('disabled');
          this.fileUploadButton.setAttribute('aria-disabled', 'true');
        }
      }
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
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
  }

  /**
   * @param {Event} e
   */
  handleClick(e) {
    if (this.isDisabled) {
      e.preventDefault();
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboard(e) {
    if (this.isDisabled && (e.keyCode === 32 || e.key === 'Enter')) {
      e.preventDefault();
    }
  }
}

export default FileUpload;
