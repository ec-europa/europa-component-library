import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

// Get data
import enLogoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import enLogoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import enDataMenu from '@ecl/menu/demo/data--ec';
import enDataMenuLong from '@ecl/menu/demo/data--ec-long';
import enDataMegaMenu from '@ecl/mega-menu/demo/data';
import dataFullEC from './demo/data--ec';
import siteHeader from './site-header.html.twig';
import notes from './README.md';

// Preserve original data.
const dataFull = { ...dataFullEC };
const clonedDataFull = { ...dataFull };
const enMenu = { ...enDataMenu };
const enMenuLong = { ...enDataMenuLong };
const enMegaMenu = { ...enDataMegaMenu };
const closeButton = { ...dataFull.notification.close };

// Core
const dataCore = JSON.parse(JSON.stringify(dataFull));
delete dataCore.login_box;
delete dataCore.banner_top;
delete dataCore.cta_link;
dataCore.has_menu = true;

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
    logo_size: 'large',
    show_language_selector: true,
    show_custom_action: false,
    show_search: true,
    show_notification: false,
    show_notification_close: true,
  };

  if (data.login_box) {
    defaultArgs.show_login = true;
    defaultArgs.logged = false;
  }
  if (data.site_name) {
    defaultArgs.show_site_name = true;
    defaultArgs.site_name = data.site_name;
    defaultArgs.site_name_mobile_only = false;
  }
  if (data.banner_top) {
    defaultArgs.show_banner_top = true;
  }
  if (data.has_menu) {
    defaultArgs.show_menu = 'mega-menu';
    defaultArgs.menu_size = 'short';
    defaultArgs.featured_priority = 'secondary';
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
  argTypes.show_custom_action = {
    name: 'custom action',
    type: { name: 'boolean' },
    description: 'Show the custom action',
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
    argTypes.show_notification_close = {
      name: 'notification close button',
      type: { name: 'boolean' },
      description: 'Show the notification close button',
      table: {
        category: 'Optional',
      },
      if: { arg: 'show_notification' },
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
      control: { type: 'radio' },
      description: 'Show the menu, the mega menu or none of the two',
      options: ['none', 'menu', 'mega-menu'],
      table: {
        category: 'Optional',
      },
    };
    argTypes.menu_size = {
      name: 'menu size',
      control: { type: 'radio' },
      description: 'Display a short or long menu',
      options: ['short', 'long'],
      table: {
        category: 'Optional',
      },
      if: { arg: 'show_menu', eq: 'menu' },
    };
    argTypes.featured_priority = {
      name: 'featured panel priority',
      control: { type: 'select' },
      description:
        'When two featured panels are present, you can choose which one to show',
      options: ['secondary', 'primary'],
      table: {
        category: 'Optional',
      },
      if: { arg: 'show_menu', eq: 'mega-menu' },
    };
  }
  if (data.cta_link) {
    argTypes.show_cta_link = {
      name: 'call to action',
      type: { name: 'boolean' },
      description: 'Show the call to action link',
      table: {
        disable: true,
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
    argTypes.site_name_mobile_only = {
      name: 'site name mobile only',
      type: { name: 'boolean' },
      description: 'Display the site name only on mobile',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
  argTypes.logo_size = {
    name: 'logo size',
    description: 'Three sizes for large displays (s, m, l)',
    control: {
      type: 'select',
    },
    options: ['small', 'medium', 'large'],
    mapping: {
      small: 's',
      medium: 'm',
      large: 'l',
    },
    table: {
      defaultValue: { summary: 'l' },
      category: 'Content',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  if (!args.show_login) {
    delete clone.login_box;
    delete clone.login_toggle;
  } else if (args.show_login && !clone.login_box) {
    clone.login_box = clonedDataFull.login_box;
    clone.login_toggle = clonedDataFull.login_toggle;
  }

  if (args.show_menu === 'none' && (clone.menu || clone.mega_menu)) {
    delete clone.menu;
    delete clone.mega_menu;
  }
  if (args.show_menu === 'menu' && !clone.menu) {
    clone.menu = args.menu_size === 'long' ? enMenuLong : enMenu;
    delete clone.mega_menu;
  }
  if (args.show_menu === 'mega-menu' && !clone.mega_menu) {
    clone.mega_menu = enMegaMenu;
    delete clone.menu;
  }

  clone.logged = args.logged;
  clone.logo.size = args.logo_size;

  if (!args.show_language_selector) {
    delete clone.language_selector;
  } else {
    clone.language_selector = JSON.parse(
      JSON.stringify(clonedDataFull.language_selector),
    );
    clone.language_selector.overlay.items.splice(
      -(clone.language_selector.overlay.items.length - args.languages_eu),
      clone.language_selector.overlay.items.length - args.languages_eu,
    );
    clone.language_selector.overlay.non_eu_items.splice(
      -(
        clone.language_selector.overlay.non_eu_items.length -
        args.languages_non_eu
      ),
      clone.language_selector.overlay.non_eu_items.length -
        args.languages_non_eu,
    );
  }

  if (!args.show_custom_action) {
    delete clone.custom_action;
  } else {
    clone.custom_action = JSON.parse(
      JSON.stringify(clonedDataFull.custom_action),
    );
  }

  if (!args.show_site_name) {
    clone.site_name = '';
  } else {
    clone.site_name = args.site_name;
    clone.site_name_mobile_only = args.site_name_mobile_only;
  }

  if (!args.show_search) {
    delete clone.search_form;
    delete clone.search_toggle;
  } else if (args.show_search && !clone.search_form) {
    clone.search_form = clonedDataFull.search_form;
    clone.search_toggle = clonedDataFull.search_toggle;
  }

  if (!args.show_cta_link) {
    delete clone.cta_link;
  } else {
    clone.cta_link = clonedDataFull.cta_link;
  }

  if (!args.show_banner_top) {
    delete clone.banner_top;
  } else {
    clone.banner_top = clonedDataFull.banner_top;
  }

  if (!args.show_notification) {
    delete clone.notification;
  } else {
    clone.notification = clonedDataFull.notification;
    if (!args.show_notification_close) {
      delete clonedDataFull.notification.close;
    } else {
      clonedDataFull.notification.close = closeButton;
    }
  }

  if (args.featured_priority) {
    clone.mega_menu.featured_priority = args.featured_priority;
  }

  correctPaths(clone);

  clone.logo.src_desktop = enLogoEC;
  clone.logo.src_mobile = enLogoMobileEC;

  return clone;
};

export default {
  title: 'Components/Site-wide/Site header',
  decorators: [
    withNotes,
    withCode,
    (storyFn) => {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';

      return storyFn();
    },
  ],
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
