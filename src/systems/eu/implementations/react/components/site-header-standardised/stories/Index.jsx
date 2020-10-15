import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import demoMenuEn from '@ecl/eu-specs-menu/demo/data--en';
import demoMenuFr from '@ecl/eu-specs-menu/demo/data--fr';
import demoContentEn from '@ecl/eu-specs-site-header-standardised/demo/data--en';
import demoContentFr from '@ecl/eu-specs-site-header-standardised/demo/data--fr';

import SiteHeaderStandardised from '../src/SiteHeaderStandardised';

demoMenuEn['data-ecl-auto-init'] = 'Menu';
demoMenuFr['data-ecl-auto-init'] = 'Menu';

export default {
  title: 'Components/Site Headers/Standardised',

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
  optional.siteHeaderLangSelect = boolean(
    'Language selector',
    true,
    'optional'
  );
  optional.siteHeaderMenu = boolean('Menu', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentEn));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }
  if (!optional.siteHeaderLangSelect) {
    delete dataCopy.languageSelector;
  }
  if (optional.siteHeaderMenu) {
    delete dataCopy.banner;
  } else {
    dataCopy.banner = 'Site name';
    delete dataCopy.menu;
  }

  return (
    <SiteHeaderStandardised
      {...dataCopy}
      {...(optional.siteHeaderMenu && {
        menu: demoMenuEn,
      })}
      data-ecl-auto-init="SiteHeaderStandardised"
    />
  );
};

Default.storyName = 'default';

export const LoggedIn = () => {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');
  optional.siteHeaderLangSelect = boolean(
    'Language selector',
    true,
    'optional'
  );
  optional.siteHeaderMenu = boolean('Menu', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentEn));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }
  if (!optional.siteHeaderLangSelect) {
    delete dataCopy.languageSelector;
  }
  if (optional.siteHeaderMenu) {
    delete dataCopy.banner;
  } else {
    dataCopy.banner = 'Site name';
    delete dataCopy.menu;
  }

  return (
    <SiteHeaderStandardised
      {...dataCopy}
      {...(optional.siteHeaderMenu && {
        menu: demoMenuEn,
      })}
      data-ecl-auto-init="SiteHeaderStandardised"
      logged
    />
  );
};

LoggedIn.storyName = 'logged in';

export const Translated = () => {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');
  optional.siteHeaderLangSelect = boolean(
    'Language selector',
    true,
    'optional'
  );
  optional.siteHeaderMenu = boolean('Menu', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentFr));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }
  if (!optional.siteHeaderLangSelect) {
    delete dataCopy.languageSelector;
  }
  if (optional.siteHeaderMenu) {
    delete dataCopy.banner;
  } else {
    dataCopy.banner = 'Nom du site';
    delete dataCopy.menu;
  }

  return (
    <SiteHeaderStandardised
      {...dataCopy}
      {...(optional.siteHeaderMenu && {
        menu: demoMenuFr,
      })}
      data-ecl-auto-init="SiteHeaderStandardised"
    />
  );
};

Translated.storyName = 'translated';
