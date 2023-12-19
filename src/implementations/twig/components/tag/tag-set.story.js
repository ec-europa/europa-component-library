import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataSet from '@ecl/specs-component-tag/demo/data--set';

import tagSet from './tag-set.html.twig';
import notes from './README-tag-set.md';

const getArgs = (data) => {
  const args = {};

  args.label = data.items[0].tag.label;
  args.external = false;

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: 'The label of the first tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };

  argTypes.external = {
    type: { name: 'boolean' },
    description: 'External link',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.items[0].tag.label = args.label;

  data.items.forEach((item) => {
    item.tag.external = args.external;
  });

  correctPaths(data);

  return Object.assign(data, args);
};

export default {
  title: 'Components/Tag',
  decorators: [withNotes, withCode],
};

export const Set = (_, { loaded: { component } }) => component;

Set.render = async (args) => {
  const renderedTagSet = await tagSet(prepareData(dataSet, args));
  return renderedTagSet;
};
Set.storyName = 'tag set';
Set.args = getArgs(dataSet);
Set.argTypes = getArgTypes();
Set.parameters = { notes: { markdown: notes, json: dataSet } };
