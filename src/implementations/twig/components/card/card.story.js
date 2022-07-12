import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataCard from '@ecl/specs-component-card/demo/data';
import card from './card.html.twig';
import notes from './README.md';

const dataCardDefault = JSON.parse(JSON.stringify(dataCard));
delete dataCardDefault.tags;
delete dataCardDefault.lists;

const dataCardTags = JSON.parse(JSON.stringify(dataCard));
delete dataCardTags.lists;

const dataCardLists = JSON.parse(JSON.stringify(dataCard));
delete dataCardLists.tags;

const getArgs = (data) => {
  const args = {};
  if (data.image) {
    args.show_image = true;
    args.image = (data.image && data.image.src) || '';
  }
  if (data.labels) {
    args.show_labels = true;
  }
  if (data.primary_meta) {
    args.show_primary_meta = true;
  }
  if (data.title) {
    args.title_link = true;
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
    args.show_tags = !!data.tags;
  }
  if (data.lists) {
    args.show_lists = !!data.lists;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  // Optional elements
  if (data.image) {
    argTypes.show_image = {
      name: 'image',
      type: { name: 'boolean' },
      description: 'Show image',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.labels) {
    argTypes.show_labels = {
      name: 'labels',
      type: 'boolean',
      description: 'Labels to be placed at the top of the card',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.primary_meta) {
    argTypes.show_primary_meta = {
      name: 'primary meta',
      type: { name: 'boolean' },
      description: 'Show primary meta',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.description) {
    argTypes.show_description = {
      name: 'description',
      type: { name: 'boolean' },
      description: 'Show the description',
      table: {
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
        category: 'Optional',
      },
    };
  }
  if (data.lists) {
    argTypes.show_lists = {
      name: 'description list',
      type: 'boolean',
      description: 'Show description list',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.title) {
    argTypes.title_link = {
      name: 'title as a link',
      type: 'boolean',
      description: 'Use a link for card title',
      table: {
        category: 'Optional',
      },
    };
  }

  // Other controls
  if (data.image) {
    argTypes.image = {
      type: 'string',
      description: 'The url of the card image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.title) {
    argTypes.title = {
      type: { name: 'string', required: true },
      description: 'The card title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.description) {
    argTypes.description = {
      type: 'string',
      description: 'The card description',
      table: {
        type: { summary: 'string' },
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
  if (!args.show_lists) {
    delete clone.lists;
  }
  if (!args.show_description) {
    delete clone.description;
  }
  if (!args.show_image) {
    delete clone.image;
  }
  if (!args.show_primary_meta) {
    delete clone.primary_meta;
  }
  if (!args.show_labels) {
    delete clone.labels;
  }
  if (!args.show_secondary_meta) {
    delete clone.secondary_meta;
  }
  if (!args.show_tags) {
    delete clone.tags;
  }
  if (!args.title_link) {
    delete clone.title.path;
  }

  // Other controls
  if (clone.image) {
    clone.image.src = args.image;
  }
  if (clone.description) {
    clone.description = args.description;
  }
  if (clone.title) {
    if (clone.title.path) {
      clone.title.label = args.title;
    } else {
      clone.title = args.title;
    }
  }

  return clone;
};

export default {
  title: 'Components/Card',
  decorators: [withCode, withNotes],
};

export const Default = (args) => card(prepareData(dataCardDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataCardDefault);
Default.argTypes = getArgTypes(dataCardDefault);
Default.parameters = { notes: { markdown: notes, json: dataCardDefault } };

export const Tags = (args) => card(prepareData(dataCardTags, args));

Tags.storyName = 'tags';
Tags.args = getArgs(dataCardTags);
Tags.argTypes = getArgTypes(dataCardTags);
Tags.parameters = { notes: { markdown: notes, json: dataCardTags } };

export const Lists = (args) => card(prepareData(dataCardLists, args));

Lists.storyName = 'lists';
Lists.args = getArgs(dataCardLists);
Lists.argTypes = getArgTypes(dataCardLists);
Lists.parameters = { notes: { markdown: notes, json: dataCardLists } };
