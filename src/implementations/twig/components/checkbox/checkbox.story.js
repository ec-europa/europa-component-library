import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getFormControls } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-checkbox/demo/data';

import checkboxGroup from './checkbox-group.html.twig';
import notes from './README.md';

const itemClone = { ...dataDefault.items[0] };

const getArgs = (data) => ({
  show_label: true,
  show_helper: true,
  show_error: true,
  show_item_helper: true,
  invalid: data.invalid || false,
  disabled: data.disabled || false,
  required: data.required || true,
  label: data.label || '',
  helper_text: data.helper_text,
  invalid_text: data.invalid_text,
});

const getArgTypes = (data) => ({
  ...getFormControls(data, 'group'),
  show_item_helper: {
    name: 'checkbox helper text',
    type: 'boolean',
    description: 'Show checkbox helper text',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
      category: 'Optional',
    },
  },
});

const prepareData = (data, args) => {
  Object.assign(data, args);

  const txt = args.show_item_helper ? itemClone.helper_text : '';

  if (!args.show_label) {
    data.label = '';
  }
  if (!args.show_error) {
    data.invalid_text = '';
  }
  if (!args.show_helper) {
    data.helper_text = '';
  }

  data.items.forEach((item) => {
    item.helper_text = txt;
  });

  delete data.show_label;
  delete data.show_helper;
  delete data.show_error;
  delete data.show_item_helper;

  correctPaths(data);

  return data;
};

export default {
  title: 'Components/Forms/Checkbox',
  decorators: [withCode, withNotes],
};

export const Default = (args) => checkboxGroup(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.args = getArgs(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
