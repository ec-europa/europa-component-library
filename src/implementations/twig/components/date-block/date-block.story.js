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

const getArgs = (data) => ({
  day: data.day,
  month: data.month,
  month_full: data.month_full,
  year: data.year,
});

const getArgTypes = () => ({
  day: {
    name: 'day',
    type: { name: 'string', required: true },
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
});

const prepareData = (data, args) => Object.assign(data, args);

export default {
  title: 'Components/Date block',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedDateBlock = await dateBlock(prepareData(dataDefault, args));
  return renderedDateBlock;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: dataDefault,
  },
};

export const Ongoing = (_, { loaded: { component } }) => component;

Ongoing.render = async (args) => {
  const renderedDateBlockOngoing = await dateBlock(
    prepareData(dataOngoing, args)
  );
  return renderedDateBlockOngoing;
};
Ongoing.storyName = 'ongoing';
Ongoing.args = getArgs(dataOngoing);
Ongoing.argTypes = getArgTypes(dataOngoing);
Ongoing.parameters = { notes: { markdown: notes, json: dataOngoing } };

export const Cancelled = (_, { loaded: { component } }) => component;

Cancelled.render = async (args) => {
  const renderedDateBlockCancelled = await dateBlock(
    prepareData(dataCancelled, args)
  );
  return renderedDateBlockCancelled;
};
Cancelled.storyName = 'cancelled';
Cancelled.args = getArgs(dataCancelled);
Cancelled.argTypes = getArgTypes();
Cancelled.parameters = { notes: { markdown: notes, json: dataCancelled } };

export const Past = (_, { loaded: { component } }) => component;

Past.render = async (args) => {
  const renderedDateBlockPast = await dateBlock(prepareData(dataPast, args));
  return renderedDateBlockPast;
};
Past.storyName = 'past';
Past.args = getArgs(dataPast);
Past.argTypes = getArgTypes();
Past.parameters = { notes: { markdown: notes, json: dataPast } };

export const Rescheduled = (_, { loaded: { component } }) => component;

Rescheduled.render = async (args) => {
  const renderedDateBlockRescheduled = await dateBlock(
    prepareData(dataRescheduled, args)
  );
  return renderedDateBlockRescheduled;
};
Rescheduled.storyName = 'rescheduled';
Rescheduled.args = getArgs(dataRescheduled);
Rescheduled.argTypes = getArgTypes();
Rescheduled.parameters = { notes: { markdown: notes, json: dataRescheduled } };
