/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import demoFlat from '@ecl/eu-specs-list/demo/data--flat';
import demoNested from '@ecl/eu-specs-list/demo/data--nested';
import demoDescription from '@ecl/eu-specs-list/demo/data--description';

import List from '../src/List';
import DescriptionList from '../src/DescriptionList';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('flat', () => (
    <List
      {...demoFlat}
      isOrdered={boolean('Ordered list', false)}
      hasBullet={boolean('Bullets', true)}
      hasDivider={boolean('Dividers', false)}
    />
  ))
  .add('nested', () => (
    <List
      {...demoNested}
      isOrdered={boolean('Ordered list', false)}
      hasBullet={boolean('Bullets', true)}
      hasDivider={boolean('Dividers', false)}
    />
  ))
  .add('description', () => <DescriptionList {...demoDescription} />);
