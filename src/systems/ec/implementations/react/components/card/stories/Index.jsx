import React from 'react';
import { withKnobs, text, array } from '@storybook/addon-knobs';

import demoContentCard from '@ecl/ec-specs-card/demo/data--card';
import demoContentTile from '@ecl/ec-specs-card/demo/data--tile';

import { Template as template } from './Template';

import Card from '../src/Card';

export default {
  title: 'Components/Card',
  decorators: [withKnobs],
};

export const _Card = () => {
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
};

_Card.storyName = 'card';

export const Tile = () => {
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
};

Tile.storyName = 'tile';

export const _Template = template;

_Template.storyName = 'template';
