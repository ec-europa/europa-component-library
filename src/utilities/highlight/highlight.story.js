import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';
import { getColorModeControls } from '@ecl/story-utils';

const system = getSystem();

const getArgs = () => {
  const args = {};

  if (system === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => ({
  ...getColorModeControls(),
});

export default {
  title: 'Utilities/Highlight',
  decorators: [withCode],
  parameters: {
    EclNotes: { disable: true },
  },
};

export const Highlight = (args) => {
  let classes = 'ecl-u-highlight';
  if (system === 'ec') {
    classes += ` ecl-color-mode--${args.color_mode}`;
  }

  return `<p class="ecl-u-type-paragraph"><span class="${classes}">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit.</p>`;
};
Highlight.storyName = 'highlighted text';
Highlight.args = getArgs();
Highlight.argTypes = getArgTypes();
