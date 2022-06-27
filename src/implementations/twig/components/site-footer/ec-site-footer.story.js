import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataCore from '@ecl/specs-component-site-footer/demo/data-core--ec';
import dataStandardised from '@ecl/specs-component-site-footer/demo/data-standardised--ec';
import dataHarmonised from '@ecl/specs-component-site-footer/demo/data-harmonised--ec';
import logoEc from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';
import footer from './site-footer.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    show_contact: true,
    show_follow: true,
    show_relate_site: true,
    show_logo: true,
    show_about: true,
    show_class_names: true,
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {};
  argTypes.show_contact = {
    name: 'contact us',
    type: { name: 'boolean' },
    description: 'Show "Contact us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_logo = {
    name: 'logo',
    type: { name: 'boolean' },
    description: 'Show logo',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_follow = {
    name: 'follow us',
    type: { name: 'boolean' },
    description: 'Show "Follow us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_about = {
    name: 'about us',
    type: { name: 'boolean' },
    description: 'Show "About us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_relate_site = {
    name: 'related sites',
    type: { name: 'boolean' },
    description: 'Show "Related sites" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_class_names = {
    name: 'class names',
    type: { name: 'boolean' },
    description: 'Show "Class names" section',
    table: {
      category: 'Optional sections',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const res = JSON.parse(JSON.stringify(data));
  if (res.split_columns) {
    res.rows[0][0][0].logo.src_desktop = logoEc;
    return res;
  }

  res.rows[2][0][0].logo.src_desktop = logoEc;
  if (!args.show_logo && res.rows[1][0][0].logo) {
    delete res.rows[1][0][0].logo;
  }
  if (!args.show_logo && res.rows[2]) {
    delete res.rows[2][0][0].logo;
  }
  if (!args.show_contact) {
    res.rows[0][1].splice(0, 1);
  }
  if (!args.show_follow) {
    res.rows[0][1].splice(1, 1);
  }
  if (!args.show_relate_site) {
    res.rows[0][2].splice(1, 1);
  }
  if (!args.show_about) {
    res.rows[0][2].splice(0, 1);
  }
  if (!args.show_class_names) {
    res.rows.splice(1, 1);
  }
  if (!args.show_about && !args.show_relate_site) {
    res.rows[0].splice(2, 1);
  }
  if (!args.show_contact && !args.show_follow) {
    res.rows[0].splice(1, 1);
  }

  return res;
};

export default {
  title: 'Components/Site-wide/Site footer',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};

export const Core = (args) => footer(prepareData(dataCore, args));

Core.storyName = 'core';
Core.parameters = {
  controls: { disable: true },
  notes: { markdown: notes, json: dataCore },
};

export const Standardised = (args) =>
  footer(prepareData(dataStandardised, args));

Standardised.storyName = 'standardised';
Standardised.args = getArgs();
Standardised.argTypes = getArgTypes();
Standardised.parameters = {
  notes: { markdown: notes, json: dataStandardised },
};

export const Harmonised = (args) => footer(prepareData(dataHarmonised, args));

Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs();
Harmonised.argTypes = getArgTypes();
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
