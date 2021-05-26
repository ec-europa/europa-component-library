import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import specs from '@ecl/specs-component-date-block/demo/data';
import dateBlock from './date-block.html.twig';
import notes from './README.md';

// Preserve original data.
const dataDefault = { ...specs };
const dataOngoing = { ...specs, variant: 'ongoing' };
const dataCancelled = { ...specs, variant: 'cancelled' };
const dataPast = { ...specs, variant: 'past' };
const dataRescheduled = { ...specs, variant: 'rescheduled' };

const getArgTypes = (data) => {
  return {
    day: {
      name: 'day',
      type: { name: 'string', required: true },
      defaultValue: data.day,
      description: 'The date day',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
    month: {
      name: 'month',
      type: { name: 'string', required: true },
      defaultValue: data.month,
      description: 'The date month (abridged)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
    month_full: {
      name: 'month full',
      type: { name: 'string', required: true },
      defaultValue: data.month_full,
      description: 'The date month (full); displayed on hover',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
    year: {
      name: 'year',
      type: { name: 'string', required: true },
      defaultValue: data.year,
      description: 'The date year',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: 'Components/Date block',
  decorators: [withNotes, withCode],
};

export const Default = (args) => dateBlock(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: {
    markdown: notes,
    json: dataDefault,
  },
};

export const Ongoing = (args) => dateBlock(prepareData(dataOngoing, args));

Ongoing.storyName = 'ongoing';
Ongoing.argTypes = getArgTypes(dataOngoing);
Ongoing.parameters = { notes: { markdown: notes, json: dataOngoing } };

export const Cancelled = (args) => dateBlock(prepareData(dataCancelled, args));

Cancelled.storyName = 'cancelled';
Cancelled.argTypes = getArgTypes(dataCancelled);
Cancelled.parameters = { notes: { markdown: notes, json: dataCancelled } };

export const Past = (args) => dateBlock(prepareData(dataPast, args));

Past.storyName = 'past';
Past.argTypes = getArgTypes(dataPast);
Past.parameters = { notes: { markdown: notes, json: dataPast } };

export const Rescheduled = (args) =>
  dateBlock(prepareData(dataRescheduled, args));

Rescheduled.storyName = 'rescheduled';
Rescheduled.argTypes = getArgTypes(dataRescheduled);
Rescheduled.parameters = { notes: { markdown: notes, json: dataRescheduled } };
