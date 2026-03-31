import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import textMedia from './text-media.html.twig';
import notes from './README.md';

const system = getSystem();

const getArgs = (data) => {
  const args = {
    show_micro_title: true,
    show_description: true,
    show_link: true,
    title: data.title,
    micro_title: data.micro_title,
    description: data.description,
    link_label: data.link.link.label,
    text_position: 'left',
    media_anchor: 'center',
  };
  if (system === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = getColorModeControls();

  argTypes.show_micro_title = {
    name: 'Show micro title',
    type: 'boolean',
    description: 'Toggle micro title visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_description = {
    name: 'Show description',
    type: 'boolean',
    description: 'Toggle description visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_link = {
    name: 'Show link',
    type: 'boolean',
    description: 'Toggle link visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.micro_title = {
    name: 'Micro title',
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
    name: 'Title',
    type: { name: 'string', required: true },
    description: 'Content title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.description = {
    name: 'Description',
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
    name: 'Link',
    type: { name: 'string' },
    description: 'Label of the link',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_link' },
  };

  argTypes.text_position = {
    name: 'Text position',
    type: { name: 'select' },
    description: 'Text position',
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
  };

  argTypes.media_anchor = {
    name: 'Media anchor',
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
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  clone.link.link.label = args.link_label;
  clone.link.icon.size = system === 'ec' ? 'm' : 'xs';

  if (!args.show_micro_title) delete clone.micro_title;
  if (!args.show_description) delete clone.description;
  if (!args.show_link) delete clone.link;

  return Object.assign(correctPaths(clone), args);
};

export default {
  title: 'Components/Text and media',
  decorators: [withNotes, withCode],
};

export const Image = (_, { loaded: { component } }) => component;

Image.render = async (args) => {
  const renderedtextMedia = await textMedia(prepareData(demoData, args));
  return renderedtextMedia;
};
Image.storyName = 'image';
Image.args = getArgs(demoData);
Image.argTypes = getArgTypes();
Image.parameters = {
  notes: { markdown: notes, json: demoData },
};
