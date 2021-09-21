import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataDisplayListDefault from '@ecl/specs-component-display-list/demo/data--default';

import displayList from './display-list.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    title: data.items[0].title,
    description: data.items[0].description,
    image: data.items[0].image.src,
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    column: {
      name: 'number of columns',
      type: { name: 'number' },
      description: 'The title of the display list item',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '' },
        category: 'Layout',
      },
    },
    title: {
      name: 'title (first item)',
      type: { name: 'string', required: true },
      description: 'The title of the display list item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    description: {
      name: 'description (first item)',
      type: { name: 'string' },
      description: 'The description of the display list item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
    image: {
      name: 'image (first item)',
      type: { name: 'string' },
      description: 'The url of the of the display list item image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.items[0].title = args.title;
  data.items[0].description = args.description;
  data.items[0].image.src = args.image;

  return data;
};

const renderStory = (data, args, variant) => {
  let story = displayList(prepareData(correctSvgPath(data), args));
  if (variant === 'horizontal') {
    story = `<div class="ecl-container">${story}</div>`;
  }

  return story;
};

export default {
  title: 'Components/List/Display list',
  decorators: [withNotes, withCode],
};

export const Horizontal = (args) =>
  renderStory(dataDisplayListDefault, args, 'horizontal');

Horizontal.storyName = 'horizontal';
Horizontal.args = getArgs(dataDisplayListDefault);
Horizontal.argTypes = getArgTypes(dataDisplayListDefault);
Horizontal.parameters = {
  notes: { markdown: notes, json: dataDisplayListDefault },
};

export const Vertical = (args) =>
  displayList(prepareData(dataDisplayListDefault, args));

Vertical.storyName = 'vertical';
Vertical.args = getArgs(dataDisplayListDefault);
Vertical.argTypes = getArgTypes(dataDisplayListDefault);
Vertical.parameters = {
  notes: { markdown: notes, json: dataDisplayListDefault },
};
