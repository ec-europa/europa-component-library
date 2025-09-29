import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import demoBreadcrumbLong from '@ecl/breadcrumb/demo/data--long';
import demoContent from './demo/data';

import pageHeader from './page-header.html.twig';
import notes from './README.md';

const politicalAdvArgs = (data) => {
  return {
    adv_title: data.political_adv.title,
    sponsor: data.political_adv.sponsor,
    more: data.political_adv.more,
    more_link: data.political_adv.more_link,
    toggle_label: data.political_adv.toggle_label,
    lists: data.political_adv.lists,
    separator: data.political_adv.separator,
  };
};

const politicalAdvArgTypes = () => {
  return {
    adv_title: {
      name: 'title',
      type: { name: 'string' },
      description: 'The political advertisement title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Political advertisement',
      },
      if: { arg: 'show_political_adv' },
    },
    sponsor: {
      type: { name: 'string' },
      description: 'The political advertisement sponsor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Political advertisement',
      },
      if: { arg: 'show_political_adv' },
    },
    more: {
      type: { name: 'string' },
      description: 'Additional info visible in header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Political advertisement',
      },
      if: { arg: 'show_political_adv' },
    },
    more_link: {
      name: 'more link',
      type: { name: 'object' },
      description: 'Additional info link',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
        category: 'Political advertisement',
      },
      if: { arg: 'show_political_adv' },
    },
    toggle_label: {
      name: 'toggle button label',
      type: { name: 'string' },
      description: 'Label of the toggle button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Political advertisement',
      },
      if: { arg: 'show_political_adv' },
    },
    lists: {
      type: { name: 'array' },
      description: 'The panel content',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
        category: 'Political advertisement',
      },
      if: { arg: 'show_political_adv' },
    },
    separator: {
      type: { name: 'string' },
      description: 'Separator for strings in the header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Political advertisement',
      },
      if: { arg: 'show_political_adv' },
    },
  };
};

const getArgs = (data) => {
  let args = {
    show_breadcrumb: true,
    show_thumbnail: false,
    show_political_adv: true,
    hide_title: false,
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
    ...politicalAdvArgs(data),
  };

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {
    ...politicalAdvArgTypes(),
  };

  argTypes.show_breadcrumb = {
    name: 'breadcrumb',
    type: 'boolean',
    description: 'Toggle breadcrumb visibility',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
      category: 'Optional',
    },
  };

  argTypes.show_thumbnail = {
    name: 'thumbnail',
    type: 'boolean',
    description: 'Toggle thumbnail visibility',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
      category: 'Optional',
    },
  };

  argTypes.show_political_adv = {
    name: 'political advertisement',
    type: 'boolean',
    description: 'Toggle element visibility',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
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
      category: 'Optional',
    },
  };

  if (data.description) {
    argTypes.description = {
      type: 'string',
      description: 'The page introduction',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  if (data.meta) {
    argTypes.meta = {
      type: 'array',
      description: 'The page meta',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
        category: 'Content',
      },
    };
  }

  if (data.picture_background.img.src) {
    argTypes.background_image_url = {
      name: 'background image',
      type: 'string',
      description: 'The background image url',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  data.political_adv = {
    title: args.adv_title,
    sponsor: args.sponsor,
    lists: args.lists,
    more: args.more,
    more_link: args.more_link,
    toggle_label: args.toggle_label,
    separator: args.separator,
  };

  const clone = JSON.parse(JSON.stringify(data));

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
  if (!args.show_political_adv) {
    delete clone.political_adv;
  } else if (args.show_political_adv && !clone.show_political_adv) {
    clone.political_adv = demoContent.political_adv;
  }

  clone.title = args.title;
  clone.hide_title = args.hide_title;
  clone.description = args.description;
  clone.meta = args.meta;

  if (args.background_image_url) {
    clone.picture_background = {
      img: {
        src: args.background_image_url,
        alt: clone.picture_background.img.alt || '',
      },
    };
  } else {
    clone.picture_background = {};
  }
  console.log(clone);
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
Default.argTypes = getArgTypes(demoContent);
Default.parameters = {
  notes: { markdown: notes, json: demoContent },
};
