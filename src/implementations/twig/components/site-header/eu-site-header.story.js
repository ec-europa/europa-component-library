import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

// Get data
import dataFullEU from '@ecl/specs-component-site-header/demo/data--eu';
import enLogoDesktopEU from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import enLogoMobileEU from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';
import enDataMenu from '@ecl/specs-component-menu/demo/data--en';
import siteHeader from './site-header.html.twig';
import notes from './README.md';

// Preserve original data.
const dataFull = { ...dataFullEU };
const clonedDataFull = { ...dataFull };
const enMenu = { ...enDataMenu };

// Core
const dataCore = JSON.parse(JSON.stringify(dataFull));
delete dataCore.login_box;
delete dataCore.site_name;
delete dataCore.cta_link;
dataCore.has_menu = false;

// Harmonised
const dataHarmonised = JSON.parse(JSON.stringify(dataFull));
dataHarmonised.has_menu = true;

const getArgs = (data) => {
  const defaultArgs = {
    show_language_selector: true,
    show_search: true,
  };

  if (data.login_box) {
    defaultArgs.show_login = true;
  }
  if (data.site_name) {
    defaultArgs.show_site_name = true;
    defaultArgs.site_name = data.site_name;
  }
  if (data.banner_top) {
    defaultArgs.show_banner_top = true;
  }
  if (data.has_menu) {
    defaultArgs.show_menu = true;
  }
  if (data.cta_link) {
    defaultArgs.show_cta_link = false;
  }

  return defaultArgs;
};

const getArgTypes = (data) => {
  const argTypes = {};

  if (data.login_box) {
    argTypes.show_login = {
      name: 'login',
      type: { name: 'boolean' },
      description: 'Show the login box',
      table: {
        category: 'Optional',
      },
    };
  }
  argTypes.show_language_selector = {
    name: 'language selector',
    type: { name: 'boolean' },
    description: 'Show the language selector',
    table: {
      category: 'Optional',
    },
  };
  argTypes.show_search = {
    name: 'search (Europa Search)',
    type: { name: 'boolean' },
    description: 'Show the search form',
    table: {
      category: 'Optional',
    },
  };
  if (data.has_menu) {
    argTypes.show_menu = {
      name: 'menu',
      type: { name: 'boolean' },
      description: 'Show the menu',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.cta_link) {
    argTypes.show_cta_link = {
      name: 'call to action',
      type: { name: 'boolean' },
      description: 'Show the call to action link',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.site_name) {
    argTypes.show_site_name = {
      name: 'site name',
      type: { name: 'boolean' },
      description: 'Show the site name',
      table: {
        category: 'Optional',
      },
    };
    argTypes.site_name = {
      name: 'site name',
      type: { name: 'string', required: true },
      description: 'The site name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  if (!args.show_login) {
    delete data.login_box;
    delete data.login_toggle;
  } else if (args.show_login && !data.login_box) {
    data.login_box = clonedDataFull.login_box;
    data.login_toggle = clonedDataFull.login_toggle;
  }

  if (!args.show_menu) {
    delete data.menu;
  } else if (args.show_menu && !data.menu) {
    data.menu = enMenu;
  }

  if (!args.show_language_selector) {
    delete data.language_selector;
  } else if (args.show_language_selector && !data.language_selector) {
    data.language_selector = clonedDataFull.language_selector;
  }

  if (!args.show_site_name) {
    data.site_name = '';
  } else {
    data.site_name = args.site_name;
  }

  if (!args.show_search) {
    delete data.search_form;
    delete data.search_toggle;
  } else if (args.show_search && !data.search_form) {
    data.search_form = clonedDataFull.search_form;
    data.search_toggle = clonedDataFull.search_toggle;
  }

  if (!args.show_cta_link) {
    delete data.cta_link;
  } else {
    data.cta_link = clonedDataFull.cta_link;
  }

  correctPaths(data);

  data.logo.src_desktop = enLogoDesktopEU;
  data.logo.src_mobile = enLogoMobileEU;

  return data;
};

export default {
  title: 'Components/Site-wide/Site header',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Core = (args) => siteHeader(prepareData(dataCore, args));

Core.storyName = 'core';
Core.args = getArgs(dataCore);
Core.argTypes = getArgTypes(dataCore);
Core.parameters = { notes: { markdown: notes, json: dataCore } };

export const Harmonised = (args) =>
  siteHeader(prepareData(dataHarmonised, args));

Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs(dataHarmonised);
Harmonised.argTypes = getArgTypes(dataHarmonised);
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
