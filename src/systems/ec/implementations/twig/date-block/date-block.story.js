import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import specs from './demo/data';
import dateBlock from './ecl-date-block.html.twig';
import notes from './README.md';

// Preserve original data.
const dataDefault = { ...specs };
const dataOngoing = { ...specs };
const dataCanceled = { ...specs };
const dataPast = { ...specs };

const prepareDateBlock = (data, variant) => {
  data.variant = select('variant', [variant], variant, tabLabels.required);
  data.day = text('day', data.day, tabLabels.required);
  data.year = text('year', data.year, tabLabels.required);
  data.month = text('month', data.month, tabLabels.required);
  data.month_full = text('month_full', data.month_full, tabLabels.required);
  data.date_time = text('date_time', data.date_time, tabLabels.optional);

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Date block',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () =>
  dateBlock(prepareDateBlock(dataDefault, 'default'));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Ongoing = () =>
  dateBlock(prepareDateBlock(dataOngoing, 'ongoing'));

Ongoing.storyName = 'ongoing';
Ongoing.parameters = { notes: { markdown: notes, json: dataOngoing } };

export const Canceled = () =>
  dateBlock(prepareDateBlock(dataCanceled, 'canceled'));

Canceled.storyName = 'canceled';
Canceled.parameters = { notes: { markdown: notes, json: dataCanceled } };

export const Past = () => dateBlock(prepareDateBlock(dataPast, 'past'));

Past.storyName = 'past';
Past.parameters = { notes: { markdown: notes, json: dataPast } };
