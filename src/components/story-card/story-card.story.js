import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataDefault from './demo/data';
import dataTestimonial from './demo/data--testimonial';
import storyCard from './story-card.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    variant: 'story',
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    ...getColorModeControls(),
    variant: {
      control: { type: 'select' },
      options: ['story', 'testimonial'],
      table: {
        type: 'string',
        category: 'Content',
      },
    },
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
Default.storyName = 'story';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(dataDefault, args),
  },
};

export const Testimonial = (_, { loaded: { component } }) => component;

Testimonial.render = async (args) => {
  const renderedStoryCardTestimonial = await renderStory(dataTestimonial, args);
  return renderedStoryCardTestimonial;
};
Testimonial.storyName = 'testimonial';
Testimonial.args = getArgs();
Testimonial.argTypes = getArgTypes();
Testimonial.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(dataTestimonial, args),
  },
};
