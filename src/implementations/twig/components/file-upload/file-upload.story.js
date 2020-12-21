import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getFormControls } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-file-upload/demo/data';
import dataMulti from '@ecl/specs-component-file-upload/demo/data--multiple';
import fileUpload from './file-upload.html.twig';
import notes from './README.md';

const dataDisabled = { ...dataDefault, disabled: true };
const dataInvalid = { ...dataDefault, invalid: true };
const dataOptional = { ...dataDefault, required: false };

const getArgTypes = (data) => {
  return {
    ...getFormControls(data, 'element'),
    button_choose_label: {
      name: 'button choose label',
      type: { name: 'string', required: true },
      defaultValue: data.button_choose_label,
      description: 'Label for the upload button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    button_replace_label: {
      name: 'button replace label',
      type: { name: 'string', required: true },
      defaultValue: data.button_replace_label,
      description: 'Label for the buttonto replace a selected file',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: 'Components/Forms/File Upload',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) => fileUpload(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Disabled = (args) => fileUpload(prepareData(dataDisabled, args));

Disabled.storyName = 'disabled';
Disabled.argTypes = getArgTypes(dataDisabled);
Disabled.parameters = { notes: { markdown: notes, json: dataDisabled } };

export const Invalid = (args) => fileUpload(prepareData(dataInvalid, args));

Invalid.storyName = 'invalid';
Invalid.argTypes = getArgTypes(dataInvalid);
Invalid.parameters = { notes: { markdown: notes, json: dataInvalid } };

export const Optional = (args) => fileUpload(prepareData(dataOptional, args));

Optional.storyName = 'optional';
Optional.argTypes = getArgTypes(dataOptional);
Optional.parameters = { notes: { markdown: notes, json: dataOptional } };

export const Multiple = (args) => fileUpload(prepareData(dataMulti, args));

Multiple.storyName = 'multiple';
Multiple.argTypes = getArgTypes(dataMulti);
Multiple.parameters = { notes: { markdown: notes, json: dataMulti } };
