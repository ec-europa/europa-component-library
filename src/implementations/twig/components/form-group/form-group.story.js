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
import dataRange from '@ecl/specs-component-range/demo/data';
import dataRatingField from '@ecl/specs-component-rating-field/demo/data';
import dataFile from '@ecl/specs-component-file-upload/demo/data';

import formGroup from './form-group.html.twig';
import notes from './README.md';

const system = getSystem();

dataText.invalid_icon.size = system === 'ec' ? 's' : 'm';

const getArgs = (data) => {
  const args = {
    show_label: true,
    show_helper: true,
    show_error: true,
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required || false,
    label: data.label || '',
    helper_text: data.helper_text,
    invalid_text: data.invalid_text,
    input: {
      input_type: data.input.input_type,
    },
  };

  Object.assign(args.input, data.input);
  return args;
};

const getArgTypes = (data, type) => ({
  ...getFormControls(data, type),
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
  if (args.width) {
    data.input.width = args.width;
  }

  return data;
};

export default {
  title: 'Components/Forms',
  decorators: [withCode, withNotes],
};

export const Text = (_, { loaded: { component } }) => component;

Text.render = async (args) => {
  const renderedText = await formGroup(prepareData(dataText, args));
  return renderedText;
};
Text.storyName = 'Text input';
Text.args = getArgs(dataText);
Text.argTypes = getArgTypes(dataText, 'element');
Text.parameters = { notes: { markdown: notes, json: dataText } };

export const Textarea = (_, { loaded: { component } }) => component;

Textarea.render = async (args) => {
  const renderedTextArea = await formGroup(prepareData(dataTextarea, args));
  return renderedTextArea;
};
Textarea.storyName = 'Textarea';
Textarea.args = getArgs(dataTextarea);
Textarea.argTypes = getArgTypes(dataTextarea, 'element');
Textarea.parameters = { notes: { markdown: notes, json: dataTextarea } };

export const Checkbox = (_, { loaded: { component } }) => component;

Checkbox.render = async (args) => {
  const renderedCheckbox = await formGroup(prepareData(dataCheckbox, args));
  return renderedCheckbox;
};
Checkbox.storyName = 'Checkbox';
Checkbox.args = getArgs(dataCheckbox);
Checkbox.argTypes = getArgTypes(dataCheckbox, 'group');
Checkbox.parameters = { notes: { markdown: notes, json: dataCheckbox } };

export const Datepicker = (_, { loaded: { component } }) => component;

Datepicker.render = async (args) => {
  const renderedDatepicker = await formGroup(prepareData(dataDatepicker, args));
  return renderedDatepicker;
};
Datepicker.storyName = 'Datepicker';
Datepicker.args = getArgs(dataDatepicker);
Datepicker.argTypes = getArgTypes(dataDatepicker, 'element');
Datepicker.parameters = { notes: { markdown: notes, json: dataDatepicker } };

export const FileUpload = (_, { loaded: { component } }) => component;

FileUpload.render = async (args) => {
  const renderedFileUpload = await formGroup(prepareData(dataFile, args));
  return renderedFileUpload;
};
FileUpload.storyName = 'File upload';
FileUpload.args = getArgs(dataFile);
FileUpload.argTypes = getArgTypes(dataFile, 'element');
FileUpload.parameters = { notes: { markdown: notes, json: dataFile } };

export const Radio = (_, { loaded: { component } }) => component;

Radio.render = async (args) => {
  const renderedRadio = await formGroup(prepareData(dataBinary, args));
  return renderedRadio;
};
Radio.storyName = 'Radio';
Radio.args = getArgs(dataBinary);
Radio.argTypes = getArgTypes(dataBinary, 'element');
Radio.parameters = { notes: { markdown: notes, json: dataBinary } };

export const RadioGroup = (_, { loaded: { component } }) => component;

RadioGroup.render = async (args) => {
  const renderedRadioGroup = await formGroup(prepareData(dataDefault, args));
  return renderedRadioGroup;
};
RadioGroup.storyName = 'Radio group';
RadioGroup.args = getArgs(dataDefault);
RadioGroup.argTypes = getArgTypes(dataDefault, 'group');
RadioGroup.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Range = (_, { loaded: { component } }) => component;

Range.render = async (args) => {
  const renderedRange = await formGroup(prepareData(dataRange, args));
  return renderedRange;
};
Range.storyName = 'Range';
Range.args = { ...getArgs(dataRange), width: 'm' };
Range.argTypes = getArgTypes(dataRange, 'element');
Range.parameters = { notes: { markdown: notes, json: dataRange } };

export const RatingField = (_, { loaded: { component } }) => component;

RatingField.render = async (args) => {
  const renderedRatingField = await formGroup(
    prepareData(dataRatingField, args),
  );
  return renderedRatingField;
};
RatingField.storyName = 'Rating field';
RatingField.args = getArgs(dataRatingField);
RatingField.argTypes = getArgTypes(dataRatingField, 'element');
RatingField.parameters = { notes: { markdown: notes, json: dataRatingField } };

export const Select = (_, { loaded: { component } }) => component;

Select.render = async (args) => {
  const renderedSelect = await formGroup(prepareData(dataSingle, args));
  return renderedSelect;
};
Select.storyName = 'Select';
Select.args = getArgs(dataSingle);
Select.argTypes = getArgTypes(dataSingle, 'element');
Select.parameters = { notes: { markdown: notes, json: dataSingle } };

export const SelectMultiple = (_, { loaded: { component } }) => component;

SelectMultiple.render = async (args) => {
  const renderedSelectMultiple = await formGroup(
    prepareData(dataMultiple, args),
  );
  return renderedSelectMultiple;
};
SelectMultiple.storyName = 'Select multiple';
SelectMultiple.args = getArgs(dataMultiple);
SelectMultiple.argTypes = getArgTypes(dataMultiple, 'element');
SelectMultiple.parameters = { notes: { markdown: notes, json: dataMultiple } };
