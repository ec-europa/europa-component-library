import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-label/demo/data';
import label from './label.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: data.label,
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
      defaultValue: 'low',
      description: 'The variant / importance of the label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'low' },
        category: 'Content',
      },
      control: {
        type: 'select',
        options: {
          'low importance': 'low',
          'medium importance': 'medium',
          'high importance': 'high',
          highlight: 'highlight',
        },
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: 'Components/Label',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => label(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
