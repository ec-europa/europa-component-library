import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import { getExtraKnobs, tabLabels, getFormKnobs } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-file-upload/demo/data';
import dataMulti from '@ecl/specs-component-file-upload/demo/data--multiple';
import fileUpload from './file-upload.html.twig';
import notes from './README.md';

const dataDisabled = { ...dataDefault, disabled: true };
const dataInvalid = { ...dataDefault, invalid: true };
const dataOptional = { ...dataDefault, required: false };

const prepareFileUpload = (data) => {
  getFormKnobs(data);

  if (data.multiple) {
    data.multiple = boolean('multiple', data.multiple, tabLabels.required);
  }
  data.id = select('id', [data.id], data.id, tabLabels.required);
  data.label = text('label', data.label, tabLabels.required);
  data.name = text('name', data.name, tabLabels.optional);

  data.button_choose_label = text(
    'button_choose_label',
    data.button_choose_label,
    tabLabels.required
  );
  data.button_replace_label = text(
    'button_replace_label',
    data.button_replace_label,
    tabLabels.required
  );

  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Forms/File Upload',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => fileUpload(prepareFileUpload(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Disabled = () => fileUpload(prepareFileUpload(dataDisabled));

Disabled.storyName = 'disabled';
Disabled.parameters = { notes: { markdown: notes, json: dataDisabled } };

export const Invalid = () => fileUpload(prepareFileUpload(dataInvalid));

Invalid.storyName = 'invalid';
Invalid.parameters = { notes: { markdown: notes, json: dataInvalid } };

export const Optional = () => fileUpload(prepareFileUpload(dataOptional));

Optional.storyName = 'optional';
Optional.parameters = { notes: { markdown: notes, json: dataOptional } };

export const Multiple = () => fileUpload(prepareFileUpload(dataMulti));

Multiple.storyName = 'multiple';
Multiple.parameters = { notes: { markdown: notes, json: dataMulti } };
