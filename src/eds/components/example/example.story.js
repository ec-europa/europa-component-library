// Placeholder component — see README.md. Exists to exercise the Storybook
// addon wiring (code view, notes, preview width, dark mode) end to end.
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import example from './example.html.twig';
import data from './demo/data';
import notes from './README.md';

export default {
  title: 'EDS/Example (placeholder)',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;
Default.render = async () => example(data);
Default.storyName = 'Default';
Default.parameters = {
  notes: {
    markdown: notes,
    json: () => data,
  },
};
