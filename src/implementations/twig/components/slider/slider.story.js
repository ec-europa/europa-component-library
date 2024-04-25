import withCode from '@ecl/storybook-addon-code';
import { withNotes } from '@ecl/storybook-addon-notes';

import slider from './slider.html';
import sliderFluid from './slider.fluid.html';
import notes from './README.md';
import notesFluid from './README-fluid.md';

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

export const Fluid = () => sliderFluid;

Fluid.storyName = 'fluid';
Fluid.parameters = { notes: { markdown: notesFluid } };
