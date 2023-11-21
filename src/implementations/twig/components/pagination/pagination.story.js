import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import specs from '@ecl/specs-component-pagination/demo/data';
import pagination from './pagination.html.twig';
import notes from './README.md';

const system = getSystem();

if (system === 'ec') {
  specs.items.forEach((item) => {
    if (item.type === 'previous' || item.type === 'next') {
      item.link.link.hide_label = true;
    }
  });
}

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
