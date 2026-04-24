import { queryOne, queryAll } from '@ecl/dom-utils';
import EventManager from '@ecl/event-manager';
import EmblaCarousel from 'embla-carousel';
import Accessibility from 'embla-carousel-accessibility';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.itemSelector Element used to trigger the animation
 * @param {String} options.sliderSelector Root element of the slider
 * @param {String} options.filppedClass Css class for the active dot element
 * @param {String} options.textClass Css class of the element containing the text
 * @param {String} options.frontClass Css class of the initially visible face of the card
 * @param {String} options.backClass Css class of the initially hidden face of the card
 * @param {String} options.prevClass Css class of the prev button
 * @param {String} options.nextClass Css class of the next button
 * @param {String} options.dotsClass Css class of the dots wrapper
 * @param {String} options.dotClass Css class of the single dot
 * @param {String} options.activeDotClass Css class to be assigned to the active dot
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachResizeListener Whether or not to bind resize events
 * @param {Boolean} options.attachKeyboardListener Whether or not to bind keyboard events
 */
export class Quiz {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Quiz} An instance of Quiz.
   */
  static autoInit(root, { QUIZ: defaultOptions = {} } = {}) {
    const quiz = new Quiz(root, defaultOptions);
    quiz.init();
    root.ECLQuiz = quiz;
    return quiz;
  }

  /**
   * An array of supported events for this component.
   *
   * @type {Array<string>}
   * @event Quiz#onClick
   * @memberof Quiz
   */
  supportedEvents = ['onClick'];

  constructor(
    element,
    {
      cardSelector = '.ecl-quiz-card',
      sliderSelector = '[data-ecl-quiz-slider]',
      itemSelector = '[data-ecl-quiz-card-flip]',
      flippedClass = 'ecl-quiz-card__flipped',
      questionClass = '.ecl-quiz-card__question',
      answerClass = '.ecl-quiz-card__answer',
      optionClass = '.ecl-quiz-card__option',
      contentClass = '.ecl-quiz-card__content',
      frontClass = '.ecl-quiz-card__front',
      backClass = '.ecl-quiz-card__back',
      prevClass = '.ecl-quiz__prev',
      nextClass = '.ecl-quiz__next',
      dotsClass = '.ecl-quiz__dots',
      dotClass = '.ecl-quiz__dot',
      activeDotClass = 'ecl-quiz__dot--active',
      attachClickListener = true,
      attachResizeListener = true,
      attachKeyboardListener = true,
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
    this.direction = getComputedStyle(this.element).direction;

    // Options
    this.cardSelector = cardSelector;
    this.itemSelector = itemSelector;
    this.flippedClass = flippedClass;
    this.contentClass = contentClass;
    this.questionClass = questionClass;
    this.answerClass = answerClass;
    this.prevClass = prevClass;
    this.nextClass = nextClass;
    this.dotsClass = dotsClass;
    this.dotClass = dotClass;
    this.frontClass = frontClass;
    this.backClass = backClass;
    this.optionClass = optionClass;
    this.activeDotClass = activeDotClass;
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;
    this.attachKeyboardListener = attachKeyboardListener;
    this.sliderSelector = sliderSelector;

    this.prevButtonNode = null;
    this.nextButtonNode = null;
    this.resizeTimer = null;
    this.slider = null;
    this.dotsNode = null;

    // Bind `this` for use in callbacks
    this.handleClickOnItem = this.handleClickOnItem.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.checkHeight = this.checkHeight.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.initSlider = this.initSlider.bind(this);
    this.setCounter = this.setCounter.bind(this);
    this.escapeSlider = this.escapeSlider.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }
    ECL.components = ECL.components || new Map();

    this.items = queryAll(this.itemSelector, this.element);
    this.cards = queryAll(this.cardSelector, this.element);
    this.sliderEl = queryOne(this.sliderSelector, this.element);

    // Bind click event on toggle
    if (this.attachClickListener && this.items.length > 0) {
      this.items.forEach((item) => {
        item.addEventListener('click', this.handleClickOnItem);
      });
    }

    if (this.attachKeyboardListener && this.sliderEl) {
      this.sliderEl.addEventListener('keydown', this.handleKeyboard);
    }

    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize);
    }

    if (this.cards.length) {
      this.checkHeight();
    }

    if (this.sliderEl) {
      this.initSlider(this.sliderEl);
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof Quiz
   * @instance
   *
   * @example
   * // Registering a callback for the 'toggle' event
   * quiz.on('onClick', (event) => {
   *   console.log('Click event occurred!', event);
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
   * @memberof Quiz
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Destroy component.
   */
  destroy() {
    if (this.attachClickListener && this.items) {
      this.items.forEach((item) => {
        item.removeEventListener('click', this.handleClickOnItem);
      });
    }

    if (this.attachKeyboardListener && this.items) {
      this.items.forEach((item) => {
        item.removeEventListener('keydown', this.handleClickOnItem);
      });
    }

    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }

    if (this.slider) {
      this.slider.destroy();
    }
  }

  /**
   * Init the slider.
   */
  initSlider(sliderEl) {
    const liveRegionNode = queryOne('[aria-live]', this.element);

    this.slider = EmblaCarousel(
      sliderEl,
      {
        loop: false,
        align: 'start',
        direction: this.direction,
      },
      [
        Accessibility({
          carouselAriaLabel: 'Quiz slider',
          announceChanges: true,
          dotButtonAriaLabel: (
            hasAnyGroupedSlides,
            firstSlideIndex,
            lastSlideIndex,
            totalSlides,
            selectedSnapIndex,
            totalSnaps,
          ) => {
            const visibleSlides = totalSlides - (totalSnaps - 1);
            if (hasAnyGroupedSlides) {
              const start = firstSlideIndex + 1;
              const end = Math.min(
                firstSlideIndex + visibleSlides,
                totalSlides,
              );
              return `Go to slides ${start} to ${end} of ${totalSlides}`;
            }

            return `Go to slide ${firstSlideIndex + 1} of ${totalSlides}`;
          },
        }),
      ],
    );

    const accessibility = this.slider.plugins().accessibility;
    this.prevButtonNode = queryOne(this.prevClass, this.element);
    this.nextButtonNode = queryOne(this.nextClass, this.element);

    if (this.prevButtonNode) {
      this.prevButtonNode.addEventListener(
        'click',
        () => this.slider.goToPrev(),
        false,
      );
    }
    if (this.nextButtonNode) {
      this.nextButtonNode.addEventListener(
        'click',
        () => this.slider.goToNext(),
        false,
      );
    }

    if (this.prevButtonNode && this.nextButtonNode) {
      const toggleButtonsDisabled = (emblaApi) => {
        const setButtonState = (button, enabled) => {
          button.toggleAttribute('disabled', !enabled);
        };
        setButtonState(this.prevButtonNode, emblaApi.canGoToPrev());
        setButtonState(this.nextButtonNode, emblaApi.canGoToNext());
      };

      toggleButtonsDisabled(this.slider);
      this.slider.on('select', toggleButtonsDisabled);
      this.slider.on('reInit', toggleButtonsDisabled);

      accessibility.setupPrevAndNextButtons(
        this.prevButtonNode,
        this.nextButtonNode,
      );
    }

    let dotNodes = [];
    this.dotsNode = queryOne(this.dotsClass, this.element);

    if (this.dotsNode) {
      const createDotButtonHtml = (emblaApi) => {
        const dotTemplate = document.getElementById('ecl-quiz__dot-template');
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

        this.prevButtonNode.style.display = '';
        this.nextButtonNode.style.display = '';

        if (!canScroll) {
          this.prevButtonNode.style.display = 'none';
          this.nextButtonNode.style.display = 'none';

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

      accessibility.setupDotButtons(this.dotsNode);

      this.updateDots();
      this.slider.on('select', this.updateDots);
    }

    accessibility.setupLiveRegion(liveRegionNode);
  }

  /**
   * Sets the counter (in mobile).
   */
  setCounter() {
    const currentIndex = this.slider.selectedSnap();
    const total = this.slider.snapList().length;
    const counter = queryOne('.ecl-quiz__counter', this.element);

    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${total}`;
    }
  }

  /**
   * Check the height of the elements.
   *
   * @memberof Quiz
   */
  checkHeight() {
    let maxHeight = 0;
    let maxTextHeight = 0;

    const front = queryOne(this.frontClass, this.element);
    const styles = getComputedStyle(front);
    const minHeight = parseFloat(styles.getPropertyValue('min-height')) || 345;

    this.cards.forEach((card) => {
      const front = queryOne(this.frontClass, card);
      const back = queryOne(this.backClass, card);
      const question = queryOne(this.questionClass, card);
      const answer = queryOne(this.answerClass, card);

      front.style.position = 'static';
      back.style.position = 'static';

      // Reset heights previously set.
      question.style.minHeight = '';
      answer.style.minHeight = '';

      const heightQuestion = question.scrollHeight;
      const heightAnswer = answer.scrollHeight;
      const heightText = Math.max(heightQuestion, heightAnswer);

      if (heightText > maxTextHeight) {
        maxTextHeight = heightText;
      }

      front.style.position = '';
      back.style.position = '';
    });

    this.cards.forEach((card) => {
      const question = queryOne(this.questionClass, card);
      const answer = queryOne(this.answerClass, card);
      const front = queryOne(this.frontClass, card);
      const back = queryOne(this.backClass, card);
      const content = queryOne(this.contentClass, card);

      front.style.position = 'static';
      back.style.position = 'static';
      content.style.height = '';

      question.style.minHeight = maxTextHeight + 'px';
      answer.style.minHeight = maxTextHeight + 'px';

      const heightFront = front.scrollHeight;
      const heightBack = back.scrollHeight;
      const height = Math.max(heightFront, heightBack);

      if (height > minHeight && height > maxHeight) {
        maxHeight = height;
      }
      front.style.position = '';
      back.style.position = '';
    });

    if (maxHeight > 0) {
      this.cards.forEach((card) => {
        const content = queryOne(this.contentClass, card);
        content.style.height = maxHeight + 'px';
      });
    }
  }

  /**
   * Handle keyboard events for accessibility.
   *
   * @memberof Quiz
   */
  handleKeyboard(e) {
    if (e.key === 'Escape') {
      this.escapeSlider();
    }

    const item = e.target;
    const card = item.closest(this.cardSelector);
    if (!card) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleClickOnItem(e);
    }

    if (
      e.key === 'Tab' &&
      e.target.classList.contains(this.optionClass.slice(1))
    ) {
      const focusables = queryAll(
        this.frontClass + ' ' + this.optionClass,
        card,
      );

      const focusableArray = Array.from(focusables);
      const currentIndex = focusableArray.indexOf(item);
      const isFirst = currentIndex === 0;
      const isLast = currentIndex === focusableArray.length - 1;

      // Shift + Tab
      if (e.shiftKey) {
        item.previousElementSibling?.setAttribute('tabindex', '0');
        // Handle Shift + Tab on the first option of the card
        if (isFirst || card.classList.contains(this.flippedClass)) {
          const prevSlide = card.previousElementSibling;

          if (prevSlide) {
            e.preventDefault();
            this.slider.goToPrev();
            const previousFocusables = queryAll(
              this.frontClass + ' ' + this.optionClass,
              prevSlide,
            );
            const previousOption = Array.from(previousFocusables).pop();
            if (previousOption) {
              previousOption.setAttribute('tabindex', '0');
              previousOption.focus();
            }
          }
        }

        return;
      }

      item.nextElementSibling?.setAttribute('tabindex', '0');
      // Handle tab on the last option of the card
      if (isLast || card.classList.contains(this.flippedClass)) {
        const nextSlide = item.closest(this.cardSelector).nextElementSibling;

        if (nextSlide) {
          e.preventDefault();
          this.slider.goToNext();
          const nextOption = queryOne(
            this.frontClass + ' ' + this.optionClass,
            nextSlide,
          );
          if (nextOption) {
            nextOption.setAttribute('tabindex', '0');
            nextOption.focus();
          }
        }
      }
    }
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      if (this.slider) {
        this.createAndSetupDotButtons(this.slider, this.dotsNode);
        this.updateDots();
      }

      this.checkHeight();
    }, 100);
  }

  /**
   * Flips the card.
   *
   * @param {Event} e
   *
   * @fires Quiz#onClick
   */
  handleClickOnItem(e) {
    const card = e.target.closest(this.cardSelector);

    if (card) {
      card.classList.toggle(this.flippedClass);
      if (card.hasAttribute('aria-pressed')) {
        card.setAttribute(
          'aria-pressed',
          card.classList.contains(this.flippedClass),
        );
      }
      const isFlipped = card.classList.contains(this.flippedClass);
      const front = queryOne(this.frontClass, card);
      const back = queryOne(this.backClass, card);

      if (e.target.classList.contains(this.optionClass.slice(1))) {
        const parent = e.target.parentNode;
        const items = Array.from(parent.children);
        const index = items.indexOf(e.target);
        const match = e.target.getAttribute('data-match') === 'true';
        e.target.setAttribute('aria-pressed', 'true');

        if (match) {
          back.classList.add('ecl-quiz-card--correct');
        }

        const options = queryOne('.ecl-quiz-card__options', back);
        Array.from(options.children).forEach((el) =>
          el.classList.remove('ecl-quiz-card__option--selected'),
        );
        options.children[index].classList.add(
          'ecl-quiz-card__option--selected',
        );
      }

      front.hidden = isFlipped;
      back.hidden = !isFlipped;

      const eventData = { flipped: !isFlipped, e };
      this.trigger('onClick', eventData);
    }
  }

  /**
   * Moves the focus out of the slider when Escape is pressed.
   *
   */
  escapeSlider() {
    if (this.slider.canGoToNext()) {
      this.nextButtonNode.focus();
      return;
    }

    if (!this.dotsNode) {
      return;
    }

    const dots = queryAll(this.dotClass, this.dotsNode);
    if (dots.length > 0) {
      const lastDot = dots[dots.length - 1];
      lastDot.focus();
    }
  }
}

export default Quiz;
