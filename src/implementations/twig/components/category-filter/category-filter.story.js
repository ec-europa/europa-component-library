import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-category-filter/demo/data';
import categoryFilter from './category-filter.html.twig';
import notes from './README.md';

const prepareData = (data) => {
  correctPaths(data);

  return data;
};

export default {
  title: 'Components/Category filter',
  decorators: [withNotes, withCode],
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedCategoryFilter = await categoryFilter(prepareData(demoData));
  return renderedCategoryFilter;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
