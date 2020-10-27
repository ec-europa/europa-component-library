import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoMenuEn from '@ecl/eu-specs-menu/demo/data--en';
import demoMenuFr from '@ecl/eu-specs-menu/demo/data--fr';
import demoContentEn from '@ecl/eu-specs-site-header-core/demo/data--en';
import demoContentFr from '@ecl/eu-specs-site-header-core/demo/data--fr';

import SiteHeaderCore from '../src/SiteHeaderCore';

demoMenuEn['data-ecl-auto-init'] = 'Menu';
const demoMenuEnCopy = JSON.parse(JSON.stringify(demoMenuEn));
demoMenuEnCopy.siteName = '';
demoMenuFr['data-ecl-auto-init'] = 'Menu';
const demoMenuFrCopy = JSON.parse(JSON.stringify(demoMenuFr));
demoMenuFrCopy.siteName = '';

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

export const Default = () => {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');
  optional.siteHeaderMenu = boolean('Menu', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentEn));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }
  if (optional.siteHeaderMenu) {
    delete dataCopy.banner;
  } else {
    delete dataCopy.menu;
  }

  return (
    <SiteHeaderCore
      {...dataCopy}
      {...(optional.siteHeaderMenu && {
        menu: demoMenuEnCopy,
      })}
      data-ecl-auto-init="SiteHeaderCore"
    />
  );
};

Default.storyName = 'default';

export const LoggedIn = () => {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');
  optional.siteHeaderMenu = boolean('Menu', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentEn));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }
  if (optional.siteHeaderMenu) {
    delete dataCopy.banner;
  } else {
    delete dataCopy.menu;
  }

  return (
    <SiteHeaderCore
      {...dataCopy}
      {...(optional.siteHeaderMenu && {
        menu: demoMenuEnCopy,
      })}
      data-ecl-auto-init="SiteHeaderCore"
      logged
    />
  );
};

LoggedIn.storyName = 'logged in';

export const Translated = () => {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');
  optional.siteHeaderMenu = boolean('Menu', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentFr));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }
  if (optional.siteHeaderMenu) {
    delete dataCopy.banner;
  } else {
    delete dataCopy.menu;
  }

  return (
    <SiteHeaderCore
      {...dataCopy}
      {...(optional.siteHeaderMenu && {
        menu: demoMenuFrCopy,
      })}
      data-ecl-auto-init="SiteHeaderCore"
    />
  );
};

Translated.storyName = 'translated';
