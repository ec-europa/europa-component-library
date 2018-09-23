import debounce from 'lodash.debounce';
import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

/**
 * @param {object} options Object containing configuration overrides
 */
export const initBreadcrumb = (
  breadcrumb,
  {
    // breadcrumbSelector: breadcrumbSelector = '.ecl-breadcrumb__container',
    ellipsisButtonSelector: ellipsisButtonSelector = '[data-ecl-breadcrumb-ellipsis-button]',
    ellipsisSelector: ellipsisSelector = '[data-ecl-breadcrumb-ellipsis]',
    segmentSelector: segmentSelector = '[data-ecl-breadcrumb-item]',
    segmentVisibleSelector: segmentVisibleSelector = '.ecl-breadcrumb__segment:not(.ecl-breadcrumb__segment--first):not(.ecl-breadcrumb__segment--ellipsis):not(.ecl-breadcrumb__segment--last):not([aria-hidden="true"])',
    segmentHiddenSelector: segmentHiddenSelector = '.ecl-breadcrumb__segment[aria-hidden="true"]:not(.ecl-breadcrumb__segment--ellipsis)',
  } = {}
) => {
  if (
    !breadcrumb ||
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return {};

  // ACTIONS
  function toggleEllipsis() {
    // get hidden segments
    const breadcrumbHiddenSegments = queryAll(
      segmentHiddenSelector,
      breadcrumb
    );

    const hidden = breadcrumbHiddenSegments.length > 0 ? 'false' : 'true';

    // display ellipsis when needed
    const breadcrumbEllipsis = queryOne(ellipsisSelector, breadcrumb);
    breadcrumbEllipsis.setAttribute('aria-hidden', hidden);
  }

  function canCompress() {
    // get segments
    const breadcrumbSegments = queryAll(segmentSelector, breadcrumb);

    // Ignore if there are 3 segments or less
    if (breadcrumbSegments.length <= 3) {
      return false;
    }

    // get wrapper width
    const wrapperWidth = Math.floor(breadcrumb.getBoundingClientRect().width);

    // try to avoid computing to much info
    // if (firstSegmentWidth + ellipsisSegmentWidth + last2SegmentsWidth > )

    // get segments width
    const segmentWidth = breadcrumbSegments
      .map(breadcrumbSegment => {
        // ignore hidden segments
        console.log(breadcrumbSegment.getAttribute('aria-hidden') === 'true');
        return Math.ceil(breadcrumbSegment.getBoundingClientRect().width);
      })
      .reduce((a, b) => a + b);

    /*
    console.log('wrapperWidth', wrapperWidth);
    console.log('segmentWidth', segmentWidth);
    console.log('ellipsisWidth', ellipsisWidth);
    */

    const ellipsisSegment = queryOne(ellipsisSelector, breadcrumb);
    const ellipsisSegmentWidth = ellipsisSegment.getBoundingClientRect().width;
    console.log('breadcrumbSegments', breadcrumbSegments);
    console.log('ellipsisSegment', ellipsisSegment);
    console.log('segmentWidth', segmentWidth);
    console.log('ellipsisSegmentWidth', ellipsisSegmentWidth);
    return segmentWidth - ellipsisSegmentWidth >= wrapperWidth;
  }

  function hideSegment() {
    // get visible segments
    const breadcrumbVisibleSegments = queryAll(
      segmentVisibleSelector,
      breadcrumb
    );

    // hide segments if needed
    // we do not hide the last two segments
    if (breadcrumbVisibleSegments.length > 1) {
      breadcrumbVisibleSegments[0].setAttribute('aria-hidden', 'true');

      // check if there is another segment to be hidden
      if (canCompress()) {
        hideSegment();
      }
    }
  }

  function showSegment() {
    // get hidden segments
    const breadcrumbHiddenSegments = queryAll(
      segmentHiddenSelector,
      breadcrumb
    );

    // show segments if there is enough space
    if (breadcrumbHiddenSegments.length > 0) {
      breadcrumbHiddenSegments[
        breadcrumbHiddenSegments.length - 1
      ].setAttribute('aria-hidden', 'false');

      if (canCompress()) {
        // breadcrumb is too large, we hide the last segment
        hideSegment();
      } else {
        // check if there is another segment to be displayed
        showSegment();
      }
    }
  }

  // EVENTS
  function eventExpandClick(e) {
    e.preventDefault();
    // display all segments
    const breadcrumbSegments = queryAll(segmentSelector, breadcrumb);
    breadcrumbSegments.forEach(breadcrumbSegment => {
      breadcrumbSegment.setAttribute('aria-hidden', 'false');
    });

    // hide ellipsis once expanded
    const target = e.currentTarget;
    target.parentElement.setAttribute('aria-hidden', 'true');
  }

  function eventResize() {
    // check if there are segments to be hidden or shown
    if (canCompress()) {
      hideSegment();
    } else {
      showSegment();
    }
    toggleEllipsis(breadcrumb);
  }

  // BIND EVENTS
  function bindBreadcrumbEvents() {
    const expands = queryAll(ellipsisButtonSelector, breadcrumb);

    // bind click event for expand
    expands.forEach(expand => {
      expand.addEventListener('click', e => eventExpandClick(e, breadcrumb));
    });

    // bind resize event to check breadcrumb width
    window.addEventListener(
      'resize',
      debounce(eventResize, 100, { maxWait: 300 })
    );
  }

  // UNBIND EVENTS
  function unbindBreadcrumbEvents() {
    const expands = queryAll(ellipsisButtonSelector, breadcrumb);
    // unbind click event for expand
    expands.forEach(expand => {
      expand.removeEventListener('click', e => eventExpandClick(e, breadcrumb));
    });

    // unbind resize event to check breadcrumb width
    window.removeEventListener(
      'resize',
      debounce(eventResize, 100, { maxWait: 300 })
    );
  }

  // DESTROY
  function destroy() {
    unbindBreadcrumbEvents();
  }

  // INIT
  function init() {
    bindBreadcrumbEvents();

    // trigger resize event once
    eventResize();
  }

  // UPDATE
  function update() {
    eventResize();
  }

  // REVEAL API
  return {
    init,
    update,
    destroy,
  };
};

// module exports
export default initBreadcrumb;
