/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/eu-specs-page-banner/demo/data--image';
import demoContentImageShade from '@ecl/eu-specs-page-banner/demo/data--image-shade';
import demoContentPrimary from '@ecl/eu-specs-page-banner/demo/data--primary';
import demoContentDefault from '@ecl/eu-specs-page-banner/demo/data--default';
import demoContentAlignLeft from '@ecl/eu-specs-page-banner/demo/data--align-left';

import PageBanner from '../src/PageBanner';

storiesOf('Components/Banners/Page Banner', module)
  .addDecorator(withKnobs)
  .add('image', () => {
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
  })
  .add('image-shade', () => {
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
  })
  .add('primary', () => {
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
  })
  .add('default', () => {
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
  })
  .add('align-left', () => {
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
  });
