import { withNotes } from '@ecl/storybook-addon-notes';
import { correctSvgPath } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import specs from '@ecl/specs-component-social-media-follow/demo/data';
import SocialMediaFollow from './social-media-follow.html.twig';
import notes from './README.md';

// Preserve original data.
const dataHorizontal = { ...specs };
const dataVertical = { ...specs, variant: 'vertical' };

const getArgs = (data) => ({
  description: data.description,
});

const getArgTypes = () => ({
  description: {
    name: 'description',
    type: { name: 'string', required: true },
    description: 'The description of the elements',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => Object.assign(correctSvgPath(data), args);

export default {
  title: 'Components/Social Media Follow',
  decorators: [withNotes, withCode],
};

export const Horizontal = (args) =>
  SocialMediaFollow(prepareData(dataHorizontal, args));

Horizontal.storyName = 'horizontal';
Horizontal.args = getArgs(dataHorizontal);
Horizontal.argTypes = getArgTypes();
Horizontal.parameters = {
  notes: { markdown: notes, json: dataHorizontal },
};

export const Vertical = (args) =>
  SocialMediaFollow(prepareData(dataVertical, args));

Vertical.storyName = 'vertical';
Vertical.args = getArgs(dataVertical);
Vertical.argTypes = getArgTypes();
Vertical.parameters = {
  notes: { markdown: notes, json: dataVertical },
};
