import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

// Import data for demos
import iconsAll from '@ecl/resources-icons/dist/lists/all.json';
import dataDefault from '@ecl/specs-component-link/demo/data--default';
import dataCta from '@ecl/specs-component-link/demo/data--cta';
import dataPrimary from '@ecl/specs-component-link/demo/data--primary';
import dataSecondary from '@ecl/specs-component-link/demo/data--secondary';
import dataStandalone from '@ecl/specs-component-link/demo/data--standalone';
import dataInverted from '@ecl/specs-component-link/demo/data--inverted';

import link from './link.html.twig';
import notes from './README.md';

const dataInvertedStandalone = {
  ...dataInverted,
  link: { ...dataInverted.link, type: 'standalone' },
};

// Create 'none' option.
iconsAll.unshift('none');

const iconMapping = iconsAll.reduce((mapping, icon) => {
  mapping[icon] = icon;
  return mapping;
}, {});

const withParagraph = (story) => {
  const demo = story();
  return `<div class="ecl-u-type-m">The European Commission is the executive of ${demo} and promotes its general interest.</div>`;
};

const withInverted = (story) => {
  const demo = story();
  return `<div class="ecl-u-bg-dark ecl-u-type-color-white ecl-u-pa-xs">${demo}</div>`;
};

const getArgs = (data) => ({
  label: data.link.label,
  icon_name: 'none',
  icon_position: 'after',
  icon_title: '',
  external: false,
  hide_label: false,
});

const getArgTypes = () => ({
  label: {
    name: 'label',
    type: { name: 'string', required: true },
    description: 'The link label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  },
  external: {
    type: { name: 'boolean' },
    description: 'External link',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'Content',
    },
    control: {
      type: 'boolean',
    },
  },
  icon_name: {
    name: 'icon name',
    type: { name: 'select', required: false },
    options: [...iconsAll],
    mapping: iconMapping,
    description: 'Name of the icon',
    if: { arg: 'external', truthy: false },
    table: {
      type: { summary: 'string' },
      category: 'Icon',
    },
  },
  icon_transform: {
    name: 'icon transform',
    type: { name: 'select' },
    description: 'Link icon transform',
    if: { arg: 'icon_name', neq: 'none' },
    options: [
      'rotate-90',
      'rotate-180',
      'rotate-270',
      'flip-horizontal',
      'flip-vertical',
    ],
    mapping: {
      'rotate-90': 'rotate-90',
      'rotate-180': 'rotate-180',
      'rotate-270': 'rotate-270',
      'flip-horizontal': 'flip-horizontal',
      'flip-vertical': 'flip-vertical',
    },
    table: {
      type: { summary: 'string' },
      category: 'Icon',
    },
  },
  icon_position: {
    name: 'icon position',
    type: { name: 'inline-radio' },
    description: 'Icon position inside the link',
    if: { arg: 'icon_name', neq: 'none' },
    options: ['before', 'after'],
    mapping: {
      before: 'before',
      after: 'after',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'after' },
      category: 'Icon',
    },
  },
  icon_title: {
    name: 'icon title',
    type: 'string',
    description: 'Textual information for the icon, mostly for screen readers',
    if: { arg: 'icon_name', neq: 'none' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  },
  hide_label: {
    name: 'hide label',
    type: { name: 'boolean' },
    description:
      'Hide link label, keeping it only for screen readers. This only works if an icon is used',
    if: { arg: 'icon_name', neq: 'none' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'Content',
    },
    control: {
      type: 'boolean',
    },
  },
});

const prepareData = (data, args) => {
  data.link.label = args.label;
  data.link.hide_label = args.hide_label;
  data.link.icon_position = args.icon_position;
  data.link.external = args.external;
  if (args.icon_name && args.icon_name !== 'none') {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.transform = args.icon_transform;
    data.icon.size = 'xs';
    data.icon.path = 'icons.svg';
    data.icon.title = args.icon_title;
  }
  if (args.icon_name === 'none') {
    delete data.icon;
  }
  if (args.external) {
    data.link.icon_path = 'icons.svg';
    data.as_image = true;
  }

  correctPaths(data);

  return data;
};

export default {
  title: 'Components/Navigation/Link',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedLink = await link(prepareData(dataDefault, args));
  return renderedLink;
};
Default.storyName = 'default';
Default.decorators = [withNotes, withCode, withParagraph];
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Standalone = (_, { loaded: { component } }) => component;

Standalone.render = async (args) => {
  const renderedLinkStandalone = await link(prepareData(dataStandalone, args));
  return renderedLinkStandalone;
};
Standalone.storyName = 'standalone';
Standalone.args = getArgs(dataStandalone);
Standalone.argTypes = getArgTypes();
Standalone.parameters = { notes: { markdown: notes, json: dataStandalone } };

export const Cta = (_, { loaded: { component } }) => component;

Cta.render = async (args) => {
  const renderedLinkCta = await link(prepareData(dataCta, args));
  return renderedLinkCta;
};
Cta.storyName = 'call to action';
Cta.args = getArgs(dataCta);
Cta.argTypes = getArgTypes();
Cta.parameters = { notes: { markdown: notes, json: dataCta } };

export const Primary = (_, { loaded: { component } }) => component;

Primary.render = async (args) => {
  const renderedLinkCta = await link(prepareData(dataPrimary, args));
  return renderedLinkCta;
};
Primary.storyName = 'primary';
Primary.args = getArgs(dataPrimary);
Primary.argTypes = getArgTypes();
Primary.parameters = { notes: { markdown: notes, json: dataPrimary } };

export const Secondary = (_, { loaded: { component } }) => component;

Secondary.render = async (args) => {
  const renderedLinkSecondary = await link(prepareData(dataSecondary, args));
  return renderedLinkSecondary;
};
Secondary.storyName = 'secondary';
Secondary.args = getArgs(dataSecondary);
Secondary.argTypes = getArgTypes();
Secondary.parameters = { notes: { markdown: notes, json: dataSecondary } };

export const Inverted = (_, { loaded: { component } }) => component;

Inverted.render = async (args) => {
  const renderedLinkInverted = await link(prepareData(dataInverted, args));
  return renderedLinkInverted;
};
Inverted.storyName = 'inverted';
Inverted.decorators = [withNotes, withCode, withParagraph, withInverted];
Inverted.args = getArgs(dataInverted);
Inverted.argTypes = getArgTypes();
Inverted.parameters = { notes: { markdown: notes, json: dataInverted } };

export const InvertedStandalone = (_, { loaded: { component } }) => component;

InvertedStandalone.render = async (args) => {
  const renderedLinkInvertedStandalone = await link(
    prepareData(dataInvertedStandalone, args),
  );
  return renderedLinkInvertedStandalone;
};
InvertedStandalone.storyName = 'inverted standalone';
InvertedStandalone.decorators = [withNotes, withCode, withInverted];
InvertedStandalone.args = getArgs(dataInvertedStandalone);
InvertedStandalone.argTypes = getArgTypes();
InvertedStandalone.parameters = {
  notes: { markdown: notes, json: dataInvertedStandalone },
};
