import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getFormControls, correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-file-upload/demo/data';
import dataMulti from '@ecl/specs-component-file-upload/demo/data--multiple';
import fileUpload from './file-upload.html.twig';
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
  required_text: data.required_text,
  button_choose_label: data.button_choose_label,
  button_replace_label: data.button_replace_label,
});

const getArgTypes = (data) => ({
  ...getFormControls(data, 'element'),
  button_choose_label: {
    name: 'button choose label',
    type: { name: 'string', required: true },
    description: 'Label for the upload button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  button_replace_label: {
    name: 'button replace label',
    type: { name: 'string', required: true },
    description: 'Label for the buttonto replace a selected file',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  Object.assign(data, args);

  if (!args.show_label) {
    data.label = '';
  }
  if (!args.show_error) {
    data.invalid_text = '';
  }
  if (!args.show_helper) {
    data.helper_text = '';
  }

  correctPaths(data);

  return data;
};

export default {
  title: 'Components/Forms/File Upload',
  decorators: [withNotes, withCode],
};

export const Default = (args) => fileUpload(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Multiple = (args) => fileUpload(prepareData(dataMulti, args));

Multiple.storyName = 'multiple';
Multiple.args = getArgs(dataMulti);
Multiple.argTypes = getArgTypes(dataMulti);
Multiple.parameters = { notes: { markdown: notes, json: dataMulti } };
