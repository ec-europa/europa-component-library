/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import demoMenuGroup1 from '@ecl/ec-specs-menu/demo/data--group1';
import demoMenuGroup2 from '@ecl/ec-specs-menu/demo/data--group2';
import demoContentGroup1 from '@ecl/ec-specs-site-header-harmonised/demo/data--group1';
import demoContentGroup2 from '@ecl/ec-specs-site-header-harmonised/demo/data--group2';
import demoContentGroup3 from '@ecl/ec-specs-site-header-harmonised/demo/data--group3';

import SiteHeaderHarmonised from '../src/SiteHeaderHarmonised';

demoMenuGroup1['data-ecl-auto-init'] = 'Menu';
demoMenuGroup1.className = 'ecl-menu--group1';
demoMenuGroup2['data-ecl-auto-init'] = 'Menu';
demoMenuGroup2.className = 'ecl-menu--group2';

export default {
  title: 'Components|Site Headers/Harmonised (WIP)',

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

export const Group1 = () => (
  <SiteHeaderHarmonised
    {...demoContentGroup1}
    menu={demoMenuGroup1}
    data-ecl-auto-init="SiteHeaderHarmonised"
    logged
    className="ecl-site-header-harmonised--group1"
  />
);

Group1.story = {
  name: 'group 1',
};

export const Group2 = () => (
  <SiteHeaderHarmonised
    {...demoContentGroup2}
    menu={demoMenuGroup2}
    data-ecl-auto-init="SiteHeaderHarmonised"
    className="ecl-site-header-harmonised--group2"
  />
);

Group2.story = {
  name: 'group 2',
};

export const Group3 = () => (
  <SiteHeaderHarmonised
    {...demoContentGroup3}
    className="ecl-site-header-harmonised--group3"
  />
);

Group3.story = {
  name: 'group 3',
};
