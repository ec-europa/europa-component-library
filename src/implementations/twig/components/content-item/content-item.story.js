import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataImage from '@ecl/specs-component-content-item/demo/data--image';
import dataEvent from '@ecl/specs-component-content-item/demo/data--event';

import contentItem from './content-item.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};

  if (data.image) {
    args.show_image = true;
    args.image_size = 'l';
    args.image_position = 'left';
  }
  if (data.date) {
    args.show_date = true;
  }
  if (data.labels) {
    args.show_labels = true;
  }
  if (data.meta) {
    args.show_meta = true;
  }
  if (data.title) {
    args.title = data.title.label;
  }
  if (data.description) {
    args.show_description = true;
    args.description = data.description;
  }
  if (data.infos) {
    args.show_infos = true;
  }
  if (data.lists) {
    args.show_taxonomy = true;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  // Optional elements
  if (data.image) {
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
  if (data.meta) {
    argTypes.show_meta = {
      name: 'meta',
      type: 'boolean',
      description: 'Show meta',
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
  if (data.infos) {
    argTypes.show_infos = {
      name: 'infos',
      type: 'boolean',
      description: 'Show infos',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }
  if (data.lists) {
    argTypes.show_taxonomy = {
      name: 'taxonomy',
      type: 'boolean',
      description: 'Show taxonomy',
      table: {
        type: 'boolean',
        defaultValue: { summary: true },
        category: 'Optional',
      },
    };
  }

  // Other controls
  if (data.image) {
    argTypes.image_size = {
      name: 'image size',
      type: 'select',
      description: "Possible image sizes ('s' or 'l')",
      options: ['s', 'l'],
      control: {
        labels: {
          s: 'small (square)',
          l: 'large (landscape)',
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
    delete clone.image;
  }
  if (!args.show_date) {
    delete clone.date;
  }
  if (!args.show_labels) {
    delete clone.labels;
  }
  if (!args.show_meta) {
    delete clone.meta;
  }
  if (!args.show_description) {
    delete clone.description;
  }
  if (!args.show_infos) {
    delete clone.infos;
  }
  if (!args.show_taxonomy) {
    delete clone.lists;
  }

  // Other controls
  if (clone.image) {
    clone.image.size = args.image_size;
    if (args.image_position === 'right') {
      clone.variant = 'image-right';
    }
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
