/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-card/demo/data';

import Card from '../Card';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('card', () => {
    // Image
    const image = {
      alt: demoContent.image.alt,
      src: text('Image path', demoContent.image.src),
    };

    // Meta
    const meta = text('Meta', demoContent.meta);

    // Title
    const title = {
      label: text('Title', demoContent.title.label),
      href: demoContent.title.href,
    };

    // Description
    const description = text('Description', demoContent.description);

    // Items
    const itemsArray = array(
      'Items (comma separated)',
      demoContent.items.map(item => item.label)
    );
    const items = itemsArray.map((item, key) => ({
      label: item,
      icon: demoContent.items[key]
        ? demoContent.items[key].icon
        : { shape: 'general--faq', size: 'xs' },
    }));

    // Tags
    const tagsArray = array(
      'Tags (comma separated)',
      demoContent.tags.map(tag => tag.label)
    );
    const tags = tagsArray.map((tag, key) => ({
      label: tag,
      href: demoContent.tags[key] ? demoContent.tags[key].href : '/example',
    }));

    return (
      <Card
        image={image}
        meta={meta}
        title={title}
        description={description}
        items={items}
        tags={tags}
      />
    );
  })
  .add('tile', () => {
    // Title
    const title = {
      label: text('Title', demoContent.title.label),
      href: '',
    };

    // Description
    const description = text('Description', demoContent.description);

    // Links
    const linksArray = array(
      'Links (comma separated)',
      demoContent.links.map(link => link.label)
    );
    const links = linksArray.map((link, key) => ({
      label: link,
      href: demoContent.links[key] ? demoContent.links[key].href : '/example',
      variant: demoContent.links[key]
        ? demoContent.links[key].variant
        : 'standalone',
    }));

    return <Card title={title} description={description} links={links} />;
  });
