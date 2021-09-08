import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoContent from '@ecl/specs-component-page-header-core/demo/data--default';
import demoBackgroundImage from '@ecl/specs-component-page-header-core/demo/data--background-image';
import demoBreadcrumbLongEC from '@ecl/specs-component-breadcrumb/demo/data--ec';
import demoBreadcrumbLongEU from '@ecl/specs-component-breadcrumb/demo/data--eu';

import pageHeaderCore from './page-header-core.html.twig';
import notes from './README.md';

const system = getSystem();

const dataDefault = { ...demoContent };
const dataBackgroundImage = { ...demoBackgroundImage };

const getArgs = (data) => {
  const args = {
    breadcrumb: true,
    title: data.title,
    overlay: data.overlay || 'none',
  };
  if (data.thumbnail) {
    args.thumbnail = false;
  }
  if (data.description) {
    args.description = data.description;
  }
  if (data.meta) {
    args.meta = data.meta;
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

  if (data.thumbnail) {
    argTypes.thumbnail = {
      name: 'thumbnail',
      type: 'boolean',
      description: 'Toggle thumbnail visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    };
  }

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
  if (!args.breadcrumb) {
    delete data.breadcrumb;
  } else if (args.breadcrumb) {
    data.breadcrumb =
      system === 'eu'
        ? { ...demoBreadcrumbLongEU }
        : { ...demoBreadcrumbLongEC };
    data.breadcrumb.links.forEach((item) => {
      item.negative = system === 'ec';
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
  title: 'Components/Page Headers/Core',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => pageHeaderCore(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};

export const BackgroundImage = (args) =>
  pageHeaderCore(prepareData(dataBackgroundImage, args));

BackgroundImage.storyName = 'background-image';
BackgroundImage.args = getArgs(dataBackgroundImage);
BackgroundImage.argTypes = getArgTypes(dataBackgroundImage);
BackgroundImage.parameters = {
  notes: { markdown: notes, json: dataBackgroundImage },
};
