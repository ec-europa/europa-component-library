import { withNotes } from '@ecl/storybook-addon-notes';
import { getFormControls, correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-text-input/demo/data';

import textInput from './text-input.html.twig';
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
  optional_text: data.optional_text,
  required_text: data.required_text,
  width: data.width,
  placeholder: data.placeholder,
});

const getArgTypes = (data) => getFormControls(data, 'element');

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
  title: 'Components/Forms/Text field',
  decorators: [withCode, withNotes],
};

export const Default = (args) => textInput(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
