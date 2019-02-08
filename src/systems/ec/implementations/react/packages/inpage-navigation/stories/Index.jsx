/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import VanillaInpageNavigation from '@ecl/ec-component-inpage-navigation';
import InpageNavigationExample from '../examples/Default';

storiesOf('Navigation/In page navigation', module)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector(
          '[data-ecl-inpage-navigation-sticky]'
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
  ))
  .add('default', () => <InpageNavigationExample />);
