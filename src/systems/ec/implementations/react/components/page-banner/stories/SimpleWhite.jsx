import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import demoContentSimple from '@ecl/ec-specs-page-banner/demo/data--simple';

import PageBanner from '../src/PageBanner';

export const SimpleWhite = () => {
  // Banner content
  const meta = text('Meta', demoContentSimple.meta, 'Banner content');
  const title = text('Title', demoContentSimple.title, 'Banner content');
  const description = text(
    'Description',
    demoContentSimple.description,
    'Banner content'
  );
  const link = {
    ...demoContentSimple.link,
    label: text('Link label', demoContentSimple.link.label, 'Banner content'),
  };

  // Banner display
  const centered = boolean('Centered', true, 'Banner display');
  const fullWidth = boolean(
    'Full width (outside the grid)',
    true,
    'Banner display'
  );
  const fullWidthGrid = boolean(
    'Full width (inside the grid)',
    false,
    'Banner display'
  );

  const pageBanner = (
    <PageBanner
      {...demoContentSimple}
      variant="white"
      meta={meta}
      title={title}
      description={description}
      link={link}
      isCentered={centered}
      isFullWidth={fullWidthGrid}
    />
  );
  return fullWidth ? (
    pageBanner
  ) : (
    <div className="ecl-container">{pageBanner}</div>
  );
};

SimpleWhite.story = {
  name: 'simple - white',
};
