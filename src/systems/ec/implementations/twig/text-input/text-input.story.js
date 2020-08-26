import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getFormKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data--default';
import textInput from './ecl-text-input.html.twig';
import notes from './README.md';

const prepareTextInput = (data) => {
  getFormKnobs(data);
  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/Text field',
};

export const Default = () => {
  const data = prepareTextInput(dataDefault);

  return textInput(data);
};

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withKnobs, withNotes, withCode];
