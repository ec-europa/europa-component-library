/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-pagination/demo/data';

import Pagination from '../src/Pagination';

storiesOf('Navigation/Pagination', module)
  .addDecorator(withKnobs)
  .add('default', () => <Pagination {...demoContent} />);
