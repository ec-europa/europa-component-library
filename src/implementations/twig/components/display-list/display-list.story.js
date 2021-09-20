import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import dataDisplayListDefault from '@ecl/specs-component-display-list/demo/data--default';

import displayList from './display-list.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    term: data.items[0].term,
  };
  if (!Array.isArray(data.items[0].definition)) {
    args.definition = data.items[0].definition;
  } else {
    args.label = data.items[0].definition[0].label;
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = {};

  return argTypes;
};

const prepareData = (data) => {
  return data;
};

export default {
  title: 'Components/List/Display list',
  decorators: [withNotes, withCode],
};

export const Vertical = (args) =>
  displayList(prepareData(dataDisplayListDefault, args));

Vertical.storyName = 'vertical';
Vertical.args = getArgs(dataDisplayListDefault);
Vertical.argTypes = getArgTypes(dataDisplayListDefault);
Vertical.parameters = {
  notes: { markdown: notes, json: dataDisplayListDefault },
};
