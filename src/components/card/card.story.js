import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import dataCard from './demo/data';
import card from './card.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {};
  if (data.picture) {
    args.show_picture = true;
    args.picture =
      data.picture.img && data.picture.img.src
        ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1200&fit=crop'
        : '';
    args.picture_zoom = false;
    args.image_anchor = '50,30';
    args.smartcrop = false;
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
    args.secondary_meta_direction = 'vertical';
  }
  args.show_lists = false;

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = getColorModeControls();

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
      type: { name: 'select' },
      options: [
        // landscape
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=900&fit=crop', // airplane
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=900&fit=crop', // classic car
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1500&h=1200&fit=crop', // cabin

        // square
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&h=1000&fit=crop', // portrait

        // portrait
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1200&fit=crop', // woman
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&h=1600&fit=crop', // lighthouse
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&h=1400&fit=crop', // tree

        // extreme landscape
        'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1800&h=600&fit=crop', // train

        // extreme portrait
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=1800&fit=crop', // balloon
      ],
      control: {
        labels: {
          'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=900&fit=crop':
            '16:9 Landcape · Airplane',
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=900&fit=crop':
            '4:3 Landcape · Car',
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1500&h=1200&fit=crop':
            '5:4 Landcape · Wood',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&h=1000&fit=crop':
            '1:1 · Portrait',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1200&fit=crop':
            '3:4 Portrait · Person',
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&h=1600&fit=crop':
            '9:16 Portrait · Lake with house',
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&h=1400&fit=crop':
            '1:2 Portrait · Mountain',
          'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1800&h=600&fit=crop':
            '3:1 Landcape · Forest',
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=1800&fit=crop':
            '1:3 Portrait · Road with car',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
    argTypes.image_anchor = {
      name: 'focal point',
      description:
        'With object-fit: cover, only the axis where cropping occurs has an effect. For landscape images horizontal values affect the crop; for portrait images vertical values affect the crop.',
      type: { name: 'select' },
      options: [
        '10,10',
        '50,10',
        '90,10',
        '10,50',
        '30,50',
        '50,50',
        '50,30',
        '70,50',
        '90,50',
        '10,90',
        '50,90',
        '90,90',
        '30,30',
        '70,30',
        '30,70',
        '70,70',
      ],
      control: {
        labels: {
          '10,10': 'x: 10%, y: 10% - Top left',
          '50,10': 'x: 50%, y: 10% - Top',
          '90,10': 'x: 90%, y: 10% - Top right',
          '10,50': 'x: 10%, y: 50% - Left',
          '30,50': 'x: 30%, y: 50% - Left-center',
          '50,50': 'x: 50%, y: 50% - Center',
          '50,30': 'x: 50%, y: 30% - Center top',
          '70,50': 'x: 70%, y: 50% - Right-center',
          '90,50': 'x: 90%, y: 50% - Right',
          '10,90': 'x: 10%, y: 90% - Bottom left',
          '50,90': 'x: 50%, y: 90% - Bottom',
          '90,90': 'x: 90%, y: 90% - Bottom right',
          '30,30': 'x: 30%, y: 30% - Upper left',
          '70,30': 'x: 70%, y: 30% - Upper right',
          '30,70': 'x: 30%, y: 70% - Lower left',
          '70,70': 'x: 70%, y: 70% - Lower right',
        },
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
    argTypes.smartcrop = {
      type: 'boolean',
      description:
        'Use smartcrop script to crop the image, might non follow the focal point if it finds something more revelant.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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

  argTypes.secondary_meta_direction = {
    name: 'secondary meta direction',
    type: 'select',
    description: 'Display direction',
    options: ['vertical', 'horizontal'],
    control: {
      labels: {
        vertical: 'vertical',
        horizontal: 'horizontal',
      },
    },
    mapping: {
      vertical: 'vertical',
      horizontal: 'horizontal',
    },
    table: {
      type: 'string',
      defaultValue: { summary: 'vertical' },
      category: 'Display',
    },
    if: { arg: 'show_secondary_meta' },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  data.color_mode = args.color_mode;

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
    clone.picture.image_anchor = args.image_anchor;
    clone.picture_zoom = args.picture_zoom;
    clone.picture.smartcrop = args.smartcrop;
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
  if (clone.secondary_meta) {
    clone.secondary_meta_direction = args.secondary_meta_direction;
  }

  return clone;
};

export default {
  title: 'Components/Card',
  decorators: [withCode, withNotes],
  chromatic: {
    modes: {
      s: { disable: true },
      l: { disable: true },
      xl: { disable: true },
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedCard = await card(prepareData(dataCard, args));
  return renderedCard;
};
Default.render = async (args) => {
  const [x, y] = args.image_anchor.split(',').map(Number);
  const renderedCard = `<div class="ecl-row">
      <div class="ecl-col-12 ecl-col-l-4">
        <h4>Focal point <strong>${args.image_anchor}</strong></h4>
        ${await card(prepareData({ ...dataCard, picture: { ...dataCard.picture, debug_position: true } }, args))}
      </div>
      <div class="ecl-col-12 ecl-col-l-4">
        <h4>Object position (current) <strong>${args.image_anchor}</strong></h4>
        ${await card(prepareData({ ...dataCard, picture: { ...dataCard.picture, use_obj_position: true } }, args))}
      </div>
      <div class="ecl-col-12 ecl-col-l-4">
        <h4>Original image</h4>
        <div style="position: relative; display: inline-block;">
          <img
            src="${args.picture}"
            style="display: block; max-width: 100%;"
          />

          <span
            style="
              position: absolute;
              left: ${x}%;
              top: ${y}%;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #e43;
              border: 3px solid white;
              transform: translate(-50%, -50%);
              box-shadow: 0 0 0 1px rgba(0,0,0,.3);
              pointer-events: none;
            "
          ></span>
        </div>
      </div>
    </div>`;

  return renderedCard;
};
Default.storyName = 'default';
Default.args = getArgs(dataCard);
Default.argTypes = getArgTypes(dataCard);
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(dataCard, args),
  },
};
