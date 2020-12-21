import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import { getFormControls } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import demoData from '@ecl/specs-component-text-area/demo/data--default';

import textArea from './text-area.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    ...getFormControls(data),
    width: {
      type: { name: 'select' },
      description: 'Width of the textarea',
      defaultValue: 'm',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'm' },
        category: 'Content',
      },
      control: {
        type: 'select',
        options: {
          small: 's',
          medium: 'm',
          large: 'l',
        },
      },
    },
    rows: {
      type: { name: 'number' },
      description: 'Number or rows',
      defaultValue: 4,
      table: {
        type: { summary: 'integer' },
        min: 1,
        step: 1,
        defaultValue: { summary: '4' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: 'Components/Forms/Text area',
  parameters: {
    knobs: {
      disable: true,
    },
  },
};

export const Default = (args) => textArea(prepareData(demoData, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(demoData);
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withKnobs, withNotes, withCode];
