import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import specs from '@ecl/specs-component-pagination/demo/data';
import pagination from './pagination.html.twig';
import notes from './README.md';

export default {
  title: 'Components/Navigation/Pagination',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
  },
};

export const Default = () => pagination(correctSvgPath(specs));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
