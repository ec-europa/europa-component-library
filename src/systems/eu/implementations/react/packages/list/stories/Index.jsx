/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import demoNested from '@ecl/eu-specs-list/demo/data--nested';
import demoDescription from '@ecl/eu-specs-list/demo/data--description';

import UnorderedList from '../src/UnorderedList';
import OrderedList from '../src/OrderedList';
import DescriptionList from '../src/DescriptionList';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('ordered', () => <OrderedList {...demoNested} />)
  .add('unordered', () => (
    <UnorderedList
      {...demoNested}
      variant={select(
        'Variant',
        {
          Default: '',
          'No bullet': 'no-bullet',
          Dividers: 'divider',
        },
        ''
      )}
    />
  ))
  .add('description', () => <DescriptionList {...demoDescription} />);
