import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/eu-specs-hero-banner/demo/data--image';

import HeroBanner from '../src/HeroBanner';

export const ImageBox = () => {
  // Banner content
  const title = text('Title', demoContentImage.title, 'Banner content');
  const description = text(
    'Description',
    demoContentImage.description,
    'Banner content'
  );
  const link = {
    ...demoContentImage.link,
    label: text('Link label', demoContentImage.link.label, 'Banner content'),
  };
  const image = text('Image', demoContentImage.image, 'Banner content');

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
      {...demoContentImage}
      variant="image"
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
};

ImageBox.storyName = 'image - text box';
