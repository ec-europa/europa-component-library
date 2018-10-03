/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import demoContentCard from '@ecl/eu-specs-card/demo/data--card';
import demoContentTile from '@ecl/eu-specs-card/demo/data--tile';

import Card from '../Card';

const Template = () => {
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
    variant: 'standalone',
    label: 'Policy coherence for development in the European Union',
    href: '/example#1',
  };
  const title2 = {
    variant: 'standalone',
    label:
      "The programming of EU's external assistance and development aid and the fragile balance of power bet ween EEAS and DG DEVCO",
    href: '/example#2',
  };
  const title3 = {
    variant: 'standalone',
    label: 'Who gets what',
    href: '/example#3',
  };
  const title4 = {
    variant: 'standalone',
    label:
      'Tied aid and development aid procurement in the framework of EU and WTO law',
    href: '',
  };
  const title5 = {
    variant: 'standalone',
    label: 'Cost of development policy',
    href: '',
  };
  const title6 = {
    variant: 'standalone',
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
          infos={demoContentCard.infos}
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
};

export default Template;
