import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataLink from '@ecl/specs-component-tag/demo/data--link';
import dataRemovable from '@ecl/specs-component-tag/demo/data--removable';

import tag from './tag.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};

  args.label = data.tag.label;
  args.nowrap = false;
  if (data.tag.type === 'link') {
    args.external = false;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    nowrap: {
      name: 'no wrap',
      type: { name: 'boolean' },
      description: 'Keep the tag on one line (no label wrap)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Display',
      },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: 'The label of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };

  if (data.tag.type === 'link') {
    argTypes.external = {
      type: { name: 'boolean' },
      description: 'External link',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  data.tag.label = args.label;
  data.tag.nowrap = args.nowrap;
  data.tag.external = args.external;

  correctPaths(data);

  return Object.assign(data, args);
};

export default {
  title: 'Components/Tag',
  decorators: [withNotes, withCode],
};

export const Link = (_, { loaded: { component } }) => component;

Link.render = async (args) => {
  const renderedTag = await tag(prepareData(dataLink, args));
  return renderedTag;
};
Link.storyName = 'link tag';
Link.args = getArgs(dataLink);
Link.argTypes = getArgTypes(dataLink);
Link.parameters = { notes: { markdown: notes, json: dataLink } };

export const Removable = (_, { loaded: { component } }) => component;

Removable.render = async (args) => {
  const renderedTagRemovable = await tag(prepareData(dataRemovable, args));
  return renderedTagRemovable;
};
Removable.storyName = 'removable tag';
Removable.args = getArgs(dataRemovable);
Removable.argTypes = getArgTypes(dataRemovable);
Removable.parameters = { notes: { markdown: notes, json: dataRemovable } };
