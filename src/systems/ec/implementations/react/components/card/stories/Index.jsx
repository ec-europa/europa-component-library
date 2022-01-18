import React from 'react';
import { withKnobs, text, array, boolean } from '@storybook/addon-knobs';

import demoContentCard from '@ecl/ec-specs-card/demo/data--card';
import demoContentCardTaxonomy from '@ecl/ec-specs-card/demo/data--card-taxonomy';
import demoContentTile from '@ecl/ec-specs-card/demo/data--tile';
import demoContentTileTaxonomy from '@ecl/ec-specs-card/demo/data--tile-taxonomy';

import { Template as template } from './Template';

import Card from '../src/Card';

export default {
  title: 'Components/Card',
  decorators: [withKnobs],
};

export function CardDefault() {
  const image = {
    alt: demoContentCard.image.alt,
    src: text('Image path', demoContentCard.image.src),
  };

  const meta = text('Meta', demoContentCard.meta);

  const title = {
    variant: demoContentCard.title.variant,
    label: text('Title', demoContentCard.title.label),
    href: demoContentCard.title.href,
    level: demoContentCard.title.level,
  };

  const description = text('Description', demoContentCard.description);

  const infosArray = array(
    'infos (comma separated)',
    demoContentCard.infos.map((info) => info.label)
  );

  const infos = infosArray.map((info, key) => ({
    label: info,
    icon: demoContentCard.infos[key]
      ? demoContentCard.infos[key].icon
      : { shape: 'general--faq', size: 'xs' },
  }));

  const tagsArray = array(
    'Tags (comma separated)',
    demoContentCard.tags.map((tag) => tag.label)
  );

  const tags = tagsArray.map((tag, key) => ({
    label: tag,
    href: demoContentCard.tags[key]
      ? demoContentCard.tags[key].href
      : '/example',
  }));

  return (
    <Card
      image={image}
      meta={meta}
      title={title}
      description={description}
      infos={infos}
      tags={tags}
    />
  );
}

CardDefault.storyName = 'card';

export function CardTaxonomy() {
  const image = {
    alt: demoContentCardTaxonomy.image.alt,
    src: text('Image path', demoContentCardTaxonomy.image.src),
  };

  const meta = text('Meta', demoContentCardTaxonomy.meta);

  const title = {
    variant: demoContentCardTaxonomy.title.variant,
    label: text('Title', demoContentCardTaxonomy.title.label),
    href: demoContentCardTaxonomy.title.href,
    level: demoContentCardTaxonomy.title.level,
  };

  const description = text('Description', demoContentCardTaxonomy.description);

  const infosArray = array(
    'infos (comma separated)',
    demoContentCardTaxonomy.infos.map((info) => info.label)
  );

  const infos = infosArray.map((info, key) => ({
    label: info,
    icon: demoContentCardTaxonomy.infos[key]
      ? demoContentCardTaxonomy.infos[key].icon
      : { shape: 'general--faq', size: 'xs' },
  }));

  const displayList = boolean('Display additional list', true);
  const displayTaxonomy = boolean('Display taxonomy list', true);

  return (
    <Card
      image={image}
      meta={meta}
      title={title}
      description={description}
      infos={infos}
      list={displayList ? demoContentCardTaxonomy.list : {}}
      taxonomy={displayTaxonomy ? demoContentCardTaxonomy.taxonomy : {}}
    />
  );
}

CardTaxonomy.storyName = 'card (taxonomy)';

export function Tile() {
  const title = {
    variant: demoContentTile.title.variant,
    label: text('Title', demoContentTile.title.label),
    href: '',
    level: demoContentTile.title.level,
  };

  const description = text('Description', demoContentTile.description);

  const linksArray = array(
    'Links (comma separated)',
    demoContentTile.links.map((link) => link.label)
  );

  const links = linksArray.map((link, key) => ({
    label: link,
    href: demoContentTile.links[key]
      ? demoContentTile.links[key].href
      : '/example',
    variant: demoContentTile.links[key]
      ? demoContentTile.links[key].variant
      : 'standalone',
  }));

  return <Card title={title} description={description} links={links} />;
}

Tile.storyName = 'tile';

export function TileTaxonomy() {
  const displayList = boolean('Display additional list', true);
  const displayTaxonomy = boolean('Display taxonomy list', true);

  return (
    <Card
      list={displayList ? demoContentTileTaxonomy.list : {}}
      taxonomy={displayTaxonomy ? demoContentTileTaxonomy.taxonomy : {}}
    />
  );
}

TileTaxonomy.storyName = 'tile (taxonomy)';

export const _Template = template;

_Template.storyName = 'template';
