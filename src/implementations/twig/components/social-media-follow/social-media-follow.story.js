import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import specsEc from '@ecl/specs-component-social-media-follow/demo/data--ec';
import specsEcColor from '@ecl/specs-component-social-media-follow/demo/data--ec-color';
import specsEu from '@ecl/specs-component-social-media-follow/demo/data--eu';
import specsEuColor from '@ecl/specs-component-social-media-follow/demo/data--eu-color';
import SocialMediaFollow from './social-media-follow.html.twig';
import notes from './README.md';

const system = getSystem();
const specs = system === 'eu' ? specsEu : specsEc;
const specsColor = system === 'eu' ? specsEuColor : specsEcColor;

// Preserve original data.
const dataHorizontal = { ...specs };
const dataVertical = { ...specs, variant: 'vertical' };
const dataHorizontalColor = { ...specsColor };
const dataVerticalColor = { ...specsColor, variant: 'vertical' };

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
    delete clone.links.pop();
  }

  return Object.assign(clone, args);
};

export default {
  title: 'Components/Social Media Follow',
  decorators: [withNotes, withCode],
};

export const Horizontal = (_, { loaded: { component } }) => component;

Horizontal.render = async (args) => {
  const renderedHorizontal = await SocialMediaFollow(
    prepareData(dataHorizontal, args),
  );
  return renderedHorizontal;
};
Horizontal.storyName = 'horizontal (monochrome)';
Horizontal.args = getArgs(dataHorizontal);
Horizontal.argTypes = getArgTypes();
Horizontal.parameters = {
  notes: { markdown: notes, json: dataHorizontal },
};

export const HorizontalColor = (_, { loaded: { component } }) => component;

HorizontalColor.render = async (args) => {
  const renderedHorizontalColor = await SocialMediaFollow(
    prepareData(dataHorizontalColor, args),
  );
  return renderedHorizontalColor;
};
HorizontalColor.storyName = 'horizontal (color)';
HorizontalColor.args = getArgs(dataHorizontalColor);
HorizontalColor.argTypes = getArgTypes();
HorizontalColor.parameters = {
  notes: { markdown: notes, json: dataHorizontalColor },
};

export const Vertical = (_, { loaded: { component } }) => component;

Vertical.render = async (args) => {
  const renderedVertical = await SocialMediaFollow(
    prepareData(dataVertical, args),
  );
  return renderedVertical;
};
Vertical.storyName = 'vertical (monochrome)';
Vertical.args = getArgs(dataVertical);
Vertical.argTypes = getArgTypes();
Vertical.parameters = {
  notes: { markdown: notes, json: dataVertical },
};

export const VerticalColor = (_, { loaded: { component } }) => component;

VerticalColor.render = async (args) => {
  const renderedVerticalColor = await SocialMediaFollow(
    prepareData(dataVerticalColor, args),
  );
  return renderedVerticalColor;
};
VerticalColor.storyName = 'vertical (color)';
VerticalColor.args = getArgs(dataVerticalColor);
VerticalColor.argTypes = getArgTypes();
VerticalColor.parameters = {
  notes: { markdown: notes, json: dataVerticalColor },
};
