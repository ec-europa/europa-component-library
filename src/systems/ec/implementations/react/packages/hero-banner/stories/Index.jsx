/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/ec-specs-hero-banner/demo/data--image';
import demoContentImageShade from '@ecl/ec-specs-hero-banner/demo/data--image-shade';
import demoContentPrimary from '@ecl/ec-specs-hero-banner/demo/data--primary';
import demoContentDefault from '@ecl/ec-specs-hero-banner/demo/data--default';

import HeroBanner from '../HeroBanner';

storiesOf('HeroBanner', module)
  .addDecorator(withKnobs)
  .add('image', () => {
    const buttonImage = {
      ...demoContentImage.button,
      label: text('Button label', demoContentImage.button.label),
    };

    return (
      <HeroBanner
        variant="image"
        title={text('Title', demoContentImage.title)}
        description={text('Description', demoContentImage.description)}
        button={buttonImage}
        isCentered={boolean('Centered', true)}
        image={text('Image', demoContentImage.image)}
      />
    );
  })
  .add('image-shade', () => {
    const buttonImageShade = {
      ...demoContentImageShade.button,
      label: text('Button label', demoContentImageShade.button.label),
    };

    return (
      <HeroBanner
        variant="image-shade"
        title={text('Title', demoContentImageShade.title)}
        description={text('Description', demoContentImageShade.description)}
        button={buttonImageShade}
        isCentered={boolean('Centered', true)}
        image={text('Image', demoContentImageShade.image)}
      />
    );
  })
  .add('primary', () => {
    const buttonPrimary = {
      ...demoContentPrimary.button,
      label: text('Button label', demoContentPrimary.button.label),
    };

    return (
      <HeroBanner
        variant="primary"
        title={text('Title', demoContentPrimary.title)}
        description={text('Description', demoContentPrimary.description)}
        button={buttonPrimary}
        isCentered={boolean('Centered', true)}
      />
    );
  })
  .add('default', () => {
    const buttonDefault = {
      ...demoContentDefault.button,
      label: text('Button label', demoContentDefault.button.label),
    };

    return (
      <HeroBanner
        variant="default"
        title={text('Title', demoContentDefault.title)}
        description={text('Description', demoContentDefault.description)}
        button={buttonDefault}
        isCentered={boolean('Centered', true)}
      />
    );
  });
