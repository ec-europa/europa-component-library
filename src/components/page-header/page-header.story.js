import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import demoBreadcrumbLong from '@ecl/breadcrumb/demo/data--long';
import demoContent from './demo/data';

import pageHeader from './page-header.html.twig';
import notes from './README.md';

const demoContentNews = { ...demoContent, variant: 'news' };
const demoContentFifty = { ...demoContent, variant: '50-50' };

const expandableArgs = (data) => {
  return {
    expandable: true,
    expandable_title: data.expandable.title,
    expandable_description: data.expandable.description,
    more: data.expandable.more,
    more_link: data.expandable.more_link,
    toggle_label: data.expandable.toggle_label,
    lists: data.expandable.lists,
    separator: data.expandable.separator,
    header_content: '',
    panel_content: '',
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
    expandable_title: {
      name: 'title',
      type: { name: 'string' },
      description: 'The page header expandable title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
    expandable_description: {
      name: 'description',
      type: { name: 'string' },
      description: 'The page header expandable description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
    more: {
      type: { name: 'string' },
      description: 'Additional info visible in header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
    more_link: {
      name: 'more link',
      type: { name: 'object' },
      description: 'Additional info link',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
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
    lists: {
      type: { name: 'array' },
      description: 'The panel content',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
    separator: {
      type: { name: 'string' },
      description: 'Separator for strings in the header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'page header expandable',
      },
      if: { arg: 'show_page_header_expandable' },
    },
    header_content: {
      name: 'content of the header (additional)',
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
      name: 'content of the panel (additional)',
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
    hide_title: false,
    font_size: 'm',
  };

  if (data.title) {
    args.title = data.title;
  }
  if (data.meta) {
    args.meta = data.meta;
  }
  if (data.description) {
    args.description = data.description;
  }
  if (data.picture_background.img.src) {
    args.background_image_url = data.picture_background.img.src;
  }

  args = {
    ...args,
    ...expandableArgs(data),
  };

  return args;
};

const getArgTypes = () => {
  const argTypes = {
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
    name: 'thumbnail',
    type: 'boolean',
    description: 'Toggle thumbnail visibility',
    table: {
      category: 'Optional',
    },
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
    description: 'Toggle description visibility',
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
    name: 'picture',
    type: 'boolean',
    description: 'Toggle picture visibility',
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

  argTypes.hide_title = {
    name: 'hide title',
    type: 'boolean',
    description: 'Toggle title visibility, for screen reader only',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
      category: 'Display',
    },
  };

  argTypes.font_size = {
    name: 'font size',
    type: 'select',
    description: 'Change title font size',
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
      defaultValue: { summary: 'm' },
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
    name: 'background image',
    type: 'string',
    description: 'The background image url',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
    if: { arg: 'show_picture' },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  data.expandable = {
    title: args.expandable_title,
    description: args.expandable_description,
    lists: args.lists,
    more: args.more,
    more_link: args.more_link,
    toggle_label: args.toggle_label,
    separator: args.separator,
    header_content: args.header_content,
    panel_content: args.panel_content,
  };

  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_description) {
    delete clone.description;
  } else {
    clone.description = args.description;
  }

  if (!args.show_picture) {
    delete clone.picture_background;
  } else if (args.background_image_url) {
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
  if (!args.show_page_header_expandable) {
    delete clone.expandable;
  } else if (
    args.show_page_header_expandable &&
    !clone.show_page_header_expandable
  ) {
    clone.expandable = demoContent.expandable;
  }

  if (!args.expandable && clone.expandable) {
    clone.expandable.lists = [];
    clone.expandable.panel_content = '';
  } else if (args.expandable && !clone.expandable.lists) {
    clone.expandable.lists = demoContent.lists;
  }

  clone.title = args.title;
  clone.hide_title = args.hide_title;
  clone.font_size = args.font_size;

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

export const News = (_, { loaded: { component } }) => component;

News.render = async (args) => {
  const renderedNews = await pageHeader(prepareData(demoContentNews, args));
  return renderedNews;
};
News.storyName = 'news';
News.args = getArgs(demoContentNews);
News.argTypes = getArgTypes();
News.parameters = {
  notes: { markdown: notes, json: demoContentNews },
};

export const Fifty = (_, { loaded: { component } }) => component;

Fifty.render = async (args) => {
  const renderedFifty = await pageHeader(prepareData(demoContentFifty, args));
  return renderedFifty;
};
Fifty.storyName = '50/50';
Fifty.args = getArgs(demoContentFifty);
Fifty.argTypes = getArgTypes();
Fifty.parameters = {
  notes: { markdown: notes, json: demoContentFifty },
};
