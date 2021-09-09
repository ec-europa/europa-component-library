import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

import defaultSpriteEc from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import defaultSpriteEu from '@ecl/resources-eu-icons/dist/sprites/icons.svg';
import dataCard from '@ecl/specs-component-card/demo/data--card';
import dataCardTaxonomy from '@ecl/specs-component-card/demo/data--card-taxonomy';
import dataCardTile from '@ecl/specs-component-card/demo/data--tile';
import dataCardTileTaxonomy from '@ecl/specs-component-card/demo/data--tile-taxonomy';

import card from './card.html.twig';
import notes from './README.md';

const system = getSystem();
const defaultSprite = system === 'eu' ? defaultSpriteEu : defaultSpriteEc;

const infosClone = { ...dataCard.card.infos };
const linkClone = { ...dataCardTile.card.links[0] };
const tagClone = { ...dataCard.card.tags[0] };
const descriptionListClone = { ...dataCardTaxonomy.card.lists[0] };
const taxonomyListClone = { ...dataCardTaxonomy.card.lists[1] };

const getArgs = (data) => {
  const args = {};
  if (data.card.title) {
    args.title = data.card.title.label;
  }
  if (data.card.description) {
    args.description = data.card.description;
  }
  if (data.card.meta) {
    args.meta = data.card.meta;
  }
  if (data.card.image) {
    args.image = data.card.image.src;
  }
  if (data.card.infos) {
    const infos = data.card.infos.map(({ label }) => label);
    args.infos = infos;
  }
  if (data.card.tags) {
    const tags = data.card.tags.map(({ label }) => label);
    args.tags = tags;
  }
  if (data.card.links) {
    const links = data.card.links.map(({ label }) => label);
    args.links = links;
  }
  if (data.card.lists) {
    args.lists = true;
    args.taxonomy = true;
  }

  return args;
};

const getArgTypes = (data) => {
  const argTypes = {};
  if (data.card.title) {
    argTypes.title = {
      type: { name: 'string', required: true },
      description: 'The card title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.card.description) {
    argTypes.description = {
      type: 'string',
      description: 'The card description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.card.meta) {
    argTypes.meta = {
      name: 'meta',
      type: { name: 'array' },
      description: 'The card meta (comma separated)',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
        category: 'Content',
      },
    };
  }
  if (data.card.image) {
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
  if (data.card.infos) {
    argTypes.infos = {
      name: 'infos',
      type: 'array',
      description:
        'Additional elements like a location or a date. (comma separated)',
      table: {
        type: {
          summary: 'array of objects',
        },
        defaultValue: { summary: '[]' },
        category: 'Card footer',
      },
    };
  }
  if (data.card.tags) {
    argTypes.tags = {
      name: 'tags',
      type: 'array',
      description:
        'Tags to be placed at the bottom of the card. (comma separated)',
      table: {
        type: { summary: 'array of objects' },
        defaultValue: { summary: '[]' },
        category: 'Card footer',
      },
    };
  }
  if (data.card.links) {
    argTypes.links = {
      name: 'links',
      type: 'array',
      description:
        'Links to be placed at the bottom of the card. (comma separated)',
      table: {
        type: {
          summary: 'array of objects',
        },
        defaultValue: { summary: '[]' },
        category: 'Card footer',
      },
    };
  }
  if (data.card.lists) {
    argTypes.list = {
      name: 'Display additional list',
      type: 'boolean',
      description: 'Show/hide description list in the card footer',
      table: {
        category: 'Card footer',
      },
    };
    argTypes.taxonomy = {
      name: 'Display taxonomy list',
      type: 'boolean',
      description: 'Show/hide taxonomy list in the card footer',
      table: {
        category: 'Card footer',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  if (data.card.title) {
    data.card.title.label = args.title;
  }
  if (data.card.image) {
    data.card.image.src = args.image;
  }
  if (data.card.meta) {
    data.card.meta = args.meta;
  }
  if (data.card.infos) {
    data.card.infos = [];
    if (args.infos[0]) {
      args.infos.forEach((info, i) => {
        const addInfo = {
          label: info,
          icon: {
            ...infosClone[0].icon,
            path: defaultSprite,
            name: infosClone[i] ? infosClone[i].icon.name : 'faq',
            size: system === 'eu' ? 'm' : 'xs',
          },
        };
        data.card.infos.push(addInfo);
      });
    }
  }
  if (data.card.links) {
    data.card.links = [];
    if (args.links[0]) {
      args.links.forEach((link) => {
        data.card.links.push({ ...linkClone, label: link });
      });
    }
  }
  if (data.card.tags) {
    data.card.tags = [];
    if (args.tags[0]) {
      args.tags.forEach((tag) => {
        data.card.tags.push({ ...tagClone, label: tag });
      });
    }
  }
  if (data.card.lists) {
    if (!args.list) {
      data.card.lists[0] = [];
    } else {
      data.card.lists[0] = descriptionListClone;
    }
    if (!args.taxonomy) {
      data.card.lists[1] = [];
    } else {
      data.card.lists[1] = taxonomyListClone;
    }
  }

  return data;
};

export default {
  title: 'Components/Card',
  decorators: [withCode, withNotes],
};

export const Card = (args) => card(prepareData(dataCard, args));

Card.storyName = 'card';
Card.args = getArgs(dataCard);
Card.argTypes = getArgTypes(dataCard);
Card.parameters = { notes: { markdown: notes, json: dataCard } };

export const CardTaxonomy = (args) => card(prepareData(dataCardTaxonomy, args));

CardTaxonomy.storyName = 'card (taxonomy)';
CardTaxonomy.args = getArgs(dataCardTaxonomy);
CardTaxonomy.argTypes = getArgTypes(dataCardTaxonomy);
CardTaxonomy.parameters = {
  notes: { markdown: notes, json: dataCardTaxonomy },
};

export const Tile = (args) => card(prepareData(dataCardTile, args));

Tile.storyName = 'tile';
Tile.args = getArgs(dataCardTile);
Tile.argTypes = getArgTypes(dataCardTile);
Tile.parameters = { notes: { markdown: notes, json: dataCardTile } };

export const TileTaxonomy = (args) =>
  card(prepareData(dataCardTileTaxonomy, args));

TileTaxonomy.storyName = 'tile (taxonomy)';
TileTaxonomy.args = getArgs(dataCardTileTaxonomy);
TileTaxonomy.argTypes = getArgTypes(dataCardTileTaxonomy);
TileTaxonomy.parameters = {
  notes: { markdown: notes, json: dataCardTileTaxonomy },
};
