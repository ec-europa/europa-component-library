import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-label/demo/data';
import label from './label.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  label: data.label,
  variant: 'low',
});

const getArgTypes = () => ({
  label: {
    name: 'label',
    type: { name: 'string', required: true },
    description: 'The content of the label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  variant: {
    name: 'variant',
    type: { name: 'select' },
    description: 'The variant / importance of the label',
    options: ['low', 'medium', 'high', 'highlight'],
    control: {
      labels: {
        low: 'low importance',
        medium: 'medium importance',
        high: 'high importance',
        highlight: 'highlight',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'low' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => Object.assign(data, args);

export default {
  title: 'Components/Label',
  decorators: [withNotes, withCode],
};

export const Default = (args) => label(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
