import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';

import demoData from './demo/data';
import featuredItem from './featured-item.html.twig';
import notes from './README.md';

const demoDataLight = { ...demoData, type: 'background-light' };
const demoDataStrong = { ...demoData, type: 'background-strong' };
const mediaContainer = { ...demoData.media_container };

const getArgs = (data) => {
  const args = {
    show_media: true,
    title: data.title,
    description: data.description,
    position: 'left',
  };
  if (data.link.link.label) {
    args.link_label = data.link.link.label;
  }
  args.color_mode = 'default';

  return args;
};

const getArgTypes = (data) => {
  const argTypes = getColorModeControls();

  argTypes.show_media = {
    type: 'boolean',
    name: 'show media',
    description: 'Toggle media visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.title = {
    type: 'string',
    description: 'Features item content title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  argTypes.description = {
    type: 'string',
    description: 'Features item content description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  if (data.link.link.label) {
    argTypes.link_label = {
      name: 'link label',
      type: { name: 'string' },
      description: 'Label of the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  argTypes.position = {
    type: { name: 'select' },
    description: 'Alignment inside featured item',
    options: ['left', 'right'],
    mapping: {
      left: 'left',
      right: 'right',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Display',
    },
    if: { arg: 'show_media' },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  if (clone.link.link.label) {
    clone.link.link.label = args.link_label;
  }
  if (args.show_media) {
    clone.media_container = mediaContainer;
  } else {
    delete clone.media_container;
  }

  return Object.assign(correctPaths(clone), args);
};

export default {
  title: 'Components/Featured item',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedFeaturedItem = await featuredItem(prepareData(demoData, args));
  return renderedFeaturedItem;
};
Default.storyName = 'default';
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.parameters = {
  notes: { markdown: notes, json: demoData },
};

export const Light = (_, { loaded: { component } }) => component;

Light.render = async (args) => {
  const renderedFeaturedItem = await featuredItem(
    prepareData(demoDataLight, args),
  );
  return renderedFeaturedItem;
};
Light.storyName = 'light background';
Light.args = getArgs(demoDataLight);
Light.argTypes = getArgTypes(demoDataLight);
Light.parameters = {
  notes: { markdown: notes, json: demoDataLight },
};

export const Strong = (_, { loaded: { component } }) => component;

Strong.render = async (args) => {
  const renderedFeaturedItem = await featuredItem(
    prepareData(demoDataStrong, args),
  );
  return renderedFeaturedItem;
};
Strong.storyName = 'strong background';
Strong.args = getArgs(demoDataStrong);
Strong.argTypes = getArgTypes(demoDataStrong);
Strong.parameters = {
  notes: { markdown: notes, json: demoDataStrong },
};
