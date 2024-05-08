import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

// Import data for demos
import iconsAll from '@ecl/resources-icons/dist/lists/all.json';
import dataPrimary from '@ecl/specs-component-button/demo/data--primary';
import dataSecondary from '@ecl/specs-component-button/demo/data--secondary';
import dataCall from '@ecl/specs-component-button/demo/data--call';
import dataGhost from '@ecl/specs-component-button/demo/data--ghost';
import dataGhostInverted from '@ecl/specs-component-button/demo/data--ghost-inverted';
import dataTertiary from '@ecl/specs-component-button/demo/data--tertiary';

import button from './button.html.twig';
import notes from './README.md';

const iconMapping = iconsAll.reduce((mapping, icon) => {
  mapping[icon] = icon;
  return mapping;
}, {});

// Create 'none' option.
iconsAll.unshift('none');

const withInverted = (story) => {
  const demo = story();
  return `<div class="ecl-u-bg-dark ecl-u-type-color-white ecl-u-pa-xs">${demo}</div>`;
};

const getArgs = () => ({
  icon_name: 'none',
  icon_position: 'after',
  disabled: false,
  hide_label: false,
});

const getArgTypes = () => {
  const argTypes = {};
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
  data.label = args.label;
  data.disabled = args.disabled;
  data.hide_label = args.hide_label;
  if (args.icon_name && args.icon_name !== 'none') {
    data.icon = {};
    data.icon.name = args.icon_name;
    data.icon.size = 'xs';
    data.icon.path = 'icon.svg';
    data.icon.transform =
      args.icon_transform !== 'none' ? args.icon_transform : '';
    data.icon_position = args.icon_position;
  }
  if (args.icon_name === 'none') {
    delete data.icon;
  }
  correctPaths(data);

  return data;
};

export default {
  title: 'Components/Button',
  argTypes: getArgTypes(),
  args: getArgs(),
  decorators: [withCode, withNotes],
};
export const Primary = (_, { loaded: { component } }) => component;

Primary.render = async (args) => {
  const renderedButton = await button(prepareData(dataPrimary, args));
  return renderedButton;
};
Primary.args = {
  label: dataPrimary.label,
};
Primary.storyName = 'primary';
Primary.parameters = {
  notes: { markdown: notes, json: dataPrimary },
};

export const Secondary = (_, { loaded: { component } }) => component;

Secondary.render = async (args) => {
  const renderedButtonSecondary = await button(
    prepareData(dataSecondary, args),
  );
  return renderedButtonSecondary;
};
Secondary.args = {
  label: dataSecondary.label,
};
Secondary.storyName = 'secondary';
Secondary.parameters = {
  notes: { markdown: notes, json: dataSecondary },
};

export const Tertiary = (_, { loaded: { component } }) => component;

Tertiary.render = async (args) => {
  const renderedCta = await button(prepareData(dataTertiary, args));
  return renderedCta;
};
Tertiary.args = {
  label: dataTertiary.label,
};
Tertiary.storyName = 'tertiary';
Tertiary.parameters = {
  notes: { markdown: notes, json: dataTertiary },
};

export const CallToAction = (_, { loaded: { component } }) => component;

CallToAction.render = async (args) => {
  const renderedCta = await button(prepareData(dataCall, args));
  return renderedCta;
};
CallToAction.args = {
  label: dataCall.label,
};
CallToAction.storyName = 'call to action';
CallToAction.parameters = {
  notes: { markdown: notes, json: dataCall },
};

export const Ghost = (_, { loaded: { component } }) => component;

Ghost.render = async (args) => {
  const renderedCta = await button(prepareData(dataGhost, args));
  return renderedCta;
};
Ghost.args = {
  label: dataGhost.label,
};
Ghost.storyName = 'ghost';
Ghost.parameters = {
  notes: { markdown: notes, json: dataGhost },
};

export const GhostInverted = (_, { loaded: { component } }) => component;

GhostInverted.render = async (args) => {
  const renderedCta = await button(prepareData(dataGhostInverted, args));
  return renderedCta;
};
GhostInverted.args = {
  label: dataGhostInverted.label,
};
GhostInverted.storyName = 'ghost inverted';
GhostInverted.decorators = [withNotes, withCode, withInverted];
GhostInverted.parameters = {
  notes: { markdown: notes, json: dataGhostInverted },
};
