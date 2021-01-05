import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';
import withCode from '@ecl/storybook-addon-code';

import englishBanner from '@ecl/resources-ec-logo/logo--en.svg';
import frenchBanner from '@ecl/resources-ec-logo/logo--fr.svg';
import euFrenchMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/fr.svg';
import euEnglishMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/en.svg';
import englishData from '@ecl/specs-component-site-header-standardised/demo/data';
import frenchData from '@ecl/specs-component-site-header-standardised/demo/data--fr';
import siteHeaderStandardised from './site-header-standardised.html.twig';
import notes from './README.md';

const system = getSystem();
const enData = { ...englishData };
const frData = { ...frenchData };
const loggedInData = { ...enData, logged: true };
const clonedLoggedInData = { loggedInData };

const getArgTypes = () => {
  return {
    login: {
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle login box visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    menu: {
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle menu visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    language_selector: {
      name: 'language selector',
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle language selector visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
  };
};

const prepareData = (data, demo, args) => {
  if (!args.login) {
    delete data.login_box;
    delete data.login_toggle;
  } else if (args.login && !data.login_box) {
    if (demo === 'logged') {
      data = clonedLoggedInData;
    } else {
      data = demo === 'default' ? enData : frData;
    }
  }
  if (!args.menu) {
    delete data.menu;
  } else if (args.menu && !data.menu) {
    if (demo === 'logged') {
      data = clonedLoggedInData;
    } else {
      data = demo === 'default' ? enData : frData;
    }
  }
  correctSvgPath(data);
  if (system === 'ec') {
    if (demo !== 'translated') {
      data.logo.src_desktop = englishBanner;
    } else {
      data.logo.src_desktop = frenchBanner;
    }
  } else if (demo !== 'translated') {
    if (args.menu) {
      data.menu = dataMenuEn;
      data.menu.site_name = '';
    } else if (!args.menu && data.menu) {
      delete data.menu;
    }

    data.logo.src_desktop = euEnglishBanner;
    data.logo.src_mobile = euEnglishMobileBanner;
  } else {
    if (args.menu) {
      data.menu = dataMenuFr;
      data.menu.site_name = '';
    } else if (!args.menu && data.menu) {
      delete data.menu;
    }

    data.logo.src_desktop = euFrenchBanner;
    data.logo.src_mobile = euFrenchMobileBanner;
  }

  return data;
};

export default {
  title: 'Components/Site Headers/Standardised',
  decorators: [withNotes, withCode],
};

export const Default = () => {
  button(btnLangLabel, enBtnLangHandler, tabLabels.cases);
  button(btnLoginLabel, enBtnLoginHandler, tabLabels.cases);
  button(btnMenuLabel, enBtnMenuHandler, tabLabels.cases);

  return siteHeaderStandardised(prepareSiteHeaderStandardised(enData, 'en'));
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };

export const LoggedIn = () => {
  button(btnLangLabel, enBtnLangHandler, tabLabels.cases);
  button(btnMenuLabel, enBtnMenuLoggedHandler, tabLabels.cases);

  return siteHeaderStandardised(
    prepareSiteHeaderStandardised(loggedInData, 'en')
  );
};

LoggedIn.storyName = 'logged in';
LoggedIn.parameters = { notes: { markdown: notes, json: loggedInData } };

export const Translated = () => {
  button(btnLangLabel, frBtnLangHandler, tabLabels.cases);
  button(btnLoginLabel, frBtnLoginHandler, tabLabels.cases);
  button(btnMenuLabel, frBtnMenuHandler, tabLabels.cases);

  return siteHeaderStandardised(prepareSiteHeaderStandardised(frData, 'fr'));
};

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
