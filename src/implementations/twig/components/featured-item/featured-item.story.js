import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import demoData from '@ecl/specs-component-featured-item/demo/data';
import demoDataExtended from '@ecl/specs-component-featured-item/demo/data--extended';
import featuredItem from './featured-item.html.twig';
import notes from './README.md';

const getArgs = (data) => {
  const args = {
    title: data.title,
    description: data.description,
    position: 'left',
  };
  if (data.link.link.label) {
    args.link_label = data.link.link.label;
  }
  if (data.media_container.image && !data.media_container.sources) {
    args.image = data.media_container.image;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};

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

  if (data.media_container.image && !data.media_container.sources) {
    argTypes.image = {
      type: { name: 'string', required: true },
      description: 'Path or Url of the image',
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
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Display',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  if (data.link.link.label) {
    data.link.link.label = args.link_label;
  }
  if (data.media_container.image) {
    data.media_container.image = args.image;
  }
  return Object.assign(correctSvgPath(data), args);
};

export default {
  title: 'Components/Featured item',
  decorators: [withNotes, withCode],
};

export const Default = (args) => featuredItem(prepareData(demoData, args));

Default.storyName = 'default';
Default.args = getArgs(demoData);
Default.argTypes = getArgTypes(demoData);
Default.parameters = {
  notes: { markdown: notes, json: demoData },
};

export const Extended = (args) =>
  featuredItem(prepareData(demoDataExtended, args));

Extended.storyName = 'extended';
Extended.args = getArgs(demoDataExtended);
Extended.argTypes = getArgTypes(demoDataExtended);
Extended.parameters = {
  notes: { markdown: notes, json: demoDataExtended },
};
