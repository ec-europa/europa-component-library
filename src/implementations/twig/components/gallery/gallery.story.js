import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from '@ecl/specs-component-gallery/demo/data';
import gallery from './gallery.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Gallery',
  decorators: [withNotes, withCode],
  parameters: {
    layout: 'fullscreen',
  },
};

const prepareData = (data, args) => Object.assign(correctPaths(data), args);

export const Default = (args) => gallery(prepareData(specs, args));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.args = {
  expandable: true,
};
Default.argTypes = {
  expandable: {
    control: { type: 'boolean' },
    description: 'expandable gallery',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'true' },
    },
  },
};
