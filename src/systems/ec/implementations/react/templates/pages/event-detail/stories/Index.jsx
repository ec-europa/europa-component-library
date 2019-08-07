/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import createFocusTrap from 'focus-trap';

import EventDetailPageExample from '../examples/Default';

storiesOf('Templates|Pages', module)
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

    return (
      <StoryWrapper
        afterMount={() => {
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
  .add('Event detail', EventDetailPageExample);
