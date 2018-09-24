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
      variant: demoContentImage.button.variant,
      label: text('Button label', demoContentImage.button.label),
      icon: demoContentImage.button.icon,
    };
    return (
      <HeroBanner
        variant="image"
        title={text('Title', demoContentImage.title)}
        description={text('Description', demoContentImage.description)}
        button={buttonImage}
        centered={boolean('Centered', true)}
        image={text('Image', demoContentImage.image)}
      />
    );
  })
  .add('image-shade', () => {
    const buttonImageShade = {
      variant: demoContentImageShade.button.variant,
      label: text('Button label', demoContentImageShade.button.label),
      icon: demoContentImageShade.button.icon,
    };
    return (
      <HeroBanner
        variant="image-shade"
        title={text('Title', demoContentImageShade.title)}
        description={text('Description', demoContentImageShade.description)}
        button={buttonImageShade}
        centered={boolean('Centered', true)}
        image={text('Image', demoContentImageShade.image)}
      />
    );
  })
  .add('primary', () => {
    const buttonPrimary = {
      variant: demoContentPrimary.button.variant,
      label: text('Button label', demoContentPrimary.button.label),
      icon: demoContentPrimary.button.icon,
    };
    return (
      <HeroBanner
        variant="primary"
        title={text('Title', demoContentPrimary.title)}
        description={text('Description', demoContentPrimary.description)}
        button={buttonPrimary}
        centered={boolean('Centered', true)}
      />
    );
  })
  .add('default', () => {
    const buttonDefault = {
      variant: demoContentDefault.button.variant,
      label: text('Button label', demoContentDefault.button.label),
      icon: demoContentDefault.button.icon,
    };
    return (
      <HeroBanner
        variant="default"
        title={text('Title', demoContentDefault.title)}
        description={text('Description', demoContentDefault.description)}
        button={buttonDefault}
        centered={boolean('Centered', true)}
      />
    );
  });
