import { queryOne } from '@ecl/eu-base/helpers/dom';
import { formatBytes } from '@ecl/eu-base/helpers/utilities';

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

  constructor(
    element,
    {
      groupSelector = '[data-ecl-file-upload-group]',
      buttonSelector = '[data-ecl-file-upload-button]',
      listSelector = '[data-ecl-file-upload-list]',
      labelChoose = 'data-ecl-file-upload-label-choose',
      labelReplace = 'data-ecl-file-upload-label-replace',
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
    this.fileUploadGroup = this.element.closest(this.groupSelector);
    this.fileUploadInput = this.element;
    this.fileUploadButton = queryOne(this.buttonSelector, this.fileUploadGroup);
    this.fileUploadList = queryOne(this.listSelector, this.fileUploadGroup);

    // Bind events on input
    if (this.attachChangeListener && this.fileUploadInput) {
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
    if (!('files' in e.target)) {
      if (this.fileUploadButton.hasAttribute(this.labelChoose)) {
        this.fileUploadButton.innerHTML = this.fileUploadButton.getAttribute(
          this.labelChoose
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
        this.labelReplace
      );
    }
  }
}

export default FileUpload;
