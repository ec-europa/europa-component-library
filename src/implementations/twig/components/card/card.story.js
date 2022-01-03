import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataCard from '@ecl/specs-component-card/demo/data--card';
import dataCardTaxonomy from '@ecl/specs-component-card/demo/data--card-taxonomy';
import dataCardTile from '@ecl/specs-component-card/demo/data--tile';
import card from './card.html.twig';
import notes from './README.md';

const metaClone = [...dataCard.card.meta];
const infosClone = [...dataCard.card.infos];
const linkClone = [...dataCardTile.card.links];
const tagClone = [...dataCard.card.tags];
const labelClone = [...dataCard.card.labels];
const descriptionListClone = { ...dataCardTaxonomy.card.lists[0] };
const taxonomyListClone = { ...dataCardTaxonomy.card.lists[1] };

const getArgs = (data, variant) => {
  const args = {};
  args.show_description = true;
  if (variant === 'card') {
    args.show_image = true;
    args.image = (data.card && data.card.image && data.card.image.src) || '';
  }
  args.show_infos = !!data.card.infos;
  args.show_tags = !!data.card.tags;
  args.show_meta = !!data.card.meta;
  args.show_labels = !!data.card.labels;

  if (variant === 'tile') {
    args.show_links = !!data.card.links;
  }
  args.show_lists = false;
  args.show_taxonomy = false;
  args.title = (data.card.title && data.card.title.label) || '';
  args.description = (data.card && data.card.description) || '';

  return args;
};

const getArgTypes = (data, variant) => {
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
  if (variant === 'card') {
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
  if (variant === 'tile') {
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
  const lists = [];

  if (args.show_lists) {
    lists.push(descriptionListClone);
  }
  if (args.show_taxonomy) {
    lists.push(taxonomyListClone);
  }

  if (data.card.image) {
    data.card.image.src = args.image;
  }

  data.card.description = args.show_description ? args.description : '';

  if (data.card.image) {
    data.card.image.src = args.show_image ? args.image : '';
  }

  data.card.title.label = args.title;
  data.card.tags = args.show_tags ? tagClone : [];
  data.card.meta = args.show_meta ? metaClone : [];
  data.card.links = args.show_links ? linkClone : [];
  data.card.infos = args.show_infos ? infosClone : [];
  data.card.labels = args.show_labels ? labelClone : [];
  data.card.lists = lists;

  correctSvgPath(data);

  return data;
};

export default {
  title: 'Components/Card',
  decorators: [withCode, withNotes],
};

export const Card = (args) => card(prepareData(dataCard, args));

Card.storyName = 'default';
Card.args = getArgs(dataCard, 'card');
Card.argTypes = getArgTypes(dataCard, 'card');
Card.parameters = { notes: { markdown: notes, json: dataCard } };

export const Tile = (args) => card(prepareData(dataCardTile, args));

Tile.storyName = 'tile';
Tile.args = getArgs(dataCardTile, 'tile');
Tile.argTypes = getArgTypes(dataCardTile, 'tile');
Tile.parameters = { notes: { markdown: notes, json: dataCardTile } };
