import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataUnorderedListText from '@ecl/specs-component-unordered-list/demo/data--text';
import dataUnorderedListLink from '@ecl/specs-component-unordered-list/demo/data--link';
import dataUnorderedListDivider from '@ecl/specs-component-unordered-list/demo/data--with-divider';
import dataUnorderedListNoBullet from '@ecl/specs-component-unordered-list/demo/data--no-bullet';

import unorderedList from './unordered-list.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  label: data.items[0].label,
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
});

const prepareData = (data, args) => {
  correctPaths(data);

  data.items[0].label = args.label;
  return data;
};

export default {
  title: 'Components/List/Unordered list',
  decorators: [withNotes, withCode],
};

export const Text = (_, { loaded: { component } }) => component;

Text.render = async (args) => {
  const renderedText = await unorderedList(
    prepareData(dataUnorderedListText, args),
  );
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
  const renderedLink = await unorderedList(
    prepareData(dataUnorderedListLink, args),
  );
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
  const renderedDivider = await unorderedList(
    prepareData(dataUnorderedListDivider, args),
  );
  return renderedDivider;
};
Divider.storyName = 'with divider';
Divider.args = getArgs(dataUnorderedListDivider);
Divider.argTypes = getArgTypes(dataUnorderedListDivider);
Divider.parameters = {
  notes: { markdown: notes, json: dataUnorderedListDivider },
};

export const NoBullet = (_, { loaded: { component } }) => component;

NoBullet.render = async (args) => {
  const renderedDivider = await unorderedList(
    prepareData(dataUnorderedListNoBullet, args),
  );
  return renderedDivider;
};
NoBullet.storyName = 'no bullet';
NoBullet.args = getArgs(dataUnorderedListNoBullet);
NoBullet.argTypes = getArgTypes(dataUnorderedListNoBullet);
NoBullet.parameters = {
  notes: { markdown: notes, json: dataUnorderedListNoBullet },
};
