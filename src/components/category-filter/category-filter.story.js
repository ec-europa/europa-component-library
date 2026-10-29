import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import categoryFilter from './category-filter.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    show_expand_all: true,
    show_collapse_all: true,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => ({
  show_expand_all: {
    name: 'expand all',
    type: { name: 'boolean' },
    description: 'Toggle "expand all" button visibility',
    table: { type: { summary: 'boolean' }, category: 'Optional' },
  },
  show_collapse_all: {
    name: 'collapse all',
    type: { name: 'boolean' },
    description: 'Toggle "collapse all" button visibility',
    table: { type: { summary: 'boolean' }, category: 'Optional' },
  },
  ...getColorModeControls(),
});

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  correctPaths(clone);
  clone.color_mode = args.color_mode;
  if (!args.show_expand_all) {
    delete clone.expand_all;
  }
  if (!args.show_collapse_all) {
    delete clone.collapse_all;
  }

  return clone;
};

export default {
  title: 'Components/Category filter',
  decorators: [withNotes, withCode],
  parameters: {
    chromatic: {
      modes: {
        xs: { disable: true },
        s: { disable: true },
        l: { disable: true },
        xl: { disable: true },
      },
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedCategoryFilter = await categoryFilter(
    prepareData(demoData, args),
  );
  return renderedCategoryFilter;
};
Default.storyName = 'default';
Default.args = getArgs();
Default.argTypes = getArgTypes();
Default.parameters = {
  notes: {
    markdown: notes,
    json: ({ args }) => prepareData(demoData, args),
  },
};
