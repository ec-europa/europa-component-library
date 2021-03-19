import { correctSvgPath } from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import logoEC from '@ecl/resources-ec-logo/logo-ec--en.svg';
import dataGroup1 from '@ecl/specs-component-site-header-harmonised/demo/data--group1';
import dataGroup2 from '@ecl/specs-component-site-header-harmonised/demo/data--group2';
import dataGroup3 from '@ecl/specs-component-site-header-harmonised/demo/data--group3';

import siteHeaderHarmonised from './site-header-harmonised.html.twig';
import notes from './README.md';

// Preserve original data.
const languageSelector = { ...dataGroup1.language_selector };
const menuEn = { ...dataGroup1.menu };
const searchForm = { ...dataGroup1.search_form };
const searchToggle = { ...dataGroup1.search_toggle };
const loginBox = { ...dataGroup1.login_box };
const className = { ...dataGroup1.banner_top };
const logo = { ...dataGroup3.logo };
const partnership =
  'https://inno-ecl.s3.amazonaws.com/media/examples/placeholder.svg';

const getArgTypes = (variant) => {
  const argTypes = {};
  if (variant === 'group1') {
    argTypes.login = {
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle login box visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    };
    argTypes.className = {
      name: 'class name',
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle Class name visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    };
  }
  if (variant === 'group3') {
    argTypes.partnership = {
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle partnership logo visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    };
  } else {
    argTypes.languageSelector = {
      name: 'language selector',
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle language selector visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    };
    argTypes.search = {
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle search form visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    };
    argTypes.menu = {
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle menu visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    };
  }

  return argTypes;
};

const prepareData = (data, variant, args) => {
  if (!args.login && variant === 'group1') {
    delete data.login_box;
  } else if (args.login && !data.login_box) {
    data.login_box = loginBox;
  }

  if (!args.menu && variant !== 'group3') {
    delete data.menu;
  } else if (args.menu && !data.menu) {
    data.menu = menuEn;
  }

  if (!args.languageSelector && variant !== 'group3') {
    delete data.language_selector;
  } else if (args.languageSelector && !data.language_selector) {
    data.language_selector = languageSelector;
  }

  if (!args.search && variant !== 'group3') {
    delete data.search_form;
    delete data.search_toggle;
  } else if (args.search && !data.search_form) {
    data.search_form = searchForm;
    data.search_toggle = searchToggle;
  }

  if (!args.className && variant === 'group1') {
    delete data.banner_top;
  } else if (args.className && !data.banner_top) {
    data.banner_top = className;
  }

  correctSvgPath(data);

  if (variant !== 'group3') {
    data.logo.src_desktop = logoEC;
  } else if (!args.partnership && variant === 'group3') {
    delete data.logo;
  } else if (args.partnership && !data.logo) {
    data.logo = logo;
  } else {
    data.logo.src_desktop = partnership;
  }

  return data;
};

export default {
  title: 'Components/Site Headers/Harmonised',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Group1 = (args) =>
  siteHeaderHarmonised(prepareData(dataGroup1, 'group1', args));

Group1.storyName = 'group 1';
Group1.argTypes = getArgTypes('group1');
Group1.parameters = { notes: { markdown: notes, json: dataGroup1 } };

export const Group2 = (args) =>
  siteHeaderHarmonised(prepareData(dataGroup2, 'group2', args));

Group2.storyName = 'group 2';
Group2.argTypes = getArgTypes('group2');
Group2.parameters = { notes: { markdown: notes, json: dataGroup2 } };

export const Group3 = (args) =>
  siteHeaderHarmonised(prepareData(dataGroup3, 'group3', args));

Group3.storyName = 'group 3';
Group3.argTypes = getArgTypes('group3');
Group3.parameters = { notes: { markdown: notes, json: dataGroup3 } };
