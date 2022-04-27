import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-content-item/demo/data--default';
import dataImage from '@ecl/specs-component-content-item/demo/data--image';
import dataEvent from '@ecl/specs-component-content-item/demo/data--event';

import contentItem from './content-item.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};

  if (data.picture) {
    args.show_image = true;
    args.image_size = 'large';
    args.image_position = 'left';
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
    args.title = data.title.label;
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
  }
  args.show_divider = false;

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  // Optional elements
  if (data.picture) {
    argTypes.show_image = {
      name: 'image',
      type: 'boolean',
      description: 'Show image',
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
    argTypes.image_size = {
      name: 'image size',
      type: 'select',
      description: "Possible image sizes ('small' or 'large')",
      options: ['small', 'large'],
      control: {
        labels: {
          small: 'small (square)',
          large: 'large (landscape)',
        },
      },
      table: {
        type: 'string',
        defaultValue: { summary: '' },
        category: 'Display',
      },
    };
    argTypes.image_position = {
      name: 'image position',
      type: 'select',
      description: "Possible image position ('left' or 'right')",
      options: ['left', 'right'],
      table: {
        type: 'string',
        defaultValue: { summary: '' },
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
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  correctSvgPath(data);
  const clone = JSON.parse(JSON.stringify(data));

  // Optional elements
  if (!args.show_image) {
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
    clone.picture.size = args.image_size;
    if (args.image_size === 'small') {
      clone.picture.img.src =
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg';
    }
    clone.picture.position = args.image_position;
  }
  if (clone.title) {
    clone.title.label = args.title;
  }
  if (clone.description) {
    clone.description = args.description;
  }

  return clone;
};

export default {
  title: 'Components/Content item',
  decorators: [withCode, withNotes],
};

export const Default = (args) => contentItem(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Image = (args) => contentItem(prepareData(dataImage, args));

Image.storyName = 'image';
Image.args = getArgs(dataImage);
Image.argTypes = getArgTypes(dataImage);
Image.parameters = { notes: { markdown: notes, json: dataImage } };

export const Event = (args) => contentItem(prepareData(dataEvent, args));

Event.storyName = 'event';
Event.args = getArgs(dataEvent);
Event.argTypes = getArgTypes(dataEvent);
Event.parameters = { notes: { markdown: notes, json: dataEvent } };
