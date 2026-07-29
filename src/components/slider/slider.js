import { queryOne, queryAll } from '@ecl/dom-utils';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.slider Slider instance (embla)
 * @param {String} options.accessibility Accessibility plugin instance (embla)
 * @param {String} options.pagerElement Slider pager
 * @param {String} options.prevSelector Css class of the prev button
 * @param {String} options.nextSelector Css class of the next button
 * @param {String} options.dotsSelector Css class of the dots wrapper
 * @param {String} options.dotSelector Css class of the single dot
 * @param {String} options.activeDotSelector Css class to be assigned to the active dot
 * @param {String} options.dotTemplateSelector Dots template selector
 */
export default class SliderPager {
  constructor({
    slider,
    accessibility,
    prevSelector,
    nextSelector,
    pagerElement,
    dotsSelector,
    dotTemplateSelector,
    dotSelector,
    activeDotSelector,
    onUpdate = null,
  }) {
    this.slider = slider;
    this.accessibility = accessibility;
    this.prevSelector = prevSelector;
    this.nextSelector = nextSelector;
    this.pagerElement = pagerElement;
    this.dotsSelector = dotsSelector;
    this.dotTemplateSelector = dotTemplateSelector;
    this.dotSelector = dotSelector;
    this.activeDotSelector = activeDotSelector;
    this.onUpdate = onUpdate;

    this.dotNodes = [];
    this.resizeTimer = null;

    this.toggleButtonsDisabled = this.toggleButtonsDisabled.bind(this);
    this.updateDots = this.updateDots.bind(this);
    this.rebuildDots = this.rebuildDots.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.escapeSlider = this.escapeSlider.bind(this);
  }

  /**
   * Initialise component.
   *
   * @memberof SliderPager
   */
  init() {
    if (!this.slider) {
      return;
    }

    this.prevButton = queryOne(this.prevSelector, this.pagerElement);
    this.nextButton = queryOne(this.nextSelector, this.pagerElement);
    this.dotsContainer = queryOne(this.dotsSelector, this.pagerElement);
    this.dotTemplate = queryOne(this.dotTemplateSelector, this.pagerElement);

    if (this.prevButton && this.nextButton) {
      this.toggleButtonsDisabled(this.slider);

      this.slider.on('select', this.toggleButtonsDisabled);
      this.slider.on('reInit', this.toggleButtonsDisabled);

      this.prevButton.addEventListener('click', () => this.slider.goToPrev());

      this.nextButton.addEventListener('click', () => this.slider.goToNext());

      this.accessibility?.setupPrevAndNextButtons(
        this.prevButton,
        this.nextButton,
      );
    }

    if (this.dotsContainer) {
      this.rebuildDots();

      this.slider.on('reInit', this.rebuildDots);

      this.updateDots();

      this.slider.on('select', this.updateDots);

      this.accessibility?.setupDotButtons(this.dotsContainer);
    }

    this.slider.rootNode().addEventListener('keydown', this.handleKeyboard);
    window.addEventListener('resize', this.handleResize);
  }

  /**
   * Destroy component.
   *
   * @memberof SliderPager
   */
  destroy() {
    this.slider.off('select', this.toggleButtonsDisabled);
    this.slider.off('reInit', this.toggleButtonsDisabled);

    this.slider.off('select', this.updateDots);
    this.slider.off('reInit', this.rebuildDots);

    this.slider.removeEventListener('keydown', this.handleKeyboard);
    window.removeEventListener('resize', this.handleResize);
  }

  /**
   * Toggle disable status of the prev and next buttons.
   *
   * @memberof SliderPager
   */
  toggleButtonsDisabled(emblaApi) {
    if (this.prevButton) {
      this.prevButton.toggleAttribute('disabled', !emblaApi.canGoToPrev());
    }

    if (this.nextButton) {
      this.nextButton.toggleAttribute('disabled', !emblaApi.canGoToNext());
    }
  }

  /**
   * Generate dots.
   *
   * @memberof SliderPager
   */
  rebuildDots() {
    const canScroll = this.slider.canGoToPrev() || this.slider.canGoToNext();

    if (this.pager) {
      this.pager.style.display = canScroll ? '' : 'none';
    }

    if (!canScroll) {
      this.dotsContainer.innerHTML = '';
      this.dotNodes = [];
      return;
    }

    this.dotsContainer.innerHTML = this.slider
      .snapList()
      .map(() => this.dotTemplate.innerHTML)
      .join('');

    this.dotNodes = Array.from(queryAll(this.dotSelector, this.dotsContainer));

    this.dotNodes.forEach((dot, index) => {
      dot.addEventListener('click', () => this.slider.goTo(index));
    });

    this.accessibility?.setupDotButtons(this.dotsContainer);

    this.updateDots();
  }

  /**
   * Update dots status.
   *
   * @memberof SliderPager
   */
  updateDots() {
    const index = this.slider.selectedSnap();

    this.dotNodes.forEach((dot, i) => {
      dot.classList.toggle(this.activeDotSelector, i === index);

      dot.classList.toggle('is-prev', i === index - 1);
    });

    if (this.onUpdate) {
      this.onUpdate(index);
    }
  }

  /**
   * Trigger events on resize
   * Uses a debounce, for performance
   *
   * @memberof SliderPager
   */
  handleResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      if (this.slider) {
        this.rebuildDots();
        if (this.accessibility && this.dotsNode) {
          this.accessibility.setupDotButtons(this.dotsNode);
        }
        this.updateDots();
        if (this.toggleButtonsDisabled) {
          this.toggleButtonsDisabled(this.slider);
        }
      }
    }, 100);
  }

  /**
   * Handle keyboard events for accessibility.
   *
   * @memberof SliderPager
   */
  handleKeyboard(e) {
    if (e.key === 'Escape') {
      this.escapeSlider();
    }
  }

  /**
   * Moves the focus out of the slider when Escape is pressed.
   *
   * @memberof SliderPager
   */
  escapeSlider() {
    if (this.slider.canGoToNext()) {
      this.nextButton.focus();
      return;
    }

    // Move focus on the disabled next button in case there are no dots.
    if (
      this.dotNodes.length === 0 &&
      !this.slider.canGoToNext() &&
      this.nextButton
    ) {
      this.nextButton.disabled = false;
      this.nextButton.style.display = 'flex';
      this.nextButton.style.visibility = 'visible';
      this.nextButton.classList.add('.ecl-slider__next--escape');
      this.nextButton.focus();
      return;
    }

    if (this.dotNodes.length > 0) {
      const lastDot = this.dotNodes[this.dotNodes.length - 1];
      lastDot.focus();
    }
  }
}
