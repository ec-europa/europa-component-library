import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoBreadcrumbLong from '@ecl/breadcrumb/demo/data--long';
import demoContent from './demo/data';

import pageHeader from './page-header.html.twig';
import notes from './README.md';

const expandableArgs = (data) => {
  return {
    expandable: true,
    toggle_label: data.expandable.toggle_label,
    header_content: data.expandable.header_content,
    panel_content: data.expandable.panel_content,
  };
};

const expandableArgTypes = () => {
  return {
    expandable: {
      type: { name: 'boolean' },
      description: 'It will be a simple header, otherwise',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'true' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
    toggle_label: {
      name: 'toggle button label',
      type: { name: 'string' },
      description: 'Label of the toggle button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
    header_content: {
      name: 'content of the header',
      type: { name: 'string' },
      description: 'Alternative way to feed the header with content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
    panel_content: {
      name: 'content of the panel',
      type: { name: 'string' },
      description: 'Alternative way to feed the panel with content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
  };
};

const getArgs = (data) => {
  let args = {
    show_breadcrumb: true,
    show_picture: true,
    show_description: true,
    show_thumbnail: false,
    show_meta: true,
    show_page_header_expandable: false,
    has_background: false,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  if (data.title) {
    args.title = data.title;
  }
  if (data.meta) {
    args.meta = data.meta;
  }
  if (data.description) {
    args.description = data.description;
    args.description_position = 'top';
  }
  if (data.picture_background.img.src) {
    args.background_image_url = data.picture_background.img.src;
    args.picture_position = 'top';
  }

  args.hide_title = false;

  args = {
    ...args,
    ...expandableArgs(data),
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {
    ...getColorModeControls({ arg: 'has_background' }),
    ...expandableArgTypes(),
  };

  argTypes.show_breadcrumb = {
    name: 'breadcrumb',
    type: 'boolean',
    description: 'Toggle breadcrumb visibility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_thumbnail = {
    name: 'featured image',
    type: 'boolean',
    description: 'Toggle featured image (thumbnail) visibility',
    table: {
      category: 'Optional',
    },
    if: { arg: 'show_description' },
  };

  argTypes.show_page_header_expandable = {
    name: 'expandable',
    type: 'boolean',
    description: 'Toggle element visibility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_description = {
    name: 'description',
    type: 'boolean',
    description: 'Toggle description (introduction) visibility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_meta = {
    name: 'meta',
    type: 'boolean',
    description: 'Toggle meta visibility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_picture = {
    name: 'image',
    type: 'boolean',
    description: 'Toggle image visibility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.title = {
    type: { name: 'string', required: true },
    description: 'The page title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.has_background = {
    name: 'colored background',
    type: 'boolean',
    description: 'Use a colored background',
    table: {
      type: { summary: 'boolean' },
      category: 'Display',
    },
  };

  argTypes.description = {
    type: 'string',
    description: 'The page introduction',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_description' },
  };

  argTypes.description_position = {
    name: 'description position',
    type: 'select',
    description: 'Change description position',
    options: ['top', 'bottom'],
    control: {
      labels: {
        top: 'top',
        bottom: 'bottom',
      },
    },
    mapping: {
      top: 'top',
      bottom: 'bottom',
    },
    table: {
      type: 'string',
      defaultValue: { summary: 'top' },
      category: 'Display',
    },
    if: { arg: 'show_description' },
  };

  argTypes.meta = {
    type: 'array',
    description: 'The page meta',
    table: {
      type: { summary: 'array' },
      defaultValue: { summary: '[]' },
      category: 'Content',
    },
    if: { arg: 'show_meta' },
  };

  argTypes.background_image_url = {
    name: 'image url',
    type: 'string',
    description: 'The image url',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_picture' },
  };

  argTypes.picture_position = {
    name: 'image position',
    type: 'select',
    description: 'Change image position',
    options: ['top', 'beside', 'bottom'],
    control: {
      labels: {
        top: 'top',
        beside: 'beside',
        bottom: 'bottom',
      },
    },
    mapping: {
      top: 'top',
      beside: 'beside',
      bottom: 'bottom',
    },
    table: {
      type: 'string',
      defaultValue: { summary: 'top' },
      category: 'Display',
    },
    if: { arg: 'show_picture' },
  };

  argTypes.hide_title = {
    name: 'hide title',
    type: 'boolean',
    description:
      'Toggle title visibility, for screen reader only. This implies that the visible page title is provided somewhere else (banner for instance)',
    table: {
      type: { summary: 'boolean' },
      category: 'Extra configuration',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  clone.color_mode = args.color_mode;

  if (!args.show_description) {
    delete clone.description;
  } else {
    clone.description = args.description;
    clone.description_position = args.description_position;
  }

  if (!args.show_picture) {
    delete clone.picture_background;
  } else if (args.background_image_url) {
    clone.picture_position = args.picture_position;
    clone.picture_background = {
      img: {
        src: args.background_image_url,
        alt: clone.picture_background.img.alt || '',
      },
    };
  }

  if (!args.show_meta) {
    delete clone.meta;
  } else {
    clone.meta = args.meta;
  }

  if (!args.show_breadcrumb) {
    delete clone.breadcrumb;
  } else if (args.show_breadcrumb) {
    clone.breadcrumb = { ...demoBreadcrumbLong };
  }
  if (!args.show_thumbnail) {
    delete clone.picture_thumbnail;
  } else if (args.show_thumbnail && !clone.show_thumbnail) {
    clone.picture_thumbnail = demoContent.picture_thumbnail;
  }

  if (args.show_page_header_expandable) {
    clone.expandable = {
      toggle_label: args.toggle_label,
      header_content: args.header_content,
      panel_content: args.expandable ? args.panel_content : '',
    };
  } else {
    delete clone.expandable;
  }

  clone.title = args.title;
  clone.hide_title = args.hide_title;
  clone.has_background = args.has_background;

  correctPaths(clone);

  return clone;
};

export default {
  title: 'Components/Site-wide/Page headers',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedCore = await pageHeader(prepareData(demoContent, args));
  return renderedCore;
};
Default.storyName = 'default';
Default.args = getArgs(demoContent);
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: { markdown: notes, json: demoContent },
};
