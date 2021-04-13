import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-table/demo/data--default';
import dataMulti from '@ecl/specs-component-table/demo/data--multi';
import dataSortable from '@ecl/specs-component-table/demo/data--sort-table';
import table from './table.html.twig';
import notes from './README.md';

// Preserve original data
const dataZebra = { ...dataDefault, zebra: true };

export default {
  title: 'Components/Table',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
  },
};

export const Default = () => table(dataDefault);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Zebra = () => table(dataZebra);

Zebra.storyName = 'zebra';
Zebra.parameters = { notes: { markdown: notes, json: dataZebra } };

export const Multi = () => table(dataMulti);

Multi.storyName = 'multi header';
Multi.parameters = { notes: { markdown: notes, json: dataMulti } };

export const Sortable = () => table(dataSortable);

Sortable.storyName = 'sort table';
Sortable.parameters = { notes: { markdown: notes, json: dataSortable } };
