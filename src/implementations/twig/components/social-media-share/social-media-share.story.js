import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

import specs from '@ecl/specs-component-social-media-share/demo/data';
import SocialMediaShare from './social-media-share.html.twig';
import notes from './README.md';

// Preserve original data.
const dataHorizontal = { ...specs };
const dataVertical = { ...specs, variant: 'vertical' };

const getArgs = (data) => ({
  show_other: true,
  description: data.description,
});

const getArgTypes = () => ({
  show_other: {
    name: 'other social networks',
    type: { name: 'boolean' },
    description: 'toggle the visibility of the "other social networks" link',
    table: {
      category: 'Optional',
    },
  },
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

const prepareData = (data, args) => {
  correctPaths(data);
  const clone = JSON.parse(JSON.stringify(data));

  if (!args.show_other) {
    delete clone.popover;
  }

  return Object.assign(clone, args);
};

export default {
  title: 'Components/Social Media Share',
  decorators: [withNotes, withCode],
};

export const Horizontal = (_, { loaded: { component } }) => component;

Horizontal.render = async (args) => {
  const renderedHorizontal = await SocialMediaShare(
    prepareData(dataHorizontal, args),
  );
  return renderedHorizontal;
};
Horizontal.storyName = 'horizontal';
Horizontal.args = getArgs(dataHorizontal);
Horizontal.argTypes = getArgTypes();
Horizontal.parameters = {
  notes: { markdown: notes, json: dataHorizontal },
};

export const Vertical = (_, { loaded: { component } }) => component;

Vertical.render = async (args) => {
  const renderedVertical = await SocialMediaShare(
    prepareData(dataVertical, args),
  );
  return renderedVertical;
};
Vertical.storyName = 'vertical';
Vertical.args = getArgs(dataVertical);
Vertical.argTypes = getArgTypes();
Vertical.parameters = {
  notes: { markdown: notes, json: dataVertical },
};
