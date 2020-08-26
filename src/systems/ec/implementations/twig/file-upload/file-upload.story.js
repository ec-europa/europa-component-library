import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getFormKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

// Import data for tests
import dataDefault from './demo/data';
import dataMulti from './demo/data--multiple';

import fileUpload from './ecl-file-upload.html.twig';
import notes from './README.md';

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
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/File Upload',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => fileUpload(prepareFileUpload(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Multiple = () => fileUpload(prepareFileUpload(dataMulti));

Multiple.storyName = 'multiple';
Multiple.parameters = { notes: { markdown: notes, json: dataMulti } };
