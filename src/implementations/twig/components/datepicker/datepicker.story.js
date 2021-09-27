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
    label: data.label || '',
    helper_text: data.helper_text,
    invalid_text: data.invalid_text,
    optional_text: data.optional_text,
    required_text: data.required_text,
    invalid: data.invalid || false,
    disabled: data.disabled || false,
    required: data.required,
    autoinit: data.autoinit,
    placeholder: data.placeholder,
  };
};

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, 'element'),
    autoinit: {
      name: 'autoinit',
      type: 'boolean',
      description: 'Initializes the javascript behaviours.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'States',
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(correctSvgPath(data), args);
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
