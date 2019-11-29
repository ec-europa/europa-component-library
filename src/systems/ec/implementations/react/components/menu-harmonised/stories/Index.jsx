/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-menu-harmonised/demo/data';

import { MenuHarmonised } from '../src/MenuHarmonised';

storiesOf('Components|Menus/Harmonised', module)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        if (!window.ECL) return {};

        const components = window.ECL.autoInit();
        return { components };
      }}
      beforeUnmount={context => {
        if (context.components) {
          context.components.forEach(c => c.destroy());
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('group 1', () => (
    <MenuHarmonised
      {...demoContent}
      data-ecl-auto-init="MenuHarmonised"
      className="ecl-menu-harmonised--group1"
    />
  ))
  .add('group 2', () => (
    <MenuHarmonised
      {...demoContent}
      data-ecl-auto-init="MenuHarmonised"
      className="ecl-menu-harmonised--group2"
    />
  ));
