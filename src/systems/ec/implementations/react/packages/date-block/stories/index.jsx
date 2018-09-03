/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContentDefault from '@ecl/ec-specs-date-block/demo/data--default';

import DateBlock from '../DateBlock';
import './index.scss';

storiesOf('DateBlock', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <DateBlock
      variant="default"
      label={text('Label', demoContentDefault.label)}
    />
  ));
