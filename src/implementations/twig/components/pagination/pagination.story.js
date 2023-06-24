import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import specs from '@ecl/specs-component-pagination/demo/data';
import pagination from './pagination.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Navigation/Pagination',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
    parameters: { layout: 'fullscreen' },
  },
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async () => {
  const renderedPagination = await pagination(correctPaths(specs));
  return renderedPagination;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
