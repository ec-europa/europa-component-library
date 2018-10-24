/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-pager/demo/data';

import Pager from '../Pager';

storiesOf('Pager', module)
  .addDecorator(withKnobs)
  .add('default', () => <Pager {...demoContent} />);
