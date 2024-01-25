import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataOrderedList from '@ecl/specs-component-ordered-list/demo/data--text';
import dataLink from '@ecl/specs-component-ordered-list/demo/data--link';
import dataUnstyled from '@ecl/specs-component-ordered-list/demo/data--unstyled';
import dataDivider from '@ecl/specs-component-ordered-list/demo/data--with-divider';

import orderedList from './ordered-list.html.twig';
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
  data.items[0].label = args.label;
  return data;
};

const renderStory = async (data, args) => {
  let story = await orderedList(prepareData(data, args));

  if (args.grid_content) {
    story = `<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p>${story}<p class="ecl-u-type-paragraph">Content inside the grid</p></div>`;
  }

  return story;
};

export default {
  title: 'Components/List/Ordered list',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedList = await renderStory(dataOrderedList, args);
  return renderedList;
};
Default.storyName = 'text';
Default.args = getArgs(dataOrderedList);
Default.argTypes = getArgTypes(dataOrderedList);
Default.parameters = {
  notes: { markdown: notes, json: dataOrderedList },
};

export const Links = (_, { loaded: { component } }) => component;

Links.render = async (args) => {
  const renderedListLinks = await renderStory(dataLink, args);
  return renderedListLinks;
};
Links.storyName = 'links';
Links.args = getArgs(dataLink);
Links.argTypes = getArgTypes(dataLink);
Links.parameters = {
  notes: { markdown: notes, json: dataLink },
};

export const Divider = (_, { loaded: { component } }) => component;

Divider.render = async (args) => {
  const renderedListDivider = await renderStory(dataDivider, args);
  return renderedListDivider;
};
Divider.storyName = 'with divider';
Divider.args = getArgs(dataDivider);
Divider.argTypes = getArgTypes(dataDivider);
Divider.parameters = {
  notes: { markdown: notes, json: dataDivider },
};

export const Unstyled = (_, { loaded: { component } }) => component;

Unstyled.render = async (args) => {
  const renderedListUnstyled = await renderStory(dataUnstyled, args);
  return renderedListUnstyled;
};
Unstyled.storyName = 'unstyled';
Unstyled.args = getArgs(dataUnstyled);
Unstyled.argTypes = getArgTypes(dataUnstyled);
Unstyled.parameters = {
  notes: { markdown: notes, json: dataUnstyled },
};
