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

export const Default = (args) =>
  `<div class="ecl-container">${gallery(prepareData(specs, args))}</div>`;

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
Default.args = {
  expandable: true,
  full_width: false,
  visible_items: 8,
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
  full_width: {
    name: 'full width',
    control: { type: 'boolean' },
    description: 'full width gallery',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  visible_items: {
    name: 'limit the number of visible items',
    control: {
      type: 'range',
      step: 1,
      min: 0,
      max: 11,
    },
    description:
      'Only relevant when the gallery is set to be expandable (0 means no limit)',
    table: {
      type: { summary: 'integer' },
      defaultValue: { summary: '8' },
    },
  },
};
