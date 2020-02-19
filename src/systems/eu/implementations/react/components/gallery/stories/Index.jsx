/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContent from '@ecl/eu-specs-gallery/demo/data';

import { Gallery } from '../src/Gallery';

storiesOf('Components/Gallery', module)
  .addDecorator(withKnobs)
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
    <Gallery {...demoContent} data-ecl-auto-init="Gallery" />
  ));
