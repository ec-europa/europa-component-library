/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';

import VanillaInpageNavigation from '@ecl/ec-component-inpage-navigation';
import ContentPageExample from '../examples/Default';

storiesOf('Templates|Pages', module)
  .addDecorator(story => {
    return (
      <StoryWrapper
        afterMount={() => {
          const element = document.querySelector(
            '[data-ecl-inpage-navigation]'
          );
          const vanillaInpageNavigation = new VanillaInpageNavigation(element);
          vanillaInpageNavigation.init();
          // Return new context
          return { vanillaInpageNavigation };
        }}
        beforeUnmount={context => {
          if (context.vanillaInpageNavigation) {
            context.vanillaInpageNavigation.destroy();
          }
        }}
      >
        {story()}
      </StoryWrapper>
    );
  })
  .add('Content', ContentPageExample);
