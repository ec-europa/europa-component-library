import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-featured-item/demo/data';
import demoDataHighlight from '@ecl/specs-component-featured-item/demo/data--highlight';
import featuredItem from './featured-item.html.twig';
import notes from './README.md';

const mediaContainer = { ...demoData.media_container };

const getArgs = (data) => {
  const args = {
    show_media: true,
    show_footer: true,
    title: data.title,
    description: data.description,
    position: 'left',
  };
  if (data.link.link.label) {
    args.link_label = data.link.link.label;
  }
  if (data.footer_link.link.label) {
    args.footer_link_label = data.footer_link.link.label;
  }
  if (data.footer_description) {
    args.footer_description = data.footer_description;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

  argTypes.show_media = {
    type: 'boolean',
    name: 'show media',
    description: 'Toggle media visility',
    table: {
      category: 'Optional',
    },
  };

  argTypes.show_footer = {
    type: 'boolean',
    name: 'show footer',
    description: 'Toggle footer visility',
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
      type: { name: 'string', required: true },
      description: 'Label of the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }

  if (data.footer_link.link.label) {
    argTypes.footer_link_label = {
      name: 'footer link label',
      type: { name: 'string' },
      description: 'Label of the footer link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_footer' },
    };
  }

  if (data.footer_description) {
    argTypes.footer_description = {
      name: 'footer description',
      type: { name: 'string' },
      description: 'Label of the footer description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_footer' },
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

  if (!args.show_footer) {
    delete clone.footer_description;
    delete clone.footer_link;
    delete clone.footer_picture;
  } else {
    clone.footer_link.link.label = args.footer_link_label;
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

export const Highlight = (_, { loaded: { component } }) => component;

Highlight.render = async (args) => {
  const renderedFeaturedItem = await featuredItem(
    prepareData(demoDataHighlight, args),
  );
  return renderedFeaturedItem;
};
Highlight.storyName = 'highlighted';
Highlight.args = getArgs(demoDataHighlight);
Highlight.argTypes = getArgTypes(demoDataHighlight);
Highlight.parameters = {
  notes: { markdown: notes, json: demoDataHighlight },
};
