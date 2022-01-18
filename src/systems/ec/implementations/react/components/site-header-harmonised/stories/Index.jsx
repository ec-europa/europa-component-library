import React from 'react';
import { boolean } from '@storybook/addon-knobs';
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
  title: 'Components/Site Headers/Harmonised',

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

export function Group1() {
  // Optional elements
  const optional = {};
  optional.siteHeaderLogin = boolean('Login', true, 'optional');
  optional.siteHeaderLangSelect = boolean(
    'Language selector',
    true,
    'optional'
  );
  optional.siteHeaderSearch = boolean('Search', true, 'optional');
  optional.siteHeaderClassName = boolean('Class name', true, 'optional');
  optional.siteHeaderMenu = boolean('Menu', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentGroup1));

  if (!optional.siteHeaderLogin) {
    delete dataCopy.loginToggle;
    delete dataCopy.loginBox;
  }
  if (!optional.siteHeaderLangSelect) {
    delete dataCopy.languageSelector;
  }
  if (!optional.siteHeaderSearch) {
    delete dataCopy.searchToggle;
    delete dataCopy.searchForm;
  }
  if (!optional.siteHeaderClassName) {
    delete dataCopy.bannerTop;
  }
  if (optional.siteHeaderMenu) {
    delete dataCopy.banner;
  } else {
    dataCopy.banner = 'Site name';
    delete dataCopy.menu;
  }

  return (
    <SiteHeaderHarmonised
      {...dataCopy}
      {...(optional.siteHeaderMenu && {
        menu: demoMenuGroup1,
      })}
      data-ecl-auto-init="SiteHeaderHarmonised"
      logged
      className="ecl-site-header-harmonised--group1"
    />
  );
}

Group1.storyName = 'group 1';

export function Group2() {
  // Optional elements
  const optional = {};
  optional.siteHeaderLangSelect = boolean(
    'Language selector',
    true,
    'optional'
  );
  optional.siteHeaderSearch = boolean('Search', true, 'optional');
  optional.siteHeaderMenu = boolean('Menu', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentGroup2));

  if (!optional.siteHeaderLangSelect) {
    delete dataCopy.languageSelector;
  }
  if (!optional.siteHeaderSearch) {
    delete dataCopy.searchToggle;
    delete dataCopy.searchForm;
  }
  if (optional.siteHeaderMenu) {
    delete dataCopy.banner;
  } else {
    delete dataCopy.menu;
  }

  return (
    <SiteHeaderHarmonised
      {...dataCopy}
      {...(optional.siteHeaderMenu && {
        menu: demoMenuGroup2,
      })}
      data-ecl-auto-init="SiteHeaderHarmonised"
      className="ecl-site-header-harmonised--group2"
    />
  );
}

Group2.storyName = 'group 2';

export function Group3() {
  // Optional elements
  const optional = {};
  optional.siteHeaderPartnership = boolean('Partnership', true, 'optional');

  const dataCopy = JSON.parse(JSON.stringify(demoContentGroup3));

  if (!optional.siteHeaderPartnership) {
    delete dataCopy.logo;
  }

  return (
    <SiteHeaderHarmonised
      {...dataCopy}
      className="ecl-site-header-harmonised--group3"
    />
  );
}

Group3.storyName = 'group 3';
