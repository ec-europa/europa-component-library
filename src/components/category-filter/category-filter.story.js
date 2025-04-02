import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths, getColorModeControls } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import categoryFilter from './category-filter.html.twig';
import notes from './README.md';

const getArgs = () => {
  const args = {};

  if (getSystem() === 'ec') {
    args.color_mode = 'default';
  }

  return args;
};

const getArgTypes = () => getColorModeControls();

const prepareData = (data, args) => {
  correctPaths(data);
  data.color_mode = args.color_mode;

  return data;
};

export default {
  title: 'Components/Category filter',
  decorators: [withNotes, withCode],
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
Default.parameters = { notes: { markdown: notes, json: demoData } };
