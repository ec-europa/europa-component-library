import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsAllEu from '@ecl/resources-eu-icons/dist/lists/all.json';
import iconsFlag from '@ecl/resources-flag-icons/dist/lists/flag.json';
import dataDisplayListImage from '@ecl/specs-component-display-list/demo/data--image';
import dataDisplayListIcon from '@ecl/specs-component-display-list/demo/data--icon';

import displayList from './display-list.html.twig';
import displayListItem from './display-list-item.html.twig';
import notes from './README.md';

const dataDisplayListImageVertical = {
  ...dataDisplayListImage,
  variant: 'vertical',
};
const dataDisplayListIconVertical = {
  ...dataDisplayListIcon,
  variant: 'vertical',
};

const system = getSystem();
const iconsAll = system === 'eu' ? iconsAllEu : iconsAllEc;

// Create 'none' option.
iconsAll.unshift('none');

const getArgs = (data) => {
  const args = {};
  if (data.items[0].title) {
    args.title = data.items[0].title;
  }
  if (data.items[0].description) {
    args.description = data.items[0].description;
  }
  if (data.items[0].image && data.items[0].image.src) {
    args.image = data.items[0].image.src;
  }
  args.image_squared = false;
  if (data.items[0].icon) {
    args.icon = data.items[0].icon.name;
  }
  args.zebra = true;

  return args;
};

const getArgTypes = (data, variant) => {
  const argTypes = {};
  if (variant === 'horizontal') {
    argTypes.column = {
      name: 'number of columns',
      type: { name: 'number' },
      description:
        'The number of column for horizontal list (between 1 and 4). This is using the standard grid, not part of the component itself',
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
    description: 'The title of the display list item',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.description = {
    name: 'description',
    type: { name: 'string' },
    description: 'The description of the display list item',
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
      description: 'The url of the of the display list item image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Image',
      },
    };
    argTypes.image_squared = {
      name: 'image squared',
      type: { name: 'boolean' },
      description: 'Is the image squared or with 3:2 ratio?',
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
      description: 'The generic icon used in the list item',
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
      description: 'The flag icon used in the list item',
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

  correctSvgPath(data);

  return data;
};

const renderStory = (data, args, variant) => {
  let story = displayList(prepareDataList(data, args));

  if (variant === 'horizontal') {
    const storyItem = displayListItem(prepareDataItem(data.items[0], args));
    const columns = args.column > 0 && args.column < 5 ? args.column : 2;
    story = '<div class="ecl-container">';
    story += '<div class="ecl-row">';
    for (let i = 0; i < columns; i += 1) {
      story += `<div class="ecl-col-${12 / columns}">${storyItem}</div>`;
    }
    story += '</div>';
    story += '</div>';
  }

  return story;
};

export default {
  title: 'Components/Display list',
  decorators: [withNotes, withCode],
};

export const HorizontalImage = (args) =>
  renderStory(dataDisplayListImage, args, 'horizontal');

HorizontalImage.storyName = 'horizontal (images)';
HorizontalImage.args = getArgs(dataDisplayListImage);
HorizontalImage.argTypes = getArgTypes(dataDisplayListImage, 'horizontal');
HorizontalImage.parameters = {
  notes: { markdown: notes, json: dataDisplayListImage },
};

export const HorizontalIcon = (args) =>
  renderStory(dataDisplayListIcon, args, 'horizontal');

HorizontalIcon.storyName = 'horizontal (icons)';
HorizontalIcon.args = getArgs(dataDisplayListIcon);
HorizontalIcon.argTypes = getArgTypes(dataDisplayListIcon, 'horizontal');
HorizontalIcon.parameters = {
  notes: { markdown: notes, json: dataDisplayListIcon },
};

export const VerticalImage = (args) =>
  renderStory(dataDisplayListImageVertical, args, 'vertical');

VerticalImage.storyName = 'vertical (images)';
VerticalImage.args = getArgs(dataDisplayListImage);
VerticalImage.argTypes = getArgTypes(dataDisplayListImage, 'vertical');
VerticalImage.parameters = {
  notes: { markdown: notes, json: dataDisplayListImage },
};

export const VerticalIcon = (args) =>
  renderStory(dataDisplayListIconVertical, args, 'vertical');

VerticalIcon.storyName = 'vertical (icons)';
VerticalIcon.args = getArgs(dataDisplayListIcon);
VerticalIcon.argTypes = getArgTypes(dataDisplayListIcon, 'vertical');
VerticalIcon.parameters = {
  notes: { markdown: notes, json: dataDisplayListIcon },
};
