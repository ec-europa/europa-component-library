/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-menu-standardised/demo/data--en';

import { MenuStandardised } from '../src/MenuStandardised';

storiesOf('Components|Menus/Standardised', module)
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
  .add('default', () => (
    <MenuStandardised
      {...demoContent}
      data-ecl-auto-init="MenuStandardised"
      className="ecl-menu-standardised--group1"
    />
  ));
