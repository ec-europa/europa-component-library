import { withKnobs } from '@storybook/addon-knobs';
import display from './display.html';
import pagebreak from './pagebreak.html';

export default {
  title: 'Utilities/Print',
  decorators: [withKnobs],
};

export const Display = () => display;
Display.storyName = 'display';

export const PageBreak = () => pagebreak;
PageBreak.storyName = 'page break';
