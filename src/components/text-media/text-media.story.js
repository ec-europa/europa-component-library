import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoDataImage from './demo/data--image';
import demoDataVideo from './demo/data--video';
import textMedia from './text-media.html.twig';
import notes from './README.md';

const system = getSystem();

const getArgs = (data) => {
  let args = {
    variant: '',
    show_micro_title: true,
    show_description: true,
    show_link: true,
    title: data.title,
    micro_title: data.micro_title,
    description: data.description,
    link_label: data.link.link.label,
    full_width: false,
    media_position: 'right',
    gridContent: false,
  };

  if (system === 'ec') {
    args.color_mode = 'default';
  }

  if (data.media_container.picture) {
    args = {
      ...args,
      media_anchor: 'center',
    };
  }

  if (data.media_container.video) {
    args = {
      ...args,
      autoplay: false,
    };
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = getColorModeControls({ arg: 'variant', eq: '' });

  argTypes.variant = {
    name: 'variant',
    type: 'select',
    description: 'Change variant',
    options: ['', 'primary'],
    control: {
      labels: {
        '': 'default',
        primary: 'primary',
      },
    },
    mapping: {
      default: '',
      primary: 'primary',
    },
    table: {
      type: 'string',
      defaultValue: { summary: '' },
      category: 'Variant',
    },
  };

  argTypes.show_micro_title = {
    name: 'show micro title',
    type: 'boolean',
    description: 'Toggle micro title visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_description = {
    name: 'show description',
    type: 'boolean',
    description: 'Toggle description visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_link = {
    name: 'show link',
    type: 'boolean',
    description: 'Toggle link visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.micro_title = {
    name: 'micro title',
    type: 'string',
    description: 'Content micro title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_micro_title' },
  };

  argTypes.title = {
    name: 'title',
    type: { name: 'string', required: true },
    description: 'Content title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.description = {
    name: 'description',
    type: 'string',
    description: 'Content description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_description' },
  };

  argTypes.link_label = {
    name: 'link',
    type: { name: 'string' },
    description: 'Label of the link',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_link' },
  };

  argTypes.full_width = {
    name: 'full width',
    type: { name: 'boolean' },
    description: 'Take the full width of the viewport when in a container',
    table: {
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
      defaultValue: { summary: 'right' },
      category: 'Display',
    },
  };

  if (data.media_container.picture) {
    argTypes.media_anchor = {
      name: 'media anchor',
      type: { name: 'select' },
      description: 'Media anchor (sample)',
      options: ['center', 'top left', 'bottom right', '20% 20%'],
      mapping: {
        center: 'center',
        'top left': 'top left',
        'bottom right': 'bottom right',
        '20% 20%': '20% 20%',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
        category: 'Display',
      },
    };
  }

  if (data.media_container.video) {
    argTypes.autoplay = {
      name: 'auto play',
      type: 'boolean',
      description:
        'Video will start playing once rendered, muted, in a loop and without controls',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Display',
      },
    };
  }

  argTypes.gridContent = {
    name: 'demo grid content',
    type: { name: 'boolean' },
    description:
      'Inject a test content block displayed on the grid, to see the alignment',
    table: {
      category: 'Test content',
    },
    control: {
      type: 'boolean',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  clone.link.link.label = args.link_label;
  clone.link.icon.size = system === 'ec' ? 'm' : 'xs';

  if (clone.media_container.picture) {
    clone.media_container.picture.image_anchor = args.media_anchor;
  }
  if (clone.media_container.video) {
    clone.media_container.autoplay = args.autoplay;
  }

  if (!args.show_micro_title) delete clone.micro_title;
  if (!args.show_description) delete clone.description;
  if (!args.show_link) delete clone.link;

  return Object.assign(correctPaths(clone), args);
};

const renderStory = async (data, args) => {
  let story = await textMedia(prepareData(data, args));
  story = `<div class="ecl-container">${story}</div>`;

  if (args.gridContent) {
    story +=
      '<div class="ecl-container"><p class="ecl-u-type-paragraph">Content inside the grid</p></div>';
  }

  return story;
};

export default {
  title: 'Components/Text and media',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Image = (_, { loaded: { component } }) => component;

Image.render = async (args) => {
  const renderedtextMedia = await renderStory(demoDataImage, args);
  return renderedtextMedia;
};
Image.storyName = 'image';
Image.args = getArgs(demoDataImage);
Image.argTypes = getArgTypes(demoDataImage);
Image.parameters = {
  notes: { markdown: notes, json: demoDataImage },
};

export const Video = (_, { loaded: { component } }) => component;

Video.render = async (args) => {
  const renderedtextMedia = await renderStory(demoDataVideo, args);
  return renderedtextMedia;
};
Video.storyName = 'video';
Video.args = getArgs(demoDataVideo);
Video.argTypes = getArgTypes(demoDataVideo);
Video.parameters = {
  notes: { markdown: notes, json: demoDataVideo },
};
