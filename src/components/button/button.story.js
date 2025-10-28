import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getIndicatorControls } from '@ecl/story-utils';

// Import data for demos
import iconsAll from '@ecl/resources-icons/list.json';
import dataButton from './demo/data';

import button from './button.html.twig';
import notes from './README.md';

const dataButtonPrimary = { ...dataButton, variant: 'primary' };
const dataButtonSecondary = { ...dataButton, variant: 'secondary' };
const dataButtonTertiary = { ...dataButton, variant: 'tertiary' };

const iconMapping = iconsAll.reduce((mapping, icon) => {
  mapping[icon] = icon;
  return mapping;
}, {});

// Create 'none' option.
iconsAll.unshift('none');

const getArgs = (data) => ({
  label: data.label,
  size: 'l',
  style: '',
  icon_name: 'none',
  icon_position: 'after',
  icon_title: '',
  disabled: false,
  hide_label: false,
  indicator: false,
  indicator_value: '10',
  indicator_label: 'Items not read',
});

const stylePrimary = {
  options: ['', 'highlight', 'inverted'],
  control: {
    labels: {
      '': 'default',
      highlight: 'highlight',
      inverted: 'inverted',
    },
  },
  mapping: {
    default: '',
    highlight: 'highlight',
    inverted: 'inverted',
  },
};

const styleSecondary = {
  options: ['', 'neutral', 'inverted'],
  control: {
    labels: {
      '': 'default',
      neutral: 'neutral',
      inverted: 'inverted',
    },
  },
  mapping: {
    default: '',
    neutral: 'neutral',
    inverted: 'inverted',
  },
};

const getArgTypes = (variant) => {
  const argTypes = getIndicatorControls({ arg: 'hide_label', eq: true });

  argTypes.size = {
    name: 'size',
    type: 'select',
    description: 'Button size',
    options: ['s', 'm', 'l'],
    control: {
      labels: {
        s: 'small',
        m: 'medium',
        l: 'large',
      },
    },
    mapping: {
      small: 's',
      medium: 'm',
      large: 'l',
    },
    table: {
      type: 'string',
      defaultValue: { summary: 'l' },
      category: 'Display',
    },
  };
  argTypes.style = {
    ...(variant === 'primary' ? stylePrimary : styleSecondary),
    name: 'style',
    type: 'select',
    description: 'Button style',
    table: {
      type: 'string',
      category: 'Display',
    },
  };
  argTypes.label = {
    name: 'label',
    type: { name: 'string', required: true },
    description: 'The main label of the button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.icon_name = {
    name: 'icon name',
    description: 'Button icon',
    type: { name: 'select' },
    options: iconsAll,
    mapping: iconMapping,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  };
  argTypes.icon_transform = {
    name: 'icon transform',
    type: { name: 'select' },
    description: 'Button icon transform',
    if: { arg: 'icon_name', neq: 'none' },
    options: [
      'none',
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
      defaultValue: { summary: '' },
      category: 'Icon',
    },
  };
  argTypes.icon_position = {
    name: 'icon position',
    type: { name: 'inline-radio' },
    description: 'Icon position inside the button',
    options: ['before', 'after'],
    mapping: {
      before: 'before',
      after: 'after',
    },
    if: { arg: 'icon_name', neq: 'none' },
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
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Icon',
    },
    if: { arg: 'icon_name', neq: 'none' },
  };
  argTypes.disabled = {
    name: 'disabled',
    type: { name: 'boolean' },
    description: 'Disabled button',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
    control: {
      type: 'boolean',
    },
  };
  argTypes.hide_label = {
    name: 'hide label',
    type: { name: 'boolean' },
    description:
      'Hide button label, keeping it only for screen readers. This only works if an icon is used',
    if: { arg: 'icon_name', neq: 'none' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'States',
    },
    control: {
      type: 'boolean',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.size = args.size;
  data.style = args.style;
  data.label = args.label;
  data.disabled = args.disabled;
  data.hide_label = args.hide_label;
  data.indicator = args.indicator ? { value: '', sr_label: '' } : {};
  if (args.indicator) {
    if (args.indicator_value !== '') {
      data.indicator.value = args.indicator_value;
    }
    if (args.indicator_label !== '') {
      data.indicator.sr_label = args.indicator_label;
    }
  }
  if (args.icon_name && args.icon_name !== 'none') {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.size = 'xs';
    data.icon.transform =
      args.icon_transform !== 'none' ? args.icon_transform : '';
    data.icon_position = args.icon_position;
    data.icon.title = args.icon_title;
  }
  if (args.icon_name === 'none') {
    delete data.icon;
  }
  correctPaths(data);

  return data;
};

const renderStory = async (data, args) => {
  let story = await button(prepareData(data, args));

  if (args.style === 'inverted') {
    story = `<div class="ecl-u-bg-black ecl-u-pa-m">${story}</div>`;
  }

  return story;
};

export default {
  title: 'Components/Button',
  decorators: [withCode, withNotes],
};

export const Primary = (_, { loaded: { component } }) => component;

Primary.render = async (args) => {
  const renderedButton = await renderStory(dataButtonPrimary, args);
  return renderedButton;
};
Primary.args = getArgs(dataButtonPrimary);
Primary.storyName = 'primary';
Primary.argTypes = getArgTypes('primary');
Primary.parameters = {
  notes: { markdown: notes, json: dataButtonPrimary },
};

export const Secondary = (_, { loaded: { component } }) => component;

Secondary.render = async (args) => {
  const renderedButton = await renderStory(dataButtonSecondary, args);
  return renderedButton;
};
Secondary.args = getArgs(dataButtonSecondary);
Secondary.storyName = 'secondary';
Secondary.argTypes = getArgTypes('secondary');
Secondary.parameters = {
  notes: { markdown: notes, json: dataButtonSecondary },
};

export const Tertiary = (_, { loaded: { component } }) => component;

Tertiary.render = async (args) => {
  const renderedButton = await renderStory(dataButtonTertiary, args);
  return renderedButton;
};
Tertiary.args = getArgs(dataButtonTertiary);
Tertiary.storyName = 'tertiary';
Tertiary.argTypes = getArgTypes('tertiary');
Tertiary.parameters = {
  notes: { markdown: notes, json: dataButtonTertiary },
};
