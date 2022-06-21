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
      playSelector = '[data-ecl-news-ticker-play]',
      pauseSelector = '[data-ecl-news-ticker-pause]',
      prevSelector = '[data-ecl-news-ticker-prev]',
      nextSelector = '[data-ecl-news-ticker-next]',
      containerClass = '.ecl-news-ticker__container',
      contentClass = '.ecl-news-ticker__content',
      slidesClass = '.ecl-news-ticker__slides',
      slideClass = '.ecl-news-ticker__slide',
      currentSlideClass = '.ecl-news-ticker__counter--current',
      controlsClass = '.ecl-news-ticker__controls',
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
    this.contentClass = contentClass;
    this.slidesClass = slidesClass;
    this.slideClass = slideClass;
    this.currentSlideClass = currentSlideClass;
    this.controlsClass = controlsClass;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables
    this.container = null;
    this.content = null;
    this.slides = null;
    this.btnPlay = null;
    this.btnPause = null;
    this.btnPrev = null;
    this.btnNext = null;
    this.index = 1;
    this.total = 0;
    this.allowShift = true;
    this.autoPlay = null;
    this.autoPlayInterval = null;
    this.hoverAutoPlay = null;
    this.resizeTimer = null;
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
    this.handleFocus = this.handleFocus.bind(this);
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
    this.content = queryOne(this.contentClass, this.element);
    this.controls = queryOne(this.controlsClass, this.element);

    this.slides = queryAll(this.slideClass, this.element);
    this.total = this.slides.length;

    // If only one slide, don't initialize ticker and hide controls
    if (this.total <= 1 && this.controls) {
      this.content.style.height = 'auto';
      this.controls.style.display = 'none';
      return false;
    }

    const firstSlide = this.slides[0];
    const lastSlide = this.slides[this.slides.length - 1];
    this.cloneFirstSLide = firstSlide.cloneNode(true);
    this.cloneLastSLide = lastSlide.cloneNode(true);

    // Clone first and last slide
    this.slidesContainer.appendChild(this.cloneFirstSLide);
    this.slidesContainer.insertBefore(this.cloneLastSLide, firstSlide);

    // Refresh the slides variable after adding new cloned slides
    this.slides = queryAll(this.slideClass, this.element);

    // Initialize ticker position and size
    this.handleResize();

    // Activate autoPlay
    this.handleAutoPlay();

    // Bind events
    if (this.attachClickListener && this.btnPlay && this.btnPause) {
      this.btnPlay.addEventListener('click', this.handleAutoPlay);
      this.btnPause.addEventListener('click', this.handleAutoPlay);
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
      this.slidesContainer.addEventListener('mouseover', this.handleMouseOver);
      this.slidesContainer.addEventListener('mouseout', this.handleMouseOut);
    }
    if (this.container) {
      this.container.addEventListener('focus', this.handleFocus, true);
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
        'transitionend',
        this.checkIndex
      );
      this.slidesContainer.removeEventListener(
        'mouseover',
        this.handleMouseOver
      );
      this.slidesContainer.removeEventListener('mouseout', this.handleMouseOut);
    }
    if (this.container) {
      this.container.removeEventListener('focus', this.handleFocus, true);
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
      this.handleAutoPlay();
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
    this.slidesContainer.style.transitionDuration = transition ? '0.4s' : '1ms';
    this.slidesContainer.style.transform = `translate3d(0px, -${newOffset}px, 0px)`;
  }

  /**
   * Action to update slides index and position.
   */
  checkIndex() {
    // Update index
    if (this.index === 0) {
      this.index = this.total;
      this.moveSlides(false);
    }
    if (this.index === this.total + 1) {
      this.index = 1;
      this.moveSlides(false);
    }

    // Update pagination
    const currentSlide = queryOne(this.currentSlideClass, this.element);
    currentSlide.textContent = this.index;

    // Update slides
    if (this.slides) {
      this.slides.forEach((slide, index) => {
        const cta = queryOne('.ecl-link', slide);
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

    this.allowShift = true;
  }

  /**
   * Toggles play/pause slides.
   */
  handleAutoPlay() {
    if (!this.autoPlay) {
      this.autoPlayInterval = setInterval(() => {
        this.shiftSlide(1);
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
    let highestSlide = 0;
    this.slides.forEach((slide) => {
      const slideHeight = slide.offsetHeight;
      highestSlide = highestSlide < slideHeight ? slideHeight : highestSlide;
    });
    highestSlide = highestSlide < 58 ? 58 : highestSlide;
    this.container.style.height = `${highestSlide + 10}px`;
    this.moveSlides(false);
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

export default NewsTicker;
