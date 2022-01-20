import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import demoContentSimple from '@ecl/ec-specs-hero-banner/demo/data--simple';

import HeroBanner from '../src/HeroBanner';

export function SimplePrimary() {
  // Banner content
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

  const heroBanner = (
    <HeroBanner
      {...demoContentSimple}
      variant="primary"
      title={title}
      description={description}
      link={link}
      isCentered={centered}
      isFullWidth={fullWidthGrid}
    />
  );
  return fullWidth ? (
    heroBanner
  ) : (
    <div className="ecl-container">{heroBanner}</div>
  );
}

SimplePrimary.storyName = 'simple - primary';
