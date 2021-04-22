import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoContent from '@ecl/specs-component-page-header-standardised/demo/data--default';
import demoBackgroundImage from '@ecl/specs-component-page-header-standardised/demo/data--background-image';
import demoBreadcrumbLongEC from '@ecl/specs-component-breadcrumb/demo/data--ec';
import demoBreadcrumbLongEU from '@ecl/specs-component-breadcrumb/demo/data--eu';

import pageHeaderStandardised from './page-header-standardised.html.twig';
import notes from './README.md';

const system = getSystem();

const dataDefault = { ...demoContent };
const dataBackgroundImage = { ...demoBackgroundImage };
if (system === 'eu') {
  delete dataBackgroundImage.overlay;
}

const getArgTypes = (data) => {
  const argTypes = {};

  argTypes.breadcrumb = {
    name: 'breadcrumb',
    type: 'boolean',
    defaultValue: true,
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
      defaultValue: false,
      description: 'Toggle thumbnail visibility',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    };
  }

  argTypes.title = {
    type: { name: 'string', required: true },
    defaultValue: data.title,
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
      defaultValue: data.description,
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
      defaultValue: data.meta,
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
      defaultValue: data.background_image_url,
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
  if (!args.breadcrumb) {
    delete data.breadcrumb;
  } else if (args.breadcrumb) {
    data.breadcrumb =
      system === 'eu'
        ? { ...demoBreadcrumbLongEU }
        : { ...demoBreadcrumbLongEC };
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

  correctSvgPath(data);

  return data;
};

export default {
  title: 'Components/Page Headers/Standardised',
  decorators: [withNotes, withCode],
};

export const Default = (args) =>
  pageHeaderStandardised(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};

export const BackgroundImage = (args) =>
  pageHeaderStandardised(prepareData(dataBackgroundImage, args));

BackgroundImage.storyName = 'background-image';
BackgroundImage.argTypes = getArgTypes(dataBackgroundImage);
BackgroundImage.parameters = {
  notes: { markdown: notes, json: dataBackgroundImage },
};
