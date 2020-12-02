import { withKnobs, text, select } from '@storybook/addon-knobs';
import { getExtraKnobs, tabLabels } from '@ecl/story-utils';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-label/demo/data';
import label from './label.html.twig';
import notes from './README.md';

const options = {
  'low importance': 'low',
  'medium importance': 'medium',
  'high importance': 'high',
  highlight: 'highlight',
};

const prepareLabel = (data) => {
  data.label = text('label', data.label, tabLabels.required);
  data.variant = select(
    'variant',
    options,
    options['low importance'],
    tabLabels.optional
  );

  getExtraKnobs(data);

  return data;
};

export default { title: 'Components/Label' };

export const Default = () => label(prepareLabel(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withKnobs, withNotes, withCode];
