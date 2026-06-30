import { queryOne, queryAll } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';
import EmblaCarousel from 'embla-carousel';

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
 * @param {String} options.counterSelector Selector for counter element
 * @param {String} options.currentSelector Selector for current slide number
 * @param {String} options.totalSelector Selector for total slides
 * @param {String} options.gridItemSelector Selector for grid items
 * @param {String} options.gridButtonSelector Selector for grid buttons
 * @param {String} options.gridDetailsSelector Selector for grid details
 * @param {String} options.gridPrevSelector Selector for grid previous button
 * @param {String} options.gridNextSelector Selector for grid next button
 * @param {String} options.gridPlaySelector Selector for grid play button
 * @param {String} options.gridPauseSelector Selector for grid pause button
 * @param {Number} options.gridAutoplayDelay Autoplay delay for grid items
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
   * @event StoryCard#onClick
   * @memberof StoryCard
   */
  supportedEvents = ['onClick'];

  constructor(
    element,
    {
      viewportSelector = '[data-ecl-story-card-viewport]',
      containerSelector = '[data-ecl-story-card-container]',
      slideSelector = '[data-ecl-story-card-slide]',
      prevSelector = '[data-ecl-story-card-prev]',
      nextSelector = '[data-ecl-story-card-next]',
      playSelector = '[data-ecl-story-card-play]',
      pauseSelector = '[data-ecl-story-card-pause]',
      pagerClass = '.ecl-story-card__pager',
      dotsClass = '.ecl-story-card__dots',
      dotClass = '.ecl-story-card__dot',
      activeDotClass = 'ecl-story-card__dot--active',
      counterSelector = '[data-ecl-story-card-counter]',
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
    this.playSelector = playSelector;
    this.pauseSelector = pauseSelector;
    this.pagerClass = pagerClass;
    this.dotsClass = dotsClass;
    this.dotClass = dotClass;
    this.activeDotClass = activeDotClass;
    this.counterSelector = counterSelector;
    this.currentSelector = currentSelector;
    this.totalSelector = totalSelector;
    this.gridItemSelector = gridItemSelector;
    this.gridButtonSelector = gridButtonSelector;
    this.gridDetailsSelector = gridDetailsSelector;
    this.gridPrevSelector = gridPrevSelector;
    this.gridNextSelector = gridNextSelector;
    this.gridPlaySelector = gridPlaySelector;
    this.gridPauseSelector = gridPauseSelector;
    this.gridAutoplayDelay = gridAutoplayDelay;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables - Carousel
    this.viewport = null;
    this.container = null;
    this.slides = null;
    this.slider = null;
    this.btnPrev = null;
    this.btnNext = null;
    this.btnPlay = null;
    this.btnPause = null;
    this.currentElement = null;
    this.totalElement = null;
    this.index = 1;
    this.total = 0;
    this.autoPlayInterval = null;
    this.isAutoPlaying = false;
    this.toggleButtonsDisabled = null;

    // Private variables - Grid (Desktop)
    this.gridItems = null;
    this.gridButtons = null;
    this.gridDetails = null;
    this.btnGridPrev = null;
    this.btnGridNext = null;
    this.btnGridPlay = null;
    this.btnGridPause = null;
    this.expandedItem = null;
    this.gridAutoplayInterval = null;
    this.gridDetailsHeightFrame = null;
    this.isGridAutoPlaying = false;

    this.setCounter = this.setCounter.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
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
    this.btnPlay = queryOne(this.playSelector, this.element);
    this.btnPause = queryOne(this.pauseSelector, this.element);
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
   * Initialize Embla carousel.
   */
  initCarousel() {
    this.slider = EmblaCarousel(this.viewport, {
      loop: true,
      skipSnaps: false,
    });

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
        const dotTemplate = document.getElementById(
          'ecl-story-card__dot-template',
        );
        const snapList = emblaApi.snapList();
        this.dotsNode.innerHTML = snapList.reduce(
          (acc) => acc + dotTemplate.innerHTML,
          '',
        );
        return Array.from(queryAll(this.dotClass, this.dotsNode));
      };

      const addDotButtonClickHandlers = (emblaApi, dotNodes) => {
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
        addDotButtonClickHandlers(emblaApi, dotNodes);
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

        this.setCounter();
      };

      this.updateDots();
      this.slider.on('select', this.updateDots);
    }

    this.updateCounter();
    this.slider.on('select', () => {
      this.updateCounter();
    });
  }

  /**
   * Sets the counter (in mobile).
   */
  setCounter() {
    const currentIndex = this.slider.selectedSnap();
    const total = this.slider.snapList().length;
    const counter = queryOne('.ecl-story-card__counter', this.element);

    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${total}`;
    }
  }

  /**
   * Initialize desktop grid accordion.
   */
  initGridAccordion() {
    this.gridButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.pauseGridAutoplay();
        this.setGridItem(index);
      });

      if (button.getAttribute('aria-expanded') === 'true') {
        this.expandedItem = index;
        this.setGridItem(index);
      }
    });

    if (this.expandedItem === null) {
      this.setGridItem(0);
    }

    this.setGridDetailsHeight();
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
   * Set every grid details panel to the height of the tallest one.
   */
  setGridDetailsHeight() {
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
      details.hidden = true;
    });

    this.gridDetails.forEach((details) => {
      details.hidden = false;
      details.style.visibility = 'hidden';
      details.style.pointerEvents = 'none';

      maxHeight = Math.max(maxHeight, details.getBoundingClientRect().height);

      details.hidden = true;
      details.style.visibility = '';
      details.style.pointerEvents = '';
    });

    this.gridDetails.forEach((details, index) => {
      const styles = window.getComputedStyle(details);
      const verticalSpacing =
        (parseFloat(styles.paddingTop) || 0) +
        (parseFloat(styles.paddingBottom) || 0) +
        (parseFloat(styles.borderTopWidth) || 0) +
        (parseFloat(styles.borderBottomWidth) || 0);
      const height =
        styles.boxSizing === 'border-box'
          ? maxHeight
          : Math.max(maxHeight - verticalSpacing, 0);

      details.style.height = `${Math.ceil(height)}px`;
      details.hidden = index !== activeIndex;
    });
  }

  /**
   * Update the carousel counter.
   */
  updateCounter() {
    if (!this.slider || !this.currentElement) return;

    const current = this.slider.snapIndex() + 1;
    if (this.currentElement) {
      this.currentElement.textContent = current;
    }
  }

  /**
   * Set the expanded grid item.
   *
   * @param {Number} index Index of the item to toggle
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

      gridButton.setAttribute('aria-expanded', isActive ? 'true' : 'false');

      if (item) {
        item.classList.toggle('ecl-story-card__grid-item--expanded', isActive);
      }

      if (details) {
        details.hidden = !isActive;
      }
    });

    this.expandedItem = nextIndex;
  }

  /**
   * Move the grid accordion to the previous item.
   */
  goToPreviousGridItem() {
    this.setGridItem((this.expandedItem || 0) - 1);
  }

  /**
   * Move the grid accordion to the next item.
   */
  goToNextGridItem() {
    this.setGridItem((this.expandedItem || 0) + 1);
  }

  /**
   * Start the grid auto-play.
   */
  playGridAutoplay() {
    if (
      !this.gridButtons ||
      this.gridButtons.length < 2 ||
      this.gridAutoplayInterval
    ) {
      return;
    }

    this.gridAutoplayInterval = setInterval(() => {
      this.goToNextGridItem();
    }, this.gridAutoplayDelay);
    this.isGridAutoPlaying = true;

    if (this.btnGridPlay) this.btnGridPlay.style.display = 'none';
    if (this.btnGridPause) this.btnGridPause.style.display = 'flex';
  }

  /**
   * Pause the grid auto-play.
   */
  pauseGridAutoplay() {
    if (!this.gridAutoplayInterval) return;

    clearInterval(this.gridAutoplayInterval);
    this.gridAutoplayInterval = null;
    this.isGridAutoPlaying = false;

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
   * Attach event listeners.
   */
  attachListeners() {
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => {
        if (this.slider) {
          this.slider.goToPrev();
        }
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        if (this.slider) {
          this.slider.goToNext();
        }
      });
    }

    if (this.btnPlay) {
      this.btnPlay.addEventListener('click', () => this.play());
    }

    if (this.btnPause) {
      this.btnPause.addEventListener('click', () => this.pause());
    }

    if (this.btnGridPrev) {
      this.btnGridPrev.addEventListener('click', () => {
        this.goToPreviousGridItem();
      });
    }

    if (this.btnGridNext) {
      this.btnGridNext.addEventListener('click', () => {
        this.goToNextGridItem();
      });
    }

    if (this.btnGridPlay) {
      this.btnGridPlay.addEventListener('click', () => {
        this.toggleGridAutoplay(true);
      });
    }

    if (this.btnGridPause) {
      this.btnGridPause.addEventListener('click', () => {
        this.toggleGridAutoplay(false);
      });
    }

    // Auto-pause on interaction
    if (this.slider) {
      this.slider.on('pointerDown', () => {
        if (this.isAutoPlaying) {
          this.pause();
        }
      });
    }
  }

  /**
   * Start auto-play.
   */
  play() {
    if (!this.slider || this.isAutoPlaying) return;

    this.isAutoPlaying = true;

    if (this.btnPlay) this.btnPlay.style.display = 'none';
    if (this.btnPause) this.btnPause.style.display = 'block';

    this.autoPlayInterval = setInterval(() => {
      if (this.slider) {
        this.slider.scrollNext();
      }
    }, 10000);
  }

  /**
   * Pause auto-play.
   */
  pause() {
    if (!this.slider || !this.isAutoPlaying) return;

    this.isAutoPlaying = false;

    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }

    if (this.btnPlay) this.btnPlay.style.display = 'block';
    if (this.btnPause) this.btnPause.style.display = 'none';
  }

  /**
   * Handle window resize.
   */
  onWindowResize() {
    if (this.slider) {
      this.slider.reInit();
      this.updateCounter();
    }

    this.scheduleGridDetailsHeight();
  }

  /**
   * Destroy the component.
   */
  destroy() {
    if (this.slider) {
      this.slider.destroy();
    }

    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }

    if (this.gridAutoplayInterval) {
      clearInterval(this.gridAutoplayInterval);
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

    this.eventManager.destroy();
  }
}

export default StoryCard;
