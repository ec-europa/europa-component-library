/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import demoFlat from '@ecl/ec-specs-list/demo/data--flat';
import demoNested from '@ecl/ec-specs-list/demo/data--nested';

import List from '../src/List';

storiesOf('List', module)
  .add('flat', () => <List {...demoFlat} />)
  .add('nested', () => <List {...demoNested} />);
