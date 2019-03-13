/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';

import StandardPageExample from '../examples/Default';

storiesOf('Templates/Standard page', module)
  .addDecorator(story => {
    function doClick(e) {
      e.preventDefault();

      const languageListOverlay = document.querySelector(
        '[data-ecl-language-list-overlay]'
      );

      if (languageListOverlay.hasAttribute('hidden')) {
        languageListOverlay.removeAttribute('hidden');
      } else {
        languageListOverlay.setAttribute('hidden', true);
      }
    }

    return (
      <StoryWrapper
        afterMount={() => {
          const languageSelector = document.querySelector(
            '[data-ecl-language-selector]'
          );

          languageSelector.addEventListener('click', doClick);

          // Return new context
          return { languageSelector };
        }}
        beforeUnmount={context => {
          if (context.languageSelector) {
            context.languageSelector.removeEventListener('click', doClick);
          }
        }}
      >
        {story()}
      </StoryWrapper>
    );
  })
  .add('default', StandardPageExample);
