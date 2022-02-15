import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoContent from '@ecl/specs-component-page-header/demo/data--default';
import demoBackgroundImage from '@ecl/specs-component-page-header/demo/data--background-image';
import demoBreadcrumbLongEC from '@ecl/specs-component-breadcrumb/demo/data--ec';

import pageHeader from './page-header.html.twig';
import notes from './README.md';

const dataDefault = { ...demoContent };
const dataBackgroundImage = { ...demoBackgroundImage };

const getArgs = (data) => {
  const args = {
    breadcrumb: true,
    thumbnail: false,
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

  argTypes.breadcrumb = {
    name: 'breadcrumb',
    type: 'boolean',
    description: 'Toggle breadcrumb visibility',
    table: {
      type: { summary: 'object' },
      defaultValue: { summary: '{}' },
    },
  };

  argTypes.thumbnail = {
    name: 'thumbnail',
    type: 'boolean',
    description: 'Toggle thumbnail visibility',
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
  data.variant = 'standardised';
  if (!args.breadcrumb) {
    delete data.breadcrumb;
  } else if (args.breadcrumb) {
    data.breadcrumb = { ...demoBreadcrumbLongEC };
    data.breadcrumb.links.forEach((item) => {
      item.negative = false;
    });
  }
  if (!args.thumbnail) {
    delete data.thumbnail;
  } else if (args.thumbnail && !data.thumbnail) {
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
  title: 'Components/Site-wide/Page Headers/Standardised',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => pageHeader(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};

export const BackgroundImage = (args) =>
  pageHeader(prepareData(dataBackgroundImage, args));

BackgroundImage.storyName = 'background-image';
BackgroundImage.args = getArgs(dataBackgroundImage);
BackgroundImage.argTypes = getArgTypes(dataBackgroundImage);
BackgroundImage.parameters = {
  notes: { markdown: notes, json: dataBackgroundImage },
};
