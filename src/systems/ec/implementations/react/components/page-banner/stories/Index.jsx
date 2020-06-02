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

export const Image = () => {
  const link = {
    ...demoContentImage.link,
    label: text('Link label', demoContentImage.link.label),
  };

  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentImage}
        variant="image"
        title={text('Title', demoContentImage.title)}
        baseline={text('Baseline', demoContentImage.baseline)}
        link={link}
        isCentered={boolean('Centered', true)}
        isFullWidth={boolean('Full width', false)}
        image={text('Image', demoContentImage.image)}
      />
    </div>
  );
};

Image.story = {
  name: 'image',
};

export const ImageShade = () => {
  const link = {
    ...demoContentImageShade.link,
    label: text('Link label', demoContentImageShade.link.label),
  };

  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentImageShade}
        variant="image-shade"
        title={text('Title', demoContentImageShade.title)}
        baseline={text('Baseline', demoContentImageShade.baseline)}
        link={link}
        isCentered={boolean('Centered', true)}
        isFullWidth={boolean('Full width', false)}
        image={text('Image', demoContentImageShade.image)}
      />
    </div>
  );
};

ImageShade.story = {
  name: 'image shade',
};

export const SimplePrimary = () => {
  const link = {
    ...demoContentSimple.link,
    label: text('Link label', demoContentSimple.link.label),
  };

  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentSimple}
        variant="primary"
        meta={text('Meta', demoContentSimple.meta)}
        title={text('Title', demoContentSimple.title)}
        baseline={text('Baseline', demoContentSimple.baseline)}
        link={link}
        isCentered={boolean('Centered', true)}
        isFullWidth={boolean('Full width', false)}
      />
    </div>
  );
};

SimplePrimary.story = {
  name: 'primary',
};

export const SimpleGrey = () => {
  const link = {
    ...demoContentSimple.link,
    label: text('Link label', demoContentSimple.link.label),
  };

  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentSimple}
        variant="grey"
        meta={text('Meta', demoContentSimple.meta)}
        title={text('Title', demoContentSimple.title)}
        baseline={text('Baseline', demoContentSimple.baseline)}
        link={link}
        isCentered={boolean('Centered', true)}
        isFullWidth={boolean('Full width', false)}
      />
    </div>
  );
};

SimpleGrey.story = {
  name: 'grey',
};

export const SimpleWhite = () => {
  const link = {
    ...demoContentSimple.link,
    label: text('Link label', demoContentSimple.link.label),
  };

  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentSimple}
        variant="white"
        meta={text('Meta', demoContentSimple.meta)}
        title={text('Title', demoContentSimple.title)}
        baseline={text('Baseline', demoContentSimple.baseline)}
        link={link}
        isCentered={boolean('Centered', true)}
        isFullWidth={boolean('Full width', false)}
      />
    </div>
  );
};

SimpleWhite.story = {
  name: 'white',
};

export const SimpleGhost = () => {
  const link = {
    ...demoContentSimple.link,
    label: text('Link label', demoContentSimple.link.label),
  };

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
          variant="ghost"
          meta={text('Meta', demoContentSimple.meta)}
          title={text('Title', demoContentSimple.title)}
          baseline={text('Baseline', demoContentSimple.baseline)}
          link={link}
          isCentered={boolean('Centered', true)}
          isFullWidth={boolean('Full width', false)}
        />
      </div>
    </Fragment>
  );
};

SimpleGhost.story = {
  name: 'ghost',
};

export const AlignLeft = () => {
  const link = {
    ...demoContentSimple.link,
    label: text('Link label', demoContentSimple.link.label),
  };

  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentSimple}
        variant="primary"
        meta={text('Meta', demoContentSimple.meta)}
        title={text('Title', demoContentSimple.title)}
        baseline={text('Baseline', demoContentSimple.baseline)}
        link={link}
        isCentered={false}
        isFullWidth={false}
      />
    </div>
  );
};

AlignLeft.story = {
  name: 'aligned left',
};

export const FullWidth = () => {
  const link = {
    ...demoContentSimple.link,
    label: text('Link label', demoContentSimple.link.label),
  };

  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentSimple}
        variant="primary"
        meta={text('Meta', demoContentSimple.meta)}
        title={text('Title', demoContentSimple.title)}
        baseline={text('Baseline', demoContentSimple.baseline)}
        link={link}
        isCentered={false}
        isFullWidth
      />
    </div>
  );
};

FullWidth.story = {
  name: 'full width',
};
