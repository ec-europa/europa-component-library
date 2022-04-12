/* eslint-disable no-console */
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
      toggleSelector = '.ecl-carousel__toggle',
      prevSelector = '.ecl-carousel__prev',
      nextSelector = '.ecl-carousel__next',
      containerClass = '.ecl-carousel__container',
      slidesClass = '.ecl-carousel__slides',
      slideClass = '.ecl-carousel__slide',
      currentSlideClass = '.ecl-carousel__current',
      navigationItemsClass = '.ecl-carousel__navigation-item',
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
    this.toggleSelector = toggleSelector;
    this.prevSelector = prevSelector;
    this.nextSelector = nextSelector;
    this.containerClass = containerClass;
    this.slidesClass = slidesClass;
    this.slideClass = slideClass;
    this.currentSlideClass = currentSlideClass;
    this.navigationItemsClass = navigationItemsClass;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.toggle = null;
    this.container = null;
    this.slides = null;
    this.btnPrev = null;
    this.btnNext = null;
    this.index = 1;
    this.total = 0;
    this.allowShift = true;
    this.autoPlay = false;
    this.autoPlayInterval = null;
    this.resizeTimer = null;
    this.posX1 = 0;
    this.posX2 = 0;
    this.posInitial = 0;
    this.posFinal = 0;
    this.threshold = 80;
    this.navigationItems = null;
    this.direction = 'ltr';
    this.cloneFirstSLide = null;
    this.cloneLastSLide = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.shiftSlide = this.shiftSlide.bind(this);
    this.checkIndex = this.checkIndex.bind(this);
    this.moveSlides = this.moveSlides.bind(this);
    this.resizeTicker = this.resizeTicker.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.dragAction = this.dragAction.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.toggle = queryOne(this.toggleSelector, this.element);
    this.btnPrev = queryOne(this.prevSelector, this.element);
    this.btnNext = queryOne(this.nextSelector, this.element);
    this.slidesContainer = queryOne(this.slidesClass, this.element);
    this.container = queryOne(this.containerClass, this.element);
    this.navigationItems = queryAll(this.navigationItemsClass, this.element);
    this.currentSlide = queryOne(this.currentSlideClass, this.element);
    this.direction = getComputedStyle(this.element).direction;

    this.slides = queryAll(this.slideClass, this.element);
    this.total = this.slides.length;

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
    this.resizeTicker();

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
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
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
      this.slidesContainer.onmousedown = this.dragStart;

      // Touch events
      this.slidesContainer.addEventListener('touchstart', this.dragStart);
      this.slidesContainer.addEventListener('touchend', this.dragEnd);
      this.slidesContainer.addEventListener('touchmove', this.dragAction);
      this.slidesContainer.addEventListener('transitionend', this.checkIndex);
    }
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.cloneFirstSLide && this.cloneLastSLide) {
      this.cloneFirstSLide.remove();
      this.cloneLastSLide.remove();
    }
    if (this.attachClickListener && this.toggle) {
      this.toggle.removeEventListener('click', this.handleClickOnToggle);
    }
    if (this.attachClickListener && this.btnNext) {
      this.btnNext.removeEventListener('click', this.shiftSlide);
    }
    if (this.attachClickListener && this.btnPrev) {
      this.btnPrev.removeEventListener('click', this.shiftSlide);
    }
    if (this.slidesContainer) {
      this.slidesContainer.removeEventListener('touchstart', this.dragStart);
      this.slidesContainer.removeEventListener('touchend', this.dragEnd);
      this.slidesContainer.removeEventListener('touchmove', this.dragAction);
      this.slidesContainer.removeEventListener(
        'transitionend',
        this.checkIndex
      );
    }
    if (this.navigationItems) {
      this.navigationItems.forEach((nav) => {
        nav.removeEventListener('click', this.shiftSlide);
      });
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
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
    } else {
      this.posX1 = e.clientX;
      document.onmouseup = this.dragEnd;
      document.onmousemove = this.dragAction;
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
    } else {
      this.posX2 = this.posX1 - e.clientX;
      this.posX1 = e.clientX;
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

    document.onmouseup = null;
    document.onmousemove = null;
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
        if (this.index === index) {
          slide.removeAttribute('aria-hidden', 'true');
        } else {
          slide.setAttribute('aria-hidden', 'true');
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
    const useNode = queryOne(
      `${this.toggleSelector} .ecl-icon use`,
      this.element
    );
    const originalXlinkHref = useNode.getAttribute('xlink:href');
    let newXlinkHref = '';

    if (!this.autoPlay) {
      this.autoPlayInterval = setInterval(() => {
        this.shiftSlide('next');
      }, 5000);
      this.autoPlay = true;

      newXlinkHref = originalXlinkHref.replace('play', 'pause');
    } else {
      clearInterval(this.autoPlayInterval);
      this.autoPlay = false;

      newXlinkHref = originalXlinkHref.replace('pause', 'play');
    }
    useNode.setAttribute('xlink:href', newXlinkHref);
  }

  /**
   * Resize the slides across the width of the container.
   */
  resizeTicker() {
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
  }

  /**
   * Trigger events on resize.
   */
  handleResize() {
    this.resizeTicker();

    if (this.autoPlay) {
      this.handleClickOnToggle();
    }

    return this;
  }
}

export default Carousel;
