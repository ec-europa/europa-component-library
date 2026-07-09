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
    numberOfItems: 4,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    ...getColorModeControls(),
    numberOfItems: {
      name: 'number of items',
      control: { type: 'range', min: 1, max: 4, step: 1 },
      description: 'Number of items to display',
    },
    title: {
      type: 'string',
      description: 'Title of the story card component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const cloned = JSON.parse(JSON.stringify(data));

  cloned.color_mode = args.color_mode;
  cloned.title = args.title;
  cloned.description = args.description;

  cloned.items[0].title = args.card_title;
  cloned.items[0].description = args.card_description;
  cloned.items[0].card_link = args.card_link;
  cloned.items[0].teaser_label = args.teaser_label;
  cloned.items[0].source = args.source;
  cloned.items[0].role = args.role;

  const count = Math.min(Math.max(args.numberOfItems, 1), 4);

  cloned.items = cloned.items.slice(0, count);

  return cloned;
};

const renderStory = async (data, args) => {
  const renderedStoryCard = await storyCard(
    correctPaths(prepareData(data, args)),
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
Default.args = {
  ...getArgs(),
  title: dataDefault.title,
  description: dataDefault.description,
  card_title: dataDefault.items[0].title,
  card_description: dataDefault.items[0].description,
  card_link: dataDefault.items[0].card_link,
};
Default.argTypes = {
  ...getArgTypes(),
  card_title: {
    name: 'title',
    type: 'string',
    description: 'Title of the first item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
  card_description: {
    type: 'string',
    description: 'Description of the first item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
  card_link: {
    name: 'link',
    type: 'object',
    description: 'Link of the first item',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
};

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
Testimonial.args = {
  ...getArgs(),
  title: dataTestimonial.title,
  description: dataTestimonial.description,
  teaser_label: dataTestimonial.items[0].teaser_label,
  card_title: dataTestimonial.items[0].title,
  author: dataTestimonial.items[0].author,
  role: dataTestimonial.items[0].role,
  source: dataTestimonial.items[0].source,
  card_link: dataTestimonial.items[0].card_link,
};

Testimonial.argTypes = {
  ...getArgTypes(),
  teaser_label: {
    name: 'teaser label',
    type: 'string',
    description: 'Teaser label of the first item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
  card_title: {
    name: 'title',
    type: 'string',
    description: 'Title of the first item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
  author: {
    name: 'author name',
    type: 'string',
    description: 'Author of the first item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
  role: {
    name: 'author role',
    type: 'string',
    description: 'Author role of the first item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
  source: {
    name: 'source',
    type: 'string',
    description: 'Source of the quote in the first item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
  card_link: {
    name: 'link',
    type: 'object',
    description: 'Link of the first item',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '' },
      category: 'First item',
    },
  },
};
Testimonial.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(dataTestimonial, args),
  },
};
