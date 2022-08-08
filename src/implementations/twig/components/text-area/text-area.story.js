import { withNotes } from '@ecl/storybook-addon-notes';
import { getFormControls, correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-text-area/demo/data';

import textArea from './text-area.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  show_label: true,
  show_helper: true,
  show_error: true,
  invalid: data.invalid || false,
  disabled: data.disabled || false,
  required: data.required,
  label: data.label || '',
  helper_text: data.helper_text,
  invalid_text: data.invalid_text,
  width: data.width,
  placeholder: data.placeholder,
  rows: 4,
});

const getArgTypes = (data) => ({
  ...getFormControls(data, 'element'),
  rows: {
    type: { name: 'number' },
    description: 'Number or rows',
    table: {
      type: { summary: 'integer' },
      min: 1,
      step: 1,
      defaultValue: { summary: '4' },
      category: 'Size',
    },
  },
});

const prepareData = (data, args) => {
  Object.assign(data, args);
  correctPaths(data);

  if (!args.show_label) {
    data.label = '';
  }
  if (!args.show_error) {
    data.invalid_text = '';
  }
  if (!args.show_helper) {
    data.helper_text = '';
  }

  return data;
};

export default {
  title: 'Components/Forms/Text area',
  decorators: [withCode, withNotes],
};

export const Default = (args) => textArea(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
