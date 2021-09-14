import { withNotes } from '@ecl/storybook-addon-notes';
import { getFormControls, correctSvgPath } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import specsEc from '@ecl/specs-component-text-input/demo/data--ec';
import specsEu from '@ecl/specs-component-text-input/demo/data--eu';

import textInput from './text-input.html.twig';
import notes from './README.md';

const system = getSystem();
const dataDefault = system === 'eu' ? specsEu : specsEc;
const dataInvalid = { ...dataDefault, invalid: true };
const dataDisabled = { ...dataDefault, disabled: true };
const dataRequired = { ...dataDefault, required: true };

const getArgs = (data) => {
  return {
    label: data.label || '',
    helper_text: data.helper_text,
    invalid_text: data.invalid_text,
    optional_text: data.optional_text,
    required_text: data.required_text,
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required,
    width: data.width,
    placeholder: data.placeholder,
  };
};

const getArgTypes = (data) => getFormControls(data, 'element');

const prepareData = (data, args) => Object.assign(correctSvgPath(data), args);

export default {
  title: 'Components/Forms/Text field',
  decorators: [withCode, withNotes],
};

export const Default = (args) => textInput(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Disabled = (args) => textInput(prepareData(dataDisabled, args));

Disabled.storyName = 'disabled';
Disabled.args = getArgs(dataDisabled);
Disabled.argTypes = getArgTypes(dataDisabled);
Disabled.parameters = { notes: { markdown: notes, json: dataDisabled } };

export const Invalid = (args) => textInput(prepareData(dataInvalid, args));

Invalid.storyName = 'invalid';
Invalid.args = getArgs(dataInvalid);
Invalid.argTypes = getArgTypes(dataInvalid);
Invalid.parameters = { notes: { markdown: notes, json: dataInvalid } };

export const Required = (args) => textInput(prepareData(dataRequired, args));

Required.storyName = 'required';
Required.args = getArgs(dataRequired);
Required.argTypes = getArgTypes(dataRequired);
Required.parameters = { notes: { markdown: notes, json: dataRequired } };
