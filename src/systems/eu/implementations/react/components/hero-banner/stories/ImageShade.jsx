import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import demoContentImageShade from '@ecl/eu-specs-hero-banner/demo/data--image-shade';

import HeroBanner from '../src/HeroBanner';

export function ImageShade() {
  // Banner content
  const title = text('Title', demoContentImageShade.title, 'Banner content');
  const description = text(
    'Description',
    demoContentImageShade.description,
    'Banner content'
  );
  const link = {
    ...demoContentImageShade.link,
    label: text(
      'Link label',
      demoContentImageShade.link.label,
      'Banner content'
    ),
  };
  const image = text('Image', demoContentImageShade.image, 'Banner content');

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
      {...demoContentImageShade}
      variant="image-shade"
      title={title}
      description={description}
      link={link}
      isCentered={centered}
      isFullWidth={fullWidthGrid}
      image={image}
    />
  );
  return fullWidth ? (
    heroBanner
  ) : (
    <div className="ecl-container">{heroBanner}</div>
  );
}

ImageShade.storyName = 'image - shade';
