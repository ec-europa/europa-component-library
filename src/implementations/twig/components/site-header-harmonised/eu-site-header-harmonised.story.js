import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import euEnglishBanner from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import euFrenchBanner from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--fr.svg';
import euFrenchMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--fr.svg';
import euEnglishMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import englishData from '@ecl/specs-component-site-header-standardised/demo/data';
import frenchData from '@ecl/specs-component-site-header-standardised/demo/data--fr';
import dataMenuEn from '@ecl/specs-component-menu/demo/data--en';
import dataMenuFr from '@ecl/specs-component-menu/demo/data--fr';
import siteHeaderHarmonised from '@ecl/twig-component-site-header-standardised/site-header-standardised.html.twig';
import notes from './README-EU.md';

const enData = { ...englishData };
const frData = { ...frenchData };
const enMenu = { ...dataMenuEn };
const frMenu = { ...dataMenuFr };
const languageSelector = { ...enData.language_selector };
const loggedInData = { ...enData, logged: true };
const clonedLoggedInData = { ...loggedInData };
const enCtaLinkClone = { ...enData.cta_link };
const frCtaLinkClone = { ...frData.cta_link };

const getArgs = (data) => {
  const args = {
    login: true,
    language_selector: true,
    menu: true,
    site_name: data.site_name || '',
  };
  args.cta_link = false;

  return args;
};

const getArgTypes = () => {
  const argTypes = {};
  argTypes.site_name = {
    name: 'site name',
    type: { name: 'string', required: true },
    description: 'The site name',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  };
  argTypes.login = {
    type: 'boolean',
    description: 'Toggle login box visibility',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
    },
  };
  argTypes.language_selector = {
    name: 'language selector',
    type: 'boolean',
    description: 'Toggle language selector visibility',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
    },
  };
  argTypes.cta_link = {
    name: 'call to action',
    type: { name: 'boolean' },
    description: 'Call to action link (optional)',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
    control: {
      type: 'boolean',
    },
  };
  argTypes.menu = {
    type: 'boolean',
    description: 'Toggle menu visibility',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
    },
  };

  return argTypes;
};

const prepareData = (data, demo, args) => {
  if (!args.login) {
    delete data.login_box;
    delete data.login_toggle;
  } else if (args.login && !data.login_box) {
    if (demo === 'logged') {
      data = clonedLoggedInData;
    } else {
      data = demo === 'default' ? enData : frData;
    }
  }

  if (!args.menu) {
    delete data.menu;
  } else if (args.menu && !data.menu) {
    data.menu = demo !== 'translated' ? enMenu : frMenu;
  }

  if (!args.language_selector) {
    delete data.language_selector;
  } else if (args.language_selector && !data.language_selector) {
    data.language_selector = languageSelector;
  }

  if (args.cta_link) {
    data.cta_link = demo !== 'translated' ? enCtaLinkClone : frCtaLinkClone;
    if (data.menu) {
      data.menu.cta_link =
        demo !== 'translated' ? enCtaLinkClone : frCtaLinkClone;
    }
  } else {
    delete data.cta_link;
    if (data.menu) {
      delete data.menu.cta_link;
    }
  }

  correctSvgPath(data);

  if (demo !== 'translated') {
    delete data.banner_top;
    data.logo.src_desktop = euEnglishBanner;
    data.logo.src_mobile = euEnglishMobileBanner;
  } else {
    delete data.banner_top;
    data.logo.src_desktop = euFrenchBanner;
    data.logo.src_mobile = euFrenchMobileBanner;
  }

  data.site_name = args.site_name;

  return data;
};

export default {
  title: 'Components/Site Headers/Harmonised',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) =>
  siteHeaderHarmonised(prepareData(englishData, 'default', args));

Default.storyName = 'default';
Default.args = getArgs(englishData);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: englishData } };

export const LoggedIn = (args) =>
  siteHeaderHarmonised(prepareData(loggedInData, 'logged', args));

LoggedIn.storyName = 'logged in';
LoggedIn.args = getArgs(loggedInData);
LoggedIn.argTypes = getArgTypes();
LoggedIn.parameters = { notes: { markdown: notes, json: loggedInData } };

export const Translated = (args) =>
  siteHeaderHarmonised(prepareData(frenchData, 'translated', args));

Translated.storyName = 'translated';
Translated.args = getArgs(frenchData);
Translated.argTypes = getArgTypes();
Translated.parameters = { notes: { markdown: notes, json: frenchData } };
