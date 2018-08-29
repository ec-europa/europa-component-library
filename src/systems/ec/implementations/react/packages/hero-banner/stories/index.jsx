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
    <HeroBanner variant="image" title={text('Title', demoContentImage.title)} />
  ))
  .add('image-shade', () => (
    <HeroBanner
      variant="image-shade"
      title={text('Title', demoContentImageShade.title)}
    />
  ))
  .add('primary', () => (
    <HeroBanner
      variant="primary"
      title={text('Title', demoContentPrimary.title)}
    />
  ))
  .add('default', () => (
    <HeroBanner
      variant="default"
      title={text('Title', demoContentDefault.title)}
    />
  ));
