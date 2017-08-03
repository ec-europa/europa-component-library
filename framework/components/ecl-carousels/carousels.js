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

  let currentSlide = 0;
  const carousel = document.getElementById(selectorId);
  // We need to invoke the function here in order to use the `controls`.
  // The controls MUST be added via JavaScript, as they are useless in `no-js`.
  // eslint-disable-next-line no-use-before-define
  addCarouselControls(carousel);
  const slides = queryAll('.ecl-carousel__item', carousel);
  const controls = carousel.querySelector('.ecl-carousel__controls');
  const prevButton = controls.querySelector('.ecl-carousel__btn--previous');
  const nextButton = controls.querySelector('.ecl-carousel__btn--next');

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

  // SETUP

  // BIND EVENTS
  function bindEvents(elements) {}

  // UNBIND EVENTS
  function unbindEvents(elements) {}

  // DESTROY
  function destroy() {}

  // INIT
  function init() {}

  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

// module exports
export default carousels;
