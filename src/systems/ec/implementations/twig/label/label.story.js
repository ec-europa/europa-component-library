import he from 'he';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from '@ecl/ec-specs-label/demo/data';
import label from './ecl-label.html.twig';
import notes from './README.md';

const options = {
  'low importance': 'low',
  'medium importance': 'medium',
  'high importance': 'high',
};

const prepareLabel = (data) => {
  data.label = he.decode(text('label', data.label, tabLabels.required));
  data.variant = select(
    'variant',
    options,
    options['low importance'],
    tabLabels.optional
  );

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default { title: 'Components/Label' };

export const Default = () => label(prepareLabel(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withKnobs, withNotes, withCode];
