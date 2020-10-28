import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels, getComplianceKnob } from '@ecl/story-utils';

import defaultData from '@ecl/specs-component-blockquote/demo/data';
import blockquote from './blockquote.html.twig';
import notes from './README.md';

const prepareQuote = (data) => {
  data.citation = text('citation', data.citation, tabLabels.required);

  data.author = text('author', data.author, tabLabels.required);

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Blockquote',
};

export const Default = () => blockquote(prepareQuote(defaultData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: defaultData } };
Default.decorators = [withKnobs, withCode, withNotes];
