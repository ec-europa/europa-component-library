import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import defaultData from './demo/data';
import HighlightedSearch from './highlighted-search.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    title: data.title,
    description: data.description,
    nb_suggestions: data.suggestion.items.length,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => ({
  ...getColorModeControls(),
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
  const rendered = await HighlightedSearch(prepareData(defaultData, args));
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
Default.decorators = [withCode, withNotes];
