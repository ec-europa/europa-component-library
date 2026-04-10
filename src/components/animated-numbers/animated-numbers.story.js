import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultData from './demo/data';
import AnimatedNumbers from './animated-numbers.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    currency: data.currency,
    amount: data.amount,
    description: data.description,
    category: data.category,
    value: data.value,
  };

  return args;
};

const getArgTypes = () => ({
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
  amount: {
    name: 'amount',
    type: { name: 'string', required: false },
    description: 'Amount',
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
    description: 'Value',
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
  return Object.assign(data.items[0], args);
};

export default {
  title: 'Components/Animated Numbers',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedAnimatedNumbers = await AnimatedNumbers(
    prepareData(defaultData, args),
  );
  return renderedAnimatedNumbers;
};
Default.args = getArgs(defaultData.items[0]);
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = {
  notes: { markdown: notes, json: defaultData },
};
