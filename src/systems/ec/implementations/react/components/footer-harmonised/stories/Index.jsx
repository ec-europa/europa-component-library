/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContentGroup1 from '@ecl/ec-specs-footer-harmonised/demo/data--group1';
import demoContentGroup2 from '@ecl/ec-specs-footer-harmonised/demo/data--group2';
import demoContentGroup3 from '@ecl/ec-specs-footer-harmonised/demo/data--group3';

import FooterHarmonised from '../src/FooterHarmonised';

storiesOf('Components|Footers/Harmonised', module)
  .addDecorator(withKnobs)
  .add('group 1', () => (
    <FooterHarmonised
      {...demoContentGroup1}
      className="ecl-footer-harmonised--group1"
    />
  ))
  .add('group 2', () => (
    <FooterHarmonised
      {...demoContentGroup2}
      className="ecl-footer-harmonised--group2"
    />
  ))
  .add('group 3', () => (
    <FooterHarmonised
      {...demoContentGroup3}
      className="ecl-footer-harmonised--group3"
    />
  ));
