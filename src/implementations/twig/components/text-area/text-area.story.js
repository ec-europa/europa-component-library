import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import { getExtraKnobs, getFormKnobs } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import specData from '@ecl/specs-component-text-area/demo/data--default';
import textArea from './text-area.html.twig';
import notes from './README.md';

const prepareTextArea = (data) => {
  getFormKnobs(data);
  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Forms/Text area',
};

export const Default = () => textArea(prepareTextArea(specData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specData } };
Default.decorators = [withKnobs, withNotes, withCode];
