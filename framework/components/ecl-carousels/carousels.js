import { queryAll } from '@ec-europa/ecl-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const carousels = (
  {
    selectorId: selectorId = 'ecl-carousel',
    showNavigation: showNavigation = true,
    animate: animate = true,
    startAnimated: startAnimated = true,
  } = {}
) => {
  // SUPPORTS
  if (!('querySelector' in document) || !('addEventListener' in window)) {
    return null;
  }

  // SETUP
  const carousel = document.getElementById(selectorId);

  // Carousel navigation is useful only when JS is enabled.
  function addNavigation() {
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
      .addEventListener('click', () => {
        console.log('prev clicked');
      });

    navControls
      .querySelector('.ecl-carousel__btn--next', '.ecl-carousel__controls')
      .addEventListener('click', () => {
        console.log('next clicked');
      });

    document.querySelector('.ecl-carousel__list').append(navControls);
  }

  // BIND EVENTS
  function bindEvents(elements) {}

  // UNBIND EVENTS
  function unbindEvents(elements) {}

  // DESTROY
  function destroy() {}

  // INIT
  function init() {
    addNavigation();
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
