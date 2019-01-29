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
      overlayHeaderelector: overlayHeaderSelector = '[data-ecl-gallery-overlay-header]',
      overlayFooterSelector: overlayFooterSelector = '[data-ecl-gallery-overlay-footer]',
      overlayImageSelector: overlayImageSelector = '[data-ecl-gallery-overlay-image]',
      overlayCounterCurrentSelector: overlayCounterCurrentSelector = '[data-ecl-gallery-overlay-counter-current]',
      overlayCounterMaxSelector: overlayCounterMaxSelector = '[data-ecl-gallery-overlay-counter-max]',
      overlayDescriptionSelector: overlayDescriptionSelector = '[data-ecl-gallery-overlay-description]',
      overlayMetaSelector: overlayMetaSelector = '[data-ecl-gallery-overlay-meta]',
      overlayPreviousSelector: overlayPreviousSelector = '[data-ecl-gallery-overlay-previous]',
      overlayNextSelector: overlayNextSelector = '[data-ecl-gallery-overlay-next]',
      attachClickListener: attachClickListener = true,
      attachKeyListener: attachKeyListener = true,
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
    this.overlayHeaderSelector = overlayHeaderSelector;
    this.overlayFooterSelector = overlayFooterSelector;
    this.overlayImageSelector = overlayImageSelector;
    this.overlayCounterCurrentSelector = overlayCounterCurrentSelector;
    this.overlayCounterMaxSelector = overlayCounterMaxSelector;
    this.overlayDescriptionSelector = overlayDescriptionSelector;
    this.overlayMetaSelector = overlayMetaSelector;
    this.overlayPreviousSelector = overlayPreviousSelector;
    this.overlayNextSelector = overlayNextSelector;
    this.attachClickListener = attachClickListener;
    this.attachKeyListener = attachKeyListener;

    // Private variables
    this.galleryItems = null;
    this.meta = null;
    this.closeButton = null;
    this.overlay = null;
    this.overlayHeader = null;
    this.overlayFooter = null;
    this.overlayImage = null;
    this.overlayCounterCurrent = null;
    this.overlayCounterMax = null;
    this.overlayDescription = null;
    this.overlayMeta = null;
    this.overlayPrevious = null;
    this.overlayNext = null;
    this.selectedItem = null;

    // Bind `this` for use in callbacks
    this.handleClickOnCloseButton = this.handleClickOnCloseButton.bind(this);
    this.handleClickOnItem = this.handleClickOnItem.bind(this);
    this.handleClickOnPreviousButton = this.handleClickOnPreviousButton.bind(
      this
    );
    this.handleClickOnNextButton = this.handleClickOnNextButton.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
  }

  init() {
    // Query elements
    this.galleryItems = queryAll(this.galleryItemSelector, this.element);
    this.closeButton = queryOne(this.closeButtonSelector, this.element);
    this.overlay = queryOne(this.overlaySelector, this.element);
    this.overlayHeader = queryOne(this.overlayHeaderSelector, this.overlay);
    this.overlayFooter = queryOne(this.overlayFooterSelector, this.overlay);
    this.overlayImage = queryOne(this.overlayImageSelector, this.overlay);
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

    // Polyfill to support <dialog>
    this.isDialogSupported = true;
    if (!window.HTMLDialogElement) {
      this.isDialogSupported = false;
    }

    // Hack to detect when focus gets out of the modal
    this.overlay.addEventListener('transitionend', () => {
      this.closeButton.focus();
    });

    // Bind click event on close button
    if (this.attachClickListener && this.closeButton) {
      this.closeButton.addEventListener('click', this.handleClickOnCloseButton);
    }

    // Bind click event on gallery items
    if (this.attachClickListener && this.galleryItems) {
      this.galleryItems.forEach(galleryItem => {
        galleryItem.addEventListener('click', this.handleClickOnItem);
      });
    }

    // Bind click event on previous button
    if (this.attachClickListener && this.overlayPrevious) {
      this.overlayPrevious.addEventListener(
        'click',
        this.handleClickOnPreviousButton
      );
    }

    // Bind click event on next button
    if (this.attachClickListener && this.overlayNext) {
      this.overlayNext.addEventListener('click', this.handleClickOnNextButton);
    }

    // Bind keyboard event
    if (!this.isDialogSupported && this.attachKeyListener && this.element) {
      this.element.addEventListener('keypress', this.handleKeyboard);
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

    if (!this.isDialogSupported && this.attachKeyListener && this.element) {
      this.element.removeEventListener('keypress', this.handleKeyboard);
    }
  }

  updateOverlay(selectedItem) {
    this.selectedItem = selectedItem;

    // Update image
    this.overlayImage.setAttribute('src', selectedItem.getAttribute('href'));

    // Limit image height (fix for FF and IE)
    const maxHeight =
      this.overlay.clientHeight -
      this.overlayHeader.clientHeight -
      this.overlayFooter.clientHeight;
    Object.assign(this.overlayImage.style, {
      maxHeight: `${maxHeight}px`,
    });

    // Update counter
    this.overlayCounterCurrent.innerHTML =
      +selectedItem.getAttribute('data-ecl-gallery-item-id') + 1;
    this.overlayCounterMax.innerHTML = this.galleryItems.length;

    // Update meta
    const meta = queryOne(this.metaSelector, selectedItem);
    this.overlayMeta.innerHTML = meta.innerHTML;

    // Update description
    // Use a copy of descrpiton to prevent data loss
    const description = queryOne(this.descriptionSelector, selectedItem);
    const descriptionCopy = [...description];
    descriptionCopy.removeChild(meta);
    this.overlayDescription.innerHTML = descriptionCopy.innerHTML;
  }

  handleKeyboard(e) {
    if (e.key === 'Escape') {
      this.handleClickOnCloseButton();
    }
  }

  handleClickOnCloseButton() {
    if (this.isDialogSupported) {
      this.overlay.close();
    } else {
      this.overlay.removeAttribute('open');
    }
  }

  handleClickOnItem(e) {
    e.preventDefault();
    // Display overlay
    if (this.isDialogSupported) {
      this.overlay.showModal();
    } else {
      this.overlay.setAttribute('open', '');
    }
    this.closeButton.focus();

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
