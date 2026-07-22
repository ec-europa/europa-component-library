import { queryOne, queryAll } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';
import EmblaCarousel from 'embla-carousel';
import Accessibility from 'embla-carousel-accessibility';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.viewportSelector Selector for carousel viewport
 * @param {String} options.containerSelector Selector for carousel container
 * @param {String} options.slideSelector Selector for carousel slides
 * @param {String} options.prevSelector Selector for prev button
 * @param {String} options.nextSelector Selector for next button
 * @param {String} options.playSelector Selector for play button
 * @param {String} options.pauseSelector Selector for pause button
 * @param {String} options.currentSelector Selector for current slide number
 * @param {String} options.totalSelector Selector for total slides
 * @param {String} options.gridItemSelector Selector for grid items
 * @param {String} options.gridButtonSelector Selector for grid buttons
 * @param {String} options.gridDetailsSelector Selector for grid details
 * @param {String} options.gridPrevSelector Selector for grid previous button
 * @param {String} options.gridNextSelector Selector for grid next button
 * @param {String} options.gridPlaySelector Selector for grid play button
 * @param {String} options.gridPauseSelector Selector for grid pause button
 * @param {String} options.desktopBreakpointCssVar CSS variable for the desktop breakpoint
 * @param {String} options.minHeightDesktopCssVar CSS variable for the minimum desktop height
 * @param {Number} options.gridAutoplayDelay Autoplay delay for grid items
 * @param {String} options.pagerClass Selector for the pager container
 * @param {String} options.dotsClass Selector for the dots container
 * @param {String} options.dotClass Selector for a dot button
 * @param {String} options.activeDotClass Class applied to the active dot
 * @param {Boolean} options.attachClickListener Whether to attach click listeners
 * @param {Boolean} options.attachResizeListener Whether to attach resize listeners
 */
export class StoryCard {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {StoryCard} An instance of StoryCard.
   */
  static autoInit(root, { STORYCARD: defaultOptions = {} } = {}) {
    const storyCard = new StoryCard(root, defaultOptions);
    storyCard.init();
    root.ECLStoryCard = storyCard;
    return storyCard;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @memberof StoryCard
   *
   */
  supportedEvents = ['onSelection'];

  /**
   * @event StoryCard#onSelection
   * @type {Object}
   * @property {number} index
   * @property {HTMLElement} button
   * @property {?HTMLElement} details
   */

  constructor(
    element,
    {
      viewportSelector = '[data-ecl-story-card-viewport]',
      containerSelector = '[data-ecl-story-card-container]',
      slideSelector = '[data-ecl-story-card-slide]',
      prevSelector = '[data-ecl-story-card-prev]',
      nextSelector = '[data-ecl-story-card-next]',
      pagerClass = '.ecl-story-card__pager',
      completionBarClass = '.ecl-story-card__grid-loading-bar-completion',
      dotsClass = '.ecl-story-card__dots',
      dotClass = '.ecl-story-card__dot',
      activeDotClass = 'ecl-story-card__dot--active',
      currentSelector = '[data-ecl-story-card-current]',
      totalSelector = '[data-ecl-story-card-total]',
      gridItemSelector = '[data-ecl-story-card-grid-item]',
      gridButtonSelector = '[data-ecl-story-card-grid-button]',
      gridDetailsSelector = '[data-ecl-story-card-grid-details]',
      gridPrevSelector = '[data-ecl-story-card-grid-prev]',
      gridNextSelector = '[data-ecl-story-card-grid-next]',
      gridPlaySelector = '[data-ecl-story-card-grid-play]',
      gridPauseSelector = '[data-ecl-story-card-grid-pause]',
      gridAutoplayDelay = 10000,
      attachClickListener = true,
      attachResizeListener = true,
      desktopBreakpointCssVar = '--story-card-grid-breakpoint',
      minHeightDesktopCssVar = '--story-card-min-height',
    } = {},
  ) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.eventManager = new EventManager();

    // Options
    this.viewportSelector = viewportSelector;
    this.containerSelector = containerSelector;
    this.slideSelector = slideSelector;
    this.prevSelector = prevSelector;
    this.nextSelector = nextSelector;
    this.pagerClass = pagerClass;
    this.dotsClass = dotsClass;
    this.dotClass = dotClass;
    this.activeDotClass = activeDotClass;
    this.currentSelector = currentSelector;
    this.totalSelector = totalSelector;
    this.gridItemSelector = gridItemSelector;
    this.gridButtonSelector = gridButtonSelector;
    this.gridDetailsSelector = gridDetailsSelector;
    this.completionBarClass = completionBarClass;
    this.gridPrevSelector = gridPrevSelector;
    this.gridNextSelector = gridNextSelector;
    this.gridPlaySelector = gridPlaySelector;
    this.gridPauseSelector = gridPauseSelector;
    this.gridAutoplayDelay = gridAutoplayDelay;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;
    this.desktopBreakpointCssVar = desktopBreakpointCssVar;
    this.minHeightDesktopCssVar = minHeightDesktopCssVar;

    // Private variables - Carousel
    this.viewport = null;
    this.container = null;
    this.slides = null;
    this.slider = null;
    this.btnPrev = null;
    this.btnNext = null;
    this.currentElement = null;
    this.totalElement = null;
    this.index = 1;
    this.total = 0;
    this.toggleButtonsDisabled = null;
    this.accessibility = null;
    this.direction = getComputedStyle(this.element).direction;

    // Private variables - Grid (Desktop)
    this.gridItems = null;
    this.gridButtons = null;
    this.gridDetails = null;
    this.btnGridPrev = null;
    this.btnGridNext = null;
    this.btnGridPlay = null;
    this.btnGridPause = null;
    this.expandedItem = null;
    this.desktopBreakpoint = null;
    this.minHeightDesktop = null;
    this.gridDetailsHeightFrame = null;
    this.isGridAutoPlaying = false;

    this.onWindowResize = this.onWindowResize.bind(this);
    this.pauseGridAutoplay = this.pauseGridAutoplay.bind(this);
    this.toggleGridAutoplay = this.toggleGridAutoplay.bind(this);
  }

  /**
   * Initialise the component.
   */
  init() {
    this.viewport = queryOne(this.viewportSelector, this.element);
    this.container = queryOne(this.containerSelector, this.element);
    this.slides = queryAll(this.slideSelector, this.element);
    this.btnPrev = queryOne(this.prevSelector, this.element);
    this.btnNext = queryOne(this.nextSelector, this.element);
    this.pagerNode = queryOne(this.pagerClass, this.element);
    this.currentElement = queryOne(this.currentSelector, this.element);
    this.totalElement = queryOne(this.totalSelector, this.element);
    this.gridItems = queryAll(this.gridItemSelector, this.element);
    this.gridButtons = queryAll(this.gridButtonSelector, this.element);
    this.gridDetails = queryAll(this.gridDetailsSelector, this.element);
    this.btnGridPrev = queryOne(this.gridPrevSelector, this.element);
    this.btnGridNext = queryOne(this.gridNextSelector, this.element);
    this.btnGridPlay = queryOne(this.gridPlaySelector, this.element);
    this.btnGridPause = queryOne(this.gridPauseSelector, this.element);
    this.completionBars = queryAll(this.completionBarClass, this.element);
    this.element.style.setProperty(
      '--ecl-story-card-slide-duration',
      `${this.gridAutoplayDelay}ms`,
    );
    this.desktopBreakpoint =
      getComputedStyle(this.element)
        .getPropertyValue(this.desktopBreakpointCssVar)
        .trim() || '970px';
    this.minHeightDesktop =
      getComputedStyle(this.element)
        .getPropertyValue(this.minHeightDesktopCssVar)
        .trim() || '548px';

    this.total = this.slides ? this.slides.length : 0;

    // Initialize Embla carousel if slides exist
    if (this.viewport && this.container && this.total > 0) {
      this.initCarousel();
    }

    // Initialize desktop grid accordion
    if (this.gridButtons && this.gridButtons.length > 0) {
      this.initGridAccordion();
    }

    // Attach listeners
    if (this.attachClickListener) {
      this.attachListeners();
    }

    if (this.attachResizeListener) {
      window.addEventListener('resize', this.onWindowResize, false);
    }
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof StoryCard
   * @instance
   *
   * @example
   * // Registering a callback for the 'onSelection' event
   * storyCard.on('onSelection', (event) => {
   *   console.log('Selection event occurred!', event);
   * });
   */
  on(eventName, callback) {
    this.eventManager.on(eventName, callback);
  }

  /**
   * Trigger a component event.
   *
   * @param {string} eventName - The name of the event to trigger.
   * @param {any} eventData - Data associated with the event.
   *
   * @memberof StoryCard
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Initialize Embla carousel.
   */
  initCarousel() {
    this.slider = EmblaCarousel(
      this.viewport,
      {
        loop: true,
        skipSnaps: false,
        direction: this.direction,
      },
      [
        Accessibility({
          carouselAriaLabel: 'Story card slider',
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

    if (this.btnPrev && this.btnNext) {
      this.toggleButtonsDisabled = (emblaApi) => {
        const setButtonState = (button, enabled) => {
          button.toggleAttribute('disabled', !enabled);
        };
        setButtonState(this.btnPrev, emblaApi.canGoToPrev());
        setButtonState(this.btnNext, emblaApi.canGoToNext());
      };

      this.toggleButtonsDisabled(this.slider);

      this.slider.on('select', this.toggleButtonsDisabled);
      this.slider.on('reInit', this.toggleButtonsDisabled);
    }

    let dotNodes = [];
    this.dotsNode = queryOne(this.dotsClass, this.element);

    if (this.dotsNode) {
      const createDotButtonHtml = (emblaApi) => {
        const dotTemplate = queryOne(
          '[data-ecl-story-card-dot-template]',
          this.element,
        );
        const snapList = emblaApi.snapList();
        this.dotsNode.innerHTML = snapList.reduce(
          (acc) => acc + dotTemplate.innerHTML,
          '',
        );
        return Array.from(queryAll(this.dotClass, this.dotsNode));
      };

      const addDotButtonSelectionHandlers = (emblaApi, dotNodes) => {
        dotNodes.forEach((dotNode, index) => {
          dotNode.addEventListener('click', () => emblaApi.goTo(index), false);
        });
      };

      this.createAndSetupDotButtons = (emblaApi) => {
        const canScroll =
          this.slider.canGoToNext() || this.slider.canGoToPrev();

        if (this.pagerNode) this.pagerNode.style.display = '';

        if (!canScroll) {
          if (this.pagerNode) this.pagerNode.style.display = 'none';

          this.dotsNode.innerHTML = '';
          dotNodes = [];
          return;
        }

        dotNodes = createDotButtonHtml(emblaApi);
        addDotButtonSelectionHandlers(emblaApi, dotNodes);
      };

      this.createAndSetupDotButtons(this.slider, this.dotsNode);
      this.slider.on('reInit', () => {
        this.createAndSetupDotButtons(this.slider, this.dotsNode);
      });

      this.updateDots = () => {
        if (!dotNodes.length) return;

        const index = this.slider.selectedSnap();

        dotNodes.forEach((dot, i) => {
          dot.classList.toggle(this.activeDotClass, i === index);
          dot.classList.toggle('is-prev', i === index - 1);
        });
      };

      this.accessibility = this.slider.plugins().accessibility;

      this.accessibility.setupPrevAndNextButtons(this.btnPrev, this.btnNext);

      this.accessibility.setupDotButtons(this.dotsNode);

      this.updateDots();
      this.slider.on('select', this.updateDots);
    }
  }

  /**
   * Initialize desktop grid accordion.
   */
  initGridAccordion() {
    this.gridButtons.forEach((button, index) => {
      if (button.getAttribute('aria-selected') === 'true') {
        this.expandedItem = index;
        this.setGridItem(index);
      }
    });

    if (this.expandedItem === null) {
      this.setGridItem(0);
    }

    this.scheduleGridDetailsHeight();
    this.playGridAutoplay();
  }

  /**
   * Schedule grid details height calculation after layout settles.
   */
  scheduleGridDetailsHeight() {
    if (typeof window === 'undefined' || !window.requestAnimationFrame) {
      this.setGridDetailsHeight();
      return;
    }

    if (
      this.gridDetailsHeightFrame &&
      typeof window !== 'undefined' &&
      window.cancelAnimationFrame
    ) {
      window.cancelAnimationFrame(this.gridDetailsHeightFrame);
    }

    this.gridDetailsHeightFrame = window.requestAnimationFrame(() => {
      this.gridDetailsHeightFrame = null;
      this.setGridDetailsHeight();
    });
  }

  /**
   * Based on the checks decides whether to apply or reset the grid details height.
   */
  setGridDetailsHeight() {
    if (typeof window === 'undefined' || !this.gridDetails?.length) return;

    const containerWidth = this.element.getBoundingClientRect().width;

    if (containerWidth < this.desktopBreakpoint) {
      this.resetGridDetailsHeight();
      return;
    }

    this.applyGridDetailsHeight();
  }

  /**
   * Reset every grid details panel height and properties previously set.
   */
  resetGridDetailsHeight() {
    this.gridDetails.forEach((details) => {
      details.style.height = '';
      details.style.visibility = '';
      details.style.pointerEvents = '';
    });
  }

  /**
   * Set every grid details panel to the height of the tallest one.
   */
  applyGridDetailsHeight() {
    if (
      typeof window === 'undefined' ||
      !this.gridDetails ||
      this.gridDetails.length === 0
    ) {
      return;
    }

    const activeIndex = this.expandedItem === null ? 0 : this.expandedItem;
    let maxHeight = 0;

    this.gridDetails.forEach((details) => {
      details.style.height = '';
    });

    this.gridDetails.forEach((details) => {
      details.hidden = false;
      details.style.visibility = 'hidden';
      details.style.pointerEvents = 'none';

      maxHeight = Math.max(maxHeight, details.getBoundingClientRect().height);

      details.hidden = true;
      details.style.pointerEvents = '';
      details.style.visibility = '';
    });

    this.gridDetails[activeIndex].hidden = false;

    if (maxHeight > parseFloat(this.minHeightDesktop)) {
      this.gridDetails.forEach((details) => {
        details.style.height = `${Math.ceil(maxHeight)}px`;
      });
    }
  }

  /**
   * Set the expanded grid item.
   *
   * @param {Number} index Index of the item to toggle
   * @fires StoryCard#onSelection
   */
  setGridItem(index) {
    if (!this.gridButtons || this.gridButtons.length === 0) return;

    const nextIndex =
      (index + this.gridButtons.length) % this.gridButtons.length;
    const button = this.gridButtons[nextIndex];

    if (!button) return;

    this.gridButtons.forEach((gridButton, buttonIndex) => {
      const item = queryOne(
        `${this.gridItemSelector}[data-ecl-story-card-grid-item="${buttonIndex}"]`,
        this.element,
      );
      const details = this.gridDetails[buttonIndex];
      const isActive = buttonIndex === nextIndex;

      gridButton.setAttribute('aria-selected', isActive ? 'true' : 'false');

      if (item) {
        item.classList.toggle('ecl-story-card__grid-item--expanded', isActive);
      }

      if (details) {
        details.hidden = !isActive;
      }
    });

    this.expandedItem = nextIndex;

    const activeButton = this.gridButtons[nextIndex];

    const eventData = {
      index: nextIndex,
      button: activeButton,
      details: this.gridDetails?.[nextIndex] ?? null,
    };

    this.trigger('onSelection', eventData);
  }

  /**
   * Move the grid accordion to the previous item.
   */
  goToPreviousGridItem = () => {
    this.setGridItem((this.expandedItem || 0) - 1);
  };

  /**
   * Move the grid accordion to the next item.
   */
  goToNextGridItem = () => {
    this.setGridItem((this.expandedItem || 0) + 1);
  };

  /**
   * Move the grid accordion to the next item when the css animation ends.
   */
  handleProgressEnd = () => {
    this.goToNextGridItem();
  };

  /**
   * Start the grid auto-play.
   */
  playGridAutoplay() {
    if (!this.gridButtons || this.gridButtons.length < 2) {
      return;
    }

    this.isGridAutoPlaying = true;

    this.completionBars.forEach((bar) => {
      bar.classList.remove('is-paused');
    });

    if (this.btnGridPlay) this.btnGridPlay.style.display = 'none';
    if (this.btnGridPause) this.btnGridPause.style.display = 'flex';
  }

  /**
   * Pause the grid auto-play.
   */
  pauseGridAutoplay() {
    this.isGridAutoPlaying = false;

    this.completionBars.forEach((bar) => {
      bar.classList.add('is-paused');
    });

    if (this.btnGridPlay) this.btnGridPlay.style.display = 'flex';
    if (this.btnGridPause) this.btnGridPause.style.display = 'none';
  }

  /**
   * Toggle the grid auto-play state.
   *
   * @param {Boolean} shouldPlay Whether auto-play should start
   */
  toggleGridAutoplay(shouldPlay) {
    if (shouldPlay) {
      const isFocus = document.activeElement === this.btnGridPlay;
      this.playGridAutoplay();
      if (isFocus && this.btnGridPause) {
        this.btnGridPause.focus();
      }
    } else {
      const isFocus = document.activeElement === this.btnGridPause;
      this.pauseGridAutoplay();
      if (isFocus && this.btnGridPlay) {
        this.btnGridPlay.focus();
      }
    }
  }

  /**
   * Handle the click on the next button.
   */
  handleNextClick = () => {
    this.slider?.goToNext();
  };

  /**
   * Handle the click on the prev button.
   */
  handlePrevClick = () => {
    this.slider?.goToPrev();
  };

  /**
   * Handle the click on the pause button.
   */
  handleGridPauseClick = () => {
    this.toggleGridAutoplay(false);
  };

  /**
   * Handle the click on the  pause button.
   */
  handleGridPlayClick = () => {
    this.toggleGridAutoplay(true);
  };

  handleClickOnGridButtons = (event) => {
    if (
      event.currentTarget
        .closest('.ecl-story-card__grid-item')
        .classList.contains('ecl-story-card__grid-item--expanded') &&
      !this.isGridAutoPlaying
    ) {
      this.playGridAutoplay();
    } else {
      this.pauseGridAutoplay();
    }
    const index = this.gridButtons.indexOf(event.currentTarget);
    this.setGridItem(index);
  };

  /**
   * Attach event listeners.
   */
  attachListeners() {
    this.btnPrev?.addEventListener('click', this.handlePrevClick);
    this.btnNext?.addEventListener('click', this.handleNextClick);
    this.btnGridPrev?.addEventListener('click', this.goToPreviousGridItem);
    this.btnGridNext?.addEventListener('click', this.goToNextGridItem);
    this.btnGridPlay?.addEventListener('click', this.handleGridPlayClick);
    this.btnGridPause?.addEventListener('click', this.handleGridPauseClick);
    this.gridButtons.forEach((button) => {
      button.addEventListener('click', this.handleClickOnGridButtons);
    });
    this.completionBars.forEach((bar) => {
      bar.addEventListener('animationend', this.handleProgressEnd);
    });
  }

  /**
   * Handle window resize.
   */
  onWindowResize() {
    this.scheduleGridDetailsHeight();
  }

  /**
   * Destroy the component.
   */
  destroy() {
    if (this.slider) {
      this.slider.destroy();
    }

    if (
      this.gridDetailsHeightFrame &&
      typeof window !== 'undefined' &&
      window.cancelAnimationFrame
    ) {
      window.cancelAnimationFrame(this.gridDetailsHeightFrame);
    }

    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.onWindowResize);
    }

    this.btnPrev?.removeEventListener('click', this.handlePrevClick);
    this.btnNext?.removeEventListener('click', this.handleNextClick);
    this.btnGridPrev?.removeEventListener('click', this.goToPreviousGridItem);
    this.btnGridNext?.removeEventListener('click', this.goToNextGridItem);
    this.btnGridPlay?.removeEventListener('click', this.handleGridPlayClick);
    this.btnGridPause?.removeEventListener('click', this.handleGridPauseClick);
    this.completionBars?.forEach((bar) => {
      bar.removeEventListener('animationend', this.handleProgressEnd);
    });
    this.gridButtons?.forEach((button) => {
      button.removeEventListener('click', this.handleClickOnGridButtons);
    });
  }
}

export default StoryCard;
