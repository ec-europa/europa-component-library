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

storiesOf('Components|Banners/Page Banner', module)
  .addDecorator(withKnobs)
  .add('image', () => {
    const button = {
      ...demoContentImage.button,
      label: text('Button label', demoContentImage.button.label),
    };

    return (
      <PageBanner
        variant="image"
        title={text('Title', demoContentImage.title)}
        baseline={text('Baseline', demoContentImage.baseline)}
        button={button}
        isCentered={boolean('Centered', true)}
        image={text('Image', demoContentImage.image)}
      />
    );
  })
  .add('image-shade', () => {
    const button = {
      ...demoContentImageShade.button,
      label: text('Button label', demoContentImageShade.button.label),
    };

    return (
      <PageBanner
        variant="image-shade"
        title={text('Title', demoContentImageShade.title)}
        baseline={text('Baseline', demoContentImageShade.baseline)}
        button={button}
        isCentered={boolean('Centered', true)}
        image={text('Image', demoContentImageShade.image)}
      />
    );
  })
  .add('primary', () => {
    const button = {
      ...demoContentPrimary.button,
      label: text('Button label', demoContentPrimary.button.label),
    };

    return (
      <PageBanner
        variant="primary"
        title={text('Title', demoContentPrimary.title)}
        baseline={text('Baseline', demoContentPrimary.baseline)}
        button={button}
        isCentered={boolean('Centered', true)}
      />
    );
  })
  .add('default', () => {
    const button = {
      ...demoContentDefault.button,
      label: text('Button label', demoContentDefault.button.label),
    };

    return (
      <PageBanner
        variant="default"
        title={text('Title', demoContentDefault.title)}
        baseline={text('Baseline', demoContentDefault.baseline)}
        button={button}
        isCentered={boolean('Centered', true)}
      />
    );
  })
  .add('align-left', () => {
    const button = {
      ...demoContentAlignLeft.button,
      label: text('Button label', demoContentDefault.button.label),
    };

    return (
      <PageBanner
        variant="default"
        title={text('Title', demoContentAlignLeft.title)}
        baseline={text('Baseline', demoContentAlignLeft.baseline)}
        button={button}
        isCentered={false}
      />
    );
  });
