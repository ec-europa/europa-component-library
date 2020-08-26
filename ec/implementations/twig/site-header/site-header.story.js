import { withKnobs, button, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
  getLanguageSelectorKnobs,
  getLogoKnobs,
  getSearchFormKnobs,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';
import euEnglishBanner from '@ecl/eu-resources-logo/logo--en.svg';
import euFrenchBanner from '@ecl/eu-resources-logo/logo--fr.svg';
import englishData from './demo/data--en';
import frenchData from './demo/data--fr';
import siteHeader from './ecl-site-header.html.twig';
import notes from './README.md';

// Preserve original data.
const enData = { ...englishData };
const frData = { ...frenchData };

let system = false;
if (process.env.STORYBOOK_SYSTEM === 'EU') {
  system = 'eu';
}

// Show/hide buttons for the language switcher.
const btnLabel = 'With or without the language switcher';
const enBtnHandler = () => {
  if (enData.language_selector) {
    delete enData.language_selector;
  } else {
    enData.language_selector = englishData.language_selector;
  }
};
const frBtnHandler = () => {
  if (frData.language_selector) {
    delete frData.language_selector;
  } else {
    frData.language_selector = frenchData.language_selector;
  }
};

const prepareSiteHeader = (data, lang) => {
  if (lang === 'en') {
    button(btnLabel, enBtnHandler, tabLabels.cases);
  } else {
    button(btnLabel, frBtnHandler, tabLabels.cases);
  }
  let banner = '';
  if (lang === 'en') {
    banner = system ? euEnglishBanner : englishBanner;
  } else {
    banner = system ? euFrenchBanner : frenchBanner;
  }
  data.logo.src = optionsKnob(
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
  data.icon_file_path = optionsKnob(
    'icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  // Language selector knobs.
  if (data.language_selector) {
    getLanguageSelectorKnobs(data, false, true);
  }
  // Search form.
  getSearchFormKnobs(data, true);
  // Extra knobs.
  getExtraKnobs(data);
  // Compliance knob.
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/deprecated/Site Header',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => siteHeader(prepareSiteHeader(enData, 'en'));

Default.storNname = 'ECL < 2.12 - default';
Default.parameters = { notes: { markdown: notes, json: enData } };

export const Translated = () => siteHeader(prepareSiteHeader(frData, 'fr'));

Translated.storyName = 'ECL < 2.12 - translated';
Translated.parameters = { notes: { markdown: notes, json: frData } };
