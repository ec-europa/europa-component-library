/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-date-block/demo/data';

import DateBlock from '../src/DateBlock';

storiesOf('Components|Date Block', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DateBlock
      dateTime={demoContent.dateTime}
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      monthFull={text('Month (full)', demoContent.monthFull)}
      year={text('Year', demoContent.year)}
    />
  ))
  .add('ongoing', () => (
    <DateBlock
      variant="ongoing"
      dateTime={demoContent.dateTime}
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      monthFull={text('Month (full)', demoContent.monthFull)}
      year={text('Year', demoContent.year)}
    />
  ))
  .add('canceled', () => (
    <DateBlock
      variant="canceled"
      dateTime={demoContent.dateTime}
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      monthFull={text('Month (full)', demoContent.monthFull)}
      year={text('Year', demoContent.year)}
    />
  ))
  .add('past', () => (
    <DateBlock
      variant="past"
      dateTime={demoContent.dateTime}
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      monthFull={text('Month (full)', demoContent.monthFull)}
      year={text('Year', demoContent.year)}
    />
  ))
  .add('rescheduled', () => (
    <DateBlock
      variant="rescheduled"
      dateTime={demoContent.dateTime}
      day={text('Day', demoContent.day)}
      month={text('Month', demoContent.month)}
      monthFull={text('Month (full)', demoContent.monthFull)}
      year={text('Year', demoContent.year)}
    />
  ));
