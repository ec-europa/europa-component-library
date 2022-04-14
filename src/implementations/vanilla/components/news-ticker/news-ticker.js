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
 * @param {String} options.currentSlideClass Selector for the counter current slide number
 */
export class NewsTicker {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {NewsTicker} An instance of News ticker.
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
      containerClass = '.ecl-news-ticker__container',
      contentClass = '.ecl-news-ticker__content',
      slidesClass = '.ecl-news-ticker__slides',
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
    this.containerClass = containerClass;
    this.contentClass = contentClass;
    this.slidesClass = slidesClass;
    this.slideClass = slideClass;
    this.currentSlideClass = currentSlideClass;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.toggle = null;
    this.container = null;
    this.content = null;
    this.slides = null;
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
    this.resizeTicker = this.resizeTicker.bind(this);
    this.handleResize = this.handleResize.bind(this);
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
    this.content = queryOne(this.contentClass, this.element);

    this.slides = queryAll(this.slideClass, this.element);
    this.total = this.slides.length;

    const firstSlide = this.slides[0];
    const lastSlide = this.slides[this.slides.length - 1];
    const cloneFirst = firstSlide.cloneNode(true);
    const cloneLast = lastSlide.cloneNode(true);

    // Clone first and last slide
    this.slidesContainer.appendChild(cloneFirst);
    this.slidesContainer.insertBefore(cloneLast, firstSlide);

    // Refresh the slides variable after adding new cloned slides
    this.slides = queryAll(this.slideClass, this.element);

    // Initialize position of slides and size of the ticker
    this.moveSlides(false);
    this.resizeTicker();

    if (this.toggle) {
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

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
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
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
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
    const newOffset = this.slides[this.index].offsetTop;
    const newHeight = this.slides[this.index].offsetHeight;
    this.content.style.height = `${newHeight}px`;
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
        this.shiftSlide(1);
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
   * Resize Slides container at the height of the highest slide.
   */
  resizeTicker() {
    let highestSlide = 0;
    this.slides.forEach((slide) => {
      const slideHeight = slide.offsetHeight;
      highestSlide = highestSlide < slideHeight ? slideHeight : highestSlide;
    });
    this.container.style.height = `${highestSlide + 10}px`;
  }

  /**
   * Trigger events on resize
   */
  handleResize() {
    this.moveSlides(false);
    this.resizeTicker();

    if (this.autoPlay) {
      this.handleClickOnToggle();
    }

    return this;
  }
}

export default NewsTicker;
