import { queryAll } from '@ecl/generic-base/helpers/dom';
import debounce from 'lodash.debounce';

/**
 * @param {object} options Object containing configuration overrides
 */
export const carousels = ({ selectorId: selectorId = 'ecl-carousel' } = {}) => {
  // SUPPORTS
  if (!('querySelector' in document) || !('addEventListener' in window)) {
    return null;
  }

  // SETUP
  let currentSlide = 0;
  const carousel = document.getElementById(selectorId);
  const slides = queryAll('.ecl-carousel__item', carousel);
  const list = carousel.querySelector('.ecl-carousel__list');

  function getListItemWidth() {
    return carousel.querySelector('.ecl-carousel__item').offsetWidth;
  }

  function goToSlide(n) {
    slides[currentSlide].classList.remove('ecl-carousel__item--showing');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('ecl-carousel__item--showing');
  }

  function setOffset() {
    const itemWidth = getListItemWidth();
    const tr = `translate3d(${-currentSlide * itemWidth}px, 0, 0)`;

    list.style.MozTransform = tr; /* FF */
    list.style.msTransform = tr; /* IE (9+) */
    list.style.OTransform = tr; /* Opera */
    list.style.WebkitTransform = tr; /* Safari + Chrome */
    list.style.transform = tr;
  }

  function announceCurrentSlide() {
    carousel.querySelector(
      '.ecl-carousel__meta-slide'
    ).textContent = `${currentSlide + 1} / ${slides.length}`;
  }

  function showImageInformation() {
    // Reset/Hide all.
    const infoAreas = queryAll('[data-image]');
    // If anything is visible.
    if (infoAreas) {
      // eslint-disable-next-line
      infoAreas.forEach(area => (area.style.display = 'none'));
    }

    carousel.querySelector(`[data-image="${currentSlide}"]`).style.display =
      'block';
  }

  function openSlide(n) {
    goToSlide(n);
    setOffset();
    announceCurrentSlide();
    showImageInformation();
  }

  function previousSlide() {
    openSlide(currentSlide - 1);
  }

  function nextSlide() {
    openSlide(currentSlide + 1);
  }

  // Attach controls to a carousel.
  function addCarouselControls() {
    const navControls = document.createElement('ul');

    navControls.className = 'ecl-carousel__controls ecl-list--unstyled';

    navControls.innerHTML = `
      <li>
        <button type="button" class="ecl-icon ecl-icon--left ecl-carousel__button ecl-carousel__button--previous">
          <span class="ecl-u-sr-only">Previous</span></button>
      </li>
      <li>
        <button type="button" class="ecl-icon ecl-icon--right ecl-carousel__button ecl-carousel__button--next">
          <span class="ecl-u-sr-only">Next</span>
        </button>
      </li>
    `;

    navControls
      .querySelector(
        '.ecl-carousel__button--previous',
        '.ecl-carousel__controls'
      )
      .addEventListener('click', previousSlide);

    navControls
      .querySelector('.ecl-carousel__button--next', '.ecl-carousel__controls')
      .addEventListener('click', nextSlide);

    carousel
      .querySelector('.ecl-carousel__list-wrapper')
      .appendChild(navControls);
  }

  function removeCarouselControls() {
    const controls = carousel.querySelector('.ecl-carousel__controls');
    carousel.querySelector('.ecl-carousel__list-wrapper').removeChild(controls);
  }

  function addLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.classList.add('ecl-carousel__meta-slide');
    carousel
      .querySelector('.ecl-carousel__live-region')
      .appendChild(liveRegion);
  }

  function removeLiveRegion() {
    const liveRegion = carousel.querySelector('.ecl-carousel__meta-slide');
    carousel
      .querySelector('.ecl-carousel__live-region')
      .removeChild(liveRegion);
  }

  const debounceCb = () =>
    debounce(
      () => {
        setOffset();
      },
      100,
      { maxWait: 300 }
    )();

  // INIT
  function init() {
    addCarouselControls();
    addLiveRegion();
    goToSlide(0);
    announceCurrentSlide();
    showImageInformation();

    // Re-align on resize.
    window.addEventListener('resize', debounceCb);
  }

  // DESTROY
  function destroy() {
    removeCarouselControls();
    removeLiveRegion();
    window.removeEventListener('resize', debounceCb);
  }

  init();

  // REVEAL API
  return {
    init,
    openSlide,
    destroy,
  };
};

// module exports
export default carousels;
