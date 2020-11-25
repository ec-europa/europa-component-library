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
  getComplianceKnob,
} from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/resources-ec-logo/logo--en.svg';
import frenchBanner from '@ecl/resources-ec-logo/logo--fr.svg';
import englishData from '@ecl/specs-component-site-header-core/demo/data';
import frenchData from '@ecl/specs-component-site-header-core/demo/data--fr';
import siteHeaderCore from './site-header-core.html.twig';
import notes from './README.md';

const enData = { ...englishData };
const frData = { ...frenchData };
const loggedInData = { ...enData, logged: true };

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

  return siteHeaderCore(prepareSiteHeaderCore(enData, 'en'));
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enData } };

export const LoggedIn = () => {
  button(btnLabel, enBtnHandler, tabLabels.cases);

  return siteHeaderCore(prepareSiteHeaderCore(loggedInData, 'en'));
};

LoggedIn.storyName = 'logged in';
LoggedIn.parameters = { notes: { markdown: notes, json: loggedInData } };

export const Translated = () => {
  button(btnLabel, frBtnHandler, tabLabels.cases);

  return siteHeaderCore(prepareSiteHeaderCore(frData, 'fr'));
};

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
