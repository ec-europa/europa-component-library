import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataDefault from '@ecl/specs-component-checkbox/demo/data--default';

import checkboxGroup from './checkbox-group.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {};
  argTypes.label = {
    name: 'legend',
    type: { name: 'string', required: true },
    defaultValue: data.label,
    description: 'The heading of the checkbox group',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.helper_text = {
    name: 'group helper text',
    type: { name: 'string' },
    defaultValue: data.helper_text,
    description: 'Helper information to describe the checkbox button group',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.invalid_text = {
    name: 'error message',
    type: { name: 'string' },
    defaultValue: data.invalid_text,
    description:
      'A message informing the user if there is a problem with their entry',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.optional_text = {
    name: 'optional text',
    type: { name: 'string' },
    defaultValue: data.optional_text,
    description: 'Indicator text stating if input fields are optional',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.required_text = {
    name: 'required text',
    type: { name: 'string' },
    defaultValue: data.required_text,
    description: 'Indicator text stating if input fields are mandatory',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '*' },
      category: 'Content',
    },
    control: {
      type: 'text',
    },
  };
  argTypes.invalid = {
    name: 'invalid',
    type: { name: 'boolean' },
    defaultValue: data.invalid,
    description: 'Make the checkbox group invalid',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'State',
    },
    control: {
      type: 'boolean',
    },
  };
  argTypes.required = {
    name: 'required',
    type: { name: 'boolean' },
    defaultValue: data.required,
    description: 'Make the checkbox group required',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'State',
    },
    control: {
      type: 'boolean',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.icon_path = defaultSprite;
  data.label = args.label;
  data.helper_text = args.helper_text;
  data.invalid_text = args.invalid_text;
  data.required_text = args.required_text;
  data.optional_text = args.optional_text;
  data.invalid_text = args.invalid_text;
  data.required = args.required;
  data.invalid = args.invalid;

  return data;
};

export default {
  title: 'Components/Forms/Checkbox',
};

export const Default = (args) => checkboxGroup(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode];
