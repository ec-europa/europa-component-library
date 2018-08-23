/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import demoContentDefault from '@ecl/ec-specs-text-input/demo/data--default';

import TextInput from '../TextInput';
import './index.scss';

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextInput
      placeholder={text('Placeholder', demoContentDefault.placeholder)}
    />
  ));
