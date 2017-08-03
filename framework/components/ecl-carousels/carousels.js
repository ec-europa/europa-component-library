import {
  addClass,
  removeClass,
  queryAll,
} from '@ec-europa/ecl-base/helpers/dom';

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
  function goToSlide(n) {
    removeClass(slides[currentSlide], 'ecl-carousel__item--showing');
    currentSlide = (n + slides.length) % slides.length;
    addClass(slides[currentSlide], 'ecl-carousel__item--showing');
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  // Attach controls to a carousel.
  function addCarouselControls(targetCarousel) {
    const navControls = document.createElement('ul');

    navControls.className = 'ecl-carousel__controls ecl-list--unstyled';
    navControls.innerHTML = `
      <li>
        <button type="button" class="ecl-carousel__btn ecl-carousel__btn--previous">Previous</button>
      </li>
      <li>
        <button type="button" class="ecl-carousel__btn ecl-carousel__btn--next">Next</button>
      </li>
    `;

    navControls
      .querySelector('.ecl-carousel__btn--previous', '.ecl-carousel__controls')
      .addEventListener('click', previousSlide);

    navControls
      .querySelector('.ecl-carousel__btn--next', '.ecl-carousel__controls')
      .addEventListener('click', nextSlide);

    targetCarousel.querySelector('.ecl-carousel__list').append(navControls);
  }

  function removeCarouselControls(targetCarousel) {
    const controls = targetCarousel.querySelector('.ecl-carousel__controls');
    targetCarousel.querySelector('.ecl-carousel__list').removeChild(controls);
  }

  // INIT
  function init() {
    addCarouselControls(carousel);
  }

  // DESTROY
  function destroy() {
    removeCarouselControls(carousel);
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
