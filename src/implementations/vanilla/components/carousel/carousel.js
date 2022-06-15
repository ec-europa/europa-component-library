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
      paginationClass = '.ecl-carousel__pagination',
      attachClickListener = true,
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
    this.paginationClass = paginationClass;
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
    this.autoPlay = false;
    this.autoPlayInterval = null;
    this.hoverAutoPlay = null;
    this.resizeTimer = null;
    this.posX1 = 0;
    this.posX2 = 0;
    this.posInitial = 0;
    this.posFinal = 0;
    this.threshold = 80;
    this.navigationItems = null;
    this.controls = null;
    this.direction = 'ltr';
    this.cloneFirstSLide = null;
    this.cloneLastSLide = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.handleHoverOnCarousel = this.handleHoverOnCarousel.bind(this);
    this.handleHoverOffCarousel = this.handleHoverOffCarousel.bind(this);
    this.shiftSlide = this.shiftSlide.bind(this);
    this.checkIndex = this.checkIndex.bind(this);
    this.moveSlides = this.moveSlides.bind(this);
    this.resizeCarousel = this.resizeCarousel.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.dragAction = this.dragAction.bind(this);
    this.handleSlidesFocus = this.handleSlidesFocus.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.btnPlay = queryOne(this.playSelector, this.element);
    this.btnPause = queryOne(this.pauseSelector, this.element);
    this.btnPrev = queryOne(this.prevSelector, this.element);
    this.btnNext = queryOne(this.nextSelector, this.element);
    this.slidesContainer = queryOne(this.slidesClass, this.element);
    this.container = queryOne(this.containerClass, this.element);
    this.navigationItems = queryAll(this.navigationItemsClass, this.element);
    this.pagination = queryOne(this.paginationClass, this.element);
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
    this.resizeCarousel();

    // Activate autoPlay
    this.handleClickOnToggle();

    // Bind events
    if (this.navigationItems) {
      this.navigationItems.forEach((nav, index) => {
        nav.addEventListener(
          'click',
          this.shiftSlide.bind(this, index + 1, true)
        );
      });
    }
    if (this.attachClickListener && this.btnPlay && this.btnPause) {
      this.btnPlay.addEventListener('click', this.handleClickOnToggle);
      this.btnPause.addEventListener('click', this.handleClickOnToggle);
    }
    if (this.attachClickListener && this.btnNext) {
      this.btnNext.addEventListener(
        'click',
        this.shiftSlide.bind(this, 'next', true)
      );
    }
    if (this.attachClickListener && this.btnPrev) {
      this.btnPrev.addEventListener(
        'click',
        this.shiftSlide.bind(this, 'prev', true)
      );
    }
    if (this.slidesContainer) {
      // Mouse events
      this.slidesContainer.addEventListener(
        'mouseover',
        this.handleHoverOnCarousel
      );
      this.slidesContainer.addEventListener(
        'mouseout',
        this.handleHoverOffCarousel
      );

      // Touch events
      this.slidesContainer.addEventListener('touchstart', this.dragStart);
      this.slidesContainer.addEventListener('touchend', this.dragEnd);
      this.slidesContainer.addEventListener('touchmove', this.dragAction);
      this.slidesContainer.addEventListener('transitionend', this.checkIndex);
    }
    if (this.container) {
      this.container.addEventListener('focus', this.handleSlidesFocus, true);
    }
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
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
        this.handleHoverOnCarousel
      );
      this.slidesContainer.removeEventListener(
        'mouseout',
        this.handleHoverOffCarousel
      );
      this.slidesContainer.removeEventListener('touchstart', this.dragStart);
      this.slidesContainer.removeEventListener('touchend', this.dragEnd);
      this.slidesContainer.removeEventListener('touchmove', this.dragAction);
      this.slidesContainer.removeEventListener(
        'transitionend',
        this.checkIndex
      );
    }
    if (this.container) {
      this.container.removeEventListener('focus', this.handleSlidesFocus, true);
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
      this.autoPlay = false;
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
    }
  }

  /**
   * TouchStart handler.
   * @param {Event} e
   */
  dragStart(e) {
    e = e || window.event;
    e.preventDefault();
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
      this.handleClickOnToggle();
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
          slide.removeAttribute('aria-hidden', 'true');
          slide.removeAttribute('inert', 'true');
          if (cta) {
            cta.removeAttribute('tabindex', -1);
          }
        } else {
          slide.setAttribute('aria-hidden', 'true');
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
  handleClickOnToggle() {
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
   * Hover on carousel.
   */
  handleHoverOnCarousel() {
    this.hoverAutoPlay = this.autoPlay;
    if (this.hoverAutoPlay) {
      this.handleClickOnToggle();
    }
    return this;
  }

  /**
   * Hover out carousel.
   */
  handleHoverOffCarousel() {
    if (this.hoverAutoPlay) {
      this.handleClickOnToggle();
    }
    return this;
  }

  /**
   * Resize the slides across the width of the container.
   */
  resizeCarousel() {
    const containerWidth = this.container.offsetWidth;
    this.slidesContainer.style.width = `${
      containerWidth * this.slides.length
    }px`;

    this.moveSlides(false);

    // Add class to set a left margin to banner content and avoid arrow overlapping
    if (containerWidth >= 940 && containerWidth <= 1220) {
      this.container.classList.add('ecl-carousel-container--padded');
    } else {
      this.container.classList.remove('ecl-carousel-container--padded');
    }

    // Move previous and next buttons in or out the control bar
    if (containerWidth <= 940) {
      this.pagination.parentNode.insertBefore(this.btnPrev, this.pagination);
      this.pagination.parentNode.insertBefore(
        this.btnNext,
        this.pagination.nextSibling
      );
    } else {
      this.container.insertBefore(
        this.btnPrev,
        this.slidesContainer.nextSibling
      );
      this.container.insertBefore(this.btnNext, this.btnPrev.nextSibling);
    }
  }

  /**
   * Trigger events on resize.
   */
  handleResize() {
    this.resizeCarousel();

    if (this.autoPlay) {
      this.handleClickOnToggle();
    }
    return this;
  }

  /**
   * Trigger focus on slides.
   * @param {Event} e
   */
  handleSlidesFocus(e) {
    const focusElement = e.target;
    // Disable autoplay if focus is on a slide CTA
    if (
      focusElement &&
      focusElement.contains(document.activeElement) &&
      this.autoPlay
    ) {
      this.handleClickOnToggle();
    }
    return this;
  }
}

export default Carousel;
