/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import createFocusTrap from 'focus-trap';
import Stickyfill from 'stickyfilljs';
import { queryOne, queryAll } from '@ecl/ec-base/helpers/dom';

import EventAgendaPageExample from '../examples/Default';
import EventAgendaPageEcl from '../examples/PureEcl';

storiesOf('Templates|Pages/Event agenda', module)
  .addDecorator(story => {
    function toggleOverlay(e) {
      e.preventDefault();

      if (this.languageListOverlay.hasAttribute('hidden')) {
        this.languageListOverlay.removeAttribute('hidden');
        e.currentTarget.setAttribute('aria-expanded', true);
        this.focusTrap.activate();
      } else {
        this.languageListOverlay.setAttribute('hidden', true);
        e.currentTarget.setAttribute('aria-expanded', false);
        this.focusTrap.deactivate();
      }
    }

    // Add the sticky css when you reach its scroll position. Remove sticky css when you leave the scroll position
    function manageSticky(stickyNav, stickyHeaders, timelines) {
      let stickyDisplay = false;
      timelines.forEach((timeline, index) => {
        if (
          timeline.getBoundingClientRect().top < 1 &&
          timeline.getBoundingClientRect().top > -timeline.offsetHeight
        ) {
          stickyDisplay = true;
          /* timeline.style.paddingTop = `${stickyNav.offsetHeight +
            stickyHeaders[index].offsetHeight}px`; */

          // stickyHeaders[index].classList.add('ecl-container');
          // stickyHeaders[index].classList.remove('ecl-u-mb-m');
          // stickyHeaders[index].classList.add('ecl-u-mv-none');
          stickyHeaders[index].style.position = 'sticky';
          stickyHeaders[index].style.top = `${stickyNav.offsetHeight}px`;
        } else {
          timeline.style.paddingTop = 0;

          // stickyHeaders[index].classList.remove('ecl-container');
          // stickyHeaders[index].classList.remove('ecl-u-mv-none');
          // stickyHeaders[index].classList.add('ecl-u-mb-m');
          stickyHeaders[index].style.position = 'relative';
          stickyHeaders[index].style.top = 0;
        }
      });

      if (stickyDisplay) {
        stickyNav.style.position = 'sticky';
        stickyNav.style.top = 0;
      } else {
        stickyNav.style.position = 'relative';
      }
    }

    return (
      <StoryWrapper
        afterMount={() => {
          // Get language list
          const languageListOverlay = document.querySelector(
            '[data-ecl-language-list-overlay]'
          );
          const languageSelector = document.querySelector(
            '[data-ecl-language-selector]'
          );
          const close = document.querySelector(
            '[data-ecl-language-list-close]'
          );

          // Create focus trap
          const focusTrap = createFocusTrap(languageListOverlay, {
            escapeDeactivates: false,
          });

          languageSelector.addEventListener(
            'click',
            toggleOverlay.bind({ focusTrap, languageListOverlay })
          );
          close.addEventListener(
            'click',
            toggleOverlay.bind({ focusTrap, languageListOverlay })
          );

          // Get sticky elements
          const stickyNav = queryOne(
            '[data-ecl-template-sticky-nav]',
            document
          );
          Stickyfill.add(stickyNav);
          const stickyHeaders = queryAll(
            '[data-ecl-template-sticky-header]',
            document
          );
          Stickyfill.add(stickyHeaders);
          const timelines = queryAll('[data-ecl-template-timeline]', document);

          // When the user scrolls the page, execute myFunction
          window.addEventListener('scroll', function() {
            manageSticky(stickyNav, stickyHeaders, timelines);
          });

          // Return new context
          return { languageSelector, close };
        }}
        beforeUnmount={context => {
          if (context.languageSelector) {
            context.languageSelector.removeEventListener(
              'click',
              toggleOverlay
            );
          }
        }}
      >
        {story()}
      </StoryWrapper>
    );
  })
  .add('Default', EventAgendaPageExample)
  .add('Pure ECL', EventAgendaPageEcl);
