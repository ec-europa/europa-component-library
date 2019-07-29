/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-date-block/demo/data';

import DateBlock from '../src/DateBlock';

storiesOf('Components|Date Block', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DateBlock
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      year={text('Year', demoContent.year)}
    />
  ))
  .add('ongoing', () => (
    <DateBlock
      variant="ongoing"
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      year={text('Year', demoContent.year)}
    />
  ))
  .add('canceled', () => (
    <DateBlock
      variant="canceled"
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      year={text('Year', demoContent.year)}
    />
  ))
  .add('past', () => (
    <DateBlock
      variant="past"
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      year={text('Year', demoContent.year)}
    />
  ));
