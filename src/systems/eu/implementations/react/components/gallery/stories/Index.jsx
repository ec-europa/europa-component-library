import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/eu-specs-gallery/demo/data';

import { Gallery } from '../src/Gallery';

export default {
  title: 'Components/Gallery',

  decorators: [
    withKnobs,
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
  <Gallery {...demoContent} data-ecl-auto-init="Gallery" />
);

Default.storyName = 'default';
