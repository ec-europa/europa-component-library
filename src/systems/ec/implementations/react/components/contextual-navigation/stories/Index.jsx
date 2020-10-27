/*
import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-contextual-navigation/demo/data';

import VanillaContextualNavigation from '@ecl/ec-component-contextual-navigation';

import ContextualNavigation from '../src/ContextualNavigation';

export default {
  title: 'Components/Navigation/Contextual Navigation',

  decorators: [
    withKnobs,
    (story) => (
      <StoryWrapper
        afterMount={() => {
          const element = document.querySelector(
            '[data-ecl-contextual-navigation]'
          );
          const vanillaContextualNavigation = new VanillaContextualNavigation(
            element
          );
          vanillaContextualNavigation.init();

          // Return new context
          return { vanillaContextualNavigation };
        }}
        beforeUnmount={(context) => {
          if (context.vanillaContextualNavigation) {
            context.vanillaContextualNavigation.destroy();
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const Default = () => {
  const data = {
    ...demoContent,
    itemsLimit: number('Number of items:', demoContent.itemsLimit),
  };

  return <ContextualNavigation {...data} />;
};

Default.storyName = 'default';
*/
