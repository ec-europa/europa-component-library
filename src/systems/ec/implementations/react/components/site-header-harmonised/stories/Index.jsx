/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Components|Site Headers/Harmonised', module)
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
  .add('group 1', () => (
    <SiteHeaderHarmonised
      {...demoContentGroup1}
      menu={demoMenuGroup1}
      data-ecl-auto-init="SiteHeaderHarmonised"
      logged
      className="ecl-site-header-harmonised--group1"
    />
  ))
  .add('group 2', () => (
    <SiteHeaderHarmonised
      {...demoContentGroup2}
      menu={demoMenuGroup2}
      data-ecl-auto-init="SiteHeaderHarmonised"
      className="ecl-site-header-harmonised--group2"
    />
  ))
  .add('group 3', () => (
    <SiteHeaderHarmonised
      {...demoContentGroup3}
      className="ecl-site-header-harmonised--group3"
    />
  ));
