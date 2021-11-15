/* eslint-disable class-methods-use-this */
import { queryOne } from '@ecl/dom-utils';
import { tns } from 'tiny-slider/src/tiny-slider';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.sliderSelector Selector for carousel
 * @param {String} options.prevSelector Selector for prev button
 * @param {String} options.nextSelector Selector for next button
 * @param {String} options.toggleAutoplaySelector Selector for autoPlay button
 * @param {String} options.navigationContainer Selector for navigation container
 * @param {String} options.paginationContainer Selector for pagination container
 * @param {String} options.currentSlideSelector Selector for the counter current slide number
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
      sliderSelector = '.ecl-carousel__slider',
      prevSelector = '.ecl-carousel__prev',
      nextSelector = '.ecl-carousel__next',
      toggleAutoplaySelector = '.ecl-carousel__autoplay',
      currentSlideSelector = '.ecl-carousel__current',
      navigationContainer = '.ecl-carousel__navigation',
      paginationContainer = '.ecl-carousel__pagination',
      attachClickListener = true,
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
    this.sliderSelector = sliderSelector;
    this.prevSelector = prevSelector;
    this.nextSelector = nextSelector;
    this.toggleAutoplaySelector = toggleAutoplaySelector;
    this.currentSlideSelector = currentSlideSelector;
    this.navigationContainer = navigationContainer;
    this.paginationContainer = paginationContainer;
    this.attachClickListener = attachClickListener;

    // Private
    this.slider = null;
    this.tnsSlider = null;
    this.prev = null;
    this.next = null;
    this.toggleAutoPlay = null;
    this.currentSlide = null;
    this.navigation = null;
    this.pagination = null;
    this.autoPlay = true;

    // Bind `this` for use in callbacks
    this.slideChanged = this.slideChanged.bind(this);
    this.handleAutoPlay = this.handleAutoPlay.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.slider = queryOne(this.sliderSelector, this.element);
    this.prev = queryOne(this.prevSelector, this.element);
    this.next = queryOne(this.nextSelector, this.element);
    this.toggleAutoPlay = queryOne(this.toggleAutoplaySelector, this.element);
    this.navigation = queryOne(this.navigationContainer, this.element);
    this.pagination = queryOne(this.paginationContainer, this.element);
    this.currentSlide = queryOne(this.currentSlideSelector, this.element);

    const slideCount = this.slider.childElementCount;
    if (this.navigation) {
      for (let i = 0; i < slideCount; i += 1) {
        const btn = document.createElement('button');
        btn.classList.add('ecl-carousel__pagination--item');
        this.navigation.appendChild(btn);
      }
    }

    this.tnsSlider = tns({
      container: this.slider,
      prevButton: this.prev,
      nextButton: this.next,
      navContainer: this.navigation,
      controls: !!(this.prev && this.next),
      nav: !!this.navigation,
      items: 1,
      speed: 400,
      autoplay: !!this.autoPlay,
      autoplayHoverPause: true,
      autoplayTimeout: 7000,
      autoplayButtonOutput: false,
      arrowKeys: true,
    });

    // Bind events
    if (this.currentSlide) {
      this.tnsSlider.events.on('indexChanged', this.slideChanged);
    }
    if (this.attachClickListener && this.toggleAutoPlay) {
      this.toggleAutoPlay.addEventListener('click', this.handleAutoPlay);
    }

    return this.tnsSlider;
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.toggleAutoPlay) {
      this.toggleAutoPlay.removeEventListener('click', this.handleAutoPlay);
    }
    if (this.currentSlide) {
      this.tnsSlider.events.off('indexChanged', this.slideChanged);
    }
    if (this.tnsSlider) {
      this.tnsSlider.destroy();
    }
  }

  /**
   * Slider index change callback.
   * @param {Object} info
   */
  slideChanged(info) {
    this.currentSlide.textContent = info.displayIndex;
  }

  /**
   * Toggles play/pause slides.
   */
  handleAutoPlay() {
    const useNode = queryOne(
      `${this.toggleAutoplaySelector} .ecl-icon use`,
      this.element
    );
    const originalXlinkHref = useNode.getAttribute('xlink:href');
    let newXlinkHref = '';

    if (!this.autoPlay) {
      this.tnsSlider.play();
      this.autoPlay = true;
      newXlinkHref = originalXlinkHref.replace('play', 'pause');
    } else {
      this.tnsSlider.pause();
      this.autoPlay = false;
      newXlinkHref = originalXlinkHref.replace('pause', 'play');
    }
    useNode.setAttribute('xlink:href', newXlinkHref);
  }
}

export default Carousel;
