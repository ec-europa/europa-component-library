import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataCard from '@ecl/specs-component-card/demo/data--card';
import dataCardEvent from '@ecl/specs-component-card/demo/data--card-event';
import dataCardTile from '@ecl/specs-component-card/demo/data--tile';

import card from './card.html.twig';
import notes from './README.md';

const getArgTypes = (data) => {
  const argTypes = {};
  argTypes.title = {
    name: 'title',
    type: { name: 'string', required: true },
    defaultValue: data.card.title.label,
    description: 'The card title',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  argTypes.description = {
    name: 'description',
    type: { name: 'string' },
    defaultValue: data.card.description,
    description: 'The card description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  };
  if (data.card.meta) {
    argTypes.meta = {
      name: 'meta (comma separated)',
      type: { name: 'array' },
      defaultValue: data.card.meta,
      description: 'The card meta',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: [] },
        category: 'Content',
      },
    };
  }
  if (data.card.image) {
    argTypes.image = {
      name: 'image',
      type: { name: 'string' },
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
      name: 'infos (comma separated)',
      type: { name: 'array' },
      defaultValue: infos,
      description: 'Additional elements like a location or a date',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: [] },
        category: 'Card footer',
      },
    };
  }
  if (data.card.tags) {
    const tags = data.card.tags.map(({ label }) => label);
    argTypes.tags = {
      name: 'tags (comma separated)',
      defaultValue: tags,
      description: 'Tags to be placed at the bottom of the card.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: [] },
        category: 'Card footer',
      },
    };
  }
  if (data.card.links) {
    const links = data.card.links.map(({ label }) => label);
    argTypes.links = {
      name: 'links (comma separated)',
      type: { name: 'array' },
      defaultValue: links,
      description: 'Links to be placed at the bottom of the card.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: [] },
        category: 'Card footer',
      },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  data.card.title.label = args.title;
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
            path: defaultSprite,
            type: 'general',
            size: 'xs',
          },
        };
        if (i === 0) {
          addInfo.icon.name = 'calendar';
        } else if (i === 1) {
          addInfo.icon.name = 'location';
        } else {
          addInfo.icon.name = 'faq';
        }
        data.card.infos.push(addInfo);
      });
    }
  }
  if (data.card.links) {
    data.card.links = [];
    if (args.links[0]) {
      args.links.forEach((link) => {
        const addLink = {
          label: link,
          path: '/example',
          type: 'standalone',
        };
        data.card.links.push(addLink);
      });
    }
  }
  if (data.card.tags) {
    data.card.tags = [];
    if (args.tags[0]) {
      args.tags.forEach((tag) => {
        const addTag = {
          label: tag,
          path: '/example',
        };
        data.card.tags.push(addTag);
      });
    }
  }

  return data;
};

export default {
  title: 'Components/Card',
  decorators: [withCode, withNotes],
  parameters: {
    knobs: {
      disable: true,
    },
  },
};

export const Card = (args) => card(prepareData(dataCard, args));

Card.storyName = 'card';
Card.argTypes = getArgTypes(dataCard);
Card.parameters = { notes: { markdown: notes, json: dataCard } };

export const Tile = (args) => card(prepareData(dataCardTile, args));

Tile.storyName = 'tile';
Tile.argTypes = getArgTypes(dataCardTile);
Tile.parameters = { notes: { markdown: notes, json: dataCardTile } };

export const Event = (args) => card(prepareData(dataCardEvent, args));

Event.storyName = 'event';
Event.argTypes = getArgTypes(dataCardEvent);
Event.parameters = { notes: { markdown: notes, json: dataCardEvent } };
