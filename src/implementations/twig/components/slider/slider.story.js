import withCode from '@ecl/storybook-addon-code';
import { withNotes } from '@ecl/storybook-addon-notes';

import slider from './slider.html';
import sliderTags from './slider.tags.html';
import notes from './README.md';

export default {
  title: 'Components/Slider',
  parameters: {
    controls: {
      disable: true,
    },
  },
  decorators: [withNotes, withCode],
};

export const Default = () => slider;

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };

export const Tags = () => sliderTags;

Tags.storyName = 'tags';
Tags.parameters = { notes: { markdown: notes } };
