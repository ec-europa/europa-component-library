import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

class Gallery {
  constructor(
    element,
    {
      galleryItemSelector: galleryItemSelector = '[data-ecl-gallery-item]',
      closeButtonSelector: closeButtonSelector = '[data-ecl-gallery-close]',
      overlaySelector: overlaySelector = '[data-ecl-gallery-overlay]',
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
    this.galleryItemSelector = galleryItemSelector;
    this.closeButtonSelector = closeButtonSelector;
    this.overlaySelector = overlaySelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.galleryItems = null;
    this.closeButton = null;
    this.overlay = null;
    this.selectedItemId = null;

    // Bind `this` for use in callbacks
    this.handleClickOnCloseButton = this.handleClickOnCloseButton.bind(this);
  }

  init() {
    // Query elements
    this.galleryItems = queryAll(this.galleryItemSelector, this.element);
    this.closeButton = queryOne(this.closeButtonSelector, this.element);
    this.overlay = queryOne(this.overlaySelector, this.element);

    // Bind click event on close button
    if (this.attachClickListener && this.closeButton) {
      this.closeButton.addEventListener('click', this.handleClickOnCloseButton);
    }

    // Bind click event on gallery items
    if (this.attachClickListener && this.galleryItems) {
      this.galleryItems.forEach((galleryItem, key) => {
        this.selectedItemId = key;
        galleryItem.addEventListener(
          'click',
          this.handleClickOnItem.bind(this)
        );
      });
    }
  }

  destroy() {
    if (this.attachClickListener && this.closeButton) {
      this.closeButton.removeEventListener(
        'click',
        this.handleClickOnCloseButton
      );
    }

    if (this.attachClickListener && this.galleryItems) {
      this.galleryItems.forEach(galleryItem => {
        galleryItem.removeEventListener('click', this.handleClickOnItem);
      });
    }
  }

  handleClickOnCloseButton() {
    this.overlay.setAttribute('aria-hidden', 'true');

    return this;
  }

  handleClickOnItem(e) {
    e.preventDefault();
    this.overlay.setAttribute('aria-hidden', 'false');

    return this;
  }
}

export default Gallery;
