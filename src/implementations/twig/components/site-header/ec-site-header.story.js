import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

// Get data
import dataFullEC from '@ecl/specs-component-site-header/demo/data--ec';
import enLogoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import enLogoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import enDataMenu from '@ecl/specs-component-menu/demo/data--ec';
import siteHeader from './site-header.html.twig';
import notes from './README.md';

// Preserve original data.
const dataFull = { ...dataFullEC };
const clonedDataFull = { ...dataFull };
const enMenu = { ...enDataMenu, variant: 'dark' };

// Core
const dataCore = JSON.parse(JSON.stringify(dataFull));
delete dataCore.login_box;
delete dataCore.site_name;
delete dataCore.banner_top;
delete dataCore.cta_link;
dataCore.has_menu = false;

// Standardised
const dataStandardised = JSON.parse(JSON.stringify(dataFull));
delete dataStandardised.login_box;
dataStandardised.has_menu = true;

// Harmonised
const dataHarmonised = JSON.parse(JSON.stringify(dataFull));
delete dataHarmonised.banner_top;
dataHarmonised.has_menu = true;

const getArgs = (data) => {
  const defaultArgs = {
    show_language_selector: true,
    show_search: true,
    show_notification: false,
    dark: true,
  };

  if (data.login_box) {
    defaultArgs.show_login = true;
    defaultArgs.logged = false;
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
  if (data.language_selector) {
    defaultArgs.languages_eu = data.language_selector.overlay.items.length;
    defaultArgs.languages_non_eu =
      data.language_selector.overlay.non_eu_items.length;
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
    argTypes.logged = {
      name: 'logged in',
      type: { name: 'boolean' },
      description: 'Show the login box for a logged in user',
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
  if (data.notification) {
    argTypes.show_notification = {
      name: 'notification',
      type: { name: 'boolean' },
      description: 'Show the notification box',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.banner_top) {
    argTypes.show_banner_top = {
      name: 'class name',
      type: { name: 'boolean' },
      description: 'Show the class name',
      table: {
        category: 'Optional',
      },
    };
  }
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
      if: { arg: 'show_site_name' },
    };
  }
  if (data.language_selector) {
    argTypes.languages_eu = {
      name: 'EU languages',
      description: 'Number of official EU languages',
      control: {
        type: 'range',
        min: 0,
        max: data.language_selector.overlay.items.length,
        step: 1,
      },
      table: {
        category: 'Content',
      },
      if: { arg: 'show_language_selector' },
    };
    argTypes.languages_non_eu = {
      name: 'non-EU languages',
      description: 'Number of other languages',
      control: {
        type: 'range',
        min: 0,
        max: data.language_selector.overlay.non_eu_items.length,
        step: 1,
      },
      table: {
        category: 'Content',
      },
      if: { arg: 'show_language_selector' },
    };
  }

  argTypes.dark = {
    name: 'dark',
    type: { name: 'boolean' },
    description: 'Use the dark display',
    table: {
      category: 'Display',
    },
  };

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

  data.logged = args.logged;

  if (!args.show_language_selector) {
    delete data.language_selector;
  } else {
    data.language_selector = JSON.parse(
      JSON.stringify(clonedDataFull.language_selector),
    );
    data.language_selector.overlay.items.splice(
      -(data.language_selector.overlay.items.length - args.languages_eu),
      data.language_selector.overlay.items.length - args.languages_eu,
    );
    data.language_selector.overlay.non_eu_items.splice(
      -(
        data.language_selector.overlay.non_eu_items.length -
        args.languages_non_eu
      ),
      data.language_selector.overlay.non_eu_items.length -
        args.languages_non_eu,
    );
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

  if (!args.show_banner_top) {
    delete data.banner_top;
  } else {
    data.banner_top = clonedDataFull.banner_top;
  }

  if (!args.show_notification) {
    delete data.notification;
  } else {
    data.notification = clonedDataFull.notification;
  }

  if (args.dark) {
    data.variant = 'dark';
  } else {
    data.variant = '';
  }

  correctPaths(data);

  data.logo.src_desktop = enLogoEC;
  data.logo.src_mobile = enLogoMobileEC;

  return data;
};

export default {
  title: 'Components/Site-wide/Site header',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Core = (_, { loaded: { component } }) => component;

Core.render = async (args) => {
  const renderedCore = await siteHeader(prepareData(dataCore, args));
  return renderedCore;
};
Core.storyName = 'core';
Core.args = getArgs(dataCore);
Core.argTypes = getArgTypes(dataCore);
Core.parameters = { notes: { markdown: notes, json: dataCore } };

export const Standardised = (_, { loaded: { component } }) => component;

Standardised.render = async (args) => {
  const renderedStandardised = await siteHeader(
    prepareData(dataStandardised, args),
  );
  return renderedStandardised;
};
Standardised.storyName = 'standardised';
Standardised.args = getArgs(dataStandardised);
Standardised.argTypes = getArgTypes(dataStandardised);
Standardised.parameters = {
  notes: { markdown: notes, json: dataStandardised },
};

export const Harmonised = (_, { loaded: { component } }) => component;

Harmonised.render = async (args) => {
  const renderedHarmonised = await siteHeader(
    prepareData(dataHarmonised, args),
  );
  return renderedHarmonised;
};
Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs(dataHarmonised);
Harmonised.argTypes = getArgTypes(dataHarmonised);
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
