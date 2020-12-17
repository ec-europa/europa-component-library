import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getFormControls } from '@ecl/story-utils';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataDefault from '@ecl/specs-component-datepicker/demo/data';
import datepicker from './datepicker.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  return {
    ...getFormControls(data),
    autoinit: {
      name: 'autoinit',
      type: 'boolean',
      defaultValue: data.autoinit,
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
  data.icon_path = defaultSprite;
  data.label = args.label;
  data.autoinit = args.autoinit;
  data.helper_text = args.helper_text;
  data.invalid_text = args.invalid_text;
  data.required_text = args.required_text;
  data.optional_text = args.optional_text;
  data.invalid_text = args.invalid_text;
  data.required = args.required;
  data.invalid = args.invalid;
  data.disabled = args.disabled;

  return data;
};

export default {
  title: 'Components/Forms/Datepicker',
  parameters: {
    knobs: {
      disable: true,
    },
  },
};

export const Default = (args) => datepicker(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgs(dataDefault);
console.log(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode];
