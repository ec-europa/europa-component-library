import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import fileUpload from './file-upload-status.html.twig';
import notes from './README.md';

const dataFiles = {
  icon_path: '/icons.svg',
};

export default {
  title: 'Compositions/File upload status',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
    EclNotes: { disable: true },
  },
};

export const Default = () => fileUpload(correctPaths(dataFiles));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
