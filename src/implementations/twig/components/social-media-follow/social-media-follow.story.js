import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import specs from '@ecl/specs-component-social-media-follow/demo/data';
import SocialMediaFollow from './social-media-follow.html.twig';
import notes from './README.md';

// Preserve original data.
const dataHorizontal = { ...specs };
const dataVertical = { ...specs, variant: 'vertical' };
const others = { ...specs.links[5] };

const getArgs = (data) => ({
  description: data.description,
  toggle_other: true,
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
  toggle_other: {
    name: 'Show the "more" link',
    type: { name: 'boolean' },
    description: 'toggle the visibility of the "other social networks" link',
    table: {
      category: 'Content',
    },
  },
});

const prepareData = (data, args) => {
  const isItThere = data.links.slice(-1)[0].label === 'Other social networks';

  if (!args.toggle_other && isItThere) {
    data.links.pop();
  } else if (args.toggle_other && !isItThere) {
    data.links[5] = others;
  }

  return Object.assign(correctPaths(data), args);
};

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
