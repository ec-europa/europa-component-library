import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataOrderedList from '@ecl/specs-component-ordered-list/demo/data';
import orderedList from './ordered-list.html.twig';
import notes from './README.md';

export default {
  title: 'Components/List/Ordered list',
  parameters: {
    knobs: { disable: true },
    controls: { disable: true },
  },
};

export const Default = () => orderedList(dataOrderedList);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataOrderedList } };
Default.decorators = [withNotes, withCode];
