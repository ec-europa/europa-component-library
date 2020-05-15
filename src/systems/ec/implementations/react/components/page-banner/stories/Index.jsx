/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/ec-specs-page-banner/demo/data--image';
import demoContentImageShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';

import demoContentSimple from '@ecl/ec-specs-page-banner/demo/data--simple';
import demoContentBackgroundImage from '@ecl/ec-specs-page-banner/demo/data--background-image';

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

export const SimpleBackgroundImage = () => {
  const link = {
    ...demoContentBackgroundImage.link,
    label: text('Link label', demoContentBackgroundImage.link.label),
  };

  return (
    <div className="ecl-container">
      <PageBanner
        {...demoContentBackgroundImage}
        variant="background-image"
        meta={text('Meta', demoContentBackgroundImage.meta)}
        title={text('Title', demoContentBackgroundImage.title)}
        baseline={text('Baseline', demoContentBackgroundImage.baseline)}
        link={link}
        isCentered={boolean('Centered', true)}
        isFullWidth={boolean('Full width', false)}
      />
    </div>
  );
};

SimpleBackgroundImage.story = {
  name: 'background image',
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
