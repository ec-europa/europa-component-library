import { queryOne, queryAll } from '@ecl/dom-utils';
import EmblaCarousel from 'embla-carousel';
import Accessibility from 'embla-carousel-accessibility';
import Autoplay from 'embla-carousel-autoplay';
import SliderPager from '@ecl/slider';

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
      counterSelector = '.ecl-news-ticker__counter',
      counterLabelSelector = 'data-ecl-news-ticker-counter-label',
      slidesClass = '.ecl-news-ticker__slides',
      slideClass = '.ecl-news-ticker__slide',
      controlsClass = '.ecl-news-ticker__controls',
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
    this.contentClass = contentClass;
    this.counterLabelSelector = counterLabelSelector;
    this.slidesClass = slidesClass;
    this.slideClass = slideClass;
    this.counterSelector = counterSelector;
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
    this.counter = null;
    this.total = 0;
    this.hoverAutoPlay = null;
    this.resizeTimer = null;
    this.resizeObserver = null;

    // Embla related
    this.slider = null;
    this.pager = null;
    this.accessibility = null;

    // Bind `this` for use in callbacks
    this.handleAutoPlay = this.handleAutoPlay.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
    this.handleNextPrevClick = this.handleNextPrevClick.bind(this);
    this.initSlider = this.initSlider.bind(this);
    this.setCounter = this.setCounter.bind(this);
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
    this.content = queryOne(this.contentClass, this.element);
    this.controls = queryOne(this.controlsClass, this.element);
    this.sliderEl = queryOne(this.contentClass, this.element);
    this.counter = queryOne(this.counterSelector, this.element);
    this.counterLabel = this.element.getAttribute(this.counterLabelSelector);

    this.slides = queryAll(this.slideClass, this.element);
    this.total = this.slides.length;

    // If only one slide, don't initialize ticker and hide controls
    if (this.total <= 1 && this.controls) {
      this.element.classList.add('ecl-news-ticker--single');
      this.slidesContainer.style.height = 'auto';
      this.controls.style.display = 'none';

      return false;
    }

    if (this.sliderEl) {
      this.initSlider(this.sliderEl);
    }

    // Initialize position/size handling
    this.handleResize();

    // Bind events
    if (this.attachClickListener && this.btnPlay && this.btnPause) {
      this.btnPlay.addEventListener('click', this.handleAutoPlay);
      this.btnPause.addEventListener('click', this.handleAutoPlay);
    }
    if (this.attachClickListener && this.btnNext) {
      this.btnNext.addEventListener('click', this.handleNextPrevClick);
    }
    if (this.attachClickListener && this.btnPrev) {
      this.btnPrev.addEventListener('click', this.handleNextPrevClick);
    }
    if (this.content) {
      this.content.addEventListener('mouseover', this.handleMouseOver);
      this.content.addEventListener('mouseout', this.handleMouseOut);
    }
    if (this.container) {
      this.container.addEventListener('focus', this.handleFocus, true);
    }
    if (this.attachResizeListener) {
      this.resizeObserver = new ResizeObserver(this.handleResize);
      this.resizeObserver.observe(this.slidesContainer);
    }
    if (this.btnPlay) {
      this.btnPlay.addEventListener('click', this.handlePlayPauseClick);
    }
    if (this.btnPause) {
      this.btnPause.addEventListener('click', this.handlePlayPauseClick);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Destroy component.
   */
  destroy() {
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
    if (this.content) {
      this.content.removeEventListener('mouseover', this.handleMouseOver);
      this.content.removeEventListener('mouseout', this.handleMouseOut);
    }
    if (this.container) {
      this.container.removeEventListener('focus', this.handleFocus, true);
    }
    if (this.attachResizeListener && this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this.slider) {
      this.slider.destroy();
      this.slider = null;
    }
    if (this.pager) {
      this.pager.destroy();
      this.pager = null;
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }

  /**
   * Handle autoplay toggle using embla autoplay plugin.
   */
  handleAutoPlay(stop = false, pause = false) {
    const autoplay = this.slider.plugins().autoplay;

    // pause
    if (pause) {
      autoplay?.pause();

      const isFocus = document.activeElement === this.btnPause;

      this.btnPlay.style.display = 'flex';
      this.btnPause.style.display = 'none';

      if (isFocus) {
        this.btnPlay.focus();
      }

      return;
    }

    // stop
    if (stop) {
      autoplay?.stop();
      autoplay?.reset();

      this.btnPlay.style.display = 'flex';
      this.btnPause.style.display = 'none';

      return;
    }

    // play
    autoplay?.play();

    this.btnPlay.style.display = 'none';
    this.btnPause.style.display = 'flex';

    const isFocus = document.activeElement === this.btnPlay;

    if (isFocus) {
      this.btnPause.focus();
    }

    // Workaround for those edge cases when the autoplay doesn't
    // start despite running play() a first time.
    setTimeout(() => {
      if (!autoplay?.isPlaying()) {
        autoplay?.play();
      }
    }, 500);
  }

  /**
   * Trigger events on mouseover.
   */
  handleMouseOver() {
    this.hoverAutoPlay = this.slider?.plugins().autoplay?.isPlaying() || false;

    if (this.hoverAutoPlay) {
      this.handleAutoPlay(false, true);
    }
  }

  /**
   * Trigger events on mouseout.
   */
  handleMouseOut() {
    if (this.hoverAutoPlay) {
      this.handleAutoPlay();
    }
    this.hoverAutoPlay = false;
  }

  /**
   * Trigger events on resize.
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.setHeight();
    }, 100);
  }

  /**
   * Trigger events on focus.
   * @param {Event} e
   */
  handleFocus(e) {
    const focusElement = e.target;
    // Disable autoplay if focus is on a slide
    if (
      focusElement &&
      focusElement.contains(document.activeElement) &&
      this.slider?.plugins().autoplay?.isPlaying()
    ) {
      this.handleAutoPlay();
    }
  }

  /**
   * Initialise Embla slider for the news ticker
   * @param {HTMLElement} sliderEl
   */
  initSlider(sliderEl) {
    this.slider = EmblaCarousel(
      sliderEl,
      {
        loop: true,
        align: 'start',
        axis: 'y',
        direction: getComputedStyle(this.element).direction,
        duration: 20,
      },
      [
        Autoplay({ delay: 5000 }),
        Accessibility({
          carouselAriaLabel: 'News ticker',
          previousButtonAriaLabel: 'Show previous news',
          nextButtonAriaLabel: 'Show next news',
          dotButtonAriaLabel: (
            hasAnyGroupedSlides,
            firstSlideIndex,
            lastSlideIndex,
            totalSlides,
          ) => `Show news ${firstSlideIndex + 1} of ${totalSlides}`,
          slideAriaLabel: () => '',
        }),
      ],
    );

    this.accessibility = this.slider.plugins().accessibility;

    this.pagerNode = this.controls;

    this.pager = new SliderPager({
      slider: this.slider,
      pagerElement: this.pagerNode,
      accessibility: this.accessibility,
      prevSelector: '.ecl-news-ticker__prev',
      nextSelector: '.ecl-news-ticker__next',
    });

    this.pager.init();
    this.handleAutoPlay();
    this.setHeight();
    this.setCounter();

    this.slider.on('select', this.setCounter);
  }

  /**
   * Sets the height of the ticker.
   */
  setHeight = () => {
    const currentIndex = this.slider.selectedSnap();
    const newHeight = Math.floor(
      this.slides[currentIndex].getBoundingClientRect().height,
    );

    this.slidesContainer.style.height = `${newHeight}px`;
  };

  /**
   * Sets the counter.
   */
  setCounter() {
    const currentIndex = this.slider.selectedSnap();
    const total = this.slider.snapList().length;

    if (this.counter) {
      this.counter.textContent = `${currentIndex + 1} ${this.counterLabel} ${total}`;
    }
  }

  /**
   * Handle click on next/previous buttons.
   */
  handleNextPrevClick() {
    if (!this.slider) return;

    const autoplay = this.slider.plugins().autoplay;

    if (autoplay?.isPlaying()) {
      this.handleAutoPlay(true);
    }
  }

  /**
   * Handle click on play/pause buttons.
   */
  handlePlayPauseClick = (e) => {
    if (e.currentTarget === this.btnPause) {
      this.handleAutoPlay(false, true);
    } else {
      this.handleAutoPlay();
    }
  };
}

export default NewsTicker;
