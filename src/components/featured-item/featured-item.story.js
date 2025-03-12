import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getColorModeControls, correctPaths } from '@ecl/story-utils';
import getSystem from '@ecl/builder/utils/getSystem';

import demoData from './demo/data';
import featuredItem from './featured-item.html.twig';
import notes from './README.md';

const demoDataSimple = { ...demoData, type: 'simple' };
const demoDataHighlighted = { ...demoData, type: 'highlight' };
const mediaContainer = { ...demoData.media_container };
const system = getSystem();

const getArgs = (data) => {
  const args = {
    show_media: true,
    title: data.title,
    description: data.description,
    position: 'left',
  };
  if (data.link.link.label) {
    args.link_label = data.link.link.label;
    args.link_highlighted = false;
  }
  if (system === 'ec') {
    args.color_mode = 'default';
  }

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

  argTypes.link_highlighted = {
    type: 'boolean',
    name: 'highlighted link',
    description: 'Use highlighted display for link',
    table: {
      category: 'Content',
    },
    if: { arg: 'link_label', neq: '' },
  };

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
  if (clone.link.icon) {
    clone.link.icon.size = system === 'ec' ? 'm' : 'xs';
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

export const Simple = (_, { loaded: { component } }) => component;

Simple.render = async (args) => {
  const renderedFeaturedItem = await featuredItem(
    prepareData(demoDataSimple, args),
  );
  return renderedFeaturedItem;
};
Simple.storyName = 'simple';
Simple.args = getArgs(demoDataSimple);
Simple.argTypes = getArgTypes(demoDataSimple);
Simple.parameters = {
  notes: { markdown: notes, json: demoDataSimple },
};

export const Highlighted = (_, { loaded: { component } }) => component;

Highlighted.render = async (args) => {
  const renderedFeaturedItem = await featuredItem(
    prepareData(demoDataHighlighted, args),
  );
  return renderedFeaturedItem;
};
Highlighted.storyName = 'highlighted';
Highlighted.args = getArgs(demoDataHighlighted);
Highlighted.argTypes = getArgTypes(demoDataHighlighted);
Highlighted.parameters = {
  notes: { markdown: notes, json: demoDataHighlighted },
};
