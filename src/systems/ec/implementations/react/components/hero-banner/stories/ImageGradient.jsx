import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import demoContentImageGradient from '@ecl/ec-specs-hero-banner/demo/data--image-shade';

import HeroBanner from '../src/HeroBanner';

export function ImageGradient() {
  // Banner content
  const title = text('Title', demoContentImageGradient.title, 'Banner content');
  const description = text(
    'Description',
    demoContentImageGradient.description,
    'Banner content'
  );
  const link = {
    ...demoContentImageGradient.link,
    label: text(
      'Link label',
      demoContentImageGradient.link.label,
      'Banner content'
    ),
  };
  const image = text('Image', demoContentImageGradient.image, 'Banner content');

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
      {...demoContentImageGradient}
      variant="image-gradient"
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

ImageGradient.storyName = 'image - gradient';
