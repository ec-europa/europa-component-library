/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-gallery/demo/data';

import Gallery from '../Gallery';

storiesOf('Gallery', module)
  .addDecorator(withKnobs)
  .add('default', () => <Gallery {...demoContent} />);
