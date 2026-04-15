import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from './demo/data';
import AnimatedNumbers from './animated-numbers.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    with_background: false,
    border: false,
    counter_color: true,
    suffix: data.suffix,
    prefix: data.prefix,
    description: data.description,
    category: data.category,
    value: data.value,
  };

  return args;
};

const getArgTypes = () => ({
  with_background: {
    name: 'with a dark background',
    type: { name: 'boolean', required: false },
    description: 'On a dark background',
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
      category: 'Content',
    },
  },
  category: {
    name: 'category',
    type: { name: 'string', required: false },
    description: 'Category',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
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
      category: 'Content',
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
      category: 'Content',
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
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  },
});

const prepareData = (data, args) => {
  data.border = args.border;
  data.counter_color = args.counter_color;
  data.with_background = args.with_background;

  data.items[0].description = args.description;
  data.items[0].category = args.category;
  data.items[0].prefix = args.prefix;
  data.items[0].value = args.value;
  data.items[0].suffix = args.suffix;

  return data;
};

export default {
  title: 'Components/Animated Numbers',
  decorators: [withCode, withNotes],
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
