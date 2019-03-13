/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';

import CampaignPageExample from '../examples/Default';

storiesOf('Templates/Campaign page', module)
  .addDecorator(story => {
    function toggleOverlay(e) {
      e.preventDefault();

      const languageListOverlay = document.querySelector(
        '[data-ecl-language-list-overlay]'
      );

      if (languageListOverlay.hasAttribute('hidden')) {
        languageListOverlay.removeAttribute('hidden');
        e.currentTarget.setAttribute('aria-expanded', true);
      } else {
        languageListOverlay.setAttribute('hidden', true);
        e.currentTarget.setAttribute('aria-expanded', false);
      }
    }

    return (
      <StoryWrapper
        afterMount={() => {
          const languageSelector = document.querySelector(
            '[data-ecl-language-selector]'
          );
          const close = document.querySelector(
            '[data-ecl-language-list-close]'
          );

          languageSelector.addEventListener('click', toggleOverlay);
          close.addEventListener('click', toggleOverlay);

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
  .add('default', CampaignPageExample);
