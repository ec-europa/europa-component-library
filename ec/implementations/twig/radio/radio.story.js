import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getFormGroupKnobs,
  tabLabels,
  getFormItemKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data--default';
import dataBinary from './demo/data--binary';
import radioGroup from './ecl-radio-group.html.twig';
import notes from './README.md';

const prepareRadio = (data, binary) => {
  if (binary) {
    data.binary = boolean('binary', true, tabLabels.required);
  }
  // Form group knobs.
  getFormGroupKnobs(data);
  // Form item knobs.
  getFormItemKnobs(data, true);
  // Extra classes and attributes.
  getExtraKnobs(data, true);
  // Compliance knob.
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/Radio',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => radioGroup(prepareRadio(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Binary = () => radioGroup(prepareRadio(dataBinary, true));

Binary.storyName = 'binary';
Binary.parameters = { notes: { markdown: notes, json: dataBinary } };
