import { withNotes } from '@ecl/storybook-addon-notes';
import { getFormControls, correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import dataText from '@ecl/specs-component-text-input/demo/data';
import dataSingle from '@ecl/specs-component-select/demo/data-single';
import dataMultiple from '@ecl/specs-component-select/demo/data-multiple';
import dataDefault from '@ecl/specs-component-radio/demo/data--default';
import dataBinary from '@ecl/specs-component-radio/demo/data--binary';
import dataTextarea from '@ecl/specs-component-text-area/demo/data';
import dataDatepicker from '@ecl/specs-component-datepicker/demo/data';
import dataCheckbox from '@ecl/specs-component-checkbox/demo/data';

import formGroup from './form-group.html.twig';
import notes from './README.md';

const system = getSystem();
dataText.invalid_icon.size = system === 'ec' ? 's' : 'm';

const getArgs = (data) => {
  const args = {
    input: data.input,
    show_label: true,
    show_helper: true,
    show_error: true,
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required || false,
    label: data.label || '',
    helper_text: data.helper_text,
    invalid_text: data.invalid_text,
  };
  if (data.name) {
    args.name = data.name;
  }
  if (data.width) {
    args.width = data.width;
  }
  if (data.placeholder) {
    args.placeholder = data.placeholder;
  }

  return args;
};

const getArgTypes = (data) => ({
  ...getFormControls(data, 'group'),
  input: {
    type: 'select',
    options: ['text', 'textarea', 'radio', 'datepicker', 'select', 'search'],
    mapping: {
      text: 'text',
      tedxtarea: 'textarea',
      radio: 'radio',
      dapicker: 'datepicker',
      select: 'select',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'text' },
      category: 'Input type',
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
  title: 'Components/Forms',
  decorators: [withCode, withNotes],
};

export const Text = (args) => formGroup(prepareData(dataText, args));

Text.storyName = 'text input';
Text.args = getArgs({ ...dataText, input: 'text' });
Text.argTypes = getArgTypes({ ...dataText, input: 'text' });
Text.parameters = { notes: { markdown: notes, json: dataText } };

export const Select = (args) => formGroup(prepareData(dataSingle, args));

Select.storyName = 'select';
Select.args = getArgs({ ...dataSingle, input: 'select' });
Select.argTypes = getArgTypes({ ...dataSingle, input: 'select' });
Select.parameters = { notes: { markdown: notes, json: dataSingle } };

export const SelectMultiple = (args) =>
  formGroup(prepareData(dataMultiple, args));

SelectMultiple.storyName = 'select multiple';
SelectMultiple.args = getArgs({ ...dataMultiple, input: 'select' });
SelectMultiple.argTypes = getArgTypes({ ...dataMultiple, input: 'select' });
SelectMultiple.parameters = { notes: { markdown: notes, json: dataMultiple } };

export const Checkbox = (args) => formGroup(prepareData(dataCheckbox, args));

Checkbox.storyName = 'checkbox';
Checkbox.args = getArgs({ ...dataCheckbox, input: 'checkbox' });
Checkbox.argTypes = getArgTypes({ ...dataCheckbox, input: 'checkbox' });
Checkbox.parameters = { notes: { markdown: notes, json: dataCheckbox } };

export const Radio = (args) => formGroup(prepareData(dataBinary, args));

Radio.storyName = 'radio';
Radio.args = getArgs({ ...dataBinary, input: 'radio' });
Radio.argTypes = getArgTypes({ ...dataBinary, input: 'radio' });
Radio.parameters = { notes: { markdown: notes, json: dataBinary } };

export const RadioGroup = (args) => formGroup(prepareData(dataDefault, args));

RadioGroup.storyName = 'radio group';
RadioGroup.args = getArgs({ ...dataDefault, input: 'radio' });
RadioGroup.argTypes = getArgTypes({ ...dataDefault, input: 'radio' });
RadioGroup.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Textarea = (args) => formGroup(prepareData(dataDefault, args));

Textarea.storyName = 'textarea';
Textarea.args = getArgs({ ...dataTextarea, input: 'textarea' });
Textarea.argTypes = getArgTypes({ ...dataTextarea, input: 'textarea' });
Textarea.parameters = { notes: { markdown: notes, json: dataTextarea } };

export const Datepicker = (args) =>
  formGroup(prepareData(dataDatepicker, args));

Datepicker.storyName = 'datepicker';
Datepicker.args = getArgs({ ...dataDatepicker, input: 'datepicker' });
Datepicker.argTypes = getArgTypes({ ...dataDatepicker, input: 'datepicker' });
Datepicker.parameters = { notes: { markdown: notes, json: dataDatepicker } };
