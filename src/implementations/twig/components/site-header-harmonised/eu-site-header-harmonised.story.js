import { correctSvgPath } from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import euEnglishBanner from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import euFrenchBanner from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--fr.svg';
import euFrenchMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--fr.svg';
import euEnglishMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import dataLoggedIn from '@ecl/specs-component-site-header-harmonised/demo/data--group1';
import dataFr from '@ecl/specs-component-site-header-harmonised/demo/data--fr';

import siteHeaderHarmonised from './site-header-harmonised.html.twig';
import notes from './README.md';

// Preserve original data.
delete dataLoggedIn.banner_top;
const languageSelector = { ...dataLoggedIn.language_selector };
const menuEn = { ...dataLoggedIn.menu };
const loginBox = { ...dataLoggedIn.login_box };
const dataEn = { ...dataLoggedIn, logged: false };
const loggedInBox = { ...dataLoggedIn.login_box };

const getArgTypes = () => {
  return {
    login: {
      type: { name: 'boolean' },
      description: 'Toggle login box visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    languageSelector: {
      name: 'language selector',
      type: { name: 'boolean' },
      description: 'Toggle language selector visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    menu: {
      type: { name: 'boolean' },
      description: 'Toggle menu visibility',
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
  } else if (args.login && !data.login_box) {
    data.login_box = demo === 'default' ? loginBox : loggedInBox;
  }

  if (!args.menu) {
    delete data.menu;
  } else if (args.menu && !data.menu) {
    data.menu = menuEn;
  }

  if (!args.languageSelector) {
    delete data.language_selector;
  } else if (args.languageSelector && !data.language_selector) {
    data.language_selector = languageSelector;
  }

  correctSvgPath(data);

  if (demo !== 'translated') {
    data.logo.src_desktop = euEnglishBanner;
    data.logo.src_mobile = euEnglishMobileBanner;
  } else {
    data.logo.src_desktop = euFrenchBanner;
    data.logo.src_mobile = euFrenchMobileBanner;
  }

  return data;
};

export default {
  title: 'Components/Site Headers/Harmonised',
  decorators: [withNotes, withCode],
  argTypes: getArgTypes(),
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) =>
  siteHeaderHarmonised(prepareData(dataEn, 'default', args));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataEn } };

export const LoggedIn = (args) =>
  siteHeaderHarmonised(prepareData(dataLoggedIn, 'logged', args));

LoggedIn.storyName = 'logged in';
LoggedIn.parameters = { notes: { markdown: notes, json: dataLoggedIn } };

export const Translated = (args) =>
  siteHeaderHarmonised(prepareData(dataFr, 'translated', args));

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: dataFr } };
