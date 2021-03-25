import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataCard from '@ecl/specs-component-card/demo/data--card';
import dataCardTaxonomy from '@ecl/specs-component-card/demo/data--card-taxonomy';
import dataCardTile from '@ecl/specs-component-card/demo/data--tile';
import dataCardTileTaxonomy from '@ecl/specs-component-card/demo/data--tile-taxonomy';

import card from './card.html.twig';
import notes from './README.md';

const infosClone = { ...dataCard.card.infos };
const linkClone = { ...dataCardTile.card.links[0] };
const tagClone = { ...dataCard.card.tags[0] };
const descriptionListClone = { ...dataCardTaxonomy.card.lists[0] };
const taxonomyListClone = { ...dataCardTaxonomy.card.lists[1] };

const getArgTypes = (data) => {
  const argTypes = {};
  if (data.card.title) {
    argTypes.title = {
      type: { name: 'string', required: true },
      defaultValue: data.card.title.label,
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
      defaultValue: data.card.description,
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
      defaultValue: data.card.meta,
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
      defaultValue: data.card.image.src,
      description: 'The url of the card image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
    };
  }
  if (data.card.infos) {
    const infos = data.card.infos.map(({ label }) => label);
    argTypes.infos = {
      name: 'infos',
      type: 'array',
      defaultValue: infos,
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
    const tags = data.card.tags.map(({ label }) => label);
    argTypes.tags = {
      name: 'tags',
      type: 'array',
      defaultValue: tags,
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
    const links = data.card.links.map(({ label }) => label);
    argTypes.links = {
      name: 'links',
      type: 'array',
      defaultValue: links,
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
      defaultValue: true,
      description: 'Show/hide description list in the card footer',
      table: {
        category: 'Card footer',
      },
    };
    argTypes.taxonomy = {
      name: 'Display taxonomy list',
      type: 'boolean',
      defaultValue: true,
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
  parameters: {
    creevey: { delay: 5000 },
  },
};

export const Card = (args) => card(prepareData(dataCard, args));

Card.storyName = 'card';
Card.argTypes = getArgTypes(dataCard);
Card.parameters = { notes: { markdown: notes, json: dataCard } };

export const CardTaxonomy = (args) => card(prepareData(dataCardTaxonomy, args));

CardTaxonomy.storyName = 'card (taxonomy)';
CardTaxonomy.argTypes = getArgTypes(dataCardTaxonomy);
CardTaxonomy.parameters = {
  notes: { markdown: notes, json: dataCardTaxonomy },
};

export const Tile = (args) => card(prepareData(dataCardTile, args));

Tile.storyName = 'tile';
Tile.argTypes = getArgTypes(dataCardTile);
Tile.parameters = { notes: { markdown: notes, json: dataCardTile } };

export const TileTaxonomy = (args) =>
  card(prepareData(dataCardTileTaxonomy, args));

TileTaxonomy.storyName = 'tile (taxonomy)';
TileTaxonomy.argTypes = getArgTypes(dataCardTileTaxonomy);
TileTaxonomy.parameters = {
  notes: { markdown: notes, json: dataCardTileTaxonomy },
};
