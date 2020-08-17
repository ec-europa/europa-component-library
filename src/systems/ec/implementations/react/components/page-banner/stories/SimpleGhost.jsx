import React from 'react';
import { text, boolean, array } from '@storybook/addon-knobs';

import demoContentSimple from '@ecl/ec-specs-page-banner/demo/data--simple';

import PageBanner from '../src/PageBanner';

export const SimpleGhost = () => {
  // Banner content
  const meta = Array.isArray(demoContentSimple.meta)
    ? array(
        'Meta (comma separated)',
        demoContentSimple.meta,
        ',',
        'Banner content'
      )
    : text('Meta', demoContentSimple.meta, 'Banner content');
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
      style={{
        backgroundImage:
          "url('https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: '0 0',
      }}
      {...demoContentSimple}
      variant="ghost"
      meta={meta}
      title={title}
      description={description}
      link={link}
      isCentered={centered}
      isFullWidth={fullWidthGrid}
    />
  );
  return fullWidth ? (
    <>
      <p className="ecl-u-type-paragraph">
        Note: this variant comes with a transparent background; the image here
        in inline style is just for demo
      </p>
      {pageBanner}
    </>
  ) : (
    <>
      <p className="ecl-u-type-paragraph">
        Note: this variant comes with a transparent background; the image here
        in inline style is just for demo
      </p>
      <div className="ecl-container">{pageBanner}</div>
    </>
  );
};

SimpleGhost.story = {
  name: 'simple - transparent (grey text)',
};
