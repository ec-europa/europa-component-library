import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import fileUpload from './file-upload-list.html.twig';

const dataFiles = {
  icon_path: '/icons.svg',
};

export default {
  title: 'Compositions/File upload list',
  decorators: [withNotes, withCode],
  parameters: {
    controls: { disable: true },
  },
};

export const Default = () => fileUpload(correctSvgPath(dataFiles));

Default.storyName = 'default';
