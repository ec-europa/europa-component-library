import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getFormControls, correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import specsEc from '@ecl/specs-component-datepicker/demo/data--ec';
import specsEu from '@ecl/specs-component-datepicker/demo/data--eu';
import datepicker from './datepicker.html.twig';
import notes from './README.md';

const system = getSystem();
const dataDefault = system === 'eu' ? specsEu : specsEc;

const getArgs = (data) => {
  return {
    show_label: true,
    show_helper: true,
    show_error: true,
    label: data.label || '',
    helper_text: data.helper_text,
    invalid_text: data.invalid_text,
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required,
    placeholder: data.placeholder,
  };
};

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, 'element'),
  };
};

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

  delete data.show_label;
  delete data.show_helper;
  delete data.show_error;

  correctSvgPath(data);

  return data;
};

export default {
  title: 'Components/Forms/Datepicker',
};

export const Default = (args) => datepicker(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode];
