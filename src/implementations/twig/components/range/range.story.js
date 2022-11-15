import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getFormControls } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-range/demo/data';

import range from './range.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  show_label: true,
  show_helper: true,
  show_error: true,
  show_value: true,
  invalid: data.invalid || false,
  disabled: data.disabled || false,
  required: data.required,
  min: data.min || 0,
  max: data.max || 100,
  step: data.step || 1,
  label: data.label || '',
  helper_text: data.helper_text,
  invalid_text: data.invalid_text,
  value_text: data.value_text,
  width: data.width,
});

const getArgTypes = (data) => {
  const argTypes = getFormControls(data, 'element');

  argTypes.show_value = {
    name: 'range value',
    type: 'boolean',
    description: 'Show range value',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
      category: 'Optional',
    },
  };

  argTypes.value_text = {
    name: 'value text',
    type: 'string',
    description: 'Text used to display range value',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.min = {
    name: 'min',
    type: 'number',
    description: 'Minimum value',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '' },
      category: 'Values',
    },
  };

  argTypes.max = {
    name: 'max',
    type: 'number',
    description: 'Maximum value',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '' },
      category: 'Values',
    },
  };

  argTypes.step = {
    name: 'step',
    type: 'number',
    description: 'Step increment',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '' },
      category: 'Values',
    },
  };

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
  if (!args.show_value) {
    data.value_text = '';
  }

  return data;
};

export default {
  title: 'Components/Forms/Range',
  decorators: [withCode, withNotes],
};

export const Default = (args) => range(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
