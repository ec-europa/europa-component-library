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
    controls: { disable: true },
    layout: 'fullscreen',
  },
};

export const Default = () => gallery(correctPaths(specs));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
