import { queryOne, queryAll } from '@ecl/dom-utils';
import EmblaCarousel from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

export class SloganTicker {
  static autoInit(root, { SLOGAN_TICKER: defaultOptions = {} } = {}) {
    const sloganTicker = new SloganTicker(root, defaultOptions);
    sloganTicker.init();
    root.ECLSloganTicker = sloganTicker;
    return sloganTicker;
  }

  constructor(
    element,
    {
      sliderSelector = '[data-ecl-slogan-ticker-slider]',
      playSelector = '[data-ecl-slogan-ticker-play]',
      pauseSelector = '[data-ecl-slogan-ticker-pause]',
      slideClass = '.ecl-slogan-ticker__slide',
      autoScrollSpeed = 0.9,
      attachClickListener = true,
      attachResizeListener = true,
    } = {},
  ) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.sliderSelector = sliderSelector;
    this.playSelector = playSelector;
    this.pauseSelector = pauseSelector;
    this.slideClass = slideClass;
    this.autoScrollSpeed = autoScrollSpeed;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    this.slider = null;
    this.playButton = null;
    this.pauseButton = null;
    this.slides = [];
    this.isPlaying = false;
    this.rafId = null;
    this.resizeTimer = null;

    this.toggleAutoScroll = this.toggleAutoScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.sliderEl = queryOne(this.sliderSelector, this.element);
    this.playButton = queryOne(this.playSelector, this.element);
    this.pauseButton = queryOne(this.pauseSelector, this.element);
    this.slides = queryAll(this.slideClass, this.element);

    if (!this.sliderEl || this.slides.length <= 1) {
      if (this.playButton) this.playButton.style.display = 'none';
      if (this.pauseButton) this.pauseButton.style.display = 'none';
      return false;
    }

    this.initSlider();
    this.startAutoScroll();

    if (this.attachClickListener && this.playButton) {
      this.playButton.addEventListener('click', this.toggleAutoScroll, false);
    }
    if (this.attachClickListener && this.pauseButton) {
      this.pauseButton.addEventListener('click', this.toggleAutoScroll, false);
    }
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);

    return this;
  }

  initSlider() {
    this.slider = EmblaCarousel(
      this.sliderEl,
      {
        loop: true,
        align: 'start',
        containScroll: 'trimSnaps',
        draggable: true,
      },
      [
        AutoScroll({
          speed: this.autoScrollSpeed,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
        }),
      ],
    );
  }

  startAutoScroll() {
    this.isPlaying = true;
    this.updateButtonVisibility();

    const autoScroll = this.slider?.plugins()?.autoScroll;
    autoScroll?.play();
  }

  stopAutoScroll() {
    this.isPlaying = false;
    this.updateButtonVisibility();

    const autoScroll = this.slider?.plugins()?.autoScroll;
    autoScroll?.stop();
  }

  toggleAutoScroll(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    if (this.isPlaying) {
      this.stopAutoScroll();
    } else {
      this.startAutoScroll();
    }
  }

  updateButtonVisibility() {
    if (this.playButton) {
      this.playButton.style.display = this.isPlaying ? 'none' : 'flex';
    }
    if (this.pauseButton) {
      this.pauseButton.style.display = this.isPlaying ? 'flex' : 'none';
    }
  }

  handleResize() {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }

    this.resizeTimer = setTimeout(() => {
      if (this.slider) {
        this.slider.reInit();
        this.slider?.plugins()?.autoScroll.play();
      }
    }, 100);
  }

  destroy() {
    if (this.playButton) {
      this.playButton.replaceWith(this.playButton.cloneNode(true));
    }
    if (this.pauseButton) {
      this.pauseButton.replaceWith(this.pauseButton.cloneNode(true));
    }
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.rafId) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.slider) {
      this.slider.destroy();
      this.slider = null;
    }
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }
}

export default SloganTicker;
