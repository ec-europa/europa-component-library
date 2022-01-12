import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataOrderedList from '@ecl/specs-component-ordered-list/demo/data';
import orderedList from './ordered-list.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  label: data.items[0].label,
});

const getArgTypes = () => ({
  label: {
    name: 'list item (first item)',
    type: { name: 'string', required: true },
    description: 'The content of the first list item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  data.items[0].label = args.label;
  return data;
};

export default {
  title: 'Components/List/Ordered list',
  decorators: [withNotes, withCode],
};

export const Default = (args) =>
  orderedList(prepareData(dataOrderedList, args));

Default.storyName = 'default';
Default.args = getArgs(dataOrderedList);
Default.argTypes = getArgTypes(dataOrderedList);
Default.parameters = {
  notes: { markdown: notes, json: dataOrderedList },
};
