/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';

import demoContent from '@ecl/ec-specs-gallery/demo/data';

import VanillaGallery from '@ecl/ec-component-gallery';

import Gallery from '../src/Gallery';

storiesOf('Gallery', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryWrapper
      afterMount={() => {
        const element = document.querySelector('[data-ecl-gallery]');
        const vanillaGallery = new VanillaGallery(element);
        vanillaGallery.init();

        // Return new context
        return { vanillaGallery };
      }}
      beforeUnmount={context => {
        if (context.vanillaGallery) {
          context.vanillaGallery.destroy();
        }
      }}
    >
      {story()}
    </StoryWrapper>
  ))
  .add('default', () => <Gallery {...demoContent} />);
