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
  enhanced: false,
});

const getArgTypes = () => ({
  enhanced: {
    name: 'enhanced display',
    type: { name: 'boolean' },
    description:
      'Enhanced display for mobile. This may depends on your needs and the data passed.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'Display',
    },
  },
});

const prepareData = (data, args) => {
  data.enhanced = args.enhanced;
  return data;
};

export default {
  title: 'Components/Table',
  decorators: [withNotes, withCode],
};

export const Default = (args) => table(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Zebra = (args) => table(prepareData(dataZebra, args));

Zebra.storyName = 'zebra';
Zebra.args = getArgs(dataZebra);
Zebra.argTypes = getArgTypes(dataZebra);
Zebra.parameters = { notes: { markdown: notes, json: dataZebra } };

export const Multi = (args) => table(prepareData(dataMulti, args));

Multi.storyName = 'multi header';
Multi.args = getArgs(dataMulti);
Multi.argTypes = getArgTypes(dataMulti);
Multi.parameters = { notes: { markdown: notes, json: dataMulti } };

export const Sortable = (args) => table(prepareData(dataSortable, args));

Sortable.storyName = 'sort table';
Sortable.args = getArgs(dataSortable);
Sortable.argTypes = getArgTypes(dataSortable);
Sortable.parameters = { notes: { markdown: notes, json: dataSortable } };
