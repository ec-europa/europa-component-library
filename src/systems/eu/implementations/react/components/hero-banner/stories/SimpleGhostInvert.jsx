/* eslint-disable import/no-extraneous-dependencies, import/prefer-default-export */
import React, { Fragment } from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import demoContentSimple from '@ecl/eu-specs-hero-banner/demo/data--simple';

import HeroBanner from '../src/HeroBanner';

export const SimpleGhostInvert = () => {
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

  const heroBanner = (
    <HeroBanner
      style={{
        backgroundImage:
          "url('https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '0 0',
      }}
      {...demoContentSimple}
      variant="ghost-invert"
      meta={meta}
      title={title}
      description={description}
      link={link}
      isCentered={centered}
      isFullWidth={fullWidthGrid}
    />
  );
  return fullWidth ? (
    <Fragment>
      <p className="ecl-u-type-paragraph">
        Note: this variant comes with a transparent background; the image here
        in inline style is just for demo
      </p>
      {heroBanner}
    </Fragment>
  ) : (
    <Fragment>
      <p className="ecl-u-type-paragraph">
        Note: this variant comes with a transparent background; the image here
        in inline style is just for demo
      </p>
      <div className="ecl-container">{heroBanner}</div>
    </Fragment>
  );
};

SimpleGhostInvert.story = {
  name: 'simple - transparent (white text)',
};
