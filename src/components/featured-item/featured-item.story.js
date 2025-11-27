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
    title: data.title,
    description: data.description,
    horizontal_alignment: 'left',
    vertical_alignment: 'top',
    media_position: 'left',
    media_behavior: 'static',
    media_anchor: 'center',
    link_display: 'default',
  };
  if (data.link.link.label) {
    args.link_label = data.link.link.label;
  }
  if (system === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = getColorModeControls();

  argTypes.show_media = {
    type: 'boolean',
    name: 'show media',
    description: 'Toggle media visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.title = {
    type: 'string',
    description: 'Features item content title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.description = {
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

  if (
    system === 'ec' &&
    (data.type === 'simple' || data.type === 'highlight')
  ) {
    argTypes.link_display = {
      name: 'link display',
      type: { name: 'select' },
      description: 'Optional link display',
      options: ['default', 'button', 'highlight'],
      mapping: {
        default: 'default',
        button: 'button',
        highlight: 'highlight',
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
      options: ['default', 'button'],
      mapping: {
        default: 'default',
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
    description: 'Content alignment (vertical)',
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

  argTypes.media_anchor = {
    name: 'media anchor',
    type: { name: 'select' },
    description: 'Media anchor (sample)',
    options: ['center', 'left', 'right', '20%'],
    mapping: {
      center: 'center',
      left: 'left',
      right: 'right',
      '20%': '20%',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'center' },
      category: 'Display',
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
    clone.media_container.picture.image_anchor = args.media_anchor;
  } else {
    delete clone.media_container;
  }

  if (args.link_display === 'highlight') {
    clone.link_highlighted = true;
  } else if (args.link_display === 'button') {
    clone.link.link.type = 'primary';
    clone.link.link.style = 'neutral';
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
  notes: { markdown: notes, json: demoData },
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
  notes: { markdown: notes, json: demoDataHighlighted },
};
