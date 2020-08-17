import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-menu/demo/data--en';

import { Menu } from '../src/Menu';

export default {
  title: 'Components/Navigation/Menu',

  decorators: [
    (story) => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
        }}
        beforeUnmount={(context) => {
          if (context.components) {
            context.components.forEach((c) => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const Default = () => (
  <Menu
    {...demoContent}
    data-ecl-auto-init="Menu"
    className="ecl-menu--group1"
  />
);

Default.story = {
  name: 'default',
};
