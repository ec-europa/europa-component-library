import { withNotes } from '@ecl/storybook-addon-notes';
import { getFormControls } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-text-area/demo/data';

import textArea from './text-area.html.twig';
import notes from './README.md';

const dataInvalid = { ...dataDefault, invalid: true };
const dataDisabled = { ...dataDefault, disabled: true };
const dataOptional = { ...dataDefault, required: false };

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, 'element'),
    rows: {
      type: { name: 'number' },
      description: 'Number or rows',
      defaultValue: 4,
      table: {
        type: { summary: 'integer' },
        min: 1,
        step: 1,
        defaultValue: { summary: '4' },
        category: 'Size',
      },
    },
  };
};

const prepareData = (data, args) => Object.assign(data, args);

export default {
  title: 'Components/Forms/Text area',
  decorators: [withCode, withNotes],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => textArea(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Disabled = (args) => textArea(prepareData(dataDisabled, args));

Disabled.storyName = 'disabled';
Disabled.argTypes = getArgTypes(dataDisabled);
Disabled.parameters = { notes: { markdown: notes, json: dataDisabled } };

export const Invalid = (args) => textArea(prepareData(dataInvalid, args));

Invalid.storyName = 'invalid';
Invalid.argTypes = getArgTypes(dataInvalid);
Invalid.parameters = { notes: { markdown: notes, json: dataInvalid } };

export const Optional = (args) => textArea(prepareData(dataOptional, args));

Optional.storyName = 'optional';
Optional.argTypes = getArgTypes(dataOptional);
Optional.parameters = { notes: { markdown: notes, json: dataOptional } };
