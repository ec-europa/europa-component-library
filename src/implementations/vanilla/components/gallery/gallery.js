import { queryOne, queryAll } from '@ecl/dom-utils';
import { createFocusTrap } from 'focus-trap';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.galleryItemSelector Selector for gallery element
 * @param {String} options.descriptionSelector Selector for gallery description element
 * @param {String} options.titleSelector Selector for gallery title element
 * @param {String} options.closeButtonSelector Selector for close button element
 * @param {String} options.allButtonSelector Selector for view all button element
 * @param {String} options.overlaySelector Selector for gallery overlay element
 * @param {String} options.overlayHeaderSelector Selector for gallery overlay header element
 * @param {String} options.overlayFooterSelector Selector for gallery overlay footer element
 * @param {String} options.overlayMediaSelector Selector for gallery overlay media element
 * @param {String} options.overlayCounterCurrentSelector Selector for gallery overlay current number element
 * @param {String} options.overlayCounterMaxSelector Selector for display of number of elements in the gallery overlay
 * @param {String} options.overlayDownloadSelector Selector for gallery overlay download element
 * @param {String} options.overlayShareSelector Selector for gallery overlay share element
 * @param {String} options.overlayDescriptionSelector Selector for gallery overlay description element
 * @param {String} options.overlayPreviousSelector Selector for gallery overlay previous link element
 * @param {String} options.overlayNextSelector Selector for gallery overlay next link element
 * @param {String} options.videoTitleSelector Selector for video title
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
      expandableSelector = 'data-ecl-gallery-not-expandable',
      galleryItemSelector = '[data-ecl-gallery-item]',
      descriptionSelector = '[data-ecl-gallery-description]',
      titleSelector = '[data-ecl-gallery-title]',
      noOverlaySelector = 'data-ecl-gallery-no-overlay',
      itemsLimitSelector = 'data-ecl-gallery-visible-items',
      closeButtonSelector = '[data-ecl-gallery-close]',
      viewAllSelector = '[data-ecl-gallery-all]',
      viewAllLabelSelector = 'data-ecl-gallery-collapsed-label',
      viewAllExpandedLabelSelector = 'data-ecl-gallery-expanded-label',
      countSelector = '[data-ecl-gallery-count]',
      overlaySelector = '[data-ecl-gallery-overlay]',
      overlayHeaderSelector = '[data-ecl-gallery-overlay-header]',
      overlayFooterSelector = '[data-ecl-gallery-overlay-footer]',
      overlayMediaSelector = '[data-ecl-gallery-overlay-media]',
      overlayCounterCurrentSelector = '[data-ecl-gallery-overlay-counter-current]',
      overlayCounterMaxSelector = '[data-ecl-gallery-overlay-counter-max]',
      overlayDownloadSelector = '[data-ecl-gallery-overlay-download]',
      overlayShareSelector = '[data-ecl-gallery-overlay-share]',
      overlayDescriptionSelector = '[data-ecl-gallery-overlay-description]',
      overlayPreviousSelector = '[data-ecl-gallery-overlay-previous]',
      overlayNextSelector = '[data-ecl-gallery-overlay-next]',
      videoTitleSelector = 'data-ecl-gallery-item-video-title',
      attachClickListener = true,
      attachKeyListener = true,
      attachResizeListener = true,
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
    this.galleryItemSelector = galleryItemSelector;
    this.descriptionSelector = descriptionSelector;
    this.titleSelector = titleSelector;
    this.closeButtonSelector = closeButtonSelector;
    this.viewAllSelector = viewAllSelector;
    this.countSelector = countSelector;
    this.itemsLimitSelector = itemsLimitSelector;
    this.overlaySelector = overlaySelector;
    this.noOverlaySelector = noOverlaySelector;
    this.overlayHeaderSelector = overlayHeaderSelector;
    this.overlayFooterSelector = overlayFooterSelector;
    this.overlayMediaSelector = overlayMediaSelector;
    this.overlayCounterCurrentSelector = overlayCounterCurrentSelector;
    this.overlayCounterMaxSelector = overlayCounterMaxSelector;
    this.overlayDownloadSelector = overlayDownloadSelector;
    this.overlayShareSelector = overlayShareSelector;
    this.overlayDescriptionSelector = overlayDescriptionSelector;
    this.overlayPreviousSelector = overlayPreviousSelector;
    this.overlayNextSelector = overlayNextSelector;
    this.attachClickListener = attachClickListener;
    this.attachKeyListener = attachKeyListener;
    this.attachResizeListener = attachResizeListener;
    this.viewAllLabelSelector = viewAllLabelSelector;
    this.viewAllExpandedLabelSelector = viewAllExpandedLabelSelector;
    this.expandableSelector = expandableSelector;
    this.videoTitleSelector = videoTitleSelector;

    // Private variables
    this.galleryItems = null;
    this.closeButton = null;
    this.viewAll = null;
    this.count = null;
    this.overlay = null;
    this.overlayHeader = null;
    this.overlayFooter = null;
    this.overlayMedia = null;
    this.overlayCounterCurrent = null;
    this.overlayCounterMax = null;
    this.overlayDownload = null;
    this.overlayShare = null;
    this.overlayDescription = null;
    this.overlayPrevious = null;
    this.overlayNext = null;
    this.selectedItem = null;
    this.focusTrap = null;
    this.isDesktop = false;
    this.resizeTimer = null;
    this.visibleItems = 0;
    this.breakpointMd = 768;
    this.breakpointLg = 996;
    this.imageHeight = 185;
    this.imageHeightBig = 260;

    // Bind `this` for use in callbacks
    this.iframeResize = this.iframeResize.bind(this);
    this.handleClickOnCloseButton = this.handleClickOnCloseButton.bind(this);
    this.handleClickOnViewAll = this.handleClickOnViewAll.bind(this);
    this.handleClickOnItem = this.handleClickOnItem.bind(this);
    this.preventClickOnItem = this.preventClickOnItem.bind(this);
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
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();
    // Query elements
    this.expandable = !this.element.hasAttribute(this.expandableSelector);
    this.visibleItems = this.element.getAttribute(this.itemsLimitSelector);
    this.galleryItems = queryAll(this.galleryItemSelector, this.element);
    this.closeButton = queryOne(this.closeButtonSelector, this.element);
    this.noOverlay = this.element.hasAttribute(this.noOverlaySelector);
    if (this.expandable) {
      this.viewAll = queryOne(this.viewAllSelector, this.element);
      this.viewAllLabel =
        this.viewAll.getAttribute(this.viewAllLabelSelector) ||
        this.viewAll.innerText;
      this.viewAllLabelExpanded =
        this.viewAll.getAttribute(this.viewAllExpandedLabelSelector) ||
        this.viewAllLabel;
    }
    this.count = queryOne(this.countSelector, this.element);

    // Bind click event on view all (open first item)
    if (this.attachClickListener && this.viewAll) {
      this.viewAll.addEventListener('click', this.handleClickOnViewAll);
    }
    if (!this.noOverlay) {
      this.overlay = queryOne(this.overlaySelector, this.element);
      this.overlayHeader = queryOne(this.overlayHeaderSelector, this.overlay);
      this.overlayFooter = queryOne(this.overlayFooterSelector, this.overlay);
      this.overlayMedia = queryOne(this.overlayMediaSelector, this.overlay);
      this.overlayCounterCurrent = queryOne(
        this.overlayCounterCurrentSelector,
        this.overlay,
      );
      this.overlayCounterMax = queryOne(
        this.overlayCounterMaxSelector,
        this.overlay,
      );
      this.overlayDownload = queryOne(
        this.overlayDownloadSelector,
        this.overlay,
      );
      this.overlayShare = queryOne(this.overlayShareSelector, this.overlay);
      this.overlayDescription = queryOne(
        this.overlayDescriptionSelector,
        this.overlay,
      );
      this.overlayPrevious = queryOne(
        this.overlayPreviousSelector,
        this.overlay,
      );
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
        this.closeButton.addEventListener(
          'click',
          this.handleClickOnCloseButton,
        );
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
          this.handleClickOnPreviousButton,
        );
      }

      // Bind click event on next button
      if (this.attachClickListener && this.overlayNext) {
        this.overlayNext.addEventListener(
          'click',
          this.handleClickOnNextButton,
        );
      }

      // Bind other close event
      if (!this.isDialogSupported && this.attachKeyListener && this.overlay) {
        this.overlay.addEventListener('keyup', this.handleKeyboard);
      }
      if (this.isDialogSupported && this.overlay) {
        this.overlay.addEventListener('close', this.handleClickOnCloseButton);
      }
    } else {
      this.galleryItems.forEach((galleryItem) => {
        galleryItem.classList.add('ecl-gallery__item__link--frozen');
        galleryItem.addEventListener('click', this.preventClickOnItem);
      });
    }

    // Bind resize events
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Init display of gallery items
    if (this.expandable) {
      this.checkScreen();
      this.hideItems();
    }

    // Add number to gallery items
    this.galleryItems.forEach((galleryItem, key) => {
      galleryItem.setAttribute('data-ecl-gallery-item-id', key);
    });

    // Update counter
    if (this.count) {
      this.count.innerHTML = this.galleryItems.length;
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.closeButton) {
      this.closeButton.removeEventListener(
        'click',
        this.handleClickOnCloseButton,
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
        this.handleClickOnPreviousButton,
      );
    }

    if (this.attachClickListener && this.overlayNext) {
      this.overlayNext.removeEventListener(
        'click',
        this.handleClickOnNextButton,
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

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Check if current display is desktop or mobile
   */
  checkScreen() {
    if (window.innerWidth > this.breakpointMd) {
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
    if (window.innerWidth > this.breakpointLg) {
      this.isLarge = true;
    }
  }

  iframeResize(iframe) {
    if (!iframe && this.overlay) {
      iframe = queryOne('iframe', this.overlay);
    }

    if (iframe) {
      const width = window.innerWidth;

      setTimeout(() => {
        const height =
          this.overlay.clientHeight -
          this.overlayHeader.clientHeight -
          this.overlayFooter.clientHeight;

        if (width > height) {
          iframe.setAttribute('height', `${height}px`);

          if ((height * 16) / 9 > width) {
            iframe.setAttribute('width', `${width - 0.05 * width}px`);
          } else {
            iframe.setAttribute('width', `${(height * 16) / 9}px`);
          }
        } else {
          iframe.setAttribute('width', `${width}px`);
          if ((width * 4) / 3 > height) {
            iframe.setAttribute('height', `${height - 0.05 * height}px`);
          } else {
            iframe.setAttribute('height', `${(width * 4) / 3}px`);
          }
        }
      }, 0);
    }
  }

  /**
   * @param {Int} rows/item number
   *
   * Hide several gallery items by default
   * - 2 "lines" of items on desktop
   * - only 3 items on mobile or the desired rows or items
   *   when using the view more button.
   */
  hideItems(plus = 0) {
    if (!this.viewAll || this.viewAll.expanded) return;

    if (this.isDesktop) {
      let hiddenItemIds = [];
      // We should browse the list first to mark the items to be hidden, and hide them later
      // otherwise, it will interfer with the calculus
      this.galleryItems.forEach((galleryItem, key) => {
        galleryItem.parentNode.classList.remove('ecl-gallery__item--hidden');
        if (key >= Number(this.visibleItems) + Number(plus)) {
          hiddenItemIds = [...hiddenItemIds, key];
        }
      });
      hiddenItemIds.forEach((id) => {
        this.galleryItems[id].parentNode.classList.add(
          'ecl-gallery__item--hidden',
        );
      });
      return;
    }

    this.galleryItems.forEach((galleryItem, key) => {
      if (key > 2 + Number(plus)) {
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
      this.iframeResize();
    }, 200);
  }

  /**
   * @param {HTMLElement} selectedItem Media element
   */
  updateOverlay(selectedItem) {
    this.selectedItem = selectedItem;
    const embeddedVideo = selectedItem.getAttribute(
      'data-ecl-gallery-item-embed-src',
    );
    const embeddedVideoAudio = selectedItem.getAttribute(
      'data-ecl-gallery-item-embed-audio',
    );
    const video = queryOne('video', selectedItem);
    let mediaElement = null;

    // Update media
    if (embeddedVideo != null) {
      // Media is a embedded video
      mediaElement = document.createElement('div');
      mediaElement.classList.add('ecl-gallery__slider-embed');

      const mediaAudio = document.createElement('div');
      mediaAudio.classList.add('ecl-gallery__slider-embed-audio');
      if (embeddedVideoAudio) {
        mediaAudio.innerHTML = embeddedVideoAudio;
      }

      const iframeUrl = new URL(embeddedVideo);

      const mediaIframe = document.createElement('iframe');
      mediaIframe.setAttribute('src', iframeUrl);
      mediaIframe.setAttribute('frameBorder', '0');

      // Update iframe title
      const videoTitle = selectedItem.getAttribute(this.videoTitleSelector);
      if (videoTitle) {
        mediaIframe.setAttribute('title', videoTitle);
      }

      if (this.overlayMedia) {
        if (embeddedVideoAudio) {
          mediaElement.appendChild(mediaAudio);
        }
        mediaElement.appendChild(mediaIframe);
        this.overlayMedia.innerHTML = '';
        this.overlayMedia.appendChild(mediaElement);
      }
      this.iframeResize(mediaIframe);
    } else if (video != null) {
      // Media is a video
      mediaElement = document.createElement('video');
      mediaElement.setAttribute('poster', video.poster);
      mediaElement.setAttribute('controls', 'controls');
      mediaElement.classList.add('ecl-gallery__slider-video');

      // Update video title
      const videoTitle = selectedItem.getAttribute(this.videoTitleSelector);
      if (videoTitle) {
        mediaElement.setAttribute('aria-label', videoTitle);
      }

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
      const picture = queryOne('.ecl-gallery__picture', selectedItem);
      const image = queryOne('img', picture);
      if (picture) {
        image.classList.remove('ecl-gallery__image');
        mediaElement = picture.cloneNode(true);
      } else {
        // backward compatibility
        mediaElement = document.createElement('img');
        mediaElement.setAttribute('src', image.getAttribute('src'));
        mediaElement.setAttribute('alt', image.getAttribute('alt'));
      }
      mediaElement.classList.add('ecl-gallery__slider-image');

      if (this.overlayMedia) {
        this.overlayMedia.innerHTML = '';
        this.overlayMedia.appendChild(mediaElement);
      }
    }

    // Get id
    const id = selectedItem.getAttribute('id');

    // Update counter
    this.overlayCounterCurrent.innerHTML =
      +selectedItem.getAttribute('data-ecl-gallery-item-id') + 1;
    this.overlayCounterMax.innerHTML = this.galleryItems.length;

    // Prepare display of links for mobile
    const actionMobile = document.createElement('div');
    actionMobile.classList.add('ecl-gallery__detail-actions-mobile');

    // Update download link
    if (this.overlayDownload !== null && embeddedVideo === null) {
      this.overlayDownload.href = this.selectedItem.href;
      if (id) {
        this.overlayDownload.setAttribute('aria-describedby', `${id}-title`);
      }
      this.overlayDownload.hidden = false;
      actionMobile.appendChild(this.overlayDownload.cloneNode(true));
    } else if (this.overlayDownload !== null) {
      this.overlayDownload.hidden = true;
    }

    // Update share link
    const shareHref = this.selectedItem.getAttribute(
      'data-ecl-gallery-item-share',
    );
    if (shareHref != null) {
      this.overlayShare.href = shareHref;
      if (id) {
        this.overlayShare.setAttribute('aria-describedby', `${id}-title`);
      }
      this.overlayShare.hidden = false;
      actionMobile.appendChild(this.overlayShare.cloneNode(true));
    } else {
      this.overlayShare.hidden = true;
    }

    // Update description
    const description = queryOne(this.descriptionSelector, selectedItem);
    if (description) {
      this.overlayDescription.innerHTML = description.innerHTML;
    }
    if (actionMobile.childNodes.length > 0) {
      this.overlayDescription.prepend(actionMobile);
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

    // Restore css class on items
    this.galleryItems.forEach((galleryItem) => {
      const image = queryOne('img', galleryItem);
      if (image) {
        image.classList.add('ecl-gallery__image');
      }
    });

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
    if (!this.viewAll) return;

    if (this.viewAll.expanded) {
      delete this.viewAll.expanded;
      this.checkScreen();
      this.hideItems();
      this.viewAll.textContent = this.viewAllLabel;
    } else {
      this.viewAll.expanded = true;
      this.viewAll.textContent = this.viewAllLabelExpanded;

      const hidden = this.galleryItems.filter((item) =>
        item.parentNode.classList.contains('ecl-gallery__item--hidden'),
      );
      if (hidden.length > 0) {
        hidden.forEach((item) => {
          item.parentNode.classList.remove('ecl-gallery__item--hidden');
        });
        hidden[0].focus();
      }
    }
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
   * handle click event on gallery items when no overlay.
   *
   * @param {Event} e
   */
  // eslint-disable-next-line class-methods-use-this
  preventClickOnItem(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  /**
   * Invoke listeners for on click events on previous navigation link.
   */
  handleClickOnPreviousButton() {
    // Get current id
    const currentId = this.selectedItem.getAttribute(
      'data-ecl-gallery-item-id',
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
      'data-ecl-gallery-item-id',
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
