import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import specs from '@ecl/specs-component-social-media-follow/demo/data';
import SocialMediaFollow from './social-media-follow.html.twig';
import notes from './README.md';

// Preserve original data.
const dataHorizontal = { ...specs };
const dataVertical = { ...specs, variant: 'vertical' };

const getArgTypes = (data) => {
  return {
    description: {
      name: 'description',
      type: { name: 'string', required: true },
      defaultValue: data.description,
      description: 'The description of the elements',
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
  title: 'Components/Social Media Follow',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
  },
};

export const Horizontal = (args) =>
  SocialMediaFollow(prepareData(dataHorizontal, args));

Horizontal.storyName = 'horizontal';
Horizontal.argTypes = getArgTypes(dataHorizontal);
Horizontal.parameters = {
  notes: { markdown: notes, json: dataHorizontal },
};

export const Vertical = (args) =>
  SocialMediaFollow(prepareData(dataVertical, args));

Vertical.storyName = 'vertical';
Vertical.argTypes = getArgTypes(dataVertical);
Vertical.parameters = {
  notes: { markdown: notes, json: dataVertical },
};
