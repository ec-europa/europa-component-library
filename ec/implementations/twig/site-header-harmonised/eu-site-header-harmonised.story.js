import {
  withKnobs,
  optionsKnob,
  text,
  boolean,
  object,
} from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getLogoKnobs,
  getLoginKnobs,
  getLanguageSelectorKnobs,
  getSearchFormKnobs,
} from '@ecl-twig/story-utils';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import logoEn from '@ecl/eu-resources-logo/logo--en.svg';
import logoEnMobile from '@ecl/eu-resources-logo/condensed-version/positive/en.svg';
import logoFr from '@ecl/eu-resources-logo/logo--fr.svg';
import logoFrMobile from '@ecl/eu-resources-logo/condensed-version/positive/fr.svg';
import siteHeaderHarmonised from './ecl-site-header-harmonised.html.twig';
import enSpecs from './demo/eu-data--en';
import frSpecs from './demo/eu-data--fr';
import notes from './README.md';

const prepareSiteHeaderHarmonised = (data, lang, logged) => {
  if (data.login_box) {
    data.logged = boolean('logged', logged, tabLabels.states);
  }
  data.icon_file_path = optionsKnob(
    'icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.site_name = text('site_name', data.site_name, tabLabels.optional);
  if (data.logo) {
    let logoDesktop = logoEn;
    let logoMobile = logoEnMobile;
    if (lang === 'fr') {
      logoDesktop = logoFr;
      logoMobile = logoFrMobile;
    }
    data.logo.src_desktop = optionsKnob(
      'logo.src_desktop',
      { current: logoDesktop, 'no path': '' },
      logoDesktop,
      { display: 'inline-radio' },
      tabLabels.required
    );
    data.logo.src_mobile = optionsKnob(
      'logo.src_mobile',
      { current: logoMobile, 'no path': '' },
      logoMobile,
      { display: 'inline-radio' },
      tabLabels.required
    );
    if (data.logo.src_desktop || data.logo.src_mobile) {
      getLogoKnobs(data);
    }
  }
  // Login box and login toggle knobs.
  if (data.login_box) {
    data.logged = boolean('logged', data.logged, tabLabels.states);
    getLoginKnobs(data, false);
  }
  // Search toggle.
  if (data.search_toggle && data.search_toggle.label) {
    data.search_toggle.label = text(
      'search_toggle.label',
      data.search_toggle.label,
      tabLabels.optional
    );
    data.search_toggle.href = text(
      'search_toggle.href',
      data.search_toggle.href,
      tabLabels.optional
    );
  }
  // Search form.
  if (data.search_form) {
    getSearchFormKnobs(data, false);
  }
  // Language selector knobs.
  if (data.language_selector) {
    getLanguageSelectorKnobs(data, false);
    // Language selector overlay.
    data.language_selector.overlay = object(
      'language_selector.overlay',
      data.language_selector.overlay,
      tabLabels.optional
    );
  }
  // Extra classes and extra attributes.
  getExtraKnobs(data);

  if (data.menu) {
    // Menu label.
    data.menu_label = text(
      'data.menu_label',
      data.menu_label,
      tabLabels.optional
    );
    data.menu = object('data.menu', data.menu, tabLabels.optional);
  }

  return data;
};

export default {
  title: 'Components/Site Headers/Harmonised',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () =>
  siteHeaderHarmonised(prepareSiteHeaderHarmonised(enSpecs, 'en'));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: enSpecs } };

export const LoggedIn = () =>
  siteHeaderHarmonised(prepareSiteHeaderHarmonised(enSpecs, 'en', true));

LoggedIn.storyName = 'logged in';
LoggedIn.parameters = { notes: { markdown: notes, json: enSpecs } };

export const Translated = () =>
  siteHeaderHarmonised(prepareSiteHeaderHarmonised(frSpecs, 'fr'));

Translated.storyName = 'translated';
Translated.parameters = { notes: { markdown: notes, json: frSpecs } };
