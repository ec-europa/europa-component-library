import { queryOne, queryAll, getBreakpoint } from '@ecl/dom-utils';
import EmblaCarousel from 'embla-carousel';
import Accessibility from 'embla-carousel-accessibility';
import Autoplay from 'embla-carousel-autoplay';
import SliderPager from '@ecl/slider';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.toggleSelector Selector for toggling element
 * @param {String} options.contentClass Selector for the content container
 * @param {String} options.prevSelector Selector for prev button
 * @param {String} options.nextSelector Selector for next button
 * @param {String} options.playSelector Selector for play button
 * @param {String} options.pauseSelector Selector for pause button
 * @param {String} options.pagerSelector Selector for the pager container
 * @param {String} options.dotsClass Selector for the dots container
 * @param {String} options.dotClass Selector for a dot button
 * @param {String} options.activeDotClass Class applied to the active dot
 * @param {Number} options.autoplayDelay Duration of a slide
 * @param {String} options.teaserButtonSelector Selector for teaser navigation buttons
 * @param {String} options.slidesClass Selector for the slides container
 * @param {String} options.slideClass Selector for the slide items
 * @param {String} options.completionBarClass Class for the completion bar
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
      containerClass = '.ecl-carousel__viewport',
      dotsClass = '.ecl-carousel__dots',
      dotClass = '.ecl-carousel__dot',
      activeDotClass = 'ecl-slider-pager__dot--active',
      slidesClass = '.ecl-carousel__slides',
      slideClass = '.ecl-carousel__slide',
      prevSelector = '.ecl-carousel__prev',
      nextSelector = '.ecl-carousel__next',
      pagerClass = '.ecl-carousel__pager',
      currentSlideClass = '.ecl-carousel__current',
      completionBarClass = '.ecl-carousel__loading-bar',
      teaserButtonSelector = '[data-ecl-carousel-teaser-button]',
      controlsClass = '.ecl-carousel__controls',
      attachClickListener = true,
      attachResizeListener = true,
      autoPlayDelay = 5000,
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
    this.pagerClass = pagerClass;
    this.containerClass = containerClass;
    this.completionBarClass = completionBarClass;
    this.teaserButtonSelector = teaserButtonSelector;
    this.dotsClass = dotsClass;
    this.dotClass = dotClass;
    this.slidesClass = slidesClass;
    this.slideClass = slideClass;
    this.currentSlideClass = currentSlideClass;
    this.controlsClass = controlsClass;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;
    this.autoPlayDelay = autoPlayDelay;
    this.activeDotClass = activeDotClass;

    // Private variables
    this.container = null;
    this.slides = null;
    this.btnPlay = null;
    this.btnPause = null;
    this.btnPrev = null;
    this.btnNext = null;
    this.completionBar = null;
    this.index = 1;
    this.total = 0;
    this.slider = null;
    this.allowShift = true;
    this.activeNav = null;
    this.autoPlay = null;
    this.autoPlayInterval = null;
    this.hoverAutoPlay = null;
    this.resizeTimer = null;
    this.navigation = null;
    this.controls = null;
    this.direction = 'ltr';
    this.executionCount = 0;
    this.maxExecutions = 5;
    this.slideWidth = 0;
    this.accessibility = null;
    this.teaserButtons = [];

    // Bind `this` for use in callbacks
    this.handleAutoPlay = this.handleAutoPlay.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyboardOnTeasers = this.handleKeyboardOnTeasers.bind(this);
    this.checkBannerHeights = this.checkBannerHeights.bind(this);
    this.resetBannerHeights = this.resetBannerHeights.bind(this);
    this.initSlider = this.initSlider.bind(this);
    this.sCounteret = this.setCounter.bind(this);
    this.updateTeasers = this.updateTeasers.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();
    // Hide the carousel initially, we will show it in handleesize()
    this.element.style.opacity = 0;
    this.btnPlay = queryOne(this.playSelector, this.element);
    this.btnPause = queryOne(this.pauseSelector, this.element);
    this.btnNext = queryOne(this.nextSelector, this.element);
    this.btnPrev = queryOne(this.prevSelector, this.element);
    this.slidesContainer = queryOne(this.slidesClass, this.element);
    this.container = queryOne(this.containerClass, this.element);
    this.navigation = queryOne('.ecl-carousel__teasers', this.element);
    this.controls = queryOne(this.controlsClass, this.element);
    this.currentSlide = queryOne(this.currentSlideClass, this.element);
    this.sliderEl = queryOne(this.containerClass, this.element);
    this.pagerNode = queryOne(this.pagerClass, this.element);
    this.completionBar = queryOne(this.completionBarClass, this.element);
    this.slides = queryAll(this.slideClass, this.element);
    this.total = this.slides.length;
    this.element.style.setProperty(
      '--ecl-carousel-slide-duration',
      `${this.autoPlayDelay}ms`,
    );

    // If only one slide, don't initialize carousel and hide controls
    if (this.total <= 1) {
      if (this.controls) {
        this.controls.style.display = 'none';
      }
      if (this.slidesContainer) {
        this.slidesContainer.style.display = 'block';
      }
      return false;
    }

    // Refresh the slides variable after adding new cloned slides
    this.slides = queryAll(this.slideClass, this.element);

    // Bind events
    if (this.navigation) {
      this.navigation.addEventListener('keydown', this.handleKeyboardOnTeasers);
    }
    if (this.btnPlay) {
      this.btnPlay.addEventListener('click', this.handlePlayPauseClick);
    }
    if (this.btnPause) {
      this.btnPause.addEventListener('click', this.handlePlayPauseClick);
    }
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', this.handleNextPrevClick);
    }
    if (this.btnNext) {
      this.btnNext.addEventListener('click', this.handleNextPrevClick);
    }

    if (this.slidesContainer) {
      // Mouse events
      this.slidesContainer.addEventListener('mouseover', this.handleMouseOver);
      this.slidesContainer.addEventListener('mouseout', this.handleMouseOut);
    }
    if (this.container) {
      this.container.addEventListener('focus', this.handleFocus, true);
    }
    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    if (this.sliderEl) {
      this.initSlider(this.sliderEl);
    }

    this.element.addEventListener('focusin', (e) => {
      if (!this.element.contains(e.relatedTarget)) {
        this.handleAutoPlay(true);

        if (e.target.classList.contains('ecl-carousel__teaser-button')) {
          const activeIndex = this.slider.selectedSnap();
          const buttons = queryAll(
            '.ecl-carousel__teaser-button',
            this.element,
          );
          const activeButton = buttons[activeIndex];

          if (activeButton && activeButton !== e.target) {
            e.preventDefault();
            activeButton.focus();
          }
        }
      }
    });

    this.handleResize();

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
    if (this.slidesContainer) {
      this.slidesContainer.removeEventListener(
        'mouseover',
        this.handleMouseOver,
      );
      this.slidesContainer.removeEventListener('mouseout', this.handleMouseOut);
    }
    if (this.container) {
      this.container.removeEventListener('focus', this.handleFocus, true);
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
   * Init the slider.
   */
  initSlider(sliderEl) {
    this.slider = EmblaCarousel(
      sliderEl,
      {
        loop: true,
        align: 'start',
        direction: this.direction,
        duration: 20,
        breakpoints: {
          [`(min-width: ${getBreakpoint('xl', true)})`]: { active: true },
        },
      },
      [
        Autoplay({
          delay: this.autoPlayDelay,
        }),
        Accessibility({
          carouselAriaLabel: 'Carousel',
          carouselAriaRoleDescription: '',
          slideAriaRoleDescription: '',
          slideRole: '',
          previousButtonAriaLabel: 'Show previous Slide',
          nextButtonAriaLabel: 'Show next Slide',
          dotButtonAriaLabel: (
            hasAnyGroupedSlides,
            firstSlideIndex,
            lastSlideIndex,
            totalSlides,
          ) => `Show slide ${firstSlideIndex + 1} of ${totalSlides}`,
          slideAriaLabel: () => '',
        }),
      ],
    );

    this.accessibility = this.slider.plugins().accessibility;
    this.prevButtonNode = queryOne(this.prevClass, this.element);
    this.nextButtonNode = queryOne(this.nextClass, this.element);
    this.pagerNode = queryOne(this.pagerClass, this.element);

    this.pager = new SliderPager({
      slider: this.slider,
      pagerElement: this.pagerNode,
      accessibility: this.accessibility,
      prevSelector: this.prevSelector,
      nextSelector: this.nextSelector,
      dotsSelector: this.dotsClass,
      dotTemplateSelector: '[data-ecl-slider-dot-template]',
      dotSelector: this.dotClass,
      activeDotSelector: this.activeDotClass,
      onUpdate: () => this.setCounter(),
    });

    this.pager.init();

    this.teaserButtons = queryAll(this.teaserButtonSelector, this.element);
    this.teaserButtons.forEach((button) => {
      button.addEventListener('click', () => {
        this.slider.goTo(Number(button.dataset.eclCarouselSlideIndex));
        this.handleAutoPlay(true);
      });
    });

    this.slider.on('select', this.updateTeasers);
    this.slider.on('reInit', this.updateTeasers);
    this.slider.on('autoplay:timerset', this.handleAutoplayTimerSet);
    this.updateTeasers();
  }

  handleAutoplayTimerSet = () => {
    if (!this.completionBar || !this.slider.plugins().autoplay?.isPlaying()) {
      return;
    }

    if (!this.completionBar.classList.contains('is-paused')) {
      this.resetLoadingBarAnimation();
    }

    this.completionBar.classList.add('is-active');
  };

  /**
   * Restart the shared loading-bar animation for a new autoplay interval.
   */
  resetLoadingBarAnimation() {
    const completion = queryOne(
      '.ecl-carousel__loading-bar-completion',
      this.completionBar,
    );

    if (!completion) {
      return;
    }

    completion.style.animation = 'none';
    void completion.offsetWidth; // eslint-disable-line no-void
    completion.style.animation = '';
  }

  /**
   * Keep the active teaser first in the horizontal teaser list.
   */
  updateTeasers() {
    const selectedIndex = this.slider.selectedSnap();
    const teaserCount = this.teaserButtons.length;

    this.teaserButtons.forEach((button, index) => {
      const isCurrent = index === selectedIndex;
      const position = (index - selectedIndex + teaserCount) % teaserCount;

      button.toggleAttribute('aria-current', isCurrent);
      if (isCurrent) {
        button.removeAttribute('tabindex');
      } else {
        button.setAttribute('tabindex', '-1');
      }
      button.style.order = position;
    });
  }

  /**
   * Sets the counter.
   */
  setCounter() {
    const currentIndex = this.slider.selectedSnap();
    const total = this.slider.snapList().length;
    const counter = queryOne('.ecl-carousel__counter', this.element);

    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${total}`;
    }
  }

  /**
   * Set the banners height above the xl breakpoint
   */
  checkBannerHeights() {
    this.executionCount += 1;
    if (this.executionCount > this.maxExecutions) {
      clearInterval(this.intervalId);
      this.executionCount = 0;
      return;
    }
    const heightValues = this.slides.map((slide) => {
      const banner = queryOne('.ecl-banner', slide);
      const bannerInstance = ECL.components.get(banner);
      const ratio = bannerInstance.defaultRatio();
      bannerInstance.setHeight(ratio);
      const padding =
        parseInt(banner.style.getPropertyValue('--banner-footer-height'), 10) ||
        0;
      const height = parseInt(banner.style.height, 10);
      const totalHeight = height + padding;
      if (banner.style.height === 'auto') {
        // FRONT-4970 - Always handle banner heights, even when set to auto
        return banner.offsetHeight;
      }
      if (Number.isNaN(height) || height === 100) {
        return 1;
      }

      return totalHeight;
    });

    const elementHeights = heightValues.filter(
      (height) => height !== undefined,
    );

    const tallestElementHeight = Math.max(...elementHeights);

    if (
      elementHeights.length === this.slides.length &&
      tallestElementHeight > 1
    ) {
      clearInterval(this.intervalId);

      this.executionCount = 0;
      this.slides.forEach((slide) => {
        let bannerImage = null;
        let bannerVideo = null;
        const banner = queryOne('.ecl-banner', slide);
        if (banner) {
          bannerImage = queryOne('img', banner);
          bannerVideo = queryOne('video', banner);
          const footerHeight =
            parseInt(
              banner.style.getPropertyValue('--banner-footer-height'),
              10,
            ) || 0;
          const newHeight = tallestElementHeight - footerHeight;
          banner.style.height = `${newHeight}px`;
          banner.style.aspectRatio = 'auto';
        }
        if (bannerImage) {
          bannerImage.style.aspectRatio = 'auto';
        }
        if (bannerVideo) {
          bannerVideo.style.aspectRatio = 'auto';
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
      let bannerVideo = null;
      let bannerFooter = null;
      if (banner) {
        banner.style.height = '';
        bannerImage = queryOne('img', banner);
        bannerVideo = queryOne('video', banner);
        bannerFooter = queryOne('.ecl-banner__credit', banner);

        if (bannerImage) {
          bannerImage.style.aspectRatio = '';
        }
        if (bannerVideo) {
          bannerVideo.style.aspectRatio = '';
        }
        if (bannerFooter) {
          setTimeout(() => {
            banner.style.setProperty(
              '--banner-footer-height',
              `${bannerFooter.offsetHeight}px`,
            );
          }, 100);
        }
      }
    });
  }

  /**
   * Toggles play/pause slides.
   */
  handleAutoPlay(stop = false) {
    if (window.innerWidth >= getBreakpoint('xl')) {
      if (!this.slider.plugins().autoplay?.isPlaying() && !stop) {
        this.slider.plugins().autoplay?.play();
        this.completionBar?.classList.remove('is-paused');
        const isFocus = document.activeElement === this.btnPlay;
        this.btnPlay.style.display = 'none';
        this.btnPause.style.display = 'flex';
        if (isFocus) {
          this.btnPause.focus();
        }
      } else {
        const isFocus = document.activeElement === this.btnPause;
        this.btnPlay.style.display = 'flex';
        this.btnPause.style.display = 'none';
        if (isFocus) {
          this.slider.plugins().autoplay?.pause();
          this.completionBar?.classList.add('is-paused');
          this.btnPlay.focus();
        } else {
          this.slider.plugins().autoplay?.stop();
          this.slider.plugins().autoplay?.reset();
          this.completionBar?.classList.remove('is-active', 'is-paused');
        }
      }
    }
  }

  handleNextPrevClick = () => {
    this.handleAutoPlay(true);
  };

  handlePlayPauseClick = () => {
    this.handleAutoPlay();
  };

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

    // We set 250ms delay which is higher than the 200ms delay in the banner.
    this.resizeTimer = setTimeout(() => {
      if (vw >= getBreakpoint('xl')) {
        this.intervalId = setInterval(this.checkBannerHeights, 100);
      } else {
        this.resetBannerHeights();
      }

      this.slideWidth = this.slides[0].scrollWidth;

      setTimeout(() => {
        // Reveal the carousel
        this.element.style.opacity = 1;
      }, 250);
    }, 250);

    // Add class to set a left margin to banner content and avoid arrow overlapping
    if (vw >= getBreakpoint('xl') && vw <= 1260) {
      this.container.classList.add('ecl-carousel-container--padded');
    } else {
      this.container.classList.remove('ecl-carousel-container--padded');
    }
    // Deactivate autoPlay for mobile or activate autoPlay onLoad for desktop
    if (vw <= getBreakpoint('m')) {
      this.slider.plugins().autoplay?.stop();
      this.slider.plugins().autoplay?.reset();
      this.btnPlay.style.display = '';
      this.btnPause.style.display = '';
      this.completionBar?.classList.remove('is-active', 'is-paused');
    } else {
      this.handleAutoPlay();
    }
  }

  /**
   * @param {Event} e
   */
  handleKeyboardOnTeasers(e) {
    const currentIndex = this.teaserButtons.indexOf(document.activeElement);

    if (currentIndex === -1) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowLeft': {
        e.preventDefault();
        const direction = e.key === 'ArrowRight' ? 1 : -1;
        const nextIndex =
          (currentIndex + direction + this.teaserButtons.length) %
          this.teaserButtons.length;

        this.slider.goTo(nextIndex);
        this.handleAutoPlay(true);
        this.teaserButtons[nextIndex].focus();
        break;
      }

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
    if (focusElement && focusElement.contains(document.activeElement)) {
      this.handleAutoPlay(true);
    }
    return this;
  }
}

export default Carousel;
