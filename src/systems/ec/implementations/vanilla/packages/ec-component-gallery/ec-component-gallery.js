import createFocusTrap from 'focus-trap';

import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.galleryItemSelector Selector for gallery element
 * @param {String} options.descriptionSelector Selector for gallery description element
 * @param {String} options.metaSelector Selector for gallery meta info element
 * @param {String} options.closeButtonSelector Selector for close button element
 * @param {String} options.allButtonSelector Selector for view all button element
 * @param {String} options.overlaySelector Selector for gallery overlay element
 * @param {String} options.overlayHeaderSelector Selector for gallery overlay header element
 * @param {String} options.overlayFooterSelector Selector for gallery overlay footer element
 * @param {String} options.overlayImageSelector DEPRECATED! Selector for gallery overlay image element
 * @param {String} options.overlayMediaSelector Selector for gallery overlay media element
 * @param {String} options.overlayCounterCurrentSelector Selector for gallery overlay current number element
 * @param {String} options.overlayCounterMaxSelector Selector for display of number of elements in the gallery overlay
 * @param {String} options.overlayDownloadSelector Selector for gallery overlay download element
 * @param {String} options.overlayShareSelector Selector for gallery overlay share element
 * @param {String} options.overlayDescriptionSelector Selector for gallery overlay description element
 * @param {String} options.overlayMetaSelector Selector for gallery overlay meta info element
 * @param {String} options.overlayPreviousSelector Selector for gallery overlay previous link element
 * @param {String} options.overlayNextSelector Selector for gallery overlay next link element
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachKeyListener Whether or not to bind keyup events
 */
export class Gallery {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Gallery} An instance of Gallery.
   */
  static autoInit(root, { GALLERY: defaultOptions = {} } = {}) {
    const gallery = new Gallery(root, defaultOptions);
    gallery.init();
    root.ECLGallery = gallery;
    return gallery;
  }

  constructor(
    element,
    {
      galleryItemSelector = '[data-ecl-gallery-item]',
      descriptionSelector = '[data-ecl-gallery-description]',
      metaSelector = '[data-ecl-gallery-meta]',
      closeButtonSelector = '[data-ecl-gallery-close]',
      viewAllSelector = '[data-ecl-gallery-all]',
      countSelector = '[data-ecl-gallery-count]',
      overlaySelector = '[data-ecl-gallery-overlay]',
      overlayHeaderSelector = '[data-ecl-gallery-overlay-header]',
      overlayFooterSelector = '[data-ecl-gallery-overlay-footer]',
      overlayImageSelector = '[data-ecl-gallery-overlay-image]', // DEPRECATED
      overlayMediaSelector = '[data-ecl-gallery-overlay-media]',
      overlayCounterCurrentSelector = '[data-ecl-gallery-overlay-counter-current]',
      overlayCounterMaxSelector = '[data-ecl-gallery-overlay-counter-max]',
      overlayDownloadSelector = '[data-ecl-gallery-overlay-download]',
      overlayShareSelector = '[data-ecl-gallery-overlay-share]',
      overlayDescriptionSelector = '[data-ecl-gallery-overlay-description]',
      overlayMetaSelector = '[data-ecl-gallery-overlay-meta]',
      overlayPreviousSelector = '[data-ecl-gallery-overlay-previous]',
      overlayNextSelector = '[data-ecl-gallery-overlay-next]',
      attachClickListener = true,
      attachKeyListener = true,
      attachResizeListener = true,
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
    this.viewAllSelector = viewAllSelector;
    this.countSelector = countSelector;
    this.overlaySelector = overlaySelector;
    this.overlayHeaderSelector = overlayHeaderSelector;
    this.overlayFooterSelector = overlayFooterSelector;
    this.overlayImageSelector = overlayImageSelector; // DEPRECATED
    this.overlayMediaSelector = overlayMediaSelector;
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
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.galleryItems = null;
    this.meta = null;
    this.closeButton = null;
    this.viewAll = null;
    this.count = null;
    this.overlay = null;
    this.overlayHeader = null;
    this.overlayFooter = null;
    this.overlayImage = null; // DEPRECATED
    this.overlayMedia = null;
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
    this.isDesktop = false;
    this.resizeTimer = null;
    this.breakpointMd = 768;
    this.imageHeight = 185;

    // Bind `this` for use in callbacks
    this.handleClickOnCloseButton = this.handleClickOnCloseButton.bind(this);
    this.handleClickOnViewAll = this.handleClickOnViewAll.bind(this);
    this.handleClickOnItem = this.handleClickOnItem.bind(this);
    this.handleKeyPressOnItem = this.handleKeyPressOnItem.bind(this);
    this.handleClickOnPreviousButton =
      this.handleClickOnPreviousButton.bind(this);
    this.handleClickOnNextButton = this.handleClickOnNextButton.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    // Query elements
    this.galleryItems = queryAll(this.galleryItemSelector, this.element);
    this.closeButton = queryOne(this.closeButtonSelector, this.element);
    this.viewAll = queryOne(this.viewAllSelector, this.element);
    this.count = queryOne(this.countSelector, this.element);
    this.overlay = queryOne(this.overlaySelector, this.element);
    this.overlayHeader = queryOne(this.overlayHeaderSelector, this.overlay);
    this.overlayFooter = queryOne(this.overlayFooterSelector, this.overlay);
    this.overlayImage = queryOne(this.overlayImageSelector, this.overlay); // DEPRECATED
    this.overlayMedia = queryOne(this.overlayMediaSelector, this.overlay);
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

    // Bind click event on view all (open first item)
    if (this.attachClickListener && this.viewAll) {
      this.viewAll.addEventListener('click', this.handleClickOnViewAll);
    }

    // Bind click event on gallery items
    if (this.attachClickListener && this.galleryItems) {
      this.galleryItems.forEach((galleryItem) => {
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

    // Bind resize events
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Init display of gallery items
    this.checkScreen();
    this.hideItems();

    // Add number to gallery items
    this.galleryItems.forEach((galleryItem, key) => {
      galleryItem.setAttribute('data-ecl-gallery-item-id', key);
    });

    // Update counter
    if (this.count) {
      this.count.innerHTML = this.galleryItems.length;
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.closeButton) {
      this.closeButton.removeEventListener(
        'click',
        this.handleClickOnCloseButton
      );
    }

    if (this.attachClickListener && this.viewAll) {
      this.viewAll.removeEventListener('click', this.handleClickOnViewAll);
    }

    if (this.attachClickListener && this.galleryItems) {
      this.galleryItems.forEach((galleryItem) => {
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

    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  /**
   * Check if current display is desktop or mobile
   */
  checkScreen() {
    if (window.innerWidth > this.breakpointMd) {
      this.isDesktop = true;
      return;
    }

    this.isDesktop = false;
  }

  /**
   * Hide several gallery items by default
   * - 2 "lines" of items on desktop
   * - only 3 items on mobile
   */
  hideItems() {
    if (!this.viewAll) return;

    if (this.isDesktop) {
      const galleryY = this.element.getBoundingClientRect().top;
      let hiddenItemIds = [];
      // We should browse the list first to mark the items to be hidden, and hide them later
      // otherwise, it will interfer with the calculus
      this.galleryItems.forEach((galleryItem, key) => {
        galleryItem.parentNode.classList.remove('ecl-gallery__item--hidden');
        if (
          galleryItem.getBoundingClientRect().top - galleryY >
          this.imageHeight * 2
        ) {
          hiddenItemIds = [...hiddenItemIds, key];
        }
      });
      hiddenItemIds.forEach((id) => {
        this.galleryItems[id].parentNode.classList.add(
          'ecl-gallery__item--hidden'
        );
      });
      return;
    }

    this.galleryItems.forEach((galleryItem, key) => {
      if (key > 2) {
        galleryItem.parentNode.classList.add('ecl-gallery__item--hidden');
      } else {
        galleryItem.parentNode.classList.remove('ecl-gallery__item--hidden');
      }
    });
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.checkScreen();
      this.hideItems();
    }, 200);
  }

  /**
   * @param {HTMLElement} selectedItem Media element
   */
  updateOverlay(selectedItem) {
    this.selectedItem = selectedItem;
    const embeddedVideo = selectedItem.dataset.eclGalleryItemEmbedSrc;
    const video = queryOne('video', selectedItem);
    let mediaElement = null;

    // Update media
    if (embeddedVideo != null) {
      // Media is a embedded video
      mediaElement = document.createElement('div');
      mediaElement.classList.add('ecl-gallery__slider-embed');

      let mediaIframe = null;
      mediaIframe = document.createElement('iframe');
      mediaIframe.setAttribute('src', embeddedVideo);
      mediaIframe.setAttribute('frameBorder', '0');

      if (this.overlayMedia) {
        mediaElement.appendChild(mediaIframe);
        this.overlayMedia.innerHTML = '';
        this.overlayMedia.appendChild(mediaElement);
      }
    } else if (video != null) {
      // Media is a video
      mediaElement = document.createElement('video');
      mediaElement.setAttribute('poster', video.poster);
      mediaElement.setAttribute('controls', 'controls');
      mediaElement.classList.add('ecl-gallery__slider-video');

      if (this.overlayMedia) {
        this.overlayMedia.innerHTML = '';
        this.overlayMedia.appendChild(mediaElement);
      }

      // Get sources
      const sources = queryAll('source', video);
      sources.forEach((source) => {
        const sourceTag = document.createElement('source');
        sourceTag.setAttribute('src', source.getAttribute('src'));
        sourceTag.setAttribute('type', source.getAttribute('type'));
        mediaElement.appendChild(sourceTag);
      });

      // Get tracks
      const tracks = queryAll('track', video);
      tracks.forEach((track) => {
        const trackTag = document.createElement('track');
        trackTag.setAttribute('src', track.getAttribute('src'));
        trackTag.setAttribute('kind', track.getAttribute('kind'));
        trackTag.setAttribute('srclang', track.getAttribute('srcLang'));
        trackTag.setAttribute('label', track.getAttribute('label'));
        mediaElement.appendChild(trackTag);
      });

      mediaElement.load();
    } else {
      // Media is an image
      const image = queryOne('img', selectedItem);

      mediaElement = document.createElement('img');
      mediaElement.setAttribute('src', image.getAttribute('src'));
      mediaElement.setAttribute('alt', image.getAttribute('alt'));
      mediaElement.classList.add('ecl-gallery__slider-image');

      if (this.overlayMedia) {
        this.overlayMedia.innerHTML = '';
        this.overlayMedia.appendChild(mediaElement);
      }

      // DEPRECATED
      else if (this.overlayImage) {
        this.overlayImage.setAttribute(
          'src',
          selectedItem.getAttribute('href')
        );
      }
    }

    // Update counter
    this.overlayCounterCurrent.innerHTML =
      +selectedItem.getAttribute('data-ecl-gallery-item-id') + 1;
    this.overlayCounterMax.innerHTML = this.galleryItems.length;

    // Update share link
    const shareHref = this.selectedItem.getAttribute(
      'data-ecl-gallery-item-share'
    );
    if (shareHref != null) {
      this.overlayShare.href = shareHref;
      this.overlayShare.hidden = false;
    } else {
      this.overlayShare.hidden = true;
    }

    // Update download link
    if (this.overlayDownload != null) {
      if (embeddedVideo != null) {
        this.overlayDownload.hidden = true;
      } else {
        this.overlayDownload.href = this.selectedItem.href;
        this.overlayDownload.hidden = false;
      }
    }

    // Update meta
    if (this.overlayMeta != null) {
      const meta = queryOne(this.metaSelector, selectedItem);
      this.overlayMeta.innerHTML = meta.innerHTML;
    }

    // Update description
    if (this.overlayDescription != null) {
      const description = queryOne(this.descriptionSelector, selectedItem);
      this.overlayDescription.innerHTML = description.innerHTML;
    }

    // Limit image height (fix for FF and IE)
    const maxHeight =
      this.overlay.clientHeight -
      this.overlayHeader.clientHeight -
      this.overlayFooter.clientHeight;
    if (this.overlayMedia) {
      Object.assign(mediaElement.style, {
        maxHeight: `${maxHeight}px`,
      });
    }

    // DEPRECATED
    else if (this.overlayImage) {
      Object.assign(this.overlayImage.style, {
        maxHeight: `${maxHeight}px`,
      });
    }
  }

  /**
   * Handles keyboard events such as Escape and navigation.
   *
   * @param {Event} e
   */
  handleKeyboard(e) {
    // Detect press on Escape
    // Only used if the browser do not support <dialog>
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.handleClickOnCloseButton();
    }
  }

  /**
   * Invoke listeners for close events.
   */
  handleClickOnCloseButton() {
    if (this.isDialogSupported) {
      this.overlay.close();
    } else {
      this.overlay.removeAttribute('open');
    }

    // Remove iframe
    const embeddedVideo = queryOne('iframe', this.overlayMedia);
    if (embeddedVideo) embeddedVideo.remove();

    // Stop video
    const video = queryOne('video', this.overlayMedia);
    if (video) video.pause();

    // Untrap focus
    this.focusTrap.deactivate();

    // Focus item
    this.selectedItem.focus();

    // Enable scroll on body
    document.body.classList.remove('ecl-u-disablescroll');
  }

  /**
   * Invoke listeners for on pressing the spacebar button.
   *
   * @param {Event} e
   */
  handleKeyPressOnItem(e) {
    if (e.keyCode === 32) {
      // If spacebar trigger the modal
      this.handleClickOnItem(e);
    }
  }

  /**
   * Invoke listeners for on click events on view all.
   *
   * @param {Event} e
   */
  handleClickOnViewAll(e) {
    e.preventDefault();

    // Disable scroll on body
    document.body.classList.add('ecl-u-disablescroll');

    // Display overlay
    if (this.isDialogSupported) {
      this.overlay.showModal();
    } else {
      this.overlay.setAttribute('open', '');
    }

    // Update overlay
    this.updateOverlay(this.galleryItems[0]);

    // Trap focus
    this.focusTrap.activate();
  }

  /**
   * Invoke listeners for on click events on the given gallery item.
   *
   * @param {Event} e
   */
  handleClickOnItem(e) {
    e.preventDefault();

    // Disable scroll on body
    document.body.classList.add('ecl-u-disablescroll');

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

  /**
   * Invoke listeners for on click events on previous navigation link.
   */
  handleClickOnPreviousButton() {
    // Get current id
    const currentId = this.selectedItem.getAttribute(
      'data-ecl-gallery-item-id'
    );

    // Get previous id
    let previousId = +currentId - 1;
    if (previousId < 0) previousId = this.galleryItems.length - 1;

    // Stop video
    const video = queryOne('video', this.selectedItem);
    if (video) video.pause();

    // Update overlay
    this.updateOverlay(this.galleryItems[previousId]);
    this.selectedItem = this.galleryItems[previousId];

    return this;
  }

  /**
   * Invoke listeners for on click events on next navigation link.
   */
  handleClickOnNextButton() {
    // Get current id
    const currentId = this.selectedItem.getAttribute(
      'data-ecl-gallery-item-id'
    );

    // Get next id
    let nextId = +currentId + 1;
    if (nextId >= this.galleryItems.length) nextId = 0;

    // Stop video
    const video = queryOne('video', this.selectedItem);
    if (video) video.pause();

    // Update overlay
    this.updateOverlay(this.galleryItems[nextId]);
    this.selectedItem = this.galleryItems[nextId];

    return this;
  }
}

export default Gallery;
