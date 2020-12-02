import {
  withKnobs,
  button,
  text,
  boolean,
  object,
  optionsKnob,
} from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getLogoKnobs,
  getLoginKnobs,
  getLanguageSelectorKnobs,
  getSearchFormKnobs,
} from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/resources-ec-logo/logo--en.svg';
import frenchBanner from '@ecl/resources-ec-logo/logo--fr.svg';
import englishData from '@ecl/specs-component-site-header-standardised/demo/data';
import frenchData from '@ecl/specs-component-site-header-standardised/demo/data--fr';
import siteHeaderStandardised from './site-header-standardised.html.twig';
import notes from './README.md';

const enData = { ...englishData };
const frData = { ...frenchData };
const loggedInData = { ...enData, logged: true };

// Show/hide buttons for the login box.
const btnLoginLabel = 'With or without the login box';
const enBtnLoginHandler = () => {
  if (enData.login_box) {
    delete enData.login_box;
  } else {
    enData.login_box = englishData.login_box;
  }
};
const frBtnLoginHandler = () => {
  if (frData.login_box) {
    delete frData.login_box;
  } else {
    frData.login_box = frenchData.login_box;
  }
};
// Show/hide button for the language switcher
const btnLangLabel = 'With or without the language switcher';
const enBtnLangHandler = () => {
  if (enData.language_selector) {
    delete enData.language_selector;
  } else {
    enData.language_selector = englishData.language_selector;
  }
};
const frBtnLangHandler = () => {
  if (frData.language_selector) {
    delete frData.language_selector;
  } else {
    frData.language_selector = frenchData.language_selector;
  }
};
const btnMenuLabel = 'With or without the menu';
const enBtnMenuHandler = () => {
  if (enData.menu) {
    delete enData.menu;
  } else {
    enData.menu = englishData.menu;
  }
};
const enBtnMenuLoggedHandler = () => {
  if (loggedInData.menu) {
    delete loggedInData.menu;
  } else {
    loggedInData.menu = englishData.menu;
  }
};
const frBtnMenuHandler = () => {
  if (frData.menu) {
    delete frData.menu;
  } else {
    frData.menu = frenchData.menu;
  }
};

const prepareSiteHeaderStandardised = (data, lang) => {
  data.site_name = text('site_name', data.site_name, tabLabels.required);
  data.logged = boolean('logged', data.logged, tabLabels.states);
  data.banner_top.link.label = text(
    'banner_top.link.label',
    data.banner_top.link.label,
    tabLabels.required
  );
  data.banner_top.link.path = text(
    'banner_top.link.path',
    data.banner_top.link.path,
    tabLabels.required
  );
  data.icon_file_path = optionsKnob(
    'icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  let banner = '';
  if (lang === 'en') {
    banner = englishBanner;
  } else {
    banner = frenchBanner;
  }
  data.logo.src_desktop = optionsKnob(
    'logo.src_desktop',
    { current: banner, 'no path': '' },
    banner,
    { display: 'inline-radio' },
    tabLabels.required
  );
  if (data.logo.src) {
    // Logo knobs
    getLogoKnobs(data, true);
  }
  // Login box and login toggle knobs.
  getLoginKnobs(data, false);
  // Search toggle.
  data.search_toggle.label = text(
    'search_toggle.label',
    data.search_toggle.label,
    tabLabels.required
  );
  data.search_toggle.href = text(
    'search_toggle.href',
    data.search_toggle.href,
    tabLabels.required
  );
  // Search form.
  getSearchFormKnobs(data, true);
  // Language selector knobs.
  if (data.language_selector) {
    getLanguageSelectorKnobs(data, false);
    // Language selector overlay.
    data.language_selector.overlay = object(
      'language_selector.overlay',
      data.language_selector.overlay,
      tabLabels.required
    );
  }
  // Menu label.
  data.menu_label = text(
    'data.menu_label',
    data.menu_label,
    tabLabels.optional
  );
  // Extra classes and extra attributes.
  getExtraKnobs(data);
  // Menu.
  if (data.menu) {
    data.menu = object('data.menu', data.menu, tabLabels.optional);
  }

  return data;
};

export default {
  title: 'Components/Site Headers/Standardised',
  decorators: [withNotes, withCode, withKnobs],
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
