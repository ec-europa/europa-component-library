/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-menu/demo/data';

import VanillaMenu from '@ecl/ec-component-menu';

import Menu from '../src/Menu';

storiesOf('Components|Navigation/Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-menu]');
        const vanillaMenu = new VanillaMenu(element);
        vanillaMenu.init();

        // Return new context
        return { vanillaMenu };
      }}
      beforeUnmount={context => {
        if (context.vanillaMenu) {
          context.vanillaMenu.destroy();
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('default', () => <Menu {...demoContent} />);
