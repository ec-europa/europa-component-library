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
import euFrenchBanner from '@ecl/eu-resources-logo/logo--fr.svg';
import euFrenchMobileBanner from '@ecl/eu-resources-logo/condensed-version/positive/fr.svg';
import siteHeaderCore from './ecl-site-header-core.html.twig';
import englishData from './demo/data--en';
import frenchData from './demo/data--fr';
import euEnglishData from './demo/eu-data--en';
import euFrenchData from './demo/eu-data--fr';
import notes from './README.md';

let system = false;
if (process.env.STORYBOOK_SYSTEM === 'EU') {
  system = 'eu';
}

const enData = system ? { ...euEnglishData } : { ...englishData };
const frData = system ? { ...euFrenchData } : { ...frenchData };

// Show/hide buttons for the language switcher.
const btnLabel = 'With or without the login box';
const enBtnHandler = () => {
  if (enData.login_box) {
    delete enData.login_box;
  } else {
    enData.login_box = englishData.login_box;
  }
};
const frBtnHandler = () => {
  if (frData.login_box) {
    delete frData.login_box;
  } else {
    frData.login_box = frenchData.login_box;
  }
};

const prepareSiteHeaderCore = (data, lang) => {
  data.logged = boolean('logged', data.logged, tabLabels.states);
  data.icon_file_path = optionsKnob(
    'icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  let banner = '';
  if (lang === 'en') {
    banner = system ? euEnglishBanner : englishBanner;
  } else {
    banner = system ? euFrenchBanner : frenchBanner;
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
      { current: euFrenchMobileBanner, 'no path': '' },
      euFrenchMobileBanner,
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
  // Language selector knobs.
  getLanguageSelectorKnobs(data, true);
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
  // Language selector overlay.
  data.language_selector.overlay = object(
    'language_selector.overlay',
    data.language_selector.overlay,
    tabLabels.required
  );
  // Extra classes and extra attributes.
  getExtraKnobs(data);
  // Compliance.
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Site Headers/Core',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => {
  button(btnLabel, enBtnHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderCore(enData, 'en');

  return siteHeaderCore(dataStory);
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };

export const LoggedIn = () => {
  enData.logged = true;
  button(btnLabel, enBtnHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderCore(enData, 'en');

  return siteHeaderCore(dataStory);
};

LoggedIn.storyName = 'logged in';
LoggedIn.parameters = { notes: { markdown: notes, json: englishData } };

export const Translated = () => {
  button(btnLabel, frBtnHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderCore(frData, 'fr');

  return siteHeaderCore(dataStory);
};

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
