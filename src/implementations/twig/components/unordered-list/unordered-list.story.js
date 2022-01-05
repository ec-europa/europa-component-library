import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

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
  data.items[0].label = args.label;
  return data;
};

export default {
  title: 'Components/List/Unordered list',
  decorators: [withNotes, withCode],
};

export const Text = (args) =>
  unorderedList(prepareData(dataUnorderedListText, args));

Text.storyName = 'text';
Text.args = getArgs(dataUnorderedListText);
Text.argTypes = getArgTypes(dataUnorderedListText);
Text.parameters = {
  notes: { markdown: notes, json: dataUnorderedListText },
};

export const Link = (args) =>
  unorderedList(prepareData(dataUnorderedListLink, args));

Link.storyName = 'links';
Link.args = getArgs(dataUnorderedListLink);
Link.argTypes = getArgTypes(dataUnorderedListLink);
Link.parameters = {
  notes: { markdown: notes, json: dataUnorderedListLink },
};

export const Divider = (args) =>
  unorderedList(prepareData(dataUnorderedListDivider, args));

Divider.storyName = 'with divider';
Divider.args = getArgs(dataUnorderedListDivider);
Divider.argTypes = getArgTypes(dataUnorderedListDivider);
Divider.parameters = {
  notes: { markdown: notes, json: dataUnorderedListDivider },
};

export const NoBullet = (args) =>
  unorderedList(prepareData(dataUnorderedListNoBullet, args));

NoBullet.storyName = 'no bullet';
NoBullet.args = getArgs(dataUnorderedListNoBullet);
NoBullet.argTypes = getArgTypes(dataUnorderedListNoBullet);
NoBullet.parameters = {
  notes: { markdown: notes, json: dataUnorderedListNoBullet },
};
