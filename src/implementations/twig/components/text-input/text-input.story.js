import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import { getExtraKnobs, getFormKnobs } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-text-input/demo/data--default';
import textInput from './text-input.html.twig';
import notes from './README.md';

const prepareTextInput = (data) => {
  getFormKnobs(data);
  getExtraKnobs(data);

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
