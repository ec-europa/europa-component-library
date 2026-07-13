import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import featuredItem from './featured-item.html.twig';
import notes from './README.md';

const demoDataHighlighted = { ...demoData, type: 'highlight' };
const mediaContainer = { ...demoData.media_container };
const system = getSystem();

const getArgs = (data) => {
  const args = {
    show_media: true,
    micro_title: data.micro_title,
    title: data.title,
    description: data.description,
    horizontal_alignment: 'left',
    vertical_alignment: 'top',
    media_position: 'left',
    media_behavior: 'dynamic',
    media_anchor: '50,30',
    use_obj_position: false,
    smartcrop: false,
    link_display: '',
    picture:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=900&fit=crop',
  };
  if (data.link.link.label) {
    args.link_label = data.link.link.label;
  }
  if (system === 'ec' && data.type === 'highlight') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = data.type === 'highlight' ? getColorModeControls() : {};

  argTypes.show_media = {
    type: 'boolean',
    name: 'show media',
    description: 'Toggle media visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.micro_title = {
    name: 'micro title',
    type: 'string',
    description: 'Features item content micro title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.title = {
    name: 'title',
    type: 'string',
    description: 'Features item content title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.description = {
    name: 'description',
    type: 'string',
    description: 'Features item content description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  if (data.link.link.label) {
    argTypes.link_label = {
      name: 'link label',
      type: { name: 'string' },
      description: 'Label of the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  if (system === 'ec' && data.type === 'highlight') {
    argTypes.link_display = {
      name: 'link display',
      type: { name: 'select' },
      description: 'Optional link display',
      options: ['', 'button', 'highlighted'],
      control: {
        labels: {
          '': 'default',
          button: 'button',
          highlighted: 'highlighted',
        },
      },
      mapping: {
        default: '',
        button: 'button',
        highlighted: 'highlighted',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Display',
      },
      if: { arg: 'link_label', neq: '' },
    };
  } else {
    argTypes.link_display = {
      name: 'link display',
      type: { name: 'select' },
      description: 'Optional link display',
      options: ['', 'button'],
      control: {
        labels: {
          '': 'default',
          button: 'button',
        },
      },
      mapping: {
        default: '',
        button: 'button',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Display',
      },
      if: { arg: 'link_label', neq: '' },
    };
  }

  argTypes.horizontal_alignment = {
    name: 'horizontal alignment',
    type: { name: 'select' },
    description: 'Content alignment (horizontal)',
    options: ['left', 'center'],
    mapping: {
      left: 'left',
      center: 'center',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'left' },
      category: 'Display',
    },
  };

  argTypes.vertical_alignment = {
    name: 'vertical alignment',
    type: { name: 'select' },
    description: 'Content alignment (vertical); tablet and desktop only',
    options: ['top', 'center'],
    mapping: {
      top: 'top',
      center: 'center',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'top' },
      category: 'Display',
    },
  };

  argTypes.media_position = {
    name: 'media position',
    type: { name: 'select' },
    description: 'Media position',
    options: ['left', 'right'],
    mapping: {
      left: 'left',
      right: 'right',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'left' },
      category: 'Display',
    },
    if: { arg: 'show_media' },
  };

  argTypes.media_behavior = {
    name: 'media fill behavior',
    type: { name: 'select' },
    description: 'Media fill behavior',
    options: ['static', 'dynamic'],
    mapping: {
      static: 'static',
      dynamic: 'dynamic',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'static' },
      category: 'Display',
    },
    if: { arg: 'show_media' },
  };

  argTypes.picture = {
    type: { name: 'select' },
    options: [
      // landscape
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=900&fit=crop', // airplane
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=900&fit=crop', // classic car
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1500&h=1200&fit=crop', // cabin
      // square
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&h=1000&fit=crop',
      // extreme landscape
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1800&h=600&fit=crop', // train
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
        'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1800&h=600&fit=crop':
          '3:1 Landcape · Forest',
      },
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.media_anchor = {
    name: 'focal point',
    description:
      'With object-fit: cover, only the axis where cropping occurs has an effect. For landscape images horizontal values affect the crop; for portrait images vertical values affect the crop.',
    type: { name: 'select' },
    options: [
      '',
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
        '': 'none',
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
    if: { arg: 'media_behavior', eq: 'dynamic' },
  };

  argTypes.use_obj_position = {
    name: 'Use object-position with the value provided',
    type: 'boolean',
    description: 'Use the current approach, css only',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'media_behavior', eq: 'dynamic' },
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
    if: { arg: 'media_behavior', eq: 'dynamic' },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  if (clone.link.link.label) {
    clone.link.link.label = args.link_label;
  }
  if (clone.link.icon) {
    clone.link.icon.size = system === 'ec' ? 'm' : 'xs';
  }
  if (args.show_media) {
    clone.position = args.media_position;
    clone.media_container = mediaContainer;
    clone.media_container.picture.img.src = args.picture;
    clone.media_container.picture.image_anchor = args.media_anchor;
    clone.media_container.picture.use_obj_position = args.use_obj_position;
    clone.media_container.picture.smartcrop = args.smartcrop;
    clone.media_container.picture.debug_position = true;
  } else {
    delete clone.media_container;
  }

  return Object.assign(correctPaths(clone), args);
};

export default {
  title: 'Components/Featured item',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedFeaturedItem = await featuredItem(prepareData(demoData, args));
  return renderedFeaturedItem;
};
Default.storyName = 'default';
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(demoData, args),
  },
  chromatic: {
    modes: {
      m: { disable: true },
      xl: { disable: true },
    },
  },
};

export const Highlighted = (_, { loaded: { component } }) => component;

Highlighted.render = async (args) => {
  const renderedFeaturedItem = await featuredItem(
    prepareData(demoDataHighlighted, args),
  );
  return renderedFeaturedItem;
};
Highlighted.storyName = 'highlighted';
Highlighted.args = getArgs(demoDataHighlighted);
Highlighted.argTypes = getArgTypes(demoDataHighlighted);
Highlighted.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(demoDataHighlighted, args),
  },
  chromatic: {
    modes: {
      m: { disable: true },
      xl: { disable: true },
    },
  },
};
