import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDescriptionListDefault from '@ecl/specs-component-description-list/demo/data--default';
import dataDescriptionListHorizontal from '@ecl/specs-component-description-list/demo/data--horizontal';

import descriptionList from './description-list.html.twig';
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
  args.visibleItems = data.visible_items || 0;

  return args;
};

const getArgTypes = () => {
  const argTypes = {};

  argTypes.term = {
    name: 'label',
    type: { name: 'string', required: true },
    description: 'The label of the description list item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.definition = {
    name: 'content',
    type: { name: 'string', required: true },
    description: 'The content of the description list item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.visibleItems = {
    name: 'visible items',
    description:
      'You can limit the number of items visible in the lists (set 0 for no limit)',
    control: {
      type: 'range',
      min: 0,
      max: 5,
      step: 1,
    },
    table: {
      type: { summary: 'integer' },
      defaultValue: { summary: '0' },
      category: 'Content',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.items[0].term = args.term;
  if (!Array.isArray(data.items[0].definition)) {
    data.items[0].definition = args.definition;
  } else {
    data.items[0].definition[0].label = args.label;
  }

  data.visible_items = args.visibleItems;

  correctPaths(data);
  return data;
};

export default {
  title: 'Components/List/Description list',
  decorators: [withNotes, withCode],
};

export const Vertical = (_, { loaded: { component } }) => component;

Vertical.render = async (args) => {
  const renderedDescriptionList = await descriptionList(
    prepareData(dataDescriptionListDefault, args),
  );
  return renderedDescriptionList;
};
Vertical.storyName = 'description';
Vertical.args = getArgs(dataDescriptionListDefault);
Vertical.argTypes = getArgTypes();
Vertical.parameters = {
  notes: { markdown: notes, json: dataDescriptionListDefault },
};

export const Horizontal = (_, { loaded: { component } }) => component;

Horizontal.render = async (args) => {
  const renderedDescriptionListHorizontal = await descriptionList(
    prepareData(dataDescriptionListHorizontal, args),
  );
  return renderedDescriptionListHorizontal;
};
Horizontal.storyName = 'description (horizontal)';
Horizontal.args = getArgs(dataDescriptionListHorizontal);
Horizontal.argTypes = getArgTypes();
Horizontal.parameters = {
  notes: { markdown: notes, json: dataDescriptionListHorizontal },
};
