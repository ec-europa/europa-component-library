import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import dataDefault from './demo/data--default';
import dataMulti from './demo/data--multi';
import dataSortable from './demo/data--sort-table';
import table from './ecl-table.html.twig';
import notes from './README.md';

// Preserve original data
const dataZebra = { ...dataDefault, zebra: true };

const prepareTable = (data, attr) => {
  let defaultAttr = '';
  if (attr) {
    defaultAttr = 'data-test data-test-another';
  }

  data.zebra = boolean('zebra', data.zebra, tabLabels.cases);
  data.sortable = boolean('sortable', data.sortable, tabLabels.cases);
  data.headers.forEach((headers, i) => {
    headers.forEach((header, ind) => {
      header.label = text(
        `headers[${i}][${ind}].label`,
        header.label,
        tabLabels.required
      );
      header.colspan = text(
        `headers[${i}][${ind}].colspan`,
        header.colspan,
        tabLabels.optional
      );
    });
  });

  data.rows.forEach((row, i) => {
    row.extra_classes = text(
      `rows[${i}].extra_classes`,
      row.extra_classes,
      tabLabels.optional
    );
    row.extra_attributes = text(
      `rows[${i}].extra_attributes`,
      defaultAttr,
      tabLabels.optional
    );
    row.forEach((cell, ind) => {
      cell.label = text(
        `rows[${i}][${ind}].label`,
        cell.label,
        tabLabels.required
      );
      cell['data-ecl-table-header'] = text(
        `rows[${i}][${ind}]['data-ecl-table-header']`,
        cell['data-ecl-table-header'],
        tabLabels.required
      );
      cell.group = boolean(
        `rows[${i}][${ind}].group`,
        cell.group,
        tabLabels.optional
      );
      cell['data-ecl-table-header-group'] = text(
        `rows[${i}][${ind}]['data-ecl-table-header-group']`,
        cell['data-ecl-table-header-group'],
        tabLabels.optional
      );
    });
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Table',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => table(prepareTable(dataDefault));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const WithRowExtraAttributes = () =>
  table(prepareTable(dataDefault, true));

WithRowExtraAttributes.storyName = 'With row extra attributes';
WithRowExtraAttributes.parameters = {
  notes: { markdown: notes, json: dataDefault },
};

export const Zebra = () => table(prepareTable(dataZebra));

Zebra.storyName = 'Zebra';
Zebra.parameters = { notes: { markdown: notes, json: dataZebra } };

export const Multi = () => table(prepareTable(dataMulti));

Multi.storyName = 'Multi';
Multi.parameters = { notes: { markdown: notes, json: dataMulti } };

export const Sortable = () => table(prepareTable(dataSortable));

Sortable.storyName = 'sort table';
Sortable.parameters = { notes: { markdown: notes, json: dataSortable } };
