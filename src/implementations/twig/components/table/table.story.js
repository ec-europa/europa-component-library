import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-table/demo/data--default';
import dataMulti from '@ecl/specs-component-table/demo/data--multi';
import dataSortable from '@ecl/specs-component-table/demo/data--sort-table';
import table from './table.html.twig';
import notes from './README.md';

// Preserve original data
const dataZebra = { ...dataDefault, zebra: true };

const getArgs = () => ({
  header: true,
  simple: false,
});

const getArgTypes = () => ({
  header: {
    name: 'header',
    type: { name: 'boolean' },
    description: 'See table with or without header',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: true },
      category: 'Optional',
    },
  },

  simple: {
    name: 'simple display',
    type: { name: 'boolean' },
    description:
      'Use simple display on mobile (with horizontal scroll) instead of ECL enhanced one',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'Display',
    },
  },
});

const prepareData = (data, args) => {
  const dataClone = JSON.parse(JSON.stringify(data));

  if (!args.header) {
    delete dataClone.headers;
  }

  return Object.assign(dataClone, args);
};

export default {
  title: 'Components/Table',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedTable = await table(prepareData(dataDefault, args));
  return renderedTable;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Zebra = (_, { loaded: { component } }) => component;

Zebra.render = async (args) => {
  const renderedTableZebra = await table(prepareData(dataZebra, args));
  return renderedTableZebra;
};
Zebra.storyName = 'zebra';
Zebra.args = getArgs(dataZebra);
Zebra.argTypes = getArgTypes(dataZebra);
Zebra.parameters = { notes: { markdown: notes, json: dataZebra } };

export const Multi = (_, { loaded: { component } }) => component;

Multi.render = async (args) => {
  const renderedTableMulti = await table(prepareData(dataMulti, args));
  return renderedTableMulti;
};
Multi.storyName = 'multi header';
Multi.args = getArgs(dataMulti);
Multi.argTypes = getArgTypes(dataMulti);
Multi.parameters = { notes: { markdown: notes, json: dataMulti } };

export const Sortable = (_, { loaded: { component } }) => component;

Sortable.render = async (args) => {
  const renderedTableSortable = await table(prepareData(dataSortable, args));
  return renderedTableSortable;
};
Sortable.storyName = 'sort table';
Sortable.args = getArgs(dataSortable);
Sortable.argTypes = getArgTypes(dataSortable);
Sortable.parameters = { notes: { markdown: notes, json: dataSortable } };
