import withCode from '@ecl/storybook-addon-code';
import display from './display.html';
import pagebreak from './pagebreak.html';

export default {
  title: 'Utilities/Print',
  decorators: [withCode],
  parameters: {
    knobs: { disable: true },
    controls: { disable: true },
    a11y: { disable: true },
  },
};

export const Display = () => display;
Display.storyName = 'display';

export const PageBreak = () => pagebreak;
PageBreak.storyName = 'page break';
