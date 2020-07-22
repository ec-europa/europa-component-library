import React from 'react';

import demoContentCard from '@ecl/eu-specs-card/demo/data--card';
import demoContentTile from '@ecl/eu-specs-card/demo/data--tile';

import Card from '../src/Card';

export const Template = () => {
  const image1 = {
    alt: demoContentCard.image.alt,
    src: demoContentCard.image.src,
  };
  const title1 = {
    variant: 'standalone',
    label: 'Policy coherence for development in the European Union',
    href: '/example#1',
    level: 3,
  };
  const title2 = {
    variant: 'standalone',
    label:
      "The programming of EU's external assistance and development aid and the fragile balance of power bet ween EEAS and DG DEVCO",
    href: '/example#2',
    level: 1,
  };
  const title3 = {
    variant: 'standalone',
    label: 'Who gets what',
    href: '/example#3',
    level: 1,
  };
  const title4 = {
    variant: 'standalone',
    label:
      'Tied aid and development aid procurement in the framework of EU and WTO law',
    href: '',
    level: 1,
  };
  const title5 = {
    variant: 'standalone',
    label: 'Cost of development policy',
    href: '',
    level: 1,
  };
  const title6 = {
    variant: 'standalone',
    label:
      'France, Europe and development aid : from the treaties of Rome to the present day',
    href: '',
    level: 1,
  };

  return (
    <div className="ecl-container">
      <ul className="ecl-row" style={{ padding: 0, listStyle: 'none' }}>
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
            image={image1}
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
    </div>
  );
};
