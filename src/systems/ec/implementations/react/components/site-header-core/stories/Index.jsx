/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentEn from '@ecl/ec-specs-site-header-core/demo/data--en';
import demoContentFr from '@ecl/ec-specs-site-header-core/demo/data--fr';

import SiteHeaderCore from '../src/SiteHeaderCore';

storiesOf('Components|Site Headers/Core', module)
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
    <SiteHeaderCore {...demoContentEn} data-ecl-auto-init="SiteHeaderCore" />
  ))
  .add('logged in', () => (
    <SiteHeaderCore
      {...demoContentEn}
      data-ecl-auto-init="SiteHeaderCore"
      logged
    />
  ))
  .add('translated', () => (
    <SiteHeaderCore {...demoContentFr} data-ecl-auto-init="SiteHeaderCore" />
  ));
