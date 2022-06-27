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
    args.title = data.title.path ? data.title.label : data.title;
  }
  if (data.description) {
    args.show_description = true;
    args.description = data.description;
  }
  if (data.secondary_meta) {
    args.show_secondary_meta = true;
  }
  if (data.tags) {
    args.show_tags = true;
  }
  if (data.links) {
    args.show_links = true;
  }
  if (data.lists) {
    args.show_lists = true;
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
  if (data.tags) {
    argTypes.show_tags = {
      name: 'tags',
      type: 'boolean',
      description: 'Show tags',
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
  if (!args.show_tags) {
    delete clone.tags;
  }
  if (!args.show_links) {
    delete clone.links;
  }
  if (!args.show_lists) {
    delete clone.lists;
  }

  // Other controls
  if (clone.title) {
    if (clone.title.path) {
      clone.title.label = args.title;
    } else {
      clone.title = args.title;
    }
  }
  if (clone.description) {
    clone.description = args.description;
  }

  return clone;
};

export default {
  title: 'Components/Content block',
  decorators: [withCode, withNotes],
};

export const Default = (args) => contentBlock(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
