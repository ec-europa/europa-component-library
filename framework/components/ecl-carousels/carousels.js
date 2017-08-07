import {
  addClass,
  removeClass,
  queryAll,
} from '@ec-europa/ecl-base/helpers/dom';

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

  // Methods
  function alignCenter() {
    const percentage = 100 / slides.length;
    // eslint-disable-next-line
    slides.forEach(slide => (slide.style.left = `${percentage}%`));
  }

  function goToSlide(n) {
    removeClass(slides[currentSlide], 'ecl-carousel__item--showing');
    currentSlide = (n + slides.length) % slides.length;
    addClass(slides[currentSlide], 'ecl-carousel__item--showing');
  }

  function setTransformation() {
    const slide = currentSlide;
    const offset = -currentSlide * slides[currentSlide].offsetWidth;
    const tr = `translate3d(${offset}px, 0, 0)`;

    slides[slide].style.MozTransform = tr; /* FF */
    slides[slide].style.msTransform = tr; /* IE (9+) */
    slides[slide].style.OTransform = tr; /* Opera */
    slides[slide].style.WebkitTransform = tr; /* Safari + Chrome */
    slides[slide].style.transform = tr;
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
      infoAreas.forEach(area => (area.style.display = "none"));
    }

    carousel.querySelector(`[data-image="${currentSlide}"]`).style.display =
      'block';
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
    // setTransformation();
    announceCurrentSlide();
    showImageInformation();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
    // setTransformation();
    announceCurrentSlide();
    showImageInformation();
  }

  // Attach controls to a carousel.
  function addCarouselControls() {
    const navControls = document.createElement('ul');

    addClass(navControls, 'ecl-carousel__controls ecl-list--unstyled');

    navControls.innerHTML = `
      <li>
        <button type="button" class="ecl-icon ecl-icon--left ecl-carousel__btn ecl-carousel__btn--previous">
          <span class="ecl-sr-only">Previous</span></button>
      </li>
      <li>
        <button type="button" class="ecl-icon ecl-icon--right ecl-carousel__btn ecl-carousel__btn--next">
          <span class="ecl-sr-only">Next</span>
        </button>
      </li>
    `;

    navControls
      .querySelector('.ecl-carousel__btn--previous', '.ecl-carousel__controls')
      .addEventListener('click', previousSlide);

    navControls
      .querySelector('.ecl-carousel__btn--next', '.ecl-carousel__controls')
      .addEventListener('click', nextSlide);

    carousel.querySelector('.ecl-carousel__list-wrapper').append(navControls);
  }

  function removeCarouselControls() {
    const controls = carousel.querySelector('.ecl-carousel__controls');
    carousel.querySelector('.ecl-carousel__list-wrapper').removeChild(controls);
  }

  function addLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    addClass(liveRegion, 'ecl-carousel__meta-slide');
    carousel.querySelector('.ecl-carousel__live-region').append(liveRegion);
  }

  function removeLiveRegion() {
    const liveRegion = carousel.querySelector('.ecl-carousel__meta-slide');
    carousel
      .querySelector('.ecl-carousel__live-region')
      .removeChild(liveRegion);
  }

  // INIT
  function init() {
    // alignCenter();
    addCarouselControls();
    addLiveRegion();
    goToSlide(0);
    announceCurrentSlide();
    showImageInformation();

    // Re-align on resize.
    // window.addEventListener(
    //   'resize',
    //   debounce(
    //     () => {
    //       alignCenter();
    //     },
    //     100,
    //     { maxWait: 300 }
    //   )
    // );
  }

  // DESTROY
  function destroy() {
    removeCarouselControls();
    removeLiveRegion();
  }

  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

// module exports
export default carousels;
