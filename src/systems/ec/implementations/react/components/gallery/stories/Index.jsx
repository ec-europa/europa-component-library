/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryWrapper, { WebtoolsLoader } from '@ecl/story-wrapper';
import demoContent from '@ecl/ec-specs-gallery/demo/data';

import { Gallery } from '../src/Gallery';

export default {
  title: 'Components/Gallery',

  decorators: [
    withKnobs,
    story => (
      <>
        <WebtoolsLoader
          src="https://europa.eu/webtools/load.js?globan=1110"
          options={{ type: 'text/javascript', defer: true }}
          onLoad={() => console.log('global banner loaded')}
          onError={() => console.error('global banner failed to load')}
        />
        <StoryWrapper
          afterMount={() => {
            if (!window.ECL) return {};

            const autoinit = window.ECL.autoInit();
            return { components: autoinit.components };
          }}
          beforeUnmount={context => {
            if (context.components) {
              context.components.forEach(c => c.destroy());
            }
          }}
        >
          {story()}
        </StoryWrapper>
      </>
    ),
  ],
};

export const Default = () => (
  <Gallery {...demoContent} data-ecl-auto-init="Gallery" />
);

Default.story = {
  name: 'default',
};
