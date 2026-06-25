import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataDefault from './demo/data';
import storyCard from './story-card.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {};

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    ...getColorModeControls(),
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.color_mode = args.color_mode;

  return data;
};

const renderStory = async (data, args) => {
  const renderedStoryCard = await storyCard(
    prepareData(correctPaths(data), args),
  );
  return renderedStoryCard;
};

export default {
  title: 'Components/Story Card',
  decorators: [
    withNotes,
    withCode,
    (storyFn) => {
      return `<div class="ecl-container">${storyFn()}</div>`;
    },
  ],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedStoryCard = await renderStory(dataDefault, args);
  return renderedStoryCard;
};
Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
