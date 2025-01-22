import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import iconsAll from '@ecl/resources-icons/dist/lists/all.json';
import demoData from './demo/data';

import factFigures from './fact-figures.html.twig';
import notes from './README.md';

const iconMapping = iconsAll.reduce((mapping, icon) => {
  mapping[icon] = icon;
  return mapping;
}, {});

const getArgs = (data) => {
  const args = {
    centered: false,
    show_view_all: true,
    show_icons: true,
    column: 3,
    font_size: 'l',
    icon: data.items[0].icon.name,
    icon_size: 'medium',
    value: data.items[0].value,
    title: data.items[0].title,
    description: data.items[0].description,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => {
  const argTypes = getColorModeControls();

  argTypes.centered = {
    type: { name: 'boolean' },
    description: 'Centered content',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'Layout',
    },
  };
  argTypes.show_view_all = {
    name: 'view all link',
    type: { name: 'boolean' },
    description: 'Link in the component footer',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '' },
      category: 'Optional',
    },
  };
  argTypes.show_icons = {
    name: 'icons',
    type: { name: 'boolean' },
    description: 'Toggle visibility of the icons',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: '' },
      category: 'Optional',
    },
  };
  argTypes.column = {
    description: 'Number of columns',
    control: { type: 'range', min: 1, max: 4, step: 1 },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '3' },
      category: 'Layout',
    },
  };
  argTypes.font_size = {
    name: 'font size',
    type: 'select',
    description: 'Change font size',
    options: ['m', 'l'],
    control: {
      labels: {
        m: 'medium',
        l: 'large',
      },
    },
    mapping: {
      medium: 'm',
      large: 'l',
    },
    table: {
      type: 'string',
      defaultValue: { summary: 'l' },
      category: 'Display',
    },
  };
  argTypes.icon = {
    description: 'Name of the icon',
    type: 'select',
    options: iconsAll,
    mapping: iconMapping,
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
    if: { arg: 'show_icons' },
  };
  argTypes.icon_size = {
    description: 'Size of the icon',
    type: 'select',
    options: ['medium', 'large'],
    mapping: {
      medium: 'l',
      large: '2xl',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'medium' },
      category: 'Content (first item)',
    },
    if: { arg: 'show_icons' },
  };
  argTypes.value = {
    type: { name: 'string', required: true },
    description: 'Main heading',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
  };
  argTypes.title = {
    type: { name: 'string', required: true },
    description: 'Sub heading',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
  };
  argTypes.description = {
    type: { name: 'string' },
    description: 'Description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content (first item)',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  // Optional elements
  if (!args.show_view_all) {
    delete clone.view_all;
  }
  clone.display_icons = args.show_icons;
  clone.centered = args.centered;

  // Column display
  clone.column = args.column;

  // Other controls
  clone.color_mode = args.color_mode;
  clone.font_size = args.font_size;
  clone.items[0].value = args.value;
  clone.items[0].title = args.title;
  clone.items[0].description = args.description;
  if (args.icon) {
    clone.items[0].icon.name = args.icon;
    clone.icon_size = args.icon_size;
  }

  return clone;
};

export default {
  title: 'Components/Fact figures',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedFactFigures = await factFigures(prepareData(demoData, args));
  return renderedFactFigures;
};
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: demoData } };
