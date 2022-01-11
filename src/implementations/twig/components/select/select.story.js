import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath, getFormControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataSingleEC from '@ecl/specs-component-select/demo/data-single--ec';
import dataMultipleEC from '@ecl/specs-component-select/demo/data-multiple--ec';
import dataSingleEU from '@ecl/specs-component-select/demo/data-single--eu';
import dataMultipleEU from '@ecl/specs-component-select/demo/data-multiple--eu';

import selectBox from './select.html.twig';
import notes from './README.md';

const system = getSystem();
const dataSingle = system === 'eu' ? dataSingleEU : dataSingleEC;
const dataMultiple = system === 'eu' ? dataMultipleEU : dataMultipleEC;

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
});

const getArgTypes = (data) => getFormControls(data, 'element');

const prepareData = (data, args) => {
  Object.assign(data, args);
  correctSvgPath(data);

  if (!args.show_label) {
    data.label = '';
  }
  if (!args.show_error) {
    data.invalid_text = '';
  }
  if (!args.show_helper) {
    data.helper_text = '';
  }

  delete data.show_label;
  delete data.show_helper;
  delete data.show_error;

  return data;
};

export default {
  title: 'Components/Forms/Select',
  decorators: [withCode, withNotes],
};

export const Single = (args) => selectBox(prepareData(dataSingle, args));

Single.storyName = 'default';
Single.args = getArgs(dataSingle);
Single.argTypes = getArgTypes(dataSingle);
Single.parameters = { notes: { markdown: notes, json: dataSingle } };

export const Multiple = (args) => selectBox(prepareData(dataMultiple, args));

Multiple.storyName = 'multiple';
Multiple.args = getArgs(dataMultiple);
Multiple.argTypes = getArgTypes(dataMultiple);
Multiple.parameters = { notes: { markdown: notes, json: dataMultiple } };
