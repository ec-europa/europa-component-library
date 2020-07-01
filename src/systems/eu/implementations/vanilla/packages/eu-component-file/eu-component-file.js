import { queryOne } from '@ecl/eu-base/helpers/dom';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.translationToggleSelector Selector for toggling translatoins section
 * @param {String} options.translationContainerSelector Selector for translations section container
 * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
 */
export class FileDownload {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {FileDownload} An instance of FileDownload.
   */
  static autoInit(root, { FILE_DOWNLOAD: defaultOptions = {} } = {}) {
    const fileDownload = new FileDownload(root, defaultOptions);
    fileDownload.init();
    root.ECLFileDownload = fileDownload;
    return fileDownload;
  }

  constructor(
    element,
    {
      translationToggleSelector = '[data-ecl-file-translation-toggle]',
      translationContainerSelector = '[data-ecl-file-translation-container]',
      attachClickListener = true,
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
    this.translationToggleSelector = translationToggleSelector;
    this.translationContainerSelector = translationContainerSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.translationToggle = null;
    this.translationContainer = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.translationToggle = queryOne(
      this.translationToggleSelector,
      this.element
    );
    this.translationContainer = queryOne(
      this.translationContainerSelector,
      this.element
    );

    // Bind click event on toggle
    if (this.attachClickListener && this.translationToggle) {
      this.translationToggle.addEventListener(
        'click',
        this.handleClickOnToggle
      );
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.translationToggle) {
      this.translationToggle.removeEventListener(
        'click',
        this.handleClickOnToggle
      );
    }
  }

  /**
   * @param {Event} e
   */
  handleClickOnToggle(e) {
    e.preventDefault();

    if (this.translationContainer.getAttribute('aria-expanded') === 'true') {
      this.translationContainer.setAttribute('aria-expanded', 'false');
    } else {
      this.translationContainer.setAttribute('aria-expanded', 'true');
    }

    return this;
  }
}

export default FileDownload;
