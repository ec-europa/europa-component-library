/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentGroup1 from '@ecl/ec-specs-menu-harmonised/demo/data--group1';
import demoContentGroup2 from '@ecl/ec-specs-menu-harmonised/demo/data--group2';

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
      {...demoContentGroup1}
      data-ecl-auto-init="MenuHarmonised"
      className="ecl-menu-harmonised--group1"
    />
  ))
  .add('group 2', () => (
    <MenuHarmonised
      {...demoContentGroup2}
      data-ecl-auto-init="MenuHarmonised"
      className="ecl-menu-harmonised--group2"
    />
  ));
