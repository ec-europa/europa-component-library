import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import logoEc from '@ecl/resources-ec-logo/dist/negative/logo-ec--en.svg';
import dataCore from './demo/data-core--ec';
import dataStandardised from './demo/data-standardised--ec';
import dataHarmonised from './demo/data-harmonised--ec';
import footer from './site-footer-ec.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    show_contact: true,
    show_about: true,
    show_more: true,
    show_related: true,
    show_follow: true,
    show_logo: true,
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

  argTypes.show_about = {
    name: 'about us',
    type: { name: 'boolean' },
    description: 'Show "About us" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_more = {
    name: 'more information',
    type: { name: 'boolean' },
    description: 'Show "More information" section',
    table: {
      category: 'Optional sections',
    },
  };

  argTypes.show_related = {
    name: 'related links',
    type: { name: 'boolean' },
    description: 'Show "Related links" section',
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
  const clone = JSON.parse(JSON.stringify(data));
  if (clone.split_columns) {
    clone.rows[0][0][0].logo.src_desktop = logoEc;
    return clone;
  }

  clone.rows[2][0][0].logo.src_desktop = logoEc;
  if (!args.show_logo && clone.rows[1][0][0].logo) {
    delete clone.rows[1][0][0].logo;
  }
  if (!args.show_logo && clone.rows[2]) {
    delete clone.rows[2][0][0].logo;
  }
  if (!args.show_follow) {
    clone.rows[0][1].splice(1, 1);
  }
  if (!args.show_class_names) {
    clone.rows.splice(1, 1);
  }

  if (!args.show_contact) {
    delete clone.section_contact;
  }
  if (!args.show_about) {
    delete clone.section_about;
  }
  if (!args.show_more) {
    delete clone.section_more;
  }
  if (!args.show_related) {
    delete clone.section_related;
  }

  return Object.assign(clone, args);
};

export default {
  title: 'Components/Site-wide/Site footer',
  decorators: [withCode, withNotes],
  parameters: { layout: 'fullscreen' },
};

export const Core = (_, { loaded: { component } }) => component;

Core.render = async (args) => {
  const renderedCore = await footer(prepareData(dataCore, args));
  return renderedCore;
};
Core.storyName = 'core';
Core.parameters = {
  controls: { disable: true },
  notes: { markdown: notes, json: dataCore },
};

export const Standardised = (_, { loaded: { component } }) => component;

Standardised.render = async (args) => {
  const renderedStandardised = await footer(
    prepareData(dataStandardised, args),
  );
  return renderedStandardised;
};
Standardised.storyName = 'standardised';
Standardised.args = getArgs();
Standardised.argTypes = getArgTypes();
Standardised.parameters = {
  notes: { markdown: notes, json: dataStandardised },
};

export const Harmonised = (_, { loaded: { component } }) => component;

Harmonised.render = async (args) => {
  const renderedHarmonised = await footer(prepareData(dataHarmonised, args));
  return renderedHarmonised;
};
Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs();
Harmonised.argTypes = getArgTypes();
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
