import { queryAll } from '@ecl/dom-utils';

export default class SliderPager {
  constructor({
    slider,
    accessibility,
    prevButton,
    nextButton,
    pager,
    dots,
    dotTemplate,
    dotSelector,
    activeDotClass = 'ecl-slider__dot--active',
    onUpdate = null,
  }) {
    this.slider = slider;
    this.accessibility = accessibility;

    this.prevButton = prevButton;
    this.nextButton = nextButton;

    this.pager = pager;
    this.dotsContainer = dots;
    this.dotTemplate = dotTemplate;
    this.dotSelector = dotSelector;

    this.activeDotClass = activeDotClass;
    this.onUpdate = onUpdate;

    this.dotNodes = [];

    this.toggleButtonsDisabled = this.toggleButtonsDisabled.bind(this);
    this.updateDots = this.updateDots.bind(this);
    this.rebuildDots = this.rebuildDots.bind(this);
  }

  init() {
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
  }

  destroy() {
    this.slider.off('select', this.toggleButtonsDisabled);
    this.slider.off('reInit', this.toggleButtonsDisabled);

    this.slider.off('select', this.updateDots);
    this.slider.off('reInit', this.rebuildDots);
  }

  toggleButtonsDisabled(emblaApi) {
    if (this.prevButton) {
      this.prevButton.toggleAttribute('disabled', !emblaApi.canGoToPrev());
    }

    if (this.nextButton) {
      this.nextButton.toggleAttribute('disabled', !emblaApi.canGoToNext());
    }
  }

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

  updateDots() {
    const index = this.slider.selectedSnap();

    this.dotNodes.forEach((dot, i) => {
      dot.classList.toggle(this.activeDotClass, i === index);

      dot.classList.toggle('is-prev', i === index - 1);
    });

    if (this.onUpdate) {
      this.onUpdate(index);
    }
  }
}
