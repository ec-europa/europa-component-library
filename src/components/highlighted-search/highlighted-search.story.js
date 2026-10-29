import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import defaultData from './demo/data';
import HighlightedSearch from './highlighted-search.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    select: false,
    title: data.title,
    description: data.description,
    multiple: false,
    horizontal_alignment: 'center',
    full_width: false,
    gridContent: false,
    nb_suggestions: data.suggestion.items.length,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => ({
  ...getColorModeControls(),
  select: {
    name: 'select input',
    type: { name: 'boolean' },
    description: 'Use an additional select input',
    table: {
      category: 'Optional',
    },
  },
  multiple: {
    name: 'multiple select',
    type: { name: 'boolean' },
    description: 'Allow selecting multiple options in the select input',
    if: { arg: 'select' },
    table: {
      category: 'Optional',
    },
  },
  horizontal_alignment: {
    name: 'horizontal alignment',
    type: { name: 'select' },
    description: 'Content alignment (horizontal)',
    options: ['center', 'left'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'center' },
      category: 'Display',
    },
  },
  full_width: {
    name: 'full width',
    type: { name: 'boolean' },
    description: 'Take the full width of the viewport when in a container',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'Display',
    },
  },
  gridContent: {
    name: 'demo grid content',
    type: { name: 'boolean' },
    description:
      'Inject a test content block displayed on the grid, to see the alignment',
    table: {
      category: 'Test content',
    },
  },
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'Title of the highlighted search',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  description: {
    name: 'description',
    type: { name: 'string' },
    description: 'Description of the highlighted search',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  nb_suggestions: {
    name: 'number of suggestions',
    control: { type: 'range', min: 0, max: 6, step: 1 },
    description: 'Number of suggestion tags to display',
    table: {
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  clone.title = args.title;
  clone.description = args.description;
  clone.color_mode = args.color_mode;
  clone.horizontal_alignment = args.horizontal_alignment;
  clone.full_width = args.full_width;

  if (!args.select) {
    delete clone.search_select;
    delete clone.search_select_label;
  } else if (args.multiple) {
    // The multiple select uses its own placeholder, not an empty option
    clone.search_select.multiple = true;
    clone.search_select.options = clone.search_select.options.filter(
      (option) => option.value !== '',
    );
  } else {
    Object.keys(clone.search_select)
      .filter((key) => key.startsWith('multiple_'))
      .forEach((key) => delete clone.search_select[key]);
  }

  if (args.nb_suggestions === 0) {
    delete clone.suggestion;
  } else {
    clone.suggestion.items = clone.suggestion.items.slice(
      0,
      args.nb_suggestions,
    );
  }

  return clone;
};

export default {
  title: 'Components/Highlighted search',
  parameters: { layout: 'fullscreen' },
  decorators: [
    withNotes,
    withCode,
    (storyFn) => {
      return `<div class="ecl-container">${storyFn()}</div>`;
    },
  ],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  let rendered = await HighlightedSearch(prepareData(defaultData, args));

  if (args.gridContent) {
    rendered += '<p class="ecl-u-type-paragraph">Content inside the grid</p>';
  }

  return rendered;
};
Default.storyName = 'default';
Default.args = getArgs(defaultData);
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(defaultData, args),
  },
};
