import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDemo from './demo/data';
import formWrapper from './form-wrapper.html.twig';
import notes from './README.md?raw';

const getArgs = (data) => ({
  show_title: true,
  title_label: data.title.label,
  row_1: data.rows[0].items.length,
  row_2: data.rows[1].items.length,
});

const rowControl = (row) => ({
  name: `items in row ${row}`,
  control: { type: 'range', min: 0, max: 3, step: 1 },
  table: { category: 'Content' },
});

const getArgTypes = () => ({
  show_title: {
    name: 'title',
    type: { name: 'boolean' },
    table: { category: 'Optional' },
  },
  title_label: {
    name: 'title label',
    type: { name: 'string' },
    table: { category: 'Content' },
    if: { arg: 'show_title' },
  },
  row_1: rowControl(1),
  row_2: rowControl(2),
});

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  const pool = data.rows.flatMap((row) => row.items);
  let index = 0;

  clone.rows = [args.row_1, args.row_2].map((count) => ({
    items: Array.from({ length: count }, () => {
      const item = pool[index % pool.length];
      index += 1;
      return item;
    }),
  }));

  if (args.show_title) {
    clone.title.label = args.title_label;
  } else {
    delete clone.title;
  }

  return clone;
};

export default {
  title: 'Layout/Form Wrapper',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) =>
  `<div class="ecl-container">${await formWrapper(prepareData(dataDemo, args))}</div>`;
Default.storyName = 'default';
Default.args = getArgs(dataDemo);
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(dataDemo, args),
  },
};
