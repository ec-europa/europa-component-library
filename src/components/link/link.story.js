import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getIndicatorControls } from '@ecl/story-utils';
import { allModes } from '../../playground/ec/.storybook/modes';

// Import data for demos
import iconsAll from '@ecl/resources-icons/list.json';
import dataDefault from './demo/data--default';
import dataPrimaryHighlight from './demo/data--primary-highlight';
import dataPrimaryNeutral from './demo/data--primary-neutral';
import dataPrimary from './demo/data--primary';
import dataSecondary from './demo/data--secondary';
import dataStandalone from './demo/data--standalone';

import link from './link.html.twig';
import notes from './README.md';

// Create 'none' option.
iconsAll.unshift('none');

const iconMapping = iconsAll.reduce((mapping, icon) => {
  mapping[icon] = icon;
  return mapping;
}, {});

const getArgs = (data, variant) => {
  const args = {
    label: data.link.label,
    icon_name: 'none',
    icon_position: 'after',
    icon_title: '',
    external: false,
    hide_label: false,
    indicator: false,
    indicator_value: '10',
    indicator_label: 'Items not read',
  };

  if (variant === 'default' || variant === 'standalone') {
    args.style = '';
  }

  return args;
};

const getArgTypes = (variant) => {
  const argTypes = getIndicatorControls({ arg: 'hide_label', eq: true });

  argTypes.label = {
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
  };
  argTypes.external = {
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
  };
  argTypes.icon_name = {
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
  };
  argTypes.icon_transform = {
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
  };
  argTypes.icon_position = {
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
  };
  argTypes.icon_title = {
    name: 'icon title',
    type: 'string',
    description: 'Textual information for the icon, mostly for screen readers',
    if: { arg: 'icon_name', neq: 'none' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  };
  argTypes.hide_label = {
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
  };

  if (variant === 'default' || variant === 'standalone') {
    argTypes.style = {
      options: ['', 'brand', 'inverted'],
      control: {
        labels: {
          '': 'default',
          brand: 'brand',
          inverted: 'inverted',
        },
      },
      mapping: {
        default: '',
        brand: 'brand',
        inverted: 'inverted',
      },
      name: 'style',
      type: 'select',
      description: 'Link style',
      table: {
        type: 'string',
        category: 'Display',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  data.link.label = args.label;
  data.link.hide_label = args.hide_label;
  data.link.icon_position = args.icon_position;
  data.link.external = args.external;
  data.link.indicator = args.indicator ? { value: '', sr_label: '' } : {};
  if (args.indicator) {
    if (args.indicator_value !== '') {
      data.link.indicator.value = args.indicator_value;
    }
    if (args.indicator_label !== '') {
      data.link.indicator.sr_label = args.indicator_label;
    }
  }
  if (args.icon_name && args.icon_name !== 'none') {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.transform = args.icon_transform;
    data.icon.size = 'xs';
    data.icon.title = args.icon_title;
  }
  if (args.icon_name === 'none') {
    delete data.icon;
  }
  if (args.external) {
    data.as_image = true;
  }
  if (args.style === 'inverted') {
    data.link.inverted = true;
  } else {
    data.link.inverted = false;
  }
  if (args.style === 'brand') {
    data.link.branded = true;
  } else {
    data.link.branded = false;
  }

  correctPaths(data);

  return data;
};

const renderStory = async (data, args, variant) => {
  let story = await link(prepareData(data, args));

  if (variant === 'default') {
    story = `<div class="ecl-u-type-m">The European Commission is the executive of ${story} and promotes its general interest.</div>`;
  }

  if (variant === 'standalone') {
    story = `<div class="ecl-u-type-m">${story}</div>`;
  }

  if (args.style === 'inverted') {
    story = `<div class="ecl-u-bg-black ecl-u-type-color-white ecl-u-pa-m">${story}</div>`;
  }

  return story;
};

export default {
  title: 'Components/Navigation/Link',
  decorators: [withNotes, withCode],
  parameters: {
    chromatic: {
      modes: {
        m: allModes.m,
      },
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedLink = await renderStory(dataDefault, args, 'default');
  return renderedLink;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault, 'default');
Default.argTypes = getArgTypes('default');
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Standalone = (_, { loaded: { component } }) => component;

Standalone.render = async (args) => {
  const renderedLinkStandalone = await renderStory(
    dataStandalone,
    args,
    'standalone',
  );
  return renderedLinkStandalone;
};
Standalone.storyName = 'standalone';
Standalone.args = getArgs(dataStandalone, 'standalone');
Standalone.argTypes = getArgTypes('standalone');
Standalone.parameters = { notes: { markdown: notes, json: dataStandalone } };

export const Primary = (_, { loaded: { component } }) => component;

Primary.render = async (args) => {
  const renderedLinkPrimary = await renderStory(dataPrimary, args);
  return renderedLinkPrimary;
};
Primary.storyName = 'primary';
Primary.args = getArgs(dataPrimary, 'primary');
Primary.argTypes = getArgTypes('primary');
Primary.parameters = { notes: { markdown: notes, json: dataPrimary } };

export const PrimaryHighlight = (_, { loaded: { component } }) => component;

PrimaryHighlight.render = async (args) => {
  const renderedLinkPrimaryHighlight = await renderStory(
    dataPrimaryHighlight,
    args,
  );
  return renderedLinkPrimaryHighlight;
};
PrimaryHighlight.storyName = 'primary highlight';
PrimaryHighlight.args = getArgs(dataPrimaryHighlight, 'primary highlight');
PrimaryHighlight.argTypes = getArgTypes('primary highlight');
PrimaryHighlight.parameters = {
  notes: { markdown: notes, json: dataPrimaryHighlight },
};

export const PrimaryNeutral = (_, { loaded: { component } }) => component;

PrimaryNeutral.render = async (args) => {
  const renderedLinkPrimaryNeutral = await link(
    prepareData(dataPrimaryNeutral, args),
  );
  return renderedLinkPrimaryNeutral;
};
PrimaryNeutral.storyName = 'primary neutral';
PrimaryNeutral.args = getArgs(dataPrimaryNeutral);
PrimaryNeutral.argTypes = getArgTypes();
PrimaryNeutral.parameters = {
  notes: { markdown: notes, json: dataPrimaryNeutral },
};

export const Secondary = (_, { loaded: { component } }) => component;

Secondary.render = async (args) => {
  const renderedLinkSecondary = await renderStory(dataSecondary, args);
  return renderedLinkSecondary;
};
Secondary.storyName = 'secondary';
Secondary.args = getArgs(dataSecondary, 'secondary');
Secondary.argTypes = getArgTypes('secondary');
Secondary.parameters = { notes: { markdown: notes, json: dataSecondary } };
