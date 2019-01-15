import { queryOne } from '@ecl/ec-base/helpers/dom';

class FileDownload {
  constructor(
    element,
    {
      translationToggleSelector: translationToggleSelector = '[data-ecl-file-translation-toggle]',
      translationContainerSelector: translationContainerSelector = '[data-ecl-file-translation-container]',
      attachClickListener: attachClickListener = true,
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

  destroy() {
    if (this.attachClickListener && this.translationToggle) {
      this.translationToggle.removeEventListener(
        'click',
        this.handleClickOnToggle
      );
    }
  }

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
