import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-category-filter/demo/data';
import categoryFilter from './category-filter.html.twig';
import notes from './README.md';

const prepareData = (data) => {
  correctSvgPath(data);

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

export const Default = () => categoryFilter(prepareData(demoData));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: demoData } };
