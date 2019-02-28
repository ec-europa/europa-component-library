/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/eu-specs-date-block/demo/data--default';

import DateBlock from '../src/DateBlock';

storiesOf('DateBlock', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DateBlock
      variant={select(
        'Variant',
        {
          Default: '',
          Ongoing: 'ongoing',
          Canceled: 'canceled',
          Past: 'past',
        },
        ''
      )}
      weekDay={text('Week day', demoContentDefault.week_day)}
      day={text('Day', demoContentDefault.day)}
      month={text('Month', demoContentDefault.month)}
    />
  ));
