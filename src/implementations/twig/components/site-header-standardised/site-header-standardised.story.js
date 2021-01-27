import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';
import withCode from '@ecl/storybook-addon-code';

import englishBanner from '@ecl/resources-ec-logo/logo-ec--en.svg';
import frenchBanner from '@ecl/resources-ec-logo/logo-ec--fr.svg';
import euEnglishBanner from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import euFrenchBanner from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--fr.svg';
import euFrenchMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--fr.svg';
import euEnglishMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import englishData from '@ecl/specs-component-site-header-standardised/demo/data';
import frenchData from '@ecl/specs-component-site-header-standardised/demo/data--fr';
import siteHeaderStandardised from './site-header-standardised.html.twig';
import notes from './README.md';

const system = getSystem();
const enData = { ...englishData };
const frData = { ...frenchData };
const menuEn = { ...enData.menu };
const menuFr = { ...frData.menu };
const languageSelector = { ...enData.language_selector };
const loggedInData = { ...enData, logged: true };
const clonedLoggedInData = { ...loggedInData };

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
    data.menu = demo !== 'translated' ? menuEn : menuFr;
  }

  if (!args.language_selector) {
    delete data.language_selector;
  } else if (args.language_selector && !data.language_selector) {
    data.language_selector = languageSelector;
  }

  correctSvgPath(data);

  if (system === 'ec') {
    if (demo !== 'translated') {
      data.logo.src_desktop = englishBanner;
    } else {
      data.logo.src_desktop = frenchBanner;
    }
  } else if (demo !== 'translated') {
    delete data.banner_top;
    data.logo.src_desktop = euEnglishBanner;
    data.logo.src_mobile = euEnglishMobileBanner;
  } else {
    delete data.banner_top;
    data.logo.src_desktop = euFrenchBanner;
    data.logo.src_mobile = euFrenchMobileBanner;
  }

  return data;
};

export default {
  title: 'Components/Site Headers/Standardised',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) =>
  siteHeaderStandardised(prepareData(englishData, 'default', args));

Default.storyName = 'default';
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: englishData } };

export const LoggedIn = (args) =>
  siteHeaderStandardised(prepareData(loggedInData, 'logged', args));

LoggedIn.storyName = 'logged in';
LoggedIn.argTypes = getArgTypes();
LoggedIn.parameters = { notes: { markdown: notes, json: loggedInData } };

export const Translated = (args) =>
  siteHeaderStandardised(prepareData(frenchData, 'translated', args));

Translated.storyName = 'translated';
Translated.argTypes = getArgTypes();
Translated.parameters = { notes: { markdown: notes, json: frenchData } };
