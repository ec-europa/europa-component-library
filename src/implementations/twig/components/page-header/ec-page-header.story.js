import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoContent from '@ecl/specs-component-page-header/demo/data';
import demoBreadcrumbLongEC from '@ecl/specs-component-breadcrumb/demo/data--ec';

import pageHeader from './page-header.html.twig';
import notes from './README.md';

const dataCore = { ...demoContent, variant: 'negative' };

const dataHarmonised = { ...demoContent };
delete dataHarmonised.thumbnails;
delete dataHarmonised.background_image_url;

const dataStandardised = { ...demoContent };

const getArgs = (data) => {
  const args = {
    show_breadcrumb: true,
    show_thumbnail: false,
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
  if (data.background_image_url) {
    args.background_image_url = data.background_image_url;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  argTypes.show_breadcrumb = {
    name: 'breadcrumb',
    type: 'boolean',
    description: 'Show breadcrumb',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
    },
  };

  argTypes.show_thumbnail = {
    name: 'thumbnail',
    type: 'boolean',
    description: 'Show thumbnail',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
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

  if (data.background_image_url) {
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

  if (data.background_image_url) {
    argTypes.overlay = {
      name: 'image overlay',
      type: 'select',
      description: 'Overlay on top on background image',
      options: ['none', 'dark', 'light'],
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
  if (!args.show_breadcrumb) {
    delete data.breadcrumb;
  } else if (args.show_breadcrumb) {
    data.breadcrumb = { ...demoBreadcrumbLongEC };
    data.breadcrumb.links.forEach((item) => {
      item.negative = data.negative;
    });
  }
  if (!args.show_thumbnail) {
    delete data.thumbnail;
  } else if (args.show_thumbnail && !data.show_thumbnail) {
    data.thumbnail = demoContent.thumbnail;
  }

  data.title = args.title;
  data.description = args.description;
  data.meta = args.meta;
  data.background_image_url = args.background_image_url;

  if (args.overlay === 'none') {
    delete data.overlay;
  } else {
    data.overlay = args.overlay;
  }

  correctSvgPath(data);

  return data;
};

export default {
  title: 'Components/Site-wide/Page Headers',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Core = (args) => pageHeader(prepareData(dataCore, args));

Core.storyName = 'core';
Core.args = getArgs(dataCore);
Core.argTypes = getArgTypes(dataCore);
Core.parameters = {
  notes: { markdown: notes, json: dataCore },
};

export const Harmonised = (args) =>
  pageHeader(prepareData(dataHarmonised, args));

Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs(dataHarmonised);
Harmonised.argTypes = getArgTypes(dataHarmonised);
Harmonised.parameters = {
  notes: { markdown: notes, json: dataHarmonised },
};

export const Standardised = (args) =>
  pageHeader(prepareData(dataStandardised, args));

Standardised.storyName = 'standardised';
Standardised.args = getArgs(dataStandardised);
Standardised.argTypes = getArgTypes(dataStandardised);
Standardised.parameters = {
  notes: { markdown: notes, json: dataStandardised },
};
