/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/ec-specs-page-banner/demo/data--image';
import demoContentImageShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';
import demoContentSimple from '@ecl/ec-specs-page-banner/demo/data--simple';

import PageBanner from '../src/PageBanner';

export default {
  title: 'Components/Banners/Page Banner',
  decorators: [withKnobs],
};

/*
 * Image
 */
export const Image = () => {
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

  if (fullWidth) {
    return (
      <PageBanner
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
  }
  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentImage}
        variant="image"
        title={title}
        description={description}
        link={link}
        isCentered={centered}
        isFullWidth={fullWidthGrid}
        image={image}
      />
    </div>
  );
};

Image.story = {
  name: 'image',
};

/*
 * Image shade
 */
export const ImageShade = () => {
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

  if (fullWidth) {
    return (
      <PageBanner
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
  }
  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentImageShade}
        variant="image-shade"
        title={title}
        description={description}
        link={link}
        isCentered={centered}
        isFullWidth={fullWidthGrid}
        image={image}
      />
    </div>
  );
};

ImageShade.story = {
  name: 'image shade',
};

/*
 * Simple primary
 */
export const SimplePrimary = () => {
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

  if (fullWidth) {
    return (
      <PageBanner
        {...demoContentSimple}
        variant="primary"
        meta={meta}
        title={title}
        description={description}
        link={link}
        isCentered={centered}
        isFullWidth={fullWidthGrid}
      />
    );
  }
  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentSimple}
        variant="primary"
        meta={meta}
        title={title}
        description={description}
        link={link}
        isCentered={centered}
        isFullWidth={fullWidthGrid}
      />
    </div>
  );
};

SimplePrimary.story = {
  name: 'simple - primary',
};

/*
 * Simple grey
 */
export const SimpleGrey = () => {
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

  if (fullWidth) {
    return (
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
  }
  return (
    <div className="ecl-container">
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
    </div>
  );
};

SimpleGrey.story = {
  name: 'simple - grey',
};

/*
 * Simple white
 */
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

  if (fullWidth) {
    return (
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
  }
  return (
    <div className="ecl-container">
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
    </div>
  );
};

SimpleWhite.story = {
  name: 'simple - white',
};

/*
 * Simple ghost
 */
export const SimpleGhost = () => {
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

  if (fullWidth) {
    return (
      <Fragment>
        <p className="ecl-u-type-paragraph">
          Note: this variant comes with a transparent background; the image here
          in inline style is just for demo
        </p>
        <PageBanner
          style={{
            'background-image':
              "url('https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg')",
            'background-size': 'cover',
            'background-position': '0 0',
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
      </Fragment>
    );
  }
  return (
    <Fragment>
      <p className="ecl-u-type-paragraph">
        Note: this variant comes with a transparent background; the image here
        in inline style is just for demo
      </p>
      <div className="ecl-container">
        <PageBanner
          style={{
            'background-image':
              "url('https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg')",
            'background-size': 'cover',
            'background-position': '0 0',
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
      </div>
    </Fragment>
  );
};

SimpleGhost.story = {
  name: 'simple - transparent (grey text)',
};

/*
 * Simple ghost (invert)
 */
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

  if (fullWidth) {
    return (
      <Fragment>
        <p className="ecl-u-type-paragraph">
          Note: this variant comes with a transparent background; the image here
          in inline style is just for demo
        </p>
        <PageBanner
          style={{
            'background-image':
              "url('https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg')",
            'background-size': 'cover',
            'background-position': '0 0',
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
      </Fragment>
    );
  }
  return (
    <Fragment>
      <p className="ecl-u-type-paragraph">
        Note: this variant comes with a transparent background; the image here
        in inline style is just for demo
      </p>
      <div className="ecl-container">
        <PageBanner
          style={{
            'background-image':
              "url('https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg')",
            'background-size': 'cover',
            'background-position': '0 0',
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
      </div>
    </Fragment>
  );
};

SimpleGhostInvert.story = {
  name: 'simple - transparent (white text)',
};
