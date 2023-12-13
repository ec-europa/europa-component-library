import { queryOne, queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {String} options.prevSelector Selector for prev element
 * @param {String} options.nextSelector Selector for next element
 * @param {String} options.contentClass Selector for the content container
 * @param {String} options.slidesClass Selector for the slides container
 * @param {String} options.slideClass Selector for the slide items
 * @param {String} options.navigationClass Selector for the navigation container
 * @param {String} options.currentSlideClass Selector for the counter current slide number
 */
export class Carousel {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Carousel} An instance of Carousel.
   */
  static autoInit(root, { CAROUSEL: defaultOptions = {} } = {}) {
    const carousel = new Carousel(root, defaultOptions);
    carousel.init();
    root.ECLCarousel = carousel;
    return carousel;
  }

  constructor(
    element,
    {
      playSelector = '.ecl-carousel__play',
      pauseSelector = '.ecl-carousel__pause',
      prevSelector = '.ecl-carousel__prev',
      nextSelector = '.ecl-carousel__next',
      containerClass = '.ecl-carousel__container',
      slidesClass = '.ecl-carousel__slides',
      slideClass = '.ecl-carousel__slide',
      currentSlideClass = '.ecl-carousel__current',
      navigationItemsClass = '.ecl-carousel__navigation-item',
      controlsClass = '.ecl-carousel__controls',
      attachClickListener = true,
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
    this.playSelector = playSelector;
    this.pauseSelector = pauseSelector;
    this.prevSelector = prevSelector;
    this.nextSelector = nextSelector;
    this.containerClass = containerClass;
    this.slidesClass = slidesClass;
    this.slideClass = slideClass;
    this.currentSlideClass = currentSlideClass;
    this.navigationItemsClass = navigationItemsClass;
    this.controlsClass = controlsClass;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.container = null;
    this.slides = null;
    this.btnPlay = null;
    this.btnPause = null;
    this.btnPrev = null;
    this.btnNext = null;
    this.index = 1;
    this.total = 0;
    this.allowShift = true;
    this.activeNav = null;
    this.autoPlay = null;
    this.autoPlayInterval = null;
    this.hoverAutoPlay = null;
    this.resizeTimer = null;
    this.posX1 = 0;
    this.posX2 = 0;
    this.posInitial = 0;
    this.posFinal = 0;
    this.threshold = 80;
    this.navigationItems = null;
    this.navigation = null;
    this.controls = null;
    this.direction = 'ltr';
    this.cloneFirstSLide = null;
    this.cloneLastSLide = null;

    // Bind `this` for use in callbacks
    this.handleAutoPlay = this.handleAutoPlay.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.shiftSlide = this.shiftSlide.bind(this);
    this.checkIndex = this.checkIndex.bind(this);
    this.moveSlides = this.moveSlides.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.dragAction = this.dragAction.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyboardOnPlay = this.handleKeyboardOnPlay.bind(this);
    this.handleKeyboardOnBullets = this.handleKeyboardOnBullets.bind(this);
    this.checkBannerHeights = this.checkBannerHeights.bind(this);
    this.resetBannerHeights = this.resetBannerHeights.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.btnPlay = queryOne(this.playSelector, this.element);
    this.btnPause = queryOne(this.pauseSelector, this.element);
    this.btnPrev = queryOne(this.prevSelector, this.element);
    this.btnNext = queryOne(this.nextSelector, this.element);
    this.slidesContainer = queryOne(this.slidesClass, this.element);
    this.container = queryOne(this.containerClass, this.element);
    this.navigation = queryOne('.ecl-carousel__navigation', this.element);
    this.navigationItems = queryAll(this.navigationItemsClass, this.element);
    this.controls = queryOne(this.controlsClass, this.element);
    this.currentSlide = queryOne(this.currentSlideClass, this.element);
    this.direction = getComputedStyle(this.element).direction;

    this.slides = queryAll(this.slideClass, this.element);
    this.total = this.slides.length;

    // If only one slide, don't initialize carousel and hide controls
    if (this.total <= 1) {
      if (this.btnNext) {
        this.btnNext.style.display = 'none';
      }
      if (this.btnPrev) {
        this.btnPrev.style.display = 'none';
      }
      if (this.controls) {
        this.controls.style.display = 'none';
      }
      if (this.slidesContainer) {
        this.slidesContainer.style.display = 'block';
      }
      return false;
    }

    // Start initializing carousel
    const firstSlide = this.slides[0];
    const lastSlide = this.slides[this.slides.length - 1];
    this.cloneFirstSLide = firstSlide.cloneNode(true);
    this.cloneLastSLide = lastSlide.cloneNode(true);

    // Clone first and last slide
    this.slidesContainer.appendChild(this.cloneFirstSLide);
    this.slidesContainer.insertBefore(this.cloneLastSLide, firstSlide);

    // Refresh the slides variable after adding new cloned slides
    this.slides = queryAll(this.slideClass, this.element);

    // Initialize position of slides and size of the carousel
    this.slides.forEach((slide) => {
      slide.style.width = `${100 / this.slides.length}%`;
    });
    this.handleResize();

    // Initialze pagination and navigation
    this.checkIndex();

    // Bind events
    if (this.navigationItems) {
      this.navigationItems.forEach((nav, index) => {
        nav.addEventListener(
          'click',
          this.shiftSlide.bind(this, index + 1, true),
        );
      });
    }
    if (this.navigation) {
      this.navigation.addEventListener('keydown', this.handleKeyboardOnBullets);
    }
    if (this.attachClickListener && this.btnPlay && this.btnPause) {
      this.btnPlay.addEventListener('click', this.handleAutoPlay);
      this.btnPause.addEventListener('click', this.handleAutoPlay);
    }
    if (this.btnPlay) {
      this.btnPlay.addEventListener('keydown', this.handleKeyboardOnPlay);
    }
    if (this.attachClickListener && this.btnNext) {
      this.btnNext.addEventListener(
        'click',
        this.shiftSlide.bind(this, 'next', true),
      );
    }
    if (this.attachClickListener && this.btnPrev) {
      this.btnPrev.addEventListener(
        'click',
        this.shiftSlide.bind(this, 'prev', true),
      );
    }

    if (this.slidesContainer) {
      // Mouse events
      this.slidesContainer.addEventListener('mouseover', this.handleMouseOver);
      this.slidesContainer.addEventListener('mouseout', this.handleMouseOut);

      // Touch events
      this.slidesContainer.addEventListener('touchstart', this.dragStart);
      this.slidesContainer.addEventListener('touchend', this.dragEnd);
      this.slidesContainer.addEventListener('touchmove', this.dragAction);
      this.slidesContainer.addEventListener('transitionend', this.checkIndex);
    }
    if (this.container) {
      this.container.addEventListener('focus', this.handleFocus, true);
    }
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);

    return this;
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.cloneFirstSLide && this.cloneLastSLide) {
      this.cloneFirstSLide.remove();
      this.cloneLastSLide.remove();
    }
    if (this.btnPlay) {
      this.btnPlay.replaceWith(this.btnPlay.cloneNode(true));
    }
    if (this.btnPause) {
      this.btnPause.replaceWith(this.btnPause.cloneNode(true));
    }
    if (this.btnNext) {
      this.btnNext.replaceWith(this.btnNext.cloneNode(true));
    }
    if (this.btnPrev) {
      this.btnPrev.replaceWith(this.btnPrev.cloneNode(true));
    }
    if (this.slidesContainer) {
      this.slidesContainer.removeEventListener(
        'mouseover',
        this.handleMouseOver,
      );
      this.slidesContainer.removeEventListener('mouseout', this.handleMouseOut);
      this.slidesContainer.removeEventListener('touchstart', this.dragStart);
      this.slidesContainer.removeEventListener('touchend', this.dragEnd);
      this.slidesContainer.removeEventListener('touchmove', this.dragAction);
      this.slidesContainer.removeEventListener(
        'transitionend',
        this.checkIndex,
      );
    }
    if (this.container) {
      this.container.removeEventListener('focus', this.handleFocus, true);
    }
    if (this.navigationItems) {
      this.navigationItems.forEach((nav) => {
        nav.replaceWith(nav.cloneNode(true));
      });
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlay = null;
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Set the banners height above the xl breakpoint
   */
  checkBannerHeights() {
    const heightValues = this.slides.map((slide) => {
      const banner = queryOne('.ecl-banner', slide);
      const height = parseInt(banner.style.height, 10);

      if (banner.style.height === 'auto') {
        return 0;
      }
      if (Number.isNaN(height)) {
        return undefined;
      }
      return height;
    });

    const elementHeights = heightValues.filter(
      (height) => height !== undefined,
    );
    const tallestElementHeight = Math.max(...elementHeights);

    if (elementHeights.length === this.slides.length) {
      clearInterval(this.intervalId);
    }

    if (tallestElementHeight) {
      this.slides.forEach((slide) => {
        let bannerImage = null;
        const banner = queryOne('.ecl-banner', slide);
        if (banner) {
          bannerImage = queryOne('img', banner);
          banner.style.height = `${tallestElementHeight}px`;
        }
        if (bannerImage) {
          bannerImage.style.aspectRatio = 'auto';
        }
      });
    }
  }

  /**
   * Set the banners height below the xl breakpoint
   */
  resetBannerHeights() {
    this.slides.forEach((slide) => {
      const banner = queryOne('.ecl-banner', slide);
      let bannerImage = null;
      if (banner) {
        banner.style.height = '100%';
        bannerImage = queryOne('img', banner);
        if (bannerImage) {
          const computedStyle = getComputedStyle(bannerImage);
          bannerImage.style.aspectRatio =
            computedStyle.getPropertyValue('--css-aspect-ratio');
        }
      }
    });
  }

  /**
   * TouchStart handler.
   * @param {Event} e
   */
  dragStart(e) {
    e = e || window.event;

    this.posInitial = this.slidesContainer.offsetLeft;

    if (e.type === 'touchstart') {
      this.posX1 = e.touches[0].clientX;
    }
  }

  /**
   * TouchMove handler.
   * @param {Event} e
   */
  dragAction(e) {
    e = e || window.event;

    if (e.type === 'touchmove') {
      e.preventDefault();
      this.posX2 = this.posX1 - e.touches[0].clientX;
      this.posX1 = e.touches[0].clientX;
    }

    this.slidesContainer.style.left = `${
      this.slidesContainer.offsetLeft - this.posX2
    }px`;
  }

  /**
   * TouchEnd handler.
   */
  dragEnd() {
    this.posFinal = this.slidesContainer.offsetLeft;
    if (this.posFinal - this.posInitial < -this.threshold) {
      this.shiftSlide('next', true);
    } else if (this.posFinal - this.posInitial > this.threshold) {
      this.shiftSlide('prev', true);
    } else {
      this.slidesContainer.style.left = `${this.posInitial}px`;
    }
  }

  /**
   * Action to shift next or previous slide.
   * @param {int|string} dir
   * @param {Boolean} stopAutoPlay
   */
  shiftSlide(dir, stopAutoPlay) {
    if (this.allowShift) {
      if (typeof dir === 'number') {
        this.index = dir;
      } else {
        this.index = dir === 'next' ? this.index + 1 : this.index - 1;
      }
      this.moveSlides(true);
    }
    if (stopAutoPlay && this.autoPlay) {
      this.handleAutoPlay();
    }

    this.allowShift = false;
  }

  /**
   * Transition for the slides.
   * @param {Boolean} transition
   */
  moveSlides(transition) {
    const newOffset = this.container.offsetWidth * this.index;
    this.slidesContainer.style.transitionDuration = transition ? '0.4s' : '0s';
    if (this.direction === 'rtl') {
      this.slidesContainer.style.right = `-${newOffset}px`;
    } else {
      this.slidesContainer.style.left = `-${newOffset}px`;
    }
  }

  /**
   * Action to update slides index and position.
   */
  checkIndex() {
    // Update index
    if (this.index === 0) {
      this.index = this.total;
    }
    if (this.index === this.total + 1) {
      this.index = 1;
    }

    // Move slide without transition to ensure infinity loop
    this.moveSlides(false);

    // Update pagination
    if (this.currentSlide) {
      this.currentSlide.textContent = this.index;
    }

    // Update slides
    if (this.slides) {
      this.slides.forEach((slide, index) => {
        const cta = queryOne('.ecl-link--cta', slide);
        if (this.index === index) {
          slide.removeAttribute('inert', 'true');
          if (cta) {
            cta.removeAttribute('tabindex', -1);
          }
        } else {
          slide.setAttribute('inert', 'true');
          if (cta) {
            cta.setAttribute('tabindex', -1);
          }
        }
      });
    }

    // Update navigation
    if (this.navigationItems) {
      this.navigationItems.forEach((nav, index) => {
        if (this.index === index + 1) {
          nav.setAttribute('aria-current', 'true');
        } else {
          nav.removeAttribute('aria-current', 'true');
        }
      });
    }

    this.allowShift = true;
  }

  /**
   * Toggles play/pause slides.
   */
  handleAutoPlay() {
    if (!this.autoPlay) {
      this.autoPlayInterval = setInterval(() => {
        this.shiftSlide('next');
      }, 5000);
      this.autoPlay = true;
      const isFocus = document.activeElement === this.btnPlay;
      this.btnPlay.style.display = 'none';
      this.btnPause.style.display = 'flex';
      if (isFocus) {
        this.btnPause.focus();
      }
    } else {
      clearInterval(this.autoPlayInterval);
      this.autoPlay = false;
      const isFocus = document.activeElement === this.btnPause;
      this.btnPlay.style.display = 'flex';
      this.btnPause.style.display = 'none';
      if (isFocus) {
        this.btnPlay.focus();
      }
    }
  }

  /**
   * Trigger events on mouseover.
   */
  handleMouseOver() {
    this.hoverAutoPlay = this.autoPlay;
    if (this.hoverAutoPlay) {
      this.handleAutoPlay();
    }
    return this;
  }

  /**
   * Trigger events on mouseout.
   */
  handleMouseOut() {
    if (this.hoverAutoPlay) {
      this.handleAutoPlay();
    }
    return this;
  }

  /**
   * Trigger events on resize.
   */
  handleResize() {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
    clearInterval(this.intervalId);
    clearTimeout(this.resizeTimer);
    let containerWidth = 0;
    // We set 250ms delay which is higher than the 200ms delay in the banner.
    this.resizeTimer = setTimeout(() => {
      if (vw >= 998) {
        this.intervalId = setInterval(this.checkBannerHeights, 100);
      } else {
        this.resetBannerHeights();
      }
    }, 250);

    if (vw >= 768) {
      containerWidth = this.container.offsetWidth;
    } else {
      containerWidth = this.container.offsetWidth + 15;
    }

    this.slidesContainer.style.width = `${
      containerWidth * this.slides.length
    }px`;

    this.moveSlides(false);

    // Add class to set a left margin to banner content and avoid arrow overlapping
    if (vw >= 1140 && vw <= 1260) {
      this.container.classList.add('ecl-carousel-container--padded');
    } else {
      this.container.classList.remove('ecl-carousel-container--padded');
    }

    // Desactivate autoPlay for mobile or activate autoPlay onLoad for desktop
    if ((vw <= 768 && this.autoPlay) || (vw > 768 && this.autoPlay === null)) {
      this.handleAutoPlay();
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnPlay(e) {
    if (e.key === 'Tab' && e.shiftKey) {
      return;
    }

    switch (e.key) {
      case 'Tab':
      case 'ArrowRight':
        e.preventDefault();
        this.activeNav = queryOne(
          `${this.navigationItemsClass}[aria-current="true"]`,
        );
        if (this.activeNav) {
          this.activeNav.focus();
        }
        if (this.autoPlay) {
          this.handleAutoPlay();
        }
        break;

      default:
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnBullets(e) {
    const focusedEl = document.activeElement;
    switch (e.key) {
      case 'Tab':
        if (e.shiftKey) {
          e.preventDefault();
          if (focusedEl.previousSibling) {
            this.shiftSlide('prev', true);
            setTimeout(() => focusedEl.previousSibling.focus(), 400);
          } else {
            this.btnPlay.focus();
          }
        } else if (focusedEl.nextSibling) {
          e.preventDefault();
          this.shiftSlide('next', true);
          setTimeout(() => focusedEl.nextSibling.focus(), 400);
        }
        break;

      case 'ArrowRight':
        if (focusedEl.nextSibling) {
          e.preventDefault();
          this.shiftSlide('next', true);
          setTimeout(() => focusedEl.nextSibling.focus(), 400);
        }
        break;

      case 'ArrowLeft':
        if (focusedEl.previousSibling) {
          this.shiftSlide('prev', true);
          setTimeout(() => focusedEl.previousSibling.focus(), 400);
        } else {
          this.btnPlay.focus();
        }
        break;

      default:
      // Handle other key events here
    }
  }

  /**
   * Trigger events on focus.
   * @param {Event} e
   */
  handleFocus(e) {
    const focusElement = e.target;
    // Disable autoplay if focus is on a slide CTA
    if (
      focusElement &&
      focusElement.contains(document.activeElement) &&
      this.autoPlay
    ) {
      this.handleAutoPlay();
    }
    return this;
  }
}

export default Carousel;
