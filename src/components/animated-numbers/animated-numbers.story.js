import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { allModes } from '../../playground/ec/.storybook/modes';

import defaultData from './demo/data';
import AnimatedNumbers from './animated-numbers.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    with_background: false,
    full_width: false,
    border: false,
    counter_color: true,
    suffix: data.suffix,
    prefix: data.prefix,
    description: data.description,
    category: data.category,
    value: data.value,
    numberOfItems: 4,
  };

  return args;
};

const getArgTypes = () => ({
  numberOfItems: {
    name: 'number of items',
    control: { type: 'range', min: 1, max: 8, step: 1 },
    description: 'Number of items to display',
  },
  with_background: {
    name: 'with a dark background',
    type: { name: 'boolean', required: false },
    description: 'On a dark background',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'Style',
    },
    if: { arg: 'full_width', eq: false },
  },
  full_width: {
    name: 'full width',
    type: { name: 'boolean', required: false },
    description: 'Full width',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'Style',
    },
  },
  border: {
    name: 'border left',
    type: { name: 'boolean', required: false },
    description: 'Add a border to the left of the items',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'Style',
    },
  },
  counter_color: {
    name: 'counter color',
    type: { name: 'boolean', required: false },
    description: 'Coloured counter',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'true' },
      category: 'Style',
    },
    if: { arg: 'with_background', truthy: false },
  },
  description: {
    name: 'description',
    type: { name: 'string', required: false },
    description: 'Description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
  },
  category: {
    name: 'category',
    type: { name: 'string', required: false },
    description: 'Category',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
    control: {
      type: 'text',
    },
  },
  prefix: {
    name: 'prefix',
    type: { name: 'string', required: false },
    description: 'First part of the value, before the number',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
    control: {
      type: 'text',
    },
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    description: 'Value (only numbers)',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
    control: {
      type: 'text',
    },
  },
  suffix: {
    name: 'suffix',
    type: { name: 'string', required: false },
    description: 'Last part of the value, after the number',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
    control: {
      type: 'text',
    },
  },
});

const prepareData = (data, args) => {
  const cloned = structuredClone(data);

  cloned.border = args.border;
  cloned.counter_color = args.counter_color;
  cloned.with_background = args.with_background;
  cloned.full_width = args.full_width;

  if (args.full_width) {
    cloned.with_background = true;
    cloned.counter_color = false;
  }

  cloned.items[0].description = args.description;
  cloned.items[0].category = args.category;
  cloned.items[0].prefix = args.prefix;
  cloned.items[0].value = args.value;
  cloned.items[0].suffix = args.suffix;

  const count = Math.min(Math.max(args.numberOfItems, 1), 8);

  cloned.items = cloned.items.slice(0, count);

  return cloned;
};

export default {
  title: 'Components/Animated Numbers',
  decorators: [withCode, withNotes],
  parameters: {
    chromatic: {
      modes: {
        xs: {
          viewport: {
            width: 360,
            height: 900,
          },
        },
        m: allModes.m,
        xl: allModes.xl,
        xxl: {
          viewport: {
            width: 1400,
            height: 900,
          },
        },
      },
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedAnimatedNumbers = `<div class="ecl-container">
  ${await AnimatedNumbers(prepareData(defaultData, args))}</div>`;
  return renderedAnimatedNumbers;
};
Default.args = getArgs(defaultData.items[0]);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
};

export const WithBackground = (_, { loaded: { component } }) => component;

WithBackground.render = async (args) => {
  const renderedAnimatedNumbersBackground = `<div class="ecl-container">
  ${await AnimatedNumbers(prepareData(defaultData, { ...args, with_background: true }))}</div>`;
  return renderedAnimatedNumbersBackground;
};
WithBackground.args = {
  ...getArgs(defaultData.items[0]),
  full_width: true,
};
WithBackground.argTypes = getArgTypes();
WithBackground.storyName = 'with background';
WithBackground.tags = ['!dev'];

export const WithBorder = (_, { loaded: { component } }) => component;

WithBorder.render = async (args) => {
  const renderedAnimatedNumbersBorder = `<div class="ecl-container">
  ${await AnimatedNumbers(prepareData(defaultData, { ...args, border: true }))}</div>`;
  return renderedAnimatedNumbersBorder;
};
WithBorder.args = getArgs(defaultData.items[0]);
WithBorder.argTypes = getArgTypes();
WithBorder.storyName = 'with border';
WithBorder.tags = ['!dev'];
