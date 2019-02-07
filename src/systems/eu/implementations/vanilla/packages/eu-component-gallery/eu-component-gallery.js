import createFocusTrap from 'focus-trap';

import { queryOne, queryAll } from '@ecl/eu-base/helpers/dom';

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
      overlayDownloadSelector: overlayDownloadSelector = '[data-ecl-gallery-overlay-download]',
      overlayShareSelector: overlayShareSelector = '[data-ecl-gallery-overlay-share]',
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
    this.overlayDownloadSelector = overlayDownloadSelector;
    this.overlayShareSelector = overlayShareSelector;
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
    this.overlayDownload = null;
    this.overlayShare = null;
    this.overlayDescription = null;
    this.overlayMeta = null;
    this.overlayPrevious = null;
    this.overlayNext = null;
    this.selectedItem = null;
    this.focusTrap = null;

    // Bind `this` for use in callbacks
    this.handleClickOnCloseButton = this.handleClickOnCloseButton.bind(this);
    this.handleClickOnItem = this.handleClickOnItem.bind(this);
    this.handleKeyPressOnItem = this.handleKeyPressOnItem.bind(this);
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
    this.overlayDownload = queryOne(this.overlayDownloadSelector, this.overlay);
    this.overlayShare = queryOne(this.overlayShareSelector, this.overlay);
    this.overlayDescription = queryOne(
      this.overlayDescriptionSelector,
      this.overlay
    );
    this.overlayMeta = queryOne(this.overlayMetaSelector, this.overlay);
    this.overlayPrevious = queryOne(this.overlayPreviousSelector, this.overlay);
    this.overlayNext = queryOne(this.overlayNextSelector, this.overlay);

    // Create focus trap
    this.focusTrap = createFocusTrap(this.overlay, {
      escapeDeactivates: false,
      returnFocusOnDeactivate: false,
    });

    // Polyfill to support <dialog>
    this.isDialogSupported = true;
    if (!window.HTMLDialogElement) {
      this.isDialogSupported = false;
    }

    // Bind click event on close button
    if (this.attachClickListener && this.closeButton) {
      this.closeButton.addEventListener('click', this.handleClickOnCloseButton);
    }

    // Bind click event on gallery items
    if (this.attachClickListener && this.galleryItems) {
      this.galleryItems.forEach(galleryItem => {
        if (this.attachClickListener) {
          galleryItem.addEventListener('click', this.handleClickOnItem);
        }
        if (this.attachKeyListener) {
          galleryItem.addEventListener('keyup', this.handleKeyPressOnItem);
        }
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

    // Bind other close event
    if (!this.isDialogSupported && this.attachKeyListener && this.overlay) {
      this.overlay.addEventListener('keyup', this.handleKeyboard);
    }
    if (this.isDialogSupported && this.overlay) {
      this.overlay.addEventListener('close', this.handleClickOnCloseButton);
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

    if (!this.isDialogSupported && this.attachKeyListener && this.overlay) {
      this.overlay.removeEventListener('keyup', this.handleKeyboard);
    }
    if (this.isDialogSupported && this.overlay) {
      this.overlay.removeEventListener('close', this.handleClickOnCloseButton);
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

    // Update links
    this.overlayDownload.href = this.selectedItem.href;
    this.overlayShare.href = this.selectedItem.getAttribute(
      'data-ecl-gallery-item-share'
    );

    // Update meta
    const meta = queryOne(this.metaSelector, selectedItem);
    this.overlayMeta.innerHTML = meta.innerHTML;

    // Update description
    const description = queryOne(this.descriptionSelector, selectedItem);
    this.overlayDescription.innerHTML = description.innerHTML;
  }

  handleKeyboard(e) {
    // Detect press on Escape
    // Only used if the browser do not support <dialog>
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.handleClickOnCloseButton();
    }
  }

  handleClickOnCloseButton() {
    if (this.isDialogSupported) {
      this.overlay.close();
    } else {
      this.overlay.removeAttribute('open');
    }

    // Untrap focus
    this.focusTrap.deactivate();

    // Focus item
    this.selectedItem.focus();
  }

  handleKeyPressOnItem(e) {
    if (e.keyCode === 32) {
      // If spacebar trigger the modal
      this.handleClickOnItem(e);
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

    // Update overlay
    this.updateOverlay(e.currentTarget);

    // Trap focus
    this.focusTrap.activate();
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
    this.selectedItem = this.galleryItems[previousId];

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
    this.selectedItem = this.galleryItems[nextId];

    return this;
  }
}

export default Gallery;
