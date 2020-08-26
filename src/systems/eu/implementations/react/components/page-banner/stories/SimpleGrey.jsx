import React from 'react';
import { text, boolean, array } from '@storybook/addon-knobs';

import demoContentSimple from '@ecl/eu-specs-page-banner/demo/data--simple';

import PageBanner from '../src/PageBanner';

export const SimpleGrey = () => {
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
      {...demoContentSimple}
      variant="grey"
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

SimpleGrey.story = {
  name: 'simple - grey',
};
