import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-content-block/demo/data';

import contentBlock from './content-block.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};

  if (data.labels) {
    args.show_labels = true;
  }
  if (data.primary_meta) {
    args.show_primary_meta = true;
  }
  if (data.title) {
    args.title = data.title.link ? data.title.link.label : data.title;
  }
  if (data.description) {
    args.show_description = true;
    args.description = data.description;
  }
  if (data.secondary_meta) {
    args.show_secondary_meta = true;
  }
  if (data.links) {
    args.show_links = true;
  }
  if (data.lists) {
    args.show_lists = true;
    args.horizontal_lists = false;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  // Optional elements
  if (data.labels) {
    argTypes.show_labels = {
      name: 'labels',
      type: 'boolean',
      description: 'Show labels',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }
  if (data.primary_meta) {
    argTypes.show_primary_meta = {
      name: 'primary meta',
      type: 'boolean',
      description: 'Show primary meta',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }
  if (data.description) {
    argTypes.show_description = {
      name: 'description',
      type: 'boolean',
      description: 'Show description',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }
  if (data.secondary_meta) {
    argTypes.show_secondary_meta = {
      name: 'secondary meta',
      type: 'boolean',
      description: 'Show secondary meta',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }
  if (data.links) {
    argTypes.show_links = {
      name: 'links',
      type: 'boolean',
      description: 'Show links',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }
  if (data.lists) {
    argTypes.show_lists = {
      name: 'lists',
      type: 'boolean',
      description: 'Show lists',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }

  // Other controls
  if (data.title) {
    argTypes.title = {
      name: 'title',
      type: { name: 'string', required: true },
      description: 'Content block title',
      table: {
        type: 'string',
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.description) {
    argTypes.description = {
      name: 'description',
      type: 'string',
      description: 'Content block description',
      table: {
        type: 'string',
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_description' },
    };
  }
  if (data.lists) {
    argTypes.horizontal_lists = {
      name: 'horizontal lists',
      type: 'boolean',
      description: 'Display lists horizontally',
      table: {
        type: 'boolean',
        defaultValue: { summary: false },
        category: 'Display',
      },
      if: { arg: 'show_lists' },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  // Optional elements
  if (!args.show_labels) {
    delete clone.labels;
  }
  if (!args.show_primary_meta) {
    delete clone.primary_meta;
  }
  if (!args.show_description) {
    delete clone.description;
  }
  if (!args.show_secondary_meta) {
    delete clone.secondary_meta;
  }
  if (!args.show_links) {
    delete clone.links;
  }
  if (!args.show_lists) {
    delete clone.lists;
  }

  // Other controls
  if (clone.title) {
    if (clone.title.link) {
      clone.title.link.label = args.title;
    } else {
      clone.title = args.title;
    }
  }
  if (clone.description) {
    clone.description = args.description;
  }
  if (args.horizontal_lists && args.show_lists) {
    clone.lists.forEach((list) => {
      list.variant = 'horizontal';
    });
  }

  return clone;
};

export default {
  title: 'Components/Content block',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedContentBlock = await contentBlock(
    prepareData(dataDefault, args),
  );
  return renderedContentBlock;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
