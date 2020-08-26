import {
  withKnobs,
  button,
  text,
  boolean,
  object,
  optionsKnob,
} from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getLogoKnobs,
  getLoginKnobs,
  getLanguageSelectorKnobs,
  getSearchFormKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';
import euEnglishBanner from '@ecl/eu-resources-logo/logo--en.svg';
import euEnglishMobileBanner from '@ecl/eu-resources-logo/condensed-version/positive/en.svg';
import euFrenchMobileBanner from '@ecl/eu-resources-logo/condensed-version/positive/fr.svg';
import euFrenchBanner from '@ecl/eu-resources-logo/logo--fr.svg';
import englishData from './demo/data--en';
import frenchData from './demo/data--fr';
import siteHeaderStandardised from './ecl-site-header-standardised.html.twig';
import notes from './README.md';

const enData = { ...englishData };
const frData = { ...frenchData };
let system = false;
if (process.env.STORYBOOK_SYSTEM === 'EU') {
  system = 'eu';
}

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

const prepareSiteHeaderStandardised = (data, lang) => {
  data.logged = boolean('logged', data.logged, tabLabels.states);
  if (!system) {
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
  } else {
    delete data.banner_top;
  }
  data.icon_file_path = optionsKnob(
    'icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  let banner = '';
  let mobileBanner = '';
  if (lang === 'en') {
    banner = system ? euEnglishBanner : englishBanner;
    mobileBanner = system ? euEnglishMobileBanner : '';
  } else {
    banner = system ? euFrenchBanner : frenchBanner;
    mobileBanner = system ? euFrenchMobileBanner : '';
  }
  data.logo.src_desktop = optionsKnob(
    'logo.src_desktop',
    { current: banner, 'no path': '' },
    banner,
    { display: 'inline-radio' },
    tabLabels.required
  );
  if (system) {
    data.logo.src_mobile = optionsKnob(
      'logo.src_mobile',
      { current: mobileBanner, 'no path': '' },
      mobileBanner,
      { display: 'inline-radio' },
      tabLabels.required
    );
  }
  if (data.logo.src) {
    // Logo knobs
    getLogoKnobs(data, true);
  }
  // Login box and login toggle knobs.
  getLoginKnobs(data, true);
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
  data.menu = object('data.menu', data.menu, tabLabels.optional);
  // Compliance
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Site Headers/Standardised',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => {
  button(btnLangLabel, enBtnLangHandler, tabLabels.cases);
  button(btnLoginLabel, enBtnLoginHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderStandardised(enData, 'en');

  return siteHeaderStandardised(dataStory);
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };

export const LoggedIn = () => {
  button(btnLangLabel, enBtnLangHandler, tabLabels.cases);
  enData.logged = true;
  const dataStory = prepareSiteHeaderStandardised(enData, 'en');

  return siteHeaderStandardised(dataStory);
};

LoggedIn.storyName = 'logged in';
LoggedIn.parameters = { notes: { markdown: notes, json: enData } };

export const Translated = () => {
  button(btnLangLabel, frBtnLangHandler, tabLabels.cases);
  button(btnLoginLabel, frBtnLoginHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderStandardised(frData, 'fr');

  return siteHeaderStandardised(dataStory);
};

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
