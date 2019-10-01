/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-footer-standardised/demo/data';

import FooterStandardised from '../src/FooterStandardised';

storiesOf('Components|Footers/Standardised', module)
  .addDecorator(withKnobs)
  .add('default', () => <FooterStandardised {...demoContent} />);
