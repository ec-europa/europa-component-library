/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';

import VanillaExpandable from '@ecl/eu-component-expandable';
import ContentItemExample from '../examples/Default';

storiesOf('Templates|Compositions', module)
  .addDecorator(story => {
    return (
      <StoryWrapper
        afterMount={() => {
          const element = document.querySelector('[data-ecl-expandable]');
          const vanillaExpandable = new VanillaExpandable(element);
          vanillaExpandable.init();
          // Return new context
          return { vanillaExpandable };
        }}
        beforeUnmount={context => {
          if (context.vanillaExpandable) {
            context.vanillaExpandable.destroy();
          }
        }}
      >
        {story()}
      </StoryWrapper>
    );
  })
  .add('Content language switcher', ContentItemExample);
