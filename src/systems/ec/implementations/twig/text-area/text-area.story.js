import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getFormKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import specData from './demo/data--default';
import textArea from './ecl-text-area.html.twig';
import notes from './README.md';

const prepareTextArea = (data) => {
  getFormKnobs(data);
  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/Text area',
};

export const Default = () => textArea(prepareTextArea(specData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specData } };
Default.decorators = [withKnobs, withNotes, withCode];
