import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoContentEn from '@ecl/ec-specs-site-header-core/demo/data--en';
import demoContentFr from '@ecl/ec-specs-site-header-core/demo/data--fr';

import SiteHeaderCore from '../src/SiteHeaderCore';

export default {
  title: 'Components/Site Headers/Core',

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

export function Default() {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentEn));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }

  return <SiteHeaderCore {...dataCopy} data-ecl-auto-init="SiteHeaderCore" />;
}

Default.storyName = 'default';

export function LoggedIn() {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentEn));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }

  return (
    <SiteHeaderCore {...dataCopy} data-ecl-auto-init="SiteHeaderCore" logged />
  );
}

LoggedIn.storyName = 'logged in';

export function Translated() {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentFr));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }

  return <SiteHeaderCore {...dataCopy} data-ecl-auto-init="SiteHeaderCore" />;
}

Translated.storyName = 'translated';
