import debounce from 'lodash.debounce';
import { queryAll } from '@ecl/generic-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const initBreadcrumb = ({
  breadcrumbSelector: breadcrumbSelector = '.ecl-breadcrumb',
  expandButtonSelector: expandButtonSelector = '.ecl-breadcrumb__expand-btn',
  segmentSelector: segmentSelector = '.ecl-breadcrumb__segment',
  segmentFirstSelector: segmentFirstSelector = '.ecl-breadcrumb__segment--first',
  segmentVisibleSelector: segmentVisibleSelector = '.ecl-breadcrumb__segment:not(.ecl-breadcrumb__segment--first):not(.ecl-breadcrumb__segment--ellipsis):not(.ecl-breadcrumb__segment--last):not([aria-hidden="true"])',
  segmentHiddenSelector: segmentHiddenSelector = '.ecl-breadcrumb__segment[aria-hidden="true"]:not(.ecl-breadcrumb__segment--ellipsis)',
  ellipsisSelector: ellipsisSelector = '.ecl-breadcrumb__segment--ellipsis',
} = {}) => {
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // ACTIONS
  function initEllipsis(breadcrumbContainer) {
    // add ellipsis to DOM
    const breadcrumbFirst = queryAll(segmentFirstSelector, breadcrumbContainer);
    breadcrumbFirst.forEach(segment => {
      const ellipsis = document.createElement('a');
      // we can't add multipls classes at once, because... IE
      ellipsis.classList.add('ecl-link');
      ellipsis.classList.add('ecl-link--inverted');
      ellipsis.classList.add('ecl-link--standalone');
      ellipsis.classList.add('ecl-breadcrumb__link');
      ellipsis.classList.add('ecl-breadcrumb__expand-btn');
      ellipsis.setAttribute('href', '#');
      ellipsis.innerHTML = '…';

      const listItem = document.createElement('li');
      listItem.classList.add('ecl-breadcrumb__segment');
      listItem.classList.add('ecl-breadcrumb__segment--ellipsis');
      listItem.classList.add('ecl-u-aria');
      listItem.setAttribute('aria-hidden', 'true');

      listItem.appendChild(ellipsis);
      segment.parentNode.insertBefore(listItem, segment.nextSibling);
    });
  }

  function toggleEllipsis(breadcrumbContainer) {
    // get hidden segments
    const breadcrumbHiddenSegments = queryAll(
      segmentHiddenSelector,
      breadcrumbContainer
    );
    const hidden = breadcrumbHiddenSegments.length > 0 ? 'false' : 'true';

    // display ellipsis when needed
    const breadcrumbEllipsis = queryAll(ellipsisSelector, breadcrumbContainer);
    breadcrumbEllipsis.forEach(ellipsis => {
      ellipsis.setAttribute('aria-hidden', hidden);
    });
  }

  function breadcrumbIsTooLarge(breadcrumbContainer) {
    // get wrapper width
    const wrapperWidth = Math.floor(
      breadcrumbContainer.getBoundingClientRect().width
    );

    // get displayed segments
    const breadcrumbSegments = queryAll(segmentSelector, breadcrumbContainer);

    // get segments width
    let segmentWidth = 0;
    breadcrumbSegments.forEach(breadcrumbSegment => {
      segmentWidth += Math.ceil(
        breadcrumbSegment.getBoundingClientRect().width
      );
    });

    return segmentWidth >= wrapperWidth;
  }

  function hideSegment(breadcrumbContainer) {
    // get visible segments
    const breadcrumbVisibleSegments = queryAll(
      segmentVisibleSelector,
      breadcrumbContainer
    );

    // hide segments if needed
    // we do not hide the last two segments
    if (breadcrumbVisibleSegments.length > 1) {
      breadcrumbVisibleSegments[0].setAttribute('aria-hidden', 'true');

      // check if there is another segment to be hidden
      if (breadcrumbIsTooLarge(breadcrumbContainer)) {
        hideSegment(breadcrumbContainer);
      }
    }
  }

  function showSegment(breadcrumbContainer) {
    // get hidden segments
    const breadcrumbHiddenSegments = queryAll(
      segmentHiddenSelector,
      breadcrumbContainer
    );

    // show segments if there is enough space
    if (breadcrumbHiddenSegments.length > 0) {
      breadcrumbHiddenSegments[
        breadcrumbHiddenSegments.length - 1
      ].setAttribute('aria-hidden', 'false');

      if (breadcrumbIsTooLarge(breadcrumbContainer)) {
        // breadcrumb is too large, we hide the last segment
        hideSegment(breadcrumbContainer);
      } else {
        // check if there is another segment to be displayed
        showSegment(breadcrumbContainer);
      }
    }
  }

  // EVENTS
  function eventExpandClick(e, breadcrumbContainer) {
    e.preventDefault();
    // display all segments
    const breadcrumbSegments = queryAll(segmentSelector, breadcrumbContainer);
    breadcrumbSegments.forEach(breadcrumbSegment => {
      breadcrumbSegment.setAttribute('aria-hidden', 'false');
    });

    // hide ellipsis once expanded
    const target = e.currentTarget;
    target.parentElement.setAttribute('aria-hidden', 'true');
  }

  function eventResize(breadcrumbContainer) {
    // check if there are segments to be hidden or shown
    if (breadcrumbIsTooLarge(breadcrumbContainer)) {
      hideSegment(breadcrumbContainer);
    } else {
      showSegment(breadcrumbContainer);
    }
    toggleEllipsis(breadcrumbContainer);
  }

  // SETUP
  const breadcrumbContainers = queryAll(breadcrumbSelector);

  // BIND EVENTS
  function bindBreadcrumbEvents(breadcrumbContainer) {
    const expands = queryAll(expandButtonSelector, breadcrumbContainer);

    // bind click event for expand
    expands.forEach(expand => {
      expand.addEventListener('click', e =>
        eventExpandClick(e, breadcrumbContainer)
      );
    });

    // bind resize event to check breadcrumb width
    window.addEventListener(
      'resize',
      debounce(
        () => {
          breadcrumbContainers.forEach(eventResize);
        },
        100,
        { maxWait: 300 }
      )
    );
  }

  // UNBIND EVENTS
  function unbindBreadcrumbEvents(breadcrumbContainer) {
    const expands = queryAll(expandButtonSelector, breadcrumbContainer);
    // unbind click event for expand
    expands.forEach(expand => {
      expand.removeEventListener('click', e =>
        eventExpandClick(e, breadcrumbContainer)
      );
    });

    // unbind resize event to check breadcrumb width
    window.removeEventListener(
      'resize',
      debounce(
        () => {
          breadcrumbContainers.forEach(eventResize);
        },
        100,
        { maxWait: 300 }
      )
    );
  }

  // DESTROY
  function destroy() {
    if (breadcrumbContainers.length) {
      breadcrumbContainers.forEach(breadcrumbContainer => {
        unbindBreadcrumbEvents(breadcrumbContainer);
      });
    }
  }

  // INIT
  function init() {
    if (breadcrumbContainers.length) {
      breadcrumbContainers.forEach(breadcrumbContainer => {
        initEllipsis(breadcrumbContainer);
        bindBreadcrumbEvents(breadcrumbContainer);

        // trigger resize event once
        eventResize(breadcrumbContainer);
      });
    }
  }

  init();

  // REVEAL API
  return {
    init,
    destroy,
  };
};

// module exports
export default initBreadcrumb;
