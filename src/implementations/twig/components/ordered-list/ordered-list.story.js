import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataOrderedList from '@ecl/specs-component-ordered-list/demo/data--text';
import dataLink from '@ecl/specs-component-ordered-list/demo/data--link';
import dataNoMarker from '@ecl/specs-component-ordered-list/demo/data--no-marker';
import dataDivider from '@ecl/specs-component-ordered-list/demo/data--with-divider';

import orderedList from './ordered-list.html.twig';
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
  title: 'Components/List/Ordered list',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedList = await orderedList(prepareData(dataOrderedList, args));
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
  const renderedListLinks = await orderedList(prepareData(dataLink, args));
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
  const renderedListDivider = await orderedList(prepareData(dataDivider, args));
  return renderedListDivider;
};
Divider.storyName = 'with divider';
Divider.args = getArgs(dataDivider);
Divider.argTypes = getArgTypes(dataDivider);
Divider.parameters = {
  notes: { markdown: notes, json: dataDivider },
};

export const NoMarker = (_, { loaded: { component } }) => component;

NoMarker.render = async (args) => {
  const renderedListNoMarker = await orderedList(
    prepareData(dataNoMarker, args),
  );
  return renderedListNoMarker;
};
NoMarker.storyName = 'no marker';
NoMarker.args = getArgs(dataNoMarker);
NoMarker.argTypes = getArgTypes(dataNoMarker);
NoMarker.parameters = {
  notes: { markdown: notes, json: dataNoMarker },
};
