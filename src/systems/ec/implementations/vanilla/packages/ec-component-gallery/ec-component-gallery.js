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
      overlayPreviousSelector: overlayPreviousSelector = '[data-ecl-gallery-overlay-previous]',
      overlayNextSelector: overlayNextSelector = '[data-ecl-gallery-overlay-next]',
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
    this.overlayPreviousSelector = overlayPreviousSelector;
    this.overlayNextSelector = overlayNextSelector;
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
    this.overlayPrevious = null;
    this.overlayNext = null;
    this.selectedItem = null;

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
    this.overlayPrevious = queryOne(this.overlayPreviousSelector, this.overlay);
    this.overlayNext = queryOne(this.overlayNextSelector, this.overlay);

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

    // Bind click event on previous button
    if (this.attachClickListener && this.overlayPrevious) {
      this.overlayPrevious.addEventListener(
        'click',
        this.handleClickOnPreviousButton.bind(this)
      );
    }

    // Bind click event on next button
    if (this.attachClickListener && this.overlayNext) {
      this.overlayNext.addEventListener(
        'click',
        this.handleClickOnNextButton.bind(this)
      );
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

    if (this.attachClickListener && this.overlayPrevious) {
      this.overlayPrevious.removeEventListener(
        'click',
        this.handleClickOnPreviousButton
      );
    }

    if (this.attachClickListener && this.overlayNext) {
      this.overlayNext.removeEventListener(
        'click',
        this.handleClickOnNextButton
      );
    }
  }

  updateOverlay(selectedItem) {
    this.selectedItem = selectedItem;

    // Update image
    this.overlayImage.setAttribute('src', selectedItem.getAttribute('href'));
    Object.assign(this.overlayImageFallback.style, {
      backgroundImage: `url(${selectedItem.getAttribute('href')})`,
      maxHeight: `${this.overlayImage.naturalHeight}px`,
      maxWidth: `${this.overlayImage.naturalWidth}px`,
    });

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
  }

  handleClickOnCloseButton() {
    this.overlay.setAttribute('aria-hidden', 'true');

    return this;
  }

  handleClickOnItem(e) {
    e.preventDefault();
    this.overlay.setAttribute('aria-hidden', 'false');

    // Update overlay
    this.updateOverlay(e.currentTarget);

    return this;
  }

  handleClickOnPreviousButton() {
    // Get current id
    const currentId = this.selectedItem.getAttribute(
      'data-ecl-gallery-item-id'
    );

    // Get previous id
    let previousId = +currentId - 1;
    if (previousId < 0) previousId = this.galleryItems.length - 1;

    // Update overlay
    this.updateOverlay(this.galleryItems[previousId]);

    return this;
  }

  handleClickOnNextButton() {
    // Get current id
    const currentId = this.selectedItem.getAttribute(
      'data-ecl-gallery-item-id'
    );

    // Get next id
    let nextId = +currentId + 1;
    if (nextId >= this.galleryItems.length) nextId = 0;

    // Update overlay
    this.updateOverlay(this.galleryItems[nextId]);

    return this;
  }
}

export default Gallery;
