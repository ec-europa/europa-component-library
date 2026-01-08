import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataDemo from './demo/data';

import tag from './tag.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }
  args.type = 'link';
  args.label = data.tag.label;
  args.external = false;
  args.current = false;
  args.disabled = false;
  args.nowrap = false;

  return args;
};

const getArgTypes = () => {
  const argTypes = getColorModeControls();

  argTypes.label = {
    name: 'label',
    type: { name: 'string', required: true },
    description: 'The label of the tag',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.type = {
    name: 'type',
    type: 'select',
    description: 'Select tag type',
    options: ['link', 'removable', 'prefilter'],
    control: {
      labels: {
        link: 'link',
        removable: 'removable',
        prefilter: 'prefilter',
      },
    },
    mapping: {
      link: 'link',
      removable: 'removable',
      prefilter: 'prefilter',
    },
    table: {
      type: 'string',
      category: 'Display',
    },
  };

  argTypes.current = {
    type: { name: 'boolean' },
    description: 'Current filter',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'Display',
    },
    if: { arg: 'type', eq: 'prefilter' },
  };

  argTypes.external = {
    type: { name: 'boolean' },
    description: 'External link',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'Display',
    },
    if: { arg: 'type', eq: 'link' },
  };

  argTypes.disabled = {
    type: { name: 'boolean' },
    description: 'Disabled tag',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'Display',
    },
  };

  argTypes.nowrap = {
    name: 'no wrap',
    type: { name: 'boolean' },
    description: 'Keep the tag on one line (no label wrap)',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
      category: 'Display',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  clone.tag.type = args.type;

  switch (args.type) {
    case 'removable':
      delete clone.tag.path;
      break;

    case 'link':
    default:
      delete clone.tag.aria_label;
      break;
  }

  clone.tag.label = args.label;
  clone.tag.nowrap = args.nowrap;
  clone.tag.current = args.current;
  clone.tag.disabled = args.disabled;
  clone.tag.external = args.external;

  correctPaths(clone);

  return Object.assign(clone, args);
};

export default {
  title: 'Components/Tag',
  decorators: [withNotes, withCode],
};

export const Single = (_, { loaded: { component } }) => component;

Single.render = async (args) => {
  const renderedTag = await tag(prepareData(dataDemo, args));
  return renderedTag;
};
Single.storyName = 'single tag';
Single.args = getArgs(dataDemo);
Single.argTypes = getArgTypes();
Single.parameters = { notes: { markdown: notes, json: dataDemo } };
