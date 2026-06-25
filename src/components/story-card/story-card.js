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
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;

    // Private variables - Carousel
    this.viewport = null;
    this.container = null;
    this.slides = null;
    this.emblaApi = null;
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
    this.expandedItem = null;

    this.setCounter = this.setCounter.bind(this);
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
      window.addEventListener('resize', () => this.onWindowResize(), false);
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
      button.addEventListener('click', () => this.toggleGridItem(index));
    });
  }

  /**
   * Update the carousel counter.
   */
  updateCounter() {
    if (!this.emblaApi || !this.currentElement) return;

    const current = this.emblaApi.snapIndex() + 1;
    if (this.currentElement) {
      this.currentElement.textContent = current;
    }
  }

  /**
   * Toggle grid item expansion.
   *
   * @param {Number} index Index of the item to toggle
   */
  toggleGridItem(index) {
    const button = this.gridButtons[index];
    const details = queryOne(
      `${this.gridDetailsSelector}[data-ecl-story-card-grid-details="${index}"]`,
      this.element,
    );
    const item = queryOne(
      `${this.gridItemSelector}[data-ecl-story-card-grid-item="${index}"]`,
      this.element,
    );

    if (!button || !details || !item) return;

    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Close previously expanded item
    if (this.expandedItem !== null && this.expandedItem !== index) {
      const prevButton = this.gridButtons[this.expandedItem];
      const prevDetails = queryOne(
        `${this.gridDetailsSelector}[data-ecl-story-card-grid-details="${this.expandedItem}"]`,
        this.element,
      );
      const prevItem = queryOne(
        `${this.gridItemSelector}[data-ecl-story-card-grid-item="${this.expandedItem}"]`,
        this.element,
      );

      if (prevButton && prevDetails && prevItem) {
        prevButton.setAttribute('aria-expanded', 'false');
        prevDetails.style.display = 'none';
        prevItem.classList.remove('ecl-story-card__grid-item--expanded');
      }
    }

    // Toggle current item
    if (isExpanded) {
      button.setAttribute('aria-expanded', 'false');
      details.style.display = 'none';
      item.classList.remove('ecl-story-card__grid-item--expanded');
      this.expandedItem = null;
    } else {
      button.setAttribute('aria-expanded', 'true');
      details.style.display = 'block';
      item.classList.add('ecl-story-card__grid-item--expanded');
      this.expandedItem = index;
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
    if (!this.emblaApi || this.isAutoPlaying) return;

    this.isAutoPlaying = true;

    if (this.btnPlay) this.btnPlay.style.display = 'none';
    if (this.btnPause) this.btnPause.style.display = 'block';

    this.autoPlayInterval = setInterval(() => {
      if (this.emblaApi) {
        this.emblaApi.scrollNext();
      }
    }, 4000);
  }

  /**
   * Pause auto-play.
   */
  pause() {
    if (!this.emblaApi || !this.isAutoPlaying) return;

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
    if (this.emblaApi) {
      this.emblaApi.reInit();
      this.updateCounter();
    }
  }

  /**
   * Destroy the component.
   */
  destroy() {
    if (this.emblaApi) {
      this.emblaApi.destroy();
    }

    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }

    if (this.attachResizeListener) {
      window.removeEventListener('resize', () => this.onWindowResize());
    }

    this.eventManager.destroy();
  }
}

export default StoryCard;
