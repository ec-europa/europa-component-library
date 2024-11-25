import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-content-item/demo/data--default';
import dataImage from '@ecl/specs-component-content-item/demo/data--image';
import dataEvent from '@ecl/specs-component-content-item/demo/data--event';

import contentItem from './content-item.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};

  if (data.picture) {
    args.show_picture = true;
    args.picture_size = 'large';
    args.picture_position = 'left';
    args.picture_zoom = false;
  }
  if (data.date) {
    args.show_date = true;
  }
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
  if (data.lists) {
    args.show_lists = true;
    args.horizontal_lists = false;
  }
  args.show_divider = false;

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  // Optional elements
  if (data.picture) {
    argTypes.show_picture = {
      name: 'picture',
      type: 'boolean',
      description: 'Show picture',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }
  if (data.date) {
    argTypes.show_date = {
      name: 'date',
      type: 'boolean',
      description: 'Show date',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }
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
  argTypes.show_divider = {
    name: 'divider',
    type: 'boolean',
    description: 'Show divider',
    table: {
      type: 'boolean',
      defaultValue: { summary: false },
      category: 'Optional',
    },
  };

  // Other controls
  if (data.picture) {
    argTypes.picture_size = {
      name: 'picture size',
      type: 'select',
      description: "Possible picture sizes ('small' or 'large')",
      options: ['small', 'large'],
      control: {
        labels: {
          small: 'small (square)',
          large: 'large (landscape)',
        },
      },
      mapping: {
        'small (square)': 'small',
        'large (landscape)': 'large',
      },
      table: {
        type: 'string',
        defaultValue: { summary: '' },
        category: 'Display',
      },
      if: { arg: 'picture_position', neq: 'top' },
    };
    argTypes.picture_position = {
      name: 'picture position',
      type: 'select',
      description: 'Possible picture position',
      options: ['left', 'right', 'top'],
      mapping: {
        left: 'left',
        right: 'right',
        top: 'top',
      },
      table: {
        type: 'string',
        defaultValue: { summary: '' },
        category: 'Display',
      },
      if: { arg: 'show_picture' },
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
      name: 'title',
      type: { name: 'string', required: true },
      description: 'Content item title',
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
      description: 'Content item description',
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
  if (!args.show_picture) {
    delete clone.picture;
  }
  if (!args.show_date) {
    delete clone.date;
  }
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
  if (!args.show_lists) {
    delete clone.lists;
  }
  clone.divider = args.show_divider;

  // Other controls
  if (clone.picture) {
    clone.picture.size = args.picture_size;
    if (args.picture_size === 'small') {
      clone.picture.img.src =
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg';
      clone.picture.sources[0].src = clone.picture.img.src;
    }
    clone.picture.position = args.picture_position;
    clone.picture_zoom = args.picture_zoom;
  }
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
  title: 'Components/Content item',
  decorators: [withCode, withNotes],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedContentItem = await contentItem(prepareData(dataDefault, args));
  return renderedContentItem;
};
Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Image = (_, { loaded: { component } }) => component;

Image.render = async (args) => {
  const renderedContentItemImage = await contentItem(
    prepareData(dataImage, args),
  );
  return renderedContentItemImage;
};
Image.storyName = 'image';
Image.args = getArgs(dataImage);
Image.argTypes = getArgTypes(dataImage);
Image.parameters = { notes: { markdown: notes, json: dataImage } };

export const Event = (_, { loaded: { component } }) => component;

Event.render = async (args) => {
  const renderedContentItemEvent = await contentItem(
    prepareData(dataEvent, args),
  );
  return renderedContentItemEvent;
};
Event.storyName = 'event';
Event.args = getArgs(dataEvent);
Event.argTypes = getArgTypes(dataEvent);
Event.parameters = { notes: { markdown: notes, json: dataEvent } };
