import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';
import withCode from '@ecl/storybook-addon-code';

import englishBanner from '@ecl/resources-ec-logo/logo-ec--en.svg';
import frenchBanner from '@ecl/resources-ec-logo/logo-ec--fr.svg';
import euEnglishBanner from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--en.svg';
import euFrenchBanner from '@ecl/resources-eu-logo/standard-version/positive/logo-eu--fr.svg';
import euFrenchMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--fr.svg';
import euEnglishMobileBanner from '@ecl/resources-eu-logo/condensed-version/positive/logo-eu--en.svg';
import englishData from '@ecl/specs-component-site-header-core/demo/data';
import frenchData from '@ecl/specs-component-site-header-core/demo/data--fr';
import dataMenuEn from '@ecl/specs-component-menu/demo/data--en';
import dataMenuFr from '@ecl/specs-component-menu/demo/data--fr';
import siteHeaderCore from './site-header-core.html.twig';
import notes from './README.md';

const system = getSystem();
const loggedInData = { ...englishData, logged: true };
const enData = { ...englishData };
const frData = { ...frenchData };
const clonedLoggedInData = { ...loggedInData };

const getArgTypes = () => {
  const argTypes = {
    login: {
      type: { name: 'boolean' },
      defaultValue: true,
      description: 'Toggle login box visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
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
  correctSvgPath(data);

  if (demo !== 'translated') {
    if (args.menu) {
      data.menu = dataMenuEn;
      data.menu.site_name = '';
    } else if (!args.menu && data.menu) {
      delete data.menu;
    }
    if (system === 'ec') {
      data.logo.src_desktop = englishBanner;
    } else {
      data.logo.src_desktop = euEnglishBanner;
      data.logo.src_mobile = euEnglishMobileBanner;
    }
  } else {
    if (args.menu) {
      data.menu = dataMenuFr;
      data.menu.site_name = '';
    } else if (!args.menu && data.menu) {
      delete data.menu;
    }
    if (system === 'ec') {
      data.logo.src_desktop = frenchBanner;
    } else {
      data.logo.src_desktop = euFrenchBanner;
      data.logo.src_mobile = euFrenchMobileBanner;
    }
  }

  return data;
};

export default {
  title: 'Components/Site Headers/Core',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) =>
  siteHeaderCore(prepareData(englishData, 'default', args));

Default.storyName = 'default';
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: englishData } };

export const LoggedIn = (args) =>
  siteHeaderCore(prepareData(loggedInData, 'logged', args));

LoggedIn.storyName = 'logged in';
LoggedIn.argTypes = getArgTypes();
LoggedIn.parameters = { notes: { markdown: notes, json: loggedInData } };

export const Translated = (args) =>
  siteHeaderCore(prepareData(frenchData, 'translated', args));

Translated.storyName = 'translated';
Translated.argTypes = getArgTypes();
Translated.parameters = { notes: { markdown: notes, json: frenchData } };
