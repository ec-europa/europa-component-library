/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/eu-specs-text-area/demo/data--default';

import TextArea from '../src/TextArea';

storiesOf('Forms/TextArea', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextArea
      id="example"
      label={text('Label', demoContentDefault.label)}
      placeholder={text('Placeholder', demoContentDefault.placeholder)}
      rows={number('Rows', demoContentDefault.rows)}
      invalid={boolean('Invalid', false)}
      invalidText={text('invalidText', 'Error')}
      helperText={text('helperText', 'Help message')}
      disabled={boolean('Disabled', false)}
    />
  ));
