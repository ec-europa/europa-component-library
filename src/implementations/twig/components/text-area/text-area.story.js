import { withNotes } from '@ecl/storybook-addon-notes';
import { getFormControls } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import demoData from '@ecl/specs-component-text-area/demo/data--default';

import textArea from './text-area.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, 'element'),
    rows: {
      type: { name: 'number' },
      description: 'Number or rows',
      defaultValue: 4,
      table: {
        type: { summary: 'integer' },
        min: 1,
        step: 1,
        defaultValue: { summary: '4' },
        category: 'Size',
      },
    },
  };
};

const prepareData = (data, args) => Object.assign(data, args);

export default {
  title: 'Components/Forms/Text area',
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => textArea(prepareData(demoData, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(demoData);
Default.parameters = { notes: { markdown: notes, json: demoData } };
Default.decorators = [withNotes, withCode];
