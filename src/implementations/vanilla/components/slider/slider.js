import EventManager from '@ecl/event-manager';
import getSystem from '@ecl/builder/utils/getSystem';
import iconBackEc from '@ecl/resources-ec-icons/dist/svg/all/arrow-left.svg';
import iconBackEu from '@ecl/resources-eu-icons/dist/svg/all/arrow-left.svg';

const system = getSystem();
const iconBack = system === 'eu' ? iconBackEu : iconBackEc;

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.showProgressAttr attribute used to toggle the progress bar
 * @param {String} options.variantAttr attribute used to determine the slider variant
 * @param {String} options.defaultItemSpacing Spacing value for the default variant
 * @param {String} options.fluidItemSpacing Spacing value for the fluid variant
 * @param {Boolean} options.attachClickListener Whether or not to bind click events
 * @param {Boolean} options.attachResizeListener Whether or not to bind resize event
 */
export class Slider {
  static autoInit(root, { SLIDER: defaultOptions = {} } = {}) {
    const slider = new Slider(root, defaultOptions);
    slider.init();
    root.ECLSlider = slider;
    return slider;
  }

  /**
   * @event Slider#onSlideChange
   */
  supportedEvents = ['onSlideChange'];

  constructor(
    element,
    {
      showProgressAttr = 'data-ecl-slider-progress',
      variantAttr = 'data-ecl-slider-variant',
      defaultItemSpacing = 32,
      fluidItemSpacing = 4,
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
    this.eventManager = new EventManager();
    this.attachClickListener = attachClickListener;
    this.attachResizeListener = attachResizeListener;
    this.variantAttr = variantAttr;
    this.defaultItemSpacing = defaultItemSpacing;
    this.fluidItemSpacing = fluidItemSpacing;
    this.slides = null;
    this.total = 0;
    this.current = 0;
    this.allowShift = true;
    this.translateX = 0;
    this.itemsPerSlide = 0;
    this.variant = this.element.getAttribute(this.variantAttr) || '';
    this.showProgress = this.element.hasAttribute(showProgressAttr);

    this.moveSlides = this.moveSlides.bind(this);
    this.shiftSlide = this.shiftSlide.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.checkButtonsVisibility = this.checkButtonsVisibility.bind(this);
    this.findLastVisibleItemIndex = this.findLastVisibleItemIndex.bind(this);
  }

  /**
   * Static method to create an svg icon.
   *
   * @static
   * @private
   * @returns {HTMLElement}
   */
  static #createSvgIcon(icon, classes) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = icon; // avoiding the use of not-so-stable createElementNs
    const svg = tempElement.children[0];
    svg.removeAttribute('height');
    svg.removeAttribute('width');
    svg.setAttribute('focusable', false);
    svg.setAttribute('aria-hidden', true);
    // The following element is <path> which does not support classList API as others.
    svg.setAttribute('class', classes);
    return svg;
  }

  init() {
    ECL.components = ECL.components || new Map();

    this.element.classList.add('ecl-slider__list');
    const wrapper = document.createElement('div');
    wrapper.classList.add('ecl-slider');
    if (this.variant === 'fluid') {
      wrapper.classList.add('ecl-slider--fluid');
    }
    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add('ecl-slider__container');
    innerWrapper.appendChild(this.element.cloneNode(true));
    wrapper.appendChild(innerWrapper);
    this.slides = Array.from(wrapper.firstChild.firstChild.children);

    this.slides.forEach((slide) => {
      slide.classList.add('ecl-slider__slide');
    });

    this.element.parentNode.insertBefore(wrapper, this.element);
    this.element.remove();
    // Retrieve the slider inside the new markup.
    this.element = wrapper.firstChild.firstChild;

    this.sliderInfo = document.createElement('div');
    this.sliderInfo.classList.add('ecl-slider__info');
    // Progress bar.
    if (this.showProgress) {
      this.progressBar = document.createElement('div');
      this.progressBar.classList.add('ecl-slider__progress-bar');
      this.progress = document.createElement('div');
      this.progress.classList.add('ecl-slider__progress');
      this.progressBar.appendChild(this.progress);
      this.sliderInfo.appendChild(this.progressBar);
    }
    // Controls.
    this.controls = document.createElement('div');
    this.controls.classList.add('ecl-slider__controls');
    // Previous button.
    this.prevButton = document.createElement('button');
    this.prevButton.classList.add(
      'ecl-slider__prev',
      'ecl-button',
      'ecl-button--ghost',
      'ecl-button--icon-only',
    );
    this.prevButton.disabled = true;
    const prevContainer = document.createElement('span');
    prevContainer.classList = 'ecl-button__container';
    prevContainer.appendChild(
      Slider.#createSvgIcon(iconBack, 'ecl-icon ecl-icon--m ecl-slider__icon'),
    );
    this.prevButton.appendChild(prevContainer);
    if (this.attachClickListener) {
      this.prevButton.addEventListener('click', () => this.shiftSlide(-1));
    }
    // Next button.
    this.nextButton = document.createElement('button');
    this.nextButton.classList.add(
      'ecl-slider__next',
      'ecl-button',
      'ecl-button--ghost',
      'ecl-button--icon-only',
    );
    const nextContainer = document.createElement('span');
    nextContainer.classList = 'ecl-button__container';
    nextContainer.appendChild(
      Slider.#createSvgIcon(
        iconBack,
        'ecl-icon ecl-icon--m ecl-slider__icon ecl-icon--flip-horizontal',
      ),
    );
    this.nextButton.appendChild(nextContainer);
    if (this.attachClickListener) {
      this.nextButton.addEventListener('click', () => this.shiftSlide(1));
    }
    this.controls.appendChild(this.prevButton);
    this.controls.appendChild(this.nextButton);
    this.sliderInfo.appendChild(this.controls);
    this.container = this.element.parentNode.parentNode;
    // Append progress bar and controls.
    if (this.variant === 'fluid') {
      // slider info is a sibling of the slider container, in this case.
      this.container.appendChild(this.sliderInfo);
    } else {
      // slider info is in the slider container
      this.element.parentNode.appendChild(this.sliderInfo);
    }

    // Calculate total number of slides
    this.total = this.slides.length;

    // Hide controls if only one slide
    if (this.total <= 1) {
      this.controls.style.display = 'none';
      return;
    }

    // Set initial slider dimensions
    this.handleResize();

    if (this.variant === 'fluid') {
      if (this.total === this.current + 1) {
        this.sliderInfo.style.display = 'none';
      } else {
        this.sliderInfo.style.display = 'flex';
      }
    }

    if (this.attachResizeListener) {
      window.addEventListener('resize', this.handleResize.bind(this));
    }

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.container, this);
  }

  /**
   * Register a callback function for a specific event.
   *
   * @param {string} eventName - The name of the event to listen for.
   * @param {Function} callback - The callback function to be invoked when the event occurs.
   * @returns {void}
   * @memberof Slider
   * @instance
   *
   * @example
   * // Registering a callback for the 'onSlideChange' event
   * slider.on('onSlideChange', (event) => {
   *   console.log('The current slide has changed', event);
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
   * @memberof Slider
   * @instance
   *
   */
  trigger(eventName, eventData) {
    this.eventManager.trigger(eventName, eventData);
  }

  /**
   * Destroy instance.
   */
  destroy() {
    if (this.attachResizeListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.attachClickListener) {
      this.prevButton.removeEventListener('click', this.shiftSlides);
      this.nextButton.removeEventListener('click', this.shiftSlides);
    }

    const initialMarkup = this.element;
    initialMarkup.removeAttribute('data-ecl-auto-initialized');
    initialMarkup.classList.remove('ecl-slider__list');
    initialMarkup.style.transform = '';
    Array.from(initialMarkup.children).forEach((slide) => {
      slide.classList.remove('ecl-slider__slide');
    });
    this.container.parentNode.appendChild(initialMarkup);
    this.container.remove();
  }

  /**
   * Shifts the slider by the specified direction.
   * @param {number} direction - The direction to shift the slider (-1 for left, 1 for right).
   */
  shiftSlide(direction) {
    if (this.allowShift) {
      this.current += direction;
      this.moveSlides();
    }
  }

  /**
   * Moves the slides within the slider.
   * Calculates the translation value based on the current slide position and updates the UI accordingly.
   *
   * @fires Slider#onSlideChange
   */
  moveSlides() {
    const itemWidth = this.slides[0].offsetWidth + 24;
    const slideIndex = this.current - this.itemsPerSlide;
    this.translateX = slideIndex * itemWidth;
    this.direction = getComputedStyle(this.element).direction;

    if (this.variant === 'fluid') {
      if (this.direction === 'rtl') {
        this.translateX = Math.ceil(
          this.element.offsetWidth -
            this.slides[this.current].offsetLeft -
            this.slides[this.current].offsetWidth,
        );
      } else {
        this.translateX = Math.ceil(this.slides[this.current].offsetLeft);
      }

      const totalScroll = Math.ceil(
        this.element.getBoundingClientRect().width -
          (this.container.getBoundingClientRect().width - 88 - 16),
      );

      if (this.translateX > totalScroll) {
        this.translateX = totalScroll;
        this.nextButton.disabled = true;
      }
    }

    if (this.direction === 'rtl') {
      this.element.style.transform = `translateX(${this.translateX}px)`;
    } else {
      this.element.style.transform = `translateX(-${this.translateX}px)`;
    }

    this.trigger('onSlideChange', {
      currentIndex: this.current,
      currentEl: this.slides[this.current],
    });

    this.checkButtonsVisibility();
    // Update progress bar width if enabled
    if (this.showProgress) {
      const progressWidth = `${(this.current / this.total) * 100}%`;
      this.progress.style.width = progressWidth;
    }

    // Set a delay to prevent rapid clicking
    this.allowShift = false;
    setTimeout(() => {
      this.allowShift = true;
    }, 500);
  }

  /**
   * Check whether to show/hide each button or the whole container.
   *
   */
  checkButtonsVisibility() {
    if (this.variant === 'fluid') {
      if (this.current >= 1) {
        this.prevButton.removeAttribute('disabled');
      } else {
        this.prevButton.disabled = true;
      }
    } else {
      if (this.total < this.itemsPerSlide) {
        this.sliderInfo.style.display = 'none';
      } else {
        this.sliderInfo.style.display = 'flex';
      }

      if (this.current >= this.total) {
        this.nextButton.disabled = true;
        this.prevButton.removeAttribute('disabled');
      } else if (this.current === this.itemsPerSlide) {
        this.prevButton.disabled = true;
        this.nextButton.removeAttribute('disabled');
      } else {
        this.nextButton.removeAttribute('disabled');
        this.prevButton.removeAttribute('disabled');
      }
    }
  }

  /**
   * Finds the index of the last visible item within the slider container.
   * @returns {number} The index of the last visible item
   */
  findLastVisibleItemIndex() {
    const width = this.container.offsetWidth;
    // 44px is a button, we have two and we have 1rem margin
    const computedWidth = width - 44 * 2 - 16;
    let lastVisibleIndex = -1;
    let totalWidth = 0;

    for (let i = 0; i < this.slides.length; i += 1) {
      const item = this.slides[i];
      item.style.position = 'absolute';
      item.style.left = '-9999px';

      const itemWidth =
        Math.round(parseFloat(window.getComputedStyle(item).width)) + 16;
      totalWidth += itemWidth + this.fluidItemSpacing;
      item.style.position = 'static';
      item.style.left = '';
      const adjustedWidth = totalWidth + this.translateX;
      // Check if item is entirely visible within the container
      if (adjustedWidth <= computedWidth) {
        lastVisibleIndex = i;
      } else {
        this.element.style.width = `${totalWidth}px`;
      }
    }

    return lastVisibleIndex;
  }

  /**
   * Handles the resizing of the slider container.
   * Updates the number of items to show and their widths based on the viewport width.
   */
  handleResize() {
    const containerWidth = this.container.offsetWidth;
    this.element.style.transform = `translateX(0px)`;
    this.translateX = 0;
    if (this.variant !== 'fluid') {
      // Number of items to show (base 5)
      if (containerWidth > 996) {
        // 4 + 20% of the 5th
        this.itemsToShow = 21;
      } else if (containerWidth > 768) {
        // 2 + 20% of the 3th
        this.itemsToShow = 11;
      } else {
        // 1 + 20% of the 2th
        this.itemsToShow = 6;
      }

      this.itemsPerSlide = Math.floor(this.itemsToShow / 5);

      const itemWidth = Math.floor(
        ((this.element.clientWidth -
          this.defaultItemSpacing * Math.floor(this.itemsToShow / 5)) /
          this.itemsToShow) *
          5,
      );

      this.slides.forEach((slide, index) => {
        if (index < this.total) {
          slide.style.width = `${itemWidth}px`;
        }
      });
      // Update current
      this.current = Math.floor(this.itemsToShow / 5);
    } else {
      this.lastVisibleIndexInitial = this.findLastVisibleItemIndex();
      this.current = 0;
    }

    this.nextButton.removeAttribute('disabled');
    this.prevButton.disabled = true;
    // Update progress bar width if enabled
    if (this.showProgress) {
      const progressWidth = `${(this.current / this.total) * 100}%`;
      this.progress.style.width = progressWidth;
    }
  }
}

export default Slider;
