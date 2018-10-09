/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-footer/demo/data';

import Footer from '../Footer';

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('default', () => <Footer {...demoContent} />);
