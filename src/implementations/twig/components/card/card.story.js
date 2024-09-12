import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataCard from '@ecl/specs-component-card/demo/data';
import card from './card.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};
  if (data.picture) {
    args.show_picture = true;
    args.picture = (data.picture.img && data.picture.img.src) || '';
    args.picture_zoom = false;
  }
  if (data.labels) {
    args.show_labels = true;
  }
  if (data.primary_meta) {
    args.show_primary_meta = true;
  }
  if (data.title) {
    args.title_link = true;
    args.title = data.title.link ? data.title.link.label : data.title;
  }
  if (data.description) {
    args.show_description = true;
    args.description = data.description;
  }
  if (data.secondary_meta) {
    args.show_secondary_meta = true;
  }
  args.show_lists = false;

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  // Optional elements
  if (data.picture) {
    argTypes.show_picture = {
      name: 'picture',
      type: { name: 'boolean' },
      description: 'Show picture',
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
  if (data.picture) {
    argTypes.picture = {
      type: 'string',
      description: 'The url of the card picture',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
    argTypes.picture_zoom = {
      name: 'picture zoom',
      type: 'boolean',
      description: 'Should the picture be animated?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Display',
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
      if: { arg: 'show_description' },
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
  if (!args.show_picture) {
    delete clone.picture;
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
  if (!args.title_link) {
    delete clone.title.link;
  }

  // Other controls
  if (clone.picture) {
    clone.picture.img.src = args.picture;
    clone.picture_zoom = args.picture_zoom;
  }
  if (clone.description) {
    clone.description = args.description;
  }
  if (clone.title) {
    if (clone.title.link) {
      clone.title.link.label = args.title;
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

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedCard = await card(prepareData(dataCard, args));
  return renderedCard;
};
Default.storyName = 'default';
Default.args = getArgs(dataCard);
Default.argTypes = getArgTypes(dataCard);
Default.parameters = {
  notes: { markdown: notes, json: dataCard },
  viewport: {
    defaultViewport: 'pixel',
  },
};
