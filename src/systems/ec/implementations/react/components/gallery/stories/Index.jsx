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
      <StoryWrapper
        afterMount={() => {
          const root = document.getElementById('root');
          const div = document.createElement('div');
          div.setAttribute('id', 'wt-init');

          root.prepend(div);

          (function($wt) {
            $wt.ready(function() {
              $wt.render(div, {
                utility: 'globan',
                lang: 'en',
                theme: 'dark',
                logo: true,
                link: true,
                mode: false,
                zindex: 40,
              });
            });
          })($wt);

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
    ),
  ],
};

export const Default = () => (
  <Gallery {...demoContent} data-ecl-auto-init="Gallery" />
);

Default.story = {
  name: 'default',
};
