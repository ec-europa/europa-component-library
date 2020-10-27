import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentEn from '@ecl/ec-specs-site-header/demo/data--en';
import demoContentFr from '@ecl/ec-specs-site-header/demo/data--fr';

import SiteHeader from '../src/SiteHeader';

export default {
  title: 'Deprecated/Site Header (ECL<2-12-0)',

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
  <SiteHeader {...demoContentEn} data-ecl-auto-init="SiteHeader" />
);

Default.storyName = 'default';

export const Translated = () => (
  <SiteHeader {...demoContentFr} data-ecl-auto-init="SiteHeader" />
);

Translated.storyName = 'translated';
