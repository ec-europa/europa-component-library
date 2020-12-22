import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import specs from '@ecl/specs-component-gallery/demo/data';
import gallery from './gallery.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Gallery',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
    controls: { disable: true },
  },
};

export const Default = () => gallery(correctSvgPath(specs));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
