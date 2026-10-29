import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import categoryFilter from './category-filter.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {
    show_controls: true,
    use_name: false,
  };

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => ({
  show_controls: {
    name: 'expand/collapse all',
    type: { name: 'boolean' },
    description: 'Toggle "expand all" and "collapse all" buttons visibility',
    table: { type: { summary: 'boolean' }, category: 'Optional' },
  },
  use_name: {
    name: 'use name',
    type: { name: 'boolean' },
    description:
      'Use a name to link the first level items (only one item open). Ignored when the expand/collapse all buttons are displayed',
    table: { type: { summary: 'boolean' }, category: 'Optional' },
    if: { arg: 'show_controls', truthy: false },
  },
  ...getColorModeControls(),
});

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));
  correctPaths(clone);
  clone.color_mode = args.color_mode;
  if (!args.show_controls) {
    delete clone.expand_all;
    delete clone.collapse_all;
  }
  if (args.use_name) {
    clone.name = 'category-filter-name';
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
