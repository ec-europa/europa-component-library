import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls } from '@ecl/story-utils';
import specs from './demo/data';
import sloganTicker from './slogan-ticker.html.twig';
import notes from './README.md';
import isChromatic from 'chromatic/isChromatic';

const getArgs = () => {
  return {
    color_mode: 'default',
  };
};

const getArgTypes = () => {
  return {
    ...getColorModeControls(),
  };
};

const prepareData = (data, args) => {
  const current = { ...data };
  current.color_mode = args.color_mode;

  if (isChromatic() || process.env.STORYBOOK_CHROMATIC) {
    current.autoplay = false;
  }

  return current;
};

export default {
  title: 'Components/Slogan ticker',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { sort: 'alpha' },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedSloganTicker = `<ecl-container>${await sloganTicker(prepareData(specs, args))}</ecl-container>`;
  return renderedSloganTicker;
};

Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
