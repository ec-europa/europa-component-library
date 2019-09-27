/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-footer-core/demo/data';

import FooterCore from '../src/FooterCore';

storiesOf('Components|Footers/Core', module)
  .addDecorator(withKnobs)
  .add('default', () => <FooterCore {...demoContent} />);
