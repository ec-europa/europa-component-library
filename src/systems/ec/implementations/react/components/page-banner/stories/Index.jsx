/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/ec-specs-page-banner/demo/data--image';
import demoContentImageShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';
import demoContentPrimary from '@ecl/ec-specs-page-banner/demo/data--primary';
import demoContentDefault from '@ecl/ec-specs-page-banner/demo/data--default';
import demoContentAlignLeft from '@ecl/ec-specs-page-banner/demo/data--align-left';

import PageBanner from '../src/PageBanner';

export default {
  title: 'Components|Banners/Page Banner',
  decorators: [withKnobs],
};

export const Image = () => {
  const link = {
    ...demoContentImage.link,
    label: text('Link label', demoContentImage.link.label),
  };

  return (
    <PageBanner
      variant="image"
      title={text('Title', demoContentImage.title)}
      baseline={text('Baseline', demoContentImage.baseline)}
      link={link}
      isCentered={boolean('Centered', true)}
      image={text('Image', demoContentImage.image)}
    />
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
    <PageBanner
      variant="image-shade"
      title={text('Title', demoContentImageShade.title)}
      baseline={text('Baseline', demoContentImageShade.baseline)}
      link={link}
      isCentered={boolean('Centered', true)}
      image={text('Image', demoContentImageShade.image)}
    />
  );
};

ImageShade.story = {
  name: 'image-shade',
};

export const Primary = () => {
  const link = {
    ...demoContentPrimary.link,
    label: text('Link label', demoContentPrimary.link.label),
  };

  return (
    <PageBanner
      variant="primary"
      title={text('Title', demoContentPrimary.title)}
      baseline={text('Baseline', demoContentPrimary.baseline)}
      link={link}
      isCentered={boolean('Centered', true)}
    />
  );
};

Primary.story = {
  name: 'primary',
};

export const Default = () => {
  const link = {
    ...demoContentDefault.link,
    label: text('Link label', demoContentDefault.link.label),
  };

  return (
    <PageBanner
      variant="default"
      title={text('Title', demoContentDefault.title)}
      baseline={text('Baseline', demoContentDefault.baseline)}
      link={link}
      isCentered={boolean('Centered', true)}
    />
  );
};

Default.story = {
  name: 'default',
};

export const AlignLeft = () => {
  const link = {
    ...demoContentAlignLeft.link,
    label: text('Link label', demoContentAlignLeft.link.label),
  };

  return (
    <PageBanner
      variant="default"
      title={text('Title', demoContentAlignLeft.title)}
      baseline={text('Baseline', demoContentAlignLeft.baseline)}
      link={link}
      isCentered={false}
    />
  );
};

AlignLeft.story = {
  name: 'align-left',
};
