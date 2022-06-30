import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getFormControls } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-rating-field/demo/data';

import ratingField from './rating-field.html.twig';
import notes from './README.md';

const itemClone = { ...dataDefault.items[0] };

const getArgs = (data) => {
  const args = {
    show_label: true,
    show_helper: true,
    show_error: true,
    label: data.label || '',
    helper_text: data.helper_text,
    invalid_text: data.invalid_text,
    invalid: data.invalid || false,
    required: data.required,
  };

  if (!data.binary) {
    args.show_item_helper = true;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = getFormControls(data, 'group');

  if (!data.binary) {
    argTypes.show_item_helper = {
      name: 'radio helper text',
      type: 'boolean',
      description: 'Show radio helper text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  Object.assign(data, args);
  correctPaths(data);

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
  if (!data.binary) {
    data.items.forEach((item) => {
      item.helper_text = txt;
    });
  }

  delete data.show_label;
  delete data.show_helper;
  delete data.show_error;
  delete data.show_item_helper;

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
