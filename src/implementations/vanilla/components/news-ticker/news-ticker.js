/* eslint-disable no-console */
import { queryOne, queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {String} options.prevSelector Selector for prev element
 * @param {String} options.nextSelector Selector for next element
 * @param {String} options.contentContainer Selector for the content container
 * @param {String} options.slidesContainer Selector for the slides container
 * @param {String} options.slideClass Selector for the slide items
 * @param {String} options.currentSlideClass Selector for the counter current slide number
 */
export class NewsTicker {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {NewsTicker} An instance of Expandable.
   */
  static autoInit(root, { NEWS_TICKER: defaultOptions = {} } = {}) {
    const newsTicker = new NewsTicker(root, defaultOptions);
    newsTicker.init();
    root.ECLNewsTicker = newsTicker;
    return newsTicker;
  }

  constructor(
    element,
    {
      toggleSelector = '[data-ecl-news-ticker-toggle]',
      prevSelector = '[data-ecl-news-ticker-prev]',
      nextSelector = '[data-ecl-news-ticker-next]',
      contentContainer = '.ecl-news-ticker__content',
      slidesContainer = '.ecl-news-ticker__slides',
      slideClass = '.ecl-news-ticker__slide',
      currentSlideClass = '.ecl-news-ticker__counter--current',
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
    this.contentContainer = contentContainer;
    this.slidesContainer = slidesContainer;
    this.slideClass = slideClass;
    this.currentSlideClass = currentSlideClass;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.toggle = null;
    this.btnPrev = null;
    this.btnNext = null;
    this.index = 1;
    this.total = 0;
    this.allowShift = true;
    this.autoPlay = false;
    this.autoPlayInterval = null;
    this.resizeTimer = null;

    // Bind `this` for use in callbacks
    this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    this.shiftSlide = this.shiftSlide.bind(this);
    this.checkIndex = this.checkIndex.bind(this);
    this.moveSlides = this.moveSlides.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.toggle = queryOne(this.toggleSelector, this.element);
    this.btnPrev = queryOne(this.prevSelector, this.element);
    this.btnNext = queryOne(this.nextSelector, this.element);
    this.slidesContainer = queryOne(this.slidesContainer, this.element);

    const slides = queryAll(this.slideClass, this.element);
    this.total = slides.length;

    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];
    const cloneFirst = firstSlide.cloneNode(true);
    const cloneLast = lastSlide.cloneNode(true);

    // Clone first and last slide
    this.slidesContainer.appendChild(cloneFirst);
    this.slidesContainer.insertBefore(cloneLast, firstSlide);

    this.moveSlides(false);

    // Activate autoPlay only if toggle is visible (desktop)
    if (!(window.getComputedStyle(this.toggle).display === 'none')) {
      this.handleClickOnToggle();
    }

    // Bind events
    if (this.attachClickListener && this.toggle) {
      this.toggle.addEventListener('click', this.handleClickOnToggle);
    }
    if (this.attachClickListener && this.btnNext) {
      this.btnNext.addEventListener(
        'click',
        this.shiftSlide.bind(this, 1, true)
      );
    }
    if (this.attachClickListener && this.btnPrev) {
      this.btnPrev.addEventListener(
        'click',
        this.shiftSlide.bind(this, -1, true)
      );
    }
    if (this.slidesContainer) {
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
      this.slidesContainer.removeEventListener(
        'transitionend',
        this.checkIndex
      );
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  /**
   * Action to shift next or previous slide.
   * @param {int} dir
   * @param {Boolean} stopAutoPlay
   */
  shiftSlide(dir, stopAutoPlay) {
    if (this.allowShift) {
      this.index = dir === 1 ? this.index + 1 : this.index - 1;
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
    const content = queryOne(this.contentContainer, this.element);
    const slides = queryAll(this.slideClass, this.element);
    const newOffset = slides[this.index].offsetTop;
    const newHeight = slides[this.index].offsetHeight;
    content.style.height = `${newHeight}px`;
    this.slidesContainer.style.transitionDuration = transition ? '0.4s' : '0s';
    this.slidesContainer.style.transform = `translate3d(0px, -${newOffset}px, 0px)`;
  }

  /**
   * Action to update slides index and position.
   */
  checkIndex() {
    if (this.index === 0) {
      this.index = this.total;
      this.moveSlides(false);
    }
    if (this.index === this.total + 1) {
      this.index = 1;
      this.moveSlides(false);
    }
    const currentSlide = queryOne(this.currentSlideClass, this.element);
    currentSlide.textContent = this.index;

    this.allowShift = true;
  }

  /**
   * Toggles play/pause slides.
   */
  handleClickOnToggle() {
    const toggleIcon = queryOne(
      `${this.toggleSelector} .ecl-icon use`,
      this.element
    );
    const toggleIconHref = toggleIcon.href.baseVal;

    if (!this.autoPlay) {
      this.autoPlayInterval = setInterval(() => {
        this.shiftSlide(1);
      }, 5000);
      this.autoPlay = true;

      // Update icon
      toggleIcon.setAttribute(
        'href',
        toggleIconHref.replace('video-play', 'close')
      );
    } else {
      clearInterval(this.autoPlayInterval);
      this.autoPlay = false;

      // Update icon
      toggleIcon.setAttribute(
        'href',
        toggleIconHref.replace('close', 'video-play')
      );
    }
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.moveSlides(false);
    }, 100);

    if (this.autoPlay) {
      this.handleClickOnToggle();
    }

    return this;
  }
}

export default NewsTicker;
