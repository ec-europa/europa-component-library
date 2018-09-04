/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';

import demoContentDefault from '@ecl/ec-specs-date-block/demo/data--default';

import DateBlock from '../DateBlock';
import './index.scss';

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
