/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/eu-specs-hero-banner/demo/data--image';
import demoContentImageShade from '@ecl/eu-specs-hero-banner/demo/data--image-shade';
import demoContentPrimary from '@ecl/eu-specs-hero-banner/demo/data--primary';
import demoContentDefault from '@ecl/eu-specs-hero-banner/demo/data--default';
import demoContentAlignLeft from '@ecl/eu-specs-hero-banner/demo/data--align-left';

import HeroBanner from '../HeroBanner';

storiesOf('HeroBanner', module)
  .addDecorator(withKnobs)
  .add('image', () => {
    const button = {
      ...demoContentImage.button,
      label: text('Button label', demoContentImage.button.label),
    };

    return (
      <HeroBanner
        variant="image"
        title={text('Title', demoContentImage.title)}
        description={text('Description', demoContentImage.description)}
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
      <HeroBanner
        variant="image-shade"
        title={text('Title', demoContentImageShade.title)}
        description={text('Description', demoContentImageShade.description)}
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
      <HeroBanner
        variant="primary"
        title={text('Title', demoContentPrimary.title)}
        description={text('Description', demoContentPrimary.description)}
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
      <HeroBanner
        variant="default"
        title={text('Title', demoContentDefault.title)}
        description={text('Description', demoContentDefault.description)}
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
      <HeroBanner
        variant="default"
        title={text('Title', demoContentAlignLeft.title)}
        description={text('Description', demoContentAlignLeft.description)}
        button={button}
        isCentered={false}
      />
    );
  });
