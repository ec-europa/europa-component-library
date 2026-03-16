import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataSet from '@ecl/tag/demo/data--set';

import tagSet from './tag-set.html.twig';
import notes from './README-tag-set.md';

const getArgs = (data) => {
  const args = {};

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }
  args.variant = '';
  args.label = data.label;
  args.current = false;
  args.disabled = false;

  return args;
};

const getArgTypes = () => {
  const argTypes = getColorModeControls({ arg: 'variant', neq: 'prefilter' });

  argTypes.variant = {
    name: 'variant',
    type: 'select',
    description: 'Select tag set variant',
    options: ['default', 'prefilter'],
    control: {
      labels: {
        '': 'default',
        prefilter: 'prefilter',
      },
    },
    mapping: {
      default: '',
      prefilter: 'prefilter',
    },
    table: {
      type: 'string',
      category: 'Display',
    },
  };

  argTypes.current = {
    name: 'current',
    type: { name: 'boolean' },
    description: 'Display a tag as currently active',
    table: {
      category: 'Display',
    },
    if: { arg: 'variant', eq: 'prefilter' },
  };

  argTypes.disabled = {
    name: 'disabled',
    type: { name: 'boolean' },
    description: 'Display a tag as disabled',
    table: {
      category: 'Display',
    },
    if: { arg: 'variant', eq: 'prefilter' },
  };

  argTypes.label = {
    name: 'label',
    type: { name: 'string' },
    description: 'The label of the tag set',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'variant', eq: 'prefilter' },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  correctPaths(clone);

  if (args.variant !== 'prefilter') {
    delete clone.label;
  }

  clone.items[0].tag.current = args.current;
  clone.items[1].tag.disabled = args.disabled;

  return Object.assign(clone, args);
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
