/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import demoContent from '@ecl/eu-specs-menu/demo/data';

import Menu from '../src/Menu';

storiesOf('Navigation/Menu', module)
  .addDecorator(withKnobs)
  .add('default', () => <Menu {...demoContent} />);
