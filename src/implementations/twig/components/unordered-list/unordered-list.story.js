import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataUnorderedListText from '@ecl/specs-component-unordered-list/demo/data--text';
import dataUnorderedListLink from '@ecl/specs-component-unordered-list/demo/data--link';
import dataUnorderedListDivider from '@ecl/specs-component-unordered-list/demo/data--with-divider';
import dataUnorderedListUnstyled from '@ecl/specs-component-unordered-list/demo/data--unstyled';

import unorderedList from './unordered-list.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  label: data.items[0].label,
  grid_content: false,
});

const getArgTypes = () => ({
  label: {
    name: 'list item (first item)',
    type: { name: 'string', required: true },
    description: 'The content of the first list item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  grid_content: {
    name: 'demo grid content',
    type: 'boolean',
    description:
      'Inject a test content block displayed on the grid, to see the alignment',
    mapping: {
      0: false,
      1: true,
    },
    table: {
      category: 'Test content',
    },
  },
});

const prepareData = (data, args) => {
  correctPaths(data);

  data.items[0].label = args.label;
  return data;
};

const renderStory = async (data, args) => {
  let story = await unorderedList(prepareData(data, args));

  if (args.grid_content) {
    story = `<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p>${story}<p class="ecl-u-type-paragraph">Content inside the grid</p></div>`;
  }

  return story;
};

export default {
  title: 'Components/List/Unordered list',
  decorators: [withNotes, withCode],
};

export const Text = (_, { loaded: { component } }) => component;

Text.render = async (args) => {
  const renderedText = await renderStory(dataUnorderedListText, args);
  return renderedText;
};
Text.storyName = 'text';
Text.args = getArgs(dataUnorderedListText);
Text.argTypes = getArgTypes(dataUnorderedListText);
Text.parameters = {
  notes: { markdown: notes, json: dataUnorderedListText },
};

export const Link = (_, { loaded: { component } }) => component;

Link.render = async (args) => {
  const renderedLink = await renderStory(dataUnorderedListLink, args);
  return renderedLink;
};
Link.storyName = 'links';
Link.args = getArgs(dataUnorderedListLink);
Link.argTypes = getArgTypes(dataUnorderedListLink);
Link.parameters = {
  notes: { markdown: notes, json: dataUnorderedListLink },
};

export const Divider = (_, { loaded: { component } }) => component;

Divider.render = async (args) => {
  const renderedDivider = await renderStory(dataUnorderedListDivider, args);
  return renderedDivider;
};
Divider.storyName = 'with divider';
Divider.args = getArgs(dataUnorderedListDivider);
Divider.argTypes = getArgTypes(dataUnorderedListDivider);
Divider.parameters = {
  notes: { markdown: notes, json: dataUnorderedListDivider },
};

export const Unstyled = (_, { loaded: { component } }) => component;

Unstyled.render = async (args) => {
  const renderedDivider = await renderStory(dataUnorderedListUnstyled, args);
  return renderedDivider;
};
Unstyled.storyName = 'unstyled';
Unstyled.args = getArgs(dataUnorderedListUnstyled);
Unstyled.argTypes = getArgTypes(dataUnorderedListUnstyled);
Unstyled.parameters = {
  notes: { markdown: notes, json: dataUnorderedListUnstyled },
};
