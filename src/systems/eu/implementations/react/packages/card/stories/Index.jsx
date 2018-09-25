/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-card/demo/data';

import Card from '../Card';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('default', () => <Card />);
