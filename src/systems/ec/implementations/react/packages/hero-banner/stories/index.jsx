/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContentImage from '@ecl/ec-specs-hero-banner/demo/data--image';
import demoContentImageShade from '@ecl/ec-specs-hero-banner/demo/data--image-shade';
import demoContentPrimary from '@ecl/ec-specs-hero-banner/demo/data--primary';
import demoContentDefault from '@ecl/ec-specs-hero-banner/demo/data--default';

import HeroBanner from '../HeroBanner';
import './index.scss';

storiesOf('HeroBanner', module)
  .addDecorator(withKnobs)
  .add('image', () => (
    <HeroBanner
      variant="image"
      title={text('Title', demoContentImage.title)}
      description={text('Descripiton', demoContentImage.description)}
      button={demoContentImage.button}
      image={text('Image', demoContentImage.image)}
    />
  ))
  .add('image-shade', () => (
    <HeroBanner
      variant="image-shade"
      title={text('Title', demoContentImageShade.title)}
      description={text('Descripiton', demoContentImageShade.description)}
      button={demoContentImageShade.button}
      image={text('Image', demoContentImageShade.image)}
    />
  ))
  .add('primary', () => (
    <HeroBanner
      variant="primary"
      title={text('Title', demoContentPrimary.title)}
      description={text('Descripiton', demoContentPrimary.description)}
      button={demoContentPrimary.button}
    />
  ))
  .add('default', () => (
    <HeroBanner
      variant="default"
      title={text('Title', demoContentDefault.title)}
      description={text('Descripiton', demoContentDefault.description)}
      button={demoContentDefault.button}
    />
  ));
