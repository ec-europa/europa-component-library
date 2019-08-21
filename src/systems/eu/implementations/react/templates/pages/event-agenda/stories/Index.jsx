/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import createFocusTrap from 'focus-trap';
import { queryOne, queryAll } from '@ecl/eu-base/helpers/dom';

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
    function manageSticky() {
      let stickyDisplay = false;
      this.timelines.forEach((timeline, index) => {
        if (
          timeline.getBoundingClientRect().top < 1 &&
          timeline.getBoundingClientRect().top > -timeline.offsetHeight
        ) {
          stickyDisplay = true;
          timeline.style.paddingTop = `${this.stickyNav.offsetHeight +
            this.stickyHeaders[index].offsetHeight}px`;

          this.stickyHeaders[index].style.position = 'fixed';
          this.stickyHeaders[index].style.width = `${this.containerWidth}px`;
          this.stickyHeaders[
            index
          ].style.top = `${this.stickyNav.offsetHeight}px`;
        } else {
          timeline.style.paddingTop = 0;

          this.stickyHeaders[index].style.position = 'relative';
          this.stickyHeaders[index].style.top = 0;
          this.stickyHeaders[index].style.width = '100%';
        }
      });

      if (stickyDisplay) {
        this.stickyNav.style.position = 'fixed';
        this.stickyNav.style.top = 0;
        this.stickyNav.style.width = `${this.containerWidth}px`;
      } else {
        this.stickyNav.style.position = 'relative';
        this.stickyNav.style.width = '100%';
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
          const stickyHeaders = queryAll(
            '[data-ecl-template-sticky-header]',
            document
          );
          const timelines = queryAll('[data-ecl-template-timeline]', document);

          // Get container width
          const container = queryOne('.ecl-container', document);
          const cs = getComputedStyle(container);
          const containerWidth =
            container.offsetWidth -
            parseFloat(cs.paddingLeft) -
            parseFloat(cs.paddingRight);

          window.addEventListener(
            'scroll',
            manageSticky.bind({
              stickyNav,
              stickyHeaders,
              timelines,
              containerWidth,
            })
          );

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

          window.removeEventListener('scroll', manageSticky);
        }}
      >
        {story()}
      </StoryWrapper>
    );
  })
  .add('Default', EventAgendaPageExample)
  .add('Pure ECL', EventAgendaPageEcl);
