import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsAllEu from '@ecl/resources-eu-icons/dist/lists/all.json';
import iconsFlag from '@ecl/resources-flag-icons/dist/lists/flag.json';
import dataListIllustrationImage from '@ecl/specs-component-list-illustration/demo/data--image';
import dataListIllustrationIcon from '@ecl/specs-component-list-illustration/demo/data--icon';

import listIllustration from './list-illustration.html.twig';
import notes from './README.md';

const system = getSystem();
const iconsAll = system === 'eu' ? iconsAllEu : iconsAllEc;

// Create 'none' option.
iconsAll.unshift('none');

const getArgs = (data, variant) => {
  const args = {};
  if (data.items[0].title) {
    args.title = data.items[0].title;
  }
  if (data.items[0].description) {
    args.description = data.items[0].description;
  }
  if (data.items[0].image && data.items[0].image.src) {
    args.image = data.items[0].image.src;
    args.image_squared = false;
  }
  if (data.items[0].icon) {
    args.icon = data.items[0].icon.name;
  }

  if (variant === 'horizontal') {
    args.column = 2;
  } else {
    args.zebra = true;
  }

  return args;
};

const getArgTypes = (data, variant) => {
  const argTypes = {};
  if (variant === 'horizontal') {
    argTypes.column = {
      name: 'number of columns',
      control: { type: 'range', min: 2, max: 4, step: 1 },
      description: 'The number of column for the list (between 2 and 4)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
        category: 'Layout',
      },
    };
  } else {
    argTypes.zebra = {
      name: 'zebra',
      type: { name: 'boolean' },
      description: 'Differentiate lines using zebra display',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
        category: 'Layout',
      },
    };
  }

  argTypes.title = {
    name: 'title',
    type: { name: 'string', required: true },
    description: 'The title of the list item (first item)',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.description = {
    name: 'description',
    type: { name: 'string' },
    description: 'The description of the list item (first item)',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  if (data.items[0].image && data.items[0].image.src) {
    argTypes.image = {
      name: 'image',
      type: { name: 'string' },
      description: 'The url of the of the list item image (first item)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Image',
      },
    };
    argTypes.image_squared = {
      name: 'image squared',
      type: { name: 'boolean' },
      description: 'Is the image squared? (default ratio is 3:2)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Image',
      },
    };
  }

  if (data.items[0].icon) {
    argTypes.icon = {
      name: 'icon (generic)',
      description: 'The generic icon used in the list item (first item)',
      type: { name: 'select' },
      options: iconsAll,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Icon',
      },
    };
    argTypes.icon_flag = {
      name: 'icon (flag)',
      description: 'The flag icon used in the list item (first item)',
      type: { name: 'select' },
      options: iconsFlag,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Icon',
      },
    };
  }

  return argTypes;
};

const prepareDataItem = (data, args) => {
  data.title = args.title;
  data.description = args.description;
  if (args.image) {
    data.image.src = args.image;
    data.image.squared = args.image_squared;
  }
  if (args.icon && args.icon !== 'none') {
    data.icon = {};
    data.icon.name = args.icon;
    data.icon.size = 'l';
    data.icon.path = 'icon.svg';
  }
  if (args.icon_flag && args.icon_flag !== 'none') {
    data.icon = {};
    data.icon.name = args.icon_flag;
    data.icon.size = 'l';
    data.icon.path = 'icon-flag.svg';
  }
  if (args.icon === 'none') {
    delete data.icon;
  }

  correctSvgPath(data);

  return data;
};

const prepareDataList = (data, args) => {
  data.items[0] = prepareDataItem(data.items[0], args);
  for (let i = 1; i < data.items.length; i += 1) {
    if (args.image) {
      data.items[i].image.squared = args.image_squared;
    }
  }

  data.zebra = args.zebra;
  data.column = args.column;

  correctSvgPath(data);

  return data;
};

export default {
  title: 'Components/List with illustration',
  decorators: [withNotes, withCode],
};

export const HorizontalImage = (args) =>
  listIllustration(prepareDataList(dataListIllustrationImage, args));

HorizontalImage.storyName = 'horizontal (images)';
HorizontalImage.args = getArgs(dataListIllustrationImage, 'horizontal');
HorizontalImage.argTypes = getArgTypes(dataListIllustrationImage, 'horizontal');
HorizontalImage.parameters = {
  notes: { markdown: notes, json: dataListIllustrationImage },
};

export const HorizontalIcon = (args) =>
  listIllustration(prepareDataList(dataListIllustrationIcon, args));

HorizontalIcon.storyName = 'horizontal (icons)';
HorizontalIcon.args = getArgs(dataListIllustrationIcon, 'horizontal');
HorizontalIcon.argTypes = getArgTypes(dataListIllustrationIcon, 'horizontal');
HorizontalIcon.parameters = {
  notes: { markdown: notes, json: dataListIllustrationIcon },
};

export const VerticalImage = (args) =>
  listIllustration(prepareDataList(dataListIllustrationImage, args));

VerticalImage.storyName = 'vertical (images)';
VerticalImage.args = getArgs(dataListIllustrationImage, 'vertical');
VerticalImage.argTypes = getArgTypes(dataListIllustrationImage, 'vertical');
VerticalImage.parameters = {
  notes: { markdown: notes, json: dataListIllustrationImage },
};

export const VerticalIcon = (args) =>
  listIllustration(prepareDataList(dataListIllustrationIcon, args));

VerticalIcon.storyName = 'vertical (icons)';
VerticalIcon.args = getArgs(dataListIllustrationIcon, 'vertical');
VerticalIcon.argTypes = getArgTypes(dataListIllustrationIcon, 'vertical');
VerticalIcon.parameters = {
  notes: { markdown: notes, json: dataListIllustrationIcon },
};
