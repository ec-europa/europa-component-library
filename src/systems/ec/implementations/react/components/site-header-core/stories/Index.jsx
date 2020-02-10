/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentEn from '@ecl/ec-specs-site-header-core/demo/data--en';
import demoContentFr from '@ecl/ec-specs-site-header-core/demo/data--fr';

import SiteHeaderCore from '../src/SiteHeaderCore';

export default {
  title: 'Components|Site Headers/Core',

  decorators: [
    story => (
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
    ),
  ],
};

export const Default = () => (
  <SiteHeaderCore {...demoContentEn} data-ecl-auto-init="SiteHeaderCore" />
);

Default.story = {
  name: 'default',
};

export const LoggedIn = () => (
  <SiteHeaderCore
    {...demoContentEn}
    data-ecl-auto-init="SiteHeaderCore"
    logged
  />
);

LoggedIn.story = {
  name: 'logged in',
};

export const Translated = () => (
  <SiteHeaderCore {...demoContentFr} data-ecl-auto-init="SiteHeaderCore" />
);

Translated.story = {
  name: 'translated',
};
