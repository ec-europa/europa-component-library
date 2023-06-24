import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import demoContent from '@ecl/specs-component-page-header/demo/data';
import demoBreadcrumbLongEC from '@ecl/specs-component-breadcrumb/demo/data--ec';

import pageHeader from './page-header.html.twig';
import notes from './README.md';

const dataCore = { ...demoContent, variant: 'negative' };

const dataHarmonised = { ...demoContent };
delete dataHarmonised.picture_thumbnail;
delete dataHarmonised.picture_thumbnail;

const dataStandardised = { ...demoContent };

const getArgs = (data) => {
  const args = {
    show_breadcrumb: true,
    show_thumbnail: false,
    hide_title: false,
  };

  if (data.title) {
    args.title = data.title;
  }
  if (data.meta) {
    args.meta = data.meta;
  }
  if (data.background_image_url) {
    args.overlay = 'none';
  }
  if (data.description) {
    args.description = data.description;
  }
  if (data.picture_background.img.src) {
    args.background_image_url = data.picture_background.img.src;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

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

  if (data.picture_background.img.src) {
    argTypes.overlay = {
      name: 'image overlay',
      type: 'select',
      description: 'Overlay on top on background image',
      options: ['none', 'dark', 'light'],
      mapping: {
        none: 'none',
        dark: 'dark',
        light: 'light',
      },
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
  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_breadcrumb) {
    delete clone.breadcrumb;
  } else if (args.show_breadcrumb) {
    clone.breadcrumb = { ...demoBreadcrumbLongEC };
    clone.breadcrumb.links.forEach((item) => {
      item.negative = clone.variant === 'negative';
    });
  }
  if (!args.show_thumbnail) {
    delete clone.picture_thumbnail;
  } else if (args.show_thumbnail && !clone.show_thumbnail) {
    clone.picture_thumbnail = demoContent.picture_thumbnail;
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

  if (args.overlay === 'none') {
    delete clone.overlay;
  } else {
    clone.overlay = args.overlay;
  }

  correctPaths(clone);

  return clone;
};

export default {
  title: 'Components/Site-wide/Page headers',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Core = (_, { loaded: { component } }) => component;

Core.render = async (args) => {
  const renderedCore = await pageHeader(prepareData(dataCore, args));
  return renderedCore;
};
Core.storyName = 'core';
Core.args = getArgs(dataCore);
Core.argTypes = getArgTypes(dataCore);
Core.parameters = {
  notes: { markdown: notes, json: dataCore },
};

export const Harmonised = (_, { loaded: { component } }) => component;

Harmonised.render = async (args) => {
  const renderedCore = await pageHeader(prepareData(dataHarmonised, args));
  return renderedCore;
};
Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs(dataHarmonised);
Harmonised.argTypes = getArgTypes(dataHarmonised);
Harmonised.parameters = {
  notes: { markdown: notes, json: dataHarmonised },
};

export const Standardised = (_, { loaded: { component } }) => component;

Standardised.render = async (args) => {
  const renderedCore = await pageHeader(prepareData(dataStandardised, args));
  return renderedCore;
};
Standardised.storyName = 'standardised';
Standardised.args = getArgs(dataStandardised);
Standardised.argTypes = getArgTypes(dataStandardised);
Standardised.parameters = {
  notes: { markdown: notes, json: dataStandardised },
};
