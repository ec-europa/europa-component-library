/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import demoMenuEn from '@ecl/ec-specs-menu/demo/data--en';
import demoMenuFr from '@ecl/ec-specs-menu/demo/data--fr';
import demoContentEn from '@ecl/ec-specs-site-header-standardised/demo/data--en';
import demoContentFr from '@ecl/ec-specs-site-header-standardised/demo/data--fr';

import SiteHeaderStandardised from '../src/SiteHeaderStandardised';

demoMenuEn['data-ecl-auto-init'] = 'Menu';
demoMenuFr['data-ecl-auto-init'] = 'Menu';

export default {
  title: 'Components|Site Headers/Standardised',

  decorators: [
    story => (
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
    ),
  ],
};

export const Default = () => (
  <SiteHeaderStandardised
    {...demoContentEn}
    menu={demoMenuEn}
    data-ecl-auto-init="SiteHeaderStandardised"
  />
);

Default.story = {
  name: 'default',
};

export const LoggedIn = () => (
  <SiteHeaderStandardised
    {...demoContentEn}
    menu={demoMenuEn}
    data-ecl-auto-init="SiteHeaderStandardised"
    logged
  />
);

LoggedIn.story = {
  name: 'logged in',
};

export const Translated = () => (
  <SiteHeaderStandardised
    {...demoContentFr}
    menu={demoMenuFr}
    data-ecl-auto-init="SiteHeaderStandardised"
  />
);

Translated.story = {
  name: 'translated',
};
