import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataCard from '@ecl/specs-component-card/demo/data--card';
import dataCardTaxonomy from '@ecl/specs-component-card/demo/data--card-taxonomy';
import card from './card.html.twig';
import notes from './README.md';

const descriptionListClone = { ...dataCardTaxonomy.card.lists[0] };
const taxonomyListClone = { ...dataCardTaxonomy.card.lists[1] };

const getArgs = (data) => {
  const args = {};
  args.show_description = true;
  if (data.card.image) {
    args.show_image = true;
    args.image = (data.card && data.card.image && data.card.image.src) || '';
  }
  args.show_infos = !!data.card.infos;
  args.show_tags = !!data.card.tags;
  args.show_meta = !!data.card.meta;
  args.show_labels = !!data.card.labels;

  if (data.card.links) {
    args.show_links = true;
  }
  args.show_lists = false;
  args.show_taxonomy = false;
  args.title = (data.card.title && data.card.title.label) || '';
  args.description = (data.card && data.card.description) || '';

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};
  argTypes.show_description = {
    name: 'description',
    type: { name: 'boolean' },
    description: 'Show the description',
    table: {
      category: 'Optional',
    },
  };
  argTypes.show_meta = {
    name: 'meta',
    type: { name: 'boolean' },
    description: 'Show meta',
    table: {
      category: 'Optional',
    },
  };
  if (data.card.image) {
    argTypes.show_image = {
      name: 'image',
      type: { name: 'boolean' },
      description: 'Show image',
      table: {
        category: 'Optional',
      },
    };
    argTypes.image = {
      type: 'string',
      description: 'The url of the card image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  argTypes.show_labels = {
    name: 'labels',
    type: 'boolean',
    description: 'Labels to be placed at the top of the card',
    table: {
      category: 'Optional',
    },
  };
  argTypes.show_infos = {
    name: 'infos',
    type: 'boolean',
    description: 'Show infos',
    table: {
      category: 'Optional',
    },
  };
  argTypes.show_tags = {
    name: 'tags',
    type: 'boolean',
    description: 'Show tags',
    table: {
      category: 'Optional',
    },
  };
  if (data.card.links) {
    argTypes.show_links = {
      name: 'links',
      type: 'boolean',
      description: 'Show links',
      table: {
        category: 'Optional',
      },
    };
  }
  argTypes.show_lists = {
    name: 'description list',
    type: 'boolean',
    description: 'Show description list',
    table: {
      category: 'Optional',
    },
  };
  argTypes.show_taxonomy = {
    name: 'taxonomy list',
    type: 'boolean',
    description: 'Show taxonomy list',
    table: {
      category: 'Optional',
    },
  };
  argTypes.title = {
    type: { name: 'string', required: true },
    description: 'The card title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.description = {
    type: 'string',
    description: 'The card description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  correctSvgPath(data);
  const clone = JSON.parse(JSON.stringify(data));
  const lists = [];

  // Optional elements
  if (args.show_lists) {
    lists.push(descriptionListClone);
  }
  if (args.show_taxonomy) {
    lists.push(taxonomyListClone);
  }
  if (!args.show_description) {
    delete clone.card.description;
  }
  if (!args.show_image) {
    delete clone.card.image;
  }
  if (!args.show_meta) {
    delete clone.card.meta;
  }
  if (!args.show_labels) {
    delete clone.card.labels;
  }
  if (!args.show_infos) {
    delete clone.card.infos;
  }
  if (!args.show_tags) {
    delete clone.card.tags;
  }

  // Other controls
  if (clone.card.image) {
    clone.card.image.src = args.image;
  }
  if (clone.card.description) {
    clone.card.description = args.description;
  }
  if (clone.card.title) {
    clone.card.title.label = args.title;
  }
  clone.card.lists = lists;

  return clone;
};

export default {
  title: 'Components/Card',
  decorators: [withCode, withNotes],
};

export const Card = (args) => card(prepareData(dataCard, args));

Card.storyName = 'default';
Card.args = getArgs(dataCard);
Card.argTypes = getArgTypes(dataCard);
Card.parameters = { notes: { markdown: notes, json: dataCard } };
