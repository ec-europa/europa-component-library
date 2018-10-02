/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array } from '@storybook/addon-knobs';

import demoContentCard from '@ecl/eu-specs-card/demo/data--card';
import demoContentTile from '@ecl/eu-specs-card/demo/data--tile';

import Card from '../Card';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('card', () => {
    // Image
    const image = {
      alt: demoContentCard.image.alt,
      src: text('Image path', demoContentCard.image.src),
    };

    // Meta
    const meta = text('Meta', demoContentCard.meta);

    // Title
    const title = {
      label: text('Title', demoContentCard.title.label),
      href: demoContentCard.title.href,
    };

    // Description
    const description = text('Description', demoContentCard.description);

    // Items
    const itemsArray = array(
      'Items (comma separated)',
      demoContentCard.items.map(item => item.label)
    );
    const items = itemsArray.map((item, key) => ({
      label: item,
      icon: demoContentCard.items[key]
        ? demoContentCard.items[key].icon
        : { shape: 'general--faq', size: 'xs' },
    }));

    // Tags
    const tagsArray = array(
      'Tags (comma separated)',
      demoContentCard.tags.map(tag => tag.label)
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
        items={items}
        tags={tags}
      />
    );
  })
  .add('tile', () => {
    // Title
    const title = {
      label: text('Title', demoContentTile.title.label),
      href: '',
    };

    // Description
    const description = text('Description', demoContentTile.description);

    // Links
    const linksArray = array(
      'Links (comma separated)',
      demoContentTile.links.map(link => link.label)
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
  })
  .add('template', () => {
    const image1 = {
      alt: demoContentCard.image.alt,
      src:
        'https://ec.europa.eu/commission/sites/beta-political/files/styles/header_image_breakpoints_theme_europa_wide_2x/public/homepage-banner-2400x900_003.jpg?yxX_LZza',
    };
    const image2 = {
      alt: demoContentCard.image.alt,
      src:
        'https://ec.europa.eu/commission/sites/beta-political/files/styles/banner_image_breakpoints_theme_europa_normal_1x/public/parliament-plenary.png?itok=craeArBi&timestamp=1452594609',
    };
    const title1 = {
      label: 'Policy coherence for development in the European Union',
      href: '/example#1',
    };
    const title2 = {
      label:
        "The programming of EU's external assistance and development aid and the fragile balance of power bet ween EEAS and DG DEVCO",
      href: '/example#2',
    };
    const title3 = {
      label: 'Who gets what',
      href: '/example#3',
    };
    const title4 = {
      label:
        'Tied aid and development aid procurement in the framework of EU and WTO law',
      href: '',
    };
    const title5 = {
      label: 'Cost of development policy',
      href: '',
    };
    const title6 = {
      label:
        'France, Europe and development aid : from the treaties of Rome to the present day',
      href: '',
    };

    return (
      <ul
        className="ecl-row"
        style={{ margin: 0, padding: 0, listStyle: 'none' }}
      >
        <li className="ecl-col-md-4" style={{ marginTop: '1rem' }}>
          <Card
            image={demoContentCard.image}
            meta={demoContentCard.meta}
            title={title1}
            description={demoContentCard.description}
            tags={demoContentCard.tags}
          />
        </li>
        <li className="ecl-col-md-4" style={{ marginTop: '1rem' }}>
          <Card
            image={image1}
            meta={demoContentCard.meta}
            title={title2}
            description={demoContentCard.description}
            items={demoContentCard.items}
          />
        </li>
        <li className="ecl-col-md-4" style={{ marginTop: '1rem' }}>
          <Card
            image={image2}
            meta={demoContentCard.meta}
            title={title3}
            description={demoContentCard.description}
          />
        </li>
        <li className="ecl-col-md-4" style={{ marginTop: '1rem' }}>
          <Card title={title4} links={demoContentTile.links} />
        </li>
        <li className="ecl-col-md-4" style={{ marginTop: '1rem' }}>
          <Card title={title5} description={demoContentTile.description} />
        </li>
        <li className="ecl-col-md-4" style={{ marginTop: '1rem' }}>
          <Card
            title={title6}
            description={demoContentTile.description}
            links={demoContentTile.links}
          />
        </li>
      </ul>
    );
  });
