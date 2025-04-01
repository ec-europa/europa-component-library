import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctPaths } from '@ecl/story-utils';

import demoDataSimple from '@ecl/specs-component-featured-item/demo/data--simple';
import featuredItem from './featured-item.html.twig';
import notes from './README.md';

const getArgs = (data) => ({
  show_media: true,
  title: data.title,
  description: data.description,
  position: 'left',
  link_label: data.link.link.label,
  show_footer: false,
});

const getArgTypes = () => ({
  show_media: {
    type: 'boolean',
    name: 'show media',
    description: 'Toggle media visibility',
    table: { category: 'Optional' },
  },
  title: {
    type: 'string',
    description: 'Featured item content title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  description: {
    type: 'string',
    description: 'Featured item content description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  link_label: {
    name: 'link label',
    type: { name: 'string', required: true },
    description: 'Label of the link',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  show_footer: {
    type: 'boolean',
    name: 'show footer',
    description: 'Toggle footer visibility',
    table: { category: 'Deprecated' },
  },
  position: {
    type: { name: 'select' },
    description: 'Alignment inside featured item',
    options: ['left', 'right'],
    mapping: { left: 'left', right: 'right' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Display',
    },
    if: { arg: 'show_media' },
  },
});

const prepareData = (data, args) => {
  const clone = JSON.parse(JSON.stringify(data));

  // Apply link label
  if (clone.link.link.label) {
    clone.link.link.label = args.link_label;
  }

  // Toggle media
  if (!args.show_media) {
    delete clone.media_container;
  }

  // Toggle footer
  if (!args.show_footer) {
    delete clone.footer_description;
    delete clone.footer_link;
    delete clone.footer_picture;
  }

  return Object.assign(correctPaths(clone), args);
};

export default {
  title: 'Components/Deprecated/Featured item',
  decorators: [withNotes, withCode],
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
Simple.argTypes = getArgTypes();
Simple.parameters = {
  notes: { markdown: notes, json: demoDataSimple },
};
