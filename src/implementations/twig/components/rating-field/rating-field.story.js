import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getFormControls } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-rating-field/demo/data';

import ratingField from './rating-field.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    show_label: true,
    show_helper: true,
    show_error: true,
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required,
    label: data.label || '',
    helper_text: data.helper_text,
    invalid_text: data.invalid_text,
  };

  return args;
};

const getArgTypes = (data) => {
  const argTypes = getFormControls(data, 'element');

  return argTypes;
};

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
  title: 'Components/Forms/Rating field',
  decorators: [withCode, withNotes],
};

export const Default = (args) => ratingField(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
