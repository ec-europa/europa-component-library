/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/eu-specs-contextual-navigation/demo/data';

import VanillaContextualNavigation from '@ecl/eu-component-contextual-navigation';

import ContextualNavigation from '../ContextualNavigation';

storiesOf('Navigation/Contextual Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
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
      beforeUnmount={context => {
        if (context.vanillaContextualNavigation) {
          context.vanillaContextualNavigation.destroy();
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('default', () => <ContextualNavigation {...demoContent} />);
