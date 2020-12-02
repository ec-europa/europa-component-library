import {
  withKnobs,
  button,
  optionsKnob,
  text,
  boolean,
  select,
  object,
} from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getLogoKnobs,
  getLoginKnobs,
  getLanguageSelectorKnobs,
  getSearchFormKnobs,
  getComplianceKnob,
} from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import logoEC from '@ecl/resources-ec-logo/logo--en.svg';
import logoEU from '@ecl/resources-eu-logo/logo--en.svg';
import dataGroup1 from '@ecl/specs-component-site-header-harmonised/demo/data--group1';
import dataGroup2 from '@ecl/specs-component-site-header-harmonised/demo/data--group2';
import dataGroup3 from '@ecl/specs-component-site-header-harmonised/demo/data--group3';

import siteHeaderHarmonised from './site-header-harmonised.html.twig';
import notes from './README.md';

// Preserve original data.
const dataG1 = { ...dataGroup1 };
const dataG2 = { ...dataGroup2 };
const dataG3 = { ...dataGroup3 };

const system = process.env.STORYBOOK_SYSTEM === 'EU';
const logo = system ? logoEU : logoEC;

// Show/hide Partnership logo.
const btnLogoLabel = 'With or without the patnership logo';
const btnLogoHandler = () => {
  if (dataG3.logo) {
    delete dataG3.logo;
  } else {
    dataG3.logo = dataGroup3.logo;
  }
};
// Show/hide buttons for the language switcher.
const btnLangLabel = 'With or without the language switcher';
const btnLangG1Handler = () => {
  if (dataG1.language_selector) {
    delete dataG1.language_selector;
  } else {
    dataG1.language_selector = dataGroup1.language_selector;
  }
};
const btnLangG2Handler = () => {
  if (dataG2.language_selector) {
    delete dataG2.language_selector;
  } else {
    dataG2.language_selector = dataGroup2.language_selector;
  }
};
// Show/hide buttons for the menu.
const btnMenuLabel = 'With or without the menu';
const btnMenuG1Handler = () => {
  if (dataG1.menu) {
    delete dataG1.menu;
  } else {
    dataG1.menu = dataGroup1.menu;
  }
};
const btnMenuG2Handler = () => {
  if (dataG2.menu) {
    delete dataG2.menu;
  } else {
    dataG2.menu = dataGroup2.menu;
  }
};
// Show/hide buttons for the class.
const btnClassHandler = () => {
  if (dataG1.banner_top) {
    delete dataG1.banner_top;
  } else {
    dataG1.banner_top = dataGroup1.banner_top;
  }
};
// Show/hide buttons for the search form.
const btnSearchLabel = 'With or without the search form';
const btnSearchG1Handler = () => {
  if (dataG1.search_form) {
    delete dataG1.search_form;
    delete dataG1.search_toggle;
  } else {
    dataG1.search_form = dataGroup1.search_form;
    dataG1.search_toggle = dataGroup1.search_toggle;
  }
};
const btnSearchG2Handler = () => {
  if (dataG2.search_form) {
    delete dataG2.search_form;
    delete dataG2.search_toggle;
  } else {
    dataG1.search_form = dataGroup2.search_form;
    dataG1.search_toggle = dataGroup2.search_toggle;
  }
};
// Show/hide buttons for the login box.
const btnLoginLabel = 'With or without the login box';
const btnLoginHandler = () => {
  if (dataG1.login_box) {
    delete dataG1.login_box;
  } else {
    dataG1.login_box = dataGroup1.login_box;
  }
};

const prepareSiteHeaderHarmonised = (data, variant) => {
  if (data.login_box) {
    data.logged = boolean('logged', data.logged, tabLabels.states);
  }
  if (data.group !== 'group3') {
    data.icon_file_path = optionsKnob(
      'icon_file_path',
      { current: defaultSprite, 'no path': '' },
      defaultSprite,
      { display: 'inline-radio' },
      tabLabels.required
    );
  }
  if (variant === 'group3') {
    data.site_name = text('site_name', data.site_name, tabLabels.required);
  } else {
    data.site_name = text('site_name', data.site_name, tabLabels.optional);
  }
  if (data.group) {
    data.group = select('group', [data.group], data.group, tabLabels.required);
  } else {
    data.group = select('group', ['group1'], 'group1', tabLabels.optional);
  }
  if (variant === 'group1' && data.banner_top && data.banner_top.link) {
    data.banner_top.link.label = text(
      'banner_top.link.label',
      data.banner_top.link.label,
      tabLabels.optional
    );
    data.banner_top.link.path = text(
      'banner_top.link.path',
      data.banner_top.link.path,
      tabLabels.optional
    );
  }
  // Logo knobs.
  if (data.logo) {
    let label = tabLabels.required;
    let logoDefault = logo;
    let required = true;
    if (data.group === 'group3') {
      label = tabLabels.optional;
      logoDefault = data.logo.src_desktop;
      required = false;
    }
    data.logo.src_desktop = optionsKnob(
      'logo.src_desktop',
      { current: logoDefault, 'no path': '' },
      logoDefault,
      { display: 'inline-radio' },
      label
    );
    if (data.logo.src_desktop) {
      getLogoKnobs(data, required);
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

  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Site Headers/Harmonised',
  decorators: [withNotes, withCode, withKnobs],
};

export const Group1 = () => {
  button(btnLangLabel, btnLangG1Handler, tabLabels.cases);
  button(btnLoginLabel, btnLoginHandler, tabLabels.cases);
  button(btnMenuLabel, btnMenuG1Handler, tabLabels.cases);
  button(btnSearchLabel, btnSearchG1Handler, tabLabels.cases);
  button('With or without the Class name', btnClassHandler, tabLabels.cases);
  dataG1.logged = true;
  const dataStory = prepareSiteHeaderHarmonised(dataG1, 'group1');

  return siteHeaderHarmonised(dataStory);
};

Group1.storyName = 'group 1';
Group1.parameters = { notes: { markdown: notes, json: dataG1 } };

export const Group2 = () => {
  button(btnLangLabel, btnLangG2Handler, tabLabels.cases);
  button(btnSearchLabel, btnSearchG2Handler, tabLabels.cases);
  button(btnMenuLabel, btnMenuG2Handler, tabLabels.cases);
  const dataStory = prepareSiteHeaderHarmonised(dataG2, 'group2');

  return siteHeaderHarmonised(dataStory);
};

Group2.storyName = 'group 2';
Group2.parameters = { notes: { markdown: notes, json: dataG2 } };

export const Group3 = () => {
  button(btnLogoLabel, btnLogoHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderHarmonised(dataG3, 'group3');

  return siteHeaderHarmonised(dataStory);
};

Group3.storyName = 'group 3';
Group3.parameters = { notes: { markdown: notes, json: dataGroup3 } };
