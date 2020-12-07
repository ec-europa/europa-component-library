import { withNotes } from '@ecl/storybook-addon-notes';
import {
  withKnobs,
  text,
  array,
  select,
  optionsKnob,
} from '@storybook/addon-knobs';
import withCode from '@ecl/storybook-addon-code';
import { getExtraKnobs, tabLabels } from '@ecl/story-utils';

import generalIcons from '@ecl/resources-ec-icons/dist/lists/general.json';
import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import dataCard from '@ecl/specs-component-card/demo/data--card';
import dataCardEvent from '@ecl/specs-component-card/demo/data--card-event';
import dataCardTile from '@ecl/specs-component-card/demo/data--tile';

import card from './card.html.twig';
import notes from './README.md';

const iconsList = [];
generalIcons.forEach((icon) => {
  iconsList.push(icon);
});

const prepareCard = (data) => {
  data.card.title.label = text(
    'card.title.label',
    data.card.title.label,
    tabLabels.required
  );

  if (data.card.title.type) {
    data.card.title.type = text(
      'card.title.type',
      data.card.title.type,
      tabLabels.optional
    );
  }
  data.card.description = text(
    'card.description',
    data.card.description,
    tabLabels.optional
  );
  data.card.meta = array('card.meta', data.card.meta, '|', tabLabels.optional);
  if (data.card.tags) {
    data.card.tags.forEach((tag, i) => {
      tag.label = text(`card.tags[${i}].label`, tag.label, tabLabels.optional);
    });
  }
  data.icon_path = optionsKnob(
    'icon_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.optional
  );
  if (data.card.infos) {
    data.card.infos.forEach((info, i) => {
      info.label = text(
        `card.infos[${i}].label`,
        info.label,
        tabLabels.optional
      );
      info.icon.path = optionsKnob(
        `infos[${i}].icon.path (not needed if icon_path is set)`,
        { current: defaultSprite, 'no path': '' },
        defaultSprite,
        { display: 'inline-radio' },
        tabLabels.optional
      );
      if (data.card.infos[i].icon.path || data.icon_path) {
        info.icon.name = select(
          `infos[${i}].icon.name`,
          [...iconsList],
          info.icon.name,
          tabLabels.optional
        );
        info.icon.type = select(
          `infos[${i}].icon.type`,
          [info.icon.type],
          info.icon.type,
          tabLabels.optional
        );
        info.icon.size = select(
          `infos[${i}].icon.size (the size will not change, this is for demoing that)`,
          ['xl', 'm', 's', 'xs', '2xs'],
          info.icon.size,
          tabLabels.optional
        );
      }
    });
  }
  if (data.card.links) {
    data.card.links.forEach((link, i) => {
      link.label = text(
        `card.links[${i}].label`,
        link.label,
        tabLabels.optional
      );
    });
  }
  if (data.card.image) {
    data.card.image.alt = text(
      'card.image.alt',
      data.card.image.alt,
      tabLabels.optional
    );
    data.card.image.src = text(
      'card.image.src',
      data.card.image.src,
      tabLabels.optional
    );
  }

  getExtraKnobs(data);

  // Return the full data
  return data;
};

export default {
  title: 'Components/Card',
  decorators: [withCode, withNotes, withKnobs],
};

export const Card = () => card(prepareCard(dataCard));

Card.storyName = 'card';
Card.parameters = { notes: { markdown: notes, json: dataCard } };

export const Tile = () => card(prepareCard(dataCardTile));

Tile.storyName = 'tile';
Tile.parameters = { notes: { markdown: notes, json: dataCardTile } };

export const Event = () => card(prepareCard(dataCardEvent));

Event.storyName = 'event';
Event.parameters = { notes: { markdown: notes, json: dataCardEvent } };
