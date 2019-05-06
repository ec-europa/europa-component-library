/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import demoFlat from '@ecl/ec-specs-list/demo/data--flat';
import demoNested from '@ecl/ec-specs-list/demo/data--nested';

import List from '../src/List';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('flat', () => (
    <List
      {...demoFlat}
      isOrdered={boolean('Ordered list', false)}
      hasDivider={boolean('Dividers', false)}
    />
  ))
  .add('nested', () => (
    <List
      {...demoNested}
      isOrdered={boolean('Ordered list', false)}
      hasDivider={boolean('Dividers', false)}
    />
  ));
