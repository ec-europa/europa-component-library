import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';
import iconsAllEu from '@ecl/resources-eu-icons/dist/lists/all.json';
import data3Col from '@ecl/specs-component-fact-figures/demo/data--3-col';

import factFigures from './fact-figures.html.twig';
import notes from './README.md';

const system = getSystem();
const iconsAll = system === 'eu' ? iconsAllEu : iconsAllEc;
const viewAll = { ...data3Col.view_all };

const getArgs = (data) => {
  return {
    viewAll: true,
    displayIcons: true,
    column: 3,
    icon: data.items[0].icon.name,
    value: data.items[0].value,
    title: data.items[0].title,
    description: data.items[0].description,
  };
};

const getArgTypes = () => {
  return {
    viewAll: {
      name: 'view all link',
      type: { name: 'boolean' },
      description: 'Link in the component footer',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
        category: 'Optional',
      },
    },
    displayIcons: {
      name: 'icons',
      type: { name: 'boolean' },
      description: 'Toggle visibility of the icons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
        category: 'Optional',
      },
    },
    column: {
      description: 'Number of columns',
      control: { type: 'range', min: 3, max: 4, step: 1 },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '3' },
        category: 'Layout',
      },
    },
    icon: {
      description: 'Name of the icon',
      type: 'select',
      options: iconsAll,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content (first item)',
      },
    },
    value: {
      type: { name: 'string', required: true },
      description: 'Main heading',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content (first item)',
      },
    },
    title: {
      type: { name: 'string', required: true },
      description: 'Sub heading',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content (first item)',
      },
    },
    description: {
      type: { name: 'string' },
      description: 'Description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content (first item)',
      },
    },
  };
};

const prepareData = (data, args) => {
  if (system === 'ec' && args.displayIcons) {
    data.items.forEach((item, i) => {
      data.items[i].icon.size = 'm';
    });
    if (data.viewAll) {
      data.view_all.icon.size = 'xs';
    }
  }
  data.items[0].value = args.value;
  data.items[0].title = args.title;
  data.items[0].description = args.description;
  if (args.icon) {
    data.items[0].icon.name = args.icon;
  }
  data.view_all = args.viewAll ? viewAll : {};
  data.display_icons = args.displayIcons;
  data.column = args.column;

  return data;
};

export default {
  title: 'Components/Fact figures',
  decorators: [withNotes, withCode],
};

export const Default = (args) =>
  factFigures(prepareData(correctSvgPath(data3Col), args));

Default.args = getArgs(data3Col);
Default.argTypes = getArgTypes();
Default.parameters = { notes: { markdown: notes, json: data3Col } };
