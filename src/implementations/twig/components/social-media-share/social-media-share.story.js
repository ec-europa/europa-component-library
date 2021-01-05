import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import dataDefault from '@ecl/specs-component-social-media-share/demo/data';
import SocialMediaShare from './social-media-share.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  return {
    description: {
      name: 'description',
      type: { name: 'string', required: true },
      defaultValue: data.description,
      description: 'The description of the section',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    },
  };
};

const prepareData = (data, args) => {
  return Object.assign(correctSvgPath(data), args);
};

export default {
  title: 'Components/Social Media Share',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Default = (args) =>
  SocialMediaShare(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = {
  notes: { markdown: notes, json: dataDefault },
};
