import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDemo from './demo/data';
import formWrapper from './form-wrapper.html.twig';
import notes from './README.md?raw';

const getArgs = (data) => ({
  title_label: data.title.label,
  description_label: data.description,
  row_1: 3,
  row_2: 2,
});

const getArgTypes = () => ({
  title_label: {
    name: 'title',
    type: { name: 'string' },
    table: { category: 'Content' },
  },
  description_label: {
    name: 'description',
    type: { name: 'string' },
    table: { category: 'Content' },
  },
  row_1: {
    name: 'items in row 1',
    control: { type: 'range', min: 0, max: 3, step: 1 },
    table: { category: 'Content' },
  },
  row_2: {
    name: 'items in row 2',
    control: { type: 'range', min: 0, max: 3, step: 1 },
    table: { category: 'Content' },
  },
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

  clone.title.label = args.title_label;

  return Object.assign(clone, args);
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
