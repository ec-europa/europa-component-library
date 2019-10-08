/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentEn from '@ecl/ec-specs-site-header-standardised/demo/data--en';
import demoContentFr from '@ecl/ec-specs-site-header-standardised/demo/data--fr';

import SiteHeaderStandardised from '../src/SiteHeaderStandardised';

storiesOf('Components|Site Headers/Standardised', module)
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
    <SiteHeaderStandardised
      {...demoContentEn}
      data-ecl-auto-init="SiteHeaderStandardised"
    />
  ))
  .add('logged in', () => (
    <SiteHeaderStandardised
      {...demoContentEn}
      data-ecl-auto-init="SiteHeaderStandardised"
      logged
    />
  ))
  .add('translated', () => (
    <SiteHeaderStandardised
      {...demoContentFr}
      data-ecl-auto-init="SiteHeaderStandardised"
    />
  ));
