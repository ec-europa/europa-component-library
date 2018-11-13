import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

class Gallery {
  constructor(
    element,
    {
      galleryItemSelector: galleryItemSelector = '[data-ecl-gallery-item]',
      descriptionSelector: descriptionSelector = '[data-ecl-gallery-description]',
      metaSelector: metaSelector = '[data-ecl-gallery-meta]',
      closeButtonSelector: closeButtonSelector = '[data-ecl-gallery-close]',
      overlaySelector: overlaySelector = '[data-ecl-gallery-overlay]',
      overlayImageSelector: overlayImageSelector = '[data-ecl-gallery-overlay-image]',
      overlayImageFallbackSelector: overlayImageFallbackSelector = '[data-ecl-gallery-overlay-image-fallback]',
      overlayCounterCurrentSelector: overlayCounterCurrentSelector = '[data-ecl-gallery-overlay-counter-current]',
      overlayCounterMaxSelector: overlayCounterMaxSelector = '[data-ecl-gallery-overlay-counter-max]',
      overlayDescriptionSelector: overlayDescriptionSelector = '[data-ecl-gallery-overlay-description]',
      overlayMetaSelector: overlayMetaSelector = '[data-ecl-gallery-overlay-meta]',
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
    this.descriptionSelector = descriptionSelector;
    this.metaSelector = metaSelector;
    this.closeButtonSelector = closeButtonSelector;
    this.overlaySelector = overlaySelector;
    this.overlayImageSelector = overlayImageSelector;
    this.overlayImageFallbackSelector = overlayImageFallbackSelector;
    this.overlayCounterCurrentSelector = overlayCounterCurrentSelector;
    this.overlayCounterMaxSelector = overlayCounterMaxSelector;
    this.overlayDescriptionSelector = overlayDescriptionSelector;
    this.overlayMetaSelector = overlayMetaSelector;
    this.attachClickListener = attachClickListener;

    // Private variables
    this.galleryItems = null;
    this.meta = null;
    this.closeButton = null;
    this.overlay = null;
    this.overlayImage = null;
    this.overlayImageFallback = null;
    this.overlayCounterCurrent = null;
    this.overlayCounterMax = null;
    this.overlayDescription = null;
    this.overlayMeta = null;

    // Bind `this` for use in callbacks
    this.handleClickOnCloseButton = this.handleClickOnCloseButton.bind(this);
  }

  init() {
    // Query elements
    this.galleryItems = queryAll(this.galleryItemSelector, this.element);
    this.closeButton = queryOne(this.closeButtonSelector, this.element);
    this.overlay = queryOne(this.overlaySelector, this.element);
    this.overlayImage = queryOne(this.overlayImageSelector, this.overlay);
    this.overlayImageFallback = queryOne(
      this.overlayImageFallbackSelector,
      this.overlay
    );
    this.overlayCounterCurrent = queryOne(
      this.overlayCounterCurrentSelector,
      this.overlay
    );
    this.overlayCounterMax = queryOne(
      this.overlayCounterMaxSelector,
      this.overlay
    );
    this.overlayDescription = queryOne(
      this.overlayDescriptionSelector,
      this.overlay
    );
    this.overlayMeta = queryOne(this.overlayMetaSelector, this.overlay);

    // Bind click event on close button
    if (this.attachClickListener && this.closeButton) {
      this.closeButton.addEventListener('click', this.handleClickOnCloseButton);
    }

    // Bind click event on gallery items
    if (this.attachClickListener && this.galleryItems) {
      this.galleryItems.forEach(galleryItem => {
        galleryItem.addEventListener(
          'click',
          this.handleClickOnItem.bind(this)
        );
      });
    }

    // Add number to gallery items
    this.galleryItems.forEach((galleryItem, key) => {
      galleryItem.setAttribute('data-ecl-gallery-item-id', key);
    });
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

    // Get clicked item
    const selectedItem = e.currentTarget;

    // Update image
    this.overlayImage.setAttribute('src', selectedItem.getAttribute('href'));
    this.overlayImageFallback.setAttribute(
      'style',
      `url(${selectedItem.getAttribute('href')})`
    );

    // Update counter
    this.overlayCounterCurrent.innerHTML =
      +selectedItem.getAttribute('data-ecl-gallery-item-id') + 1;
    this.overlayCounterMax.innerHTML = this.galleryItems.length;

    // Update description
    this.overlayDescription.innerHTML = queryOne(
      this.descriptionSelector,
      selectedItem
    ).innerHTML;

    // Update meta
    this.overlayMeta.innerHTML = queryOne(
      this.metaSelector,
      selectedItem
    ).innerHTML;

    return this;
  }
}

export default Gallery;
